import type { LoginResponseType } from "@repo/types/auth";
import type { NextFunction, Request, Response } from "express";

import config from "config/config.js";

import { findUniqueUser } from "~/services/auth-service.js";
import { AppError } from "~/utils/appError.js";
import redisClient from "~/utils/connectRedis.js";
import { verifyJwt } from "~/utils/jwt.js";

const deserizalizeUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.access_token as string;

    if (!accessToken) {
      next(new AppError(401, "You're not logged in"));
      return;
    }

    if (!config.accessTokenPublicKey) {
      next(new AppError(401, "Invalid token or public key"));
      return;
    }

    const decoded = verifyJwt(accessToken, config.accessTokenPublicKey);

    if (!decoded?.sub) {
      next(new AppError(401, "You're not logged in"));
      return;
    }

    const session = await redisClient.get(decoded.sub as string);

    if (!session) {
      next(new AppError(401, "You're not logged in"));
      return;
    }

    const sessionParse = JSON.parse(session) as LoginResponseType;

    const user: null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
    } = await findUniqueUser(sessionParse, { password: true });

    if (!user) {
      next(new AppError(401, "You're not logged in"));
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

export { deserizalizeUser, requireUser };
