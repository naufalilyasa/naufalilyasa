import type { NextFunction, Request, Response } from "express";

import { LoginResponseSchema } from "@repo/zod-schemas";
import config from "../config/config.js";
import { Role } from "../generated/prisma/index.js";

import { findUniqueUser } from "../services/auth.service.js";
import { AppError } from "../utils/appError.js";
import redisClient from "../utils/connectRedis.js";
import { verifyJwt } from "../utils/jwt.js";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.access_token as string;
    const message = "You're not logged in";

    if (!accessToken) {
      return next(new AppError(401, message));
    }

    if (!config.accessTokenPublicKey) {
      return next(new AppError(401, "Invalid token or public key"));
    }

    const decoded = verifyJwt(accessToken, config.accessTokenPublicKey);

    if (!decoded?.sub) {
      return next(new AppError(401, message));
    }

    const session = await redisClient.get(decoded.sub);

    if (!session) {
      return next(new AppError(401, message));
    }

    const sessionParse = LoginResponseSchema.parse(JSON.parse(session));

    const user: {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
      role: Role;
    } | null = await findUniqueUser(sessionParse, { password: true });

    if (!user) {
      return next(new AppError(401, message));
    }

    res.locals.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
      role: Role;
    } | null;

    if (!user) {
      return next(new AppError(401, "Session has expired or user doesn't exist"));
    }

    next();
  } catch (error) {
    next(error);
  }
};

export { deserializeUser, requireUser };
