import type { NextFunction, Request, Response } from "express";

import { LoginResponseSchema } from "@repo/zod-schemas";
import config from "#/config/config.js";
import { Role } from "#/generated/prisma/index.js";

import { findUniqueUser } from "#/services/auth.service.js";
import { AppError } from "#/utils/appError.js";
import redisClient from "#/utils/connectRedis.js";
import { verifyJwt } from "#/utils/jwt.js";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.access_token as string;
    const message = "You're not logged in";

    if (!accessToken) {
      next(new AppError(401, message));
      return;
    }

    if (!config.accessTokenPublicKey) {
      next(new AppError(401, "Invalid token or public key"));
      return;
    }

    const decoded = verifyJwt(accessToken, config.accessTokenPublicKey);

    if (!decoded?.sub) {
      next(new AppError(401, message));
      return;
    }

    const session = await redisClient.get(decoded.sub as string);

    if (!session) {
      next(new AppError(401, message));
      return;
    }

    const sessionParse = LoginResponseSchema.parse(JSON.parse(session));

    const user: null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
      role: Role;
    } = await findUniqueUser(sessionParse, { password: true });

    if (!user) {
      next(new AppError(401, message));
      return;
    }

    res.locals.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
      role: Role;
    };

    if (!user) {
      new AppError(401, "Session has expired or user doesn't exist");
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};

export { deserializeUser, requireUser };
