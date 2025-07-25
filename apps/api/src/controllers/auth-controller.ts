import type { CookieOptions, NextFunction, Request, Response } from "express";

import {
  LoginResponseSchema,
  LoginUserDTO,
  RegisterUserDTO,
} from "@repo/zod-schemas/shared/auth-schema";
import config from "config/config.js";
import { Prisma } from "generated/prisma/index.js";

import { findUniqueUser, loginUser, registerUser } from "~/services/auth-service.js";
import { AppError } from "~/utils/appError.js";
import redisClient from "~/utils/connectRedis.js";
import { signJwt, verifyJwt } from "~/utils/jwt.js";

const isProduction = config.nodeEnv !== "development";

// General cookies options
const cookiesOptions: CookieOptions = {
  httpOnly: true,
  sameSite: isProduction ? "none" : "lax",
  secure: isProduction,
};

// Access token cookie options
const accessTokenCookieOptions: CookieOptions = {
  ...cookiesOptions,
  expires: new Date(Date.now() + config.accessTokenExpiresIn * 60 * 1000),
  maxAge: config.accessTokenExpiresIn * 60 * 1000,
};

// Refresh token cookie options
const refreshTokenCookieOptions: CookieOptions = {
  ...cookiesOptions,
  expires: new Date(Date.now() + config.refreshTokenExpiresIn * 60 * 1000),
  maxAge: config.refreshTokenExpiresIn * 60 * 1000,
};

const loginHandler = async (
  req: Request<object, object, LoginUserDTO>,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Request data input from body
    const { password, username } = req.body;
    const payload = { password, username };

    // Get access token, refresh token and user public info
    const { accessToken, refreshToken, user } = await loginUser(payload);

    // Set accesss token and refresh token to cookie
    res.cookie("access_token", accessToken, {
      ...accessTokenCookieOptions,
    });
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });
    res.cookie("refresh_token", refreshToken, {
      ...refreshTokenCookieOptions,
    });

    res.status(200).json({
      data: {
        user,
      },
      message: "Login successful",
      status: "success",
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};

const registerHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Request data input from body
    const { name, password, username } = req.body as RegisterUserDTO;
    const payload: Prisma.UserCreateInput = {
      name,
      password,
      username,
    };

    // Register user to database
    const { result } = await registerUser(payload);

    res.status(200).json({
      data: {
        id: result.id,
        name: result.name,
        username: result.username,
      },
      message: "User registered successfully",
      status: "success",
      statusCode: 200,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return new AppError(409, "Username already exist.");
      }
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return new AppError(500, error.message);
    }
    next(error);
  }
};

const logoutHandler = async (req: Request, res: Response, next: NextFunction) => {
  // Get data user logged in that is set from middleware
  const user = res.locals.user as null | {
    createdAt: Date;
    id: string;
    name: string;
    updatedAt: Date;
    username: string;
  };

  if (!user) {
    next(new AppError(401, "You're not logged in"));
    return;
  }

  // Clear session
  await redisClient.del(user.id);

  // Clear cookie
  res.clearCookie("access_token", {
    ...cookiesOptions,
  });
  res.clearCookie("refresh_token", {
    ...cookiesOptions,
  });

  res.status(200).json({
    message: "Logged out successfully",
    status: "success",
    statusCode: 200,
  });
};

const refreshHandler = async (req: Request, res: Response) => {
  // Get refresh_token cookie
  const refreshToken = req.cookies.refresh_token as string;

  // Check if refresh_token exist
  if (!refreshToken) {
    throw new AppError(401, "Invalid token or token expires");
  }

  // Check if refresh_token public key exist
  if (!config.refreshTokenPublicKey) {
    throw new AppError(401, "Missing token or public key");
  }

  // Verify token or decoded token
  const payload = verifyJwt(refreshToken, config.refreshTokenPublicKey);

  // Check is not null or undefined payload from decoded jwt token
  if (!payload?.sub) {
    throw new AppError(401, "Invalid token or token expires");
  }

  // Get session data
  const session = await redisClient.get(payload.sub as string);

  // Check is session data exist
  if (!session) {
    throw new AppError(401, "Session or token expired");
  }

  // Parse session data json
  const sessionParse = LoginResponseSchema.parse(JSON.parse(session));

  // Check if user still exist in database
  const user: null | {
    createdAt: Date;
    id: string;
    name: string;
    updatedAt: Date;
    username: string;
  } = await findUniqueUser({ id: sessionParse.id }, { password: true });

  if (!user) {
    throw new AppError(401, "Could not refresh access token");
  }

  // Create new access_token
  const accessToken = signJwt({ sub: user.id }, config.accessTokenPrivateKey, {
    expiresIn: config.refreshTokenExpiresIn * 60 * 1000,
  });

  // Set new access_token cookie
  res.cookie("access_token", accessToken, accessTokenCookieOptions);

  res.status(200).json({
    message: "Access token refreshed",
    status: "success",
    statusCode: 200,
  });
};

const getMeHandler = (req: Request, res: Response, next: NextFunction) => {
  // Get data user logged in that is set from middleware
  const user = res.locals.user as null | {
    createdAt: Date;
    id: string;
    name: string;
    updatedAt: Date;
    username: string;
  };

  if (!user) {
    next(new AppError(401, "You're not logged in"));
    return;
  }

  res.status(200).json({
    data: {
      id: user.id,
      name: user.name,
      username: user.username,
    },
    status: "success",
    statusCode: 200,
  });
};

export { getMeHandler, loginHandler, logoutHandler, refreshHandler, registerHandler };
