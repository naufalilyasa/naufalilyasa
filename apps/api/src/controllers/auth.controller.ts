import type { CookieOptions, NextFunction, Request, Response } from "express";

import {
  LoginResponseSchema,
  LoginUserDTO,
  loginUserSchema,
  registerUserSchema,
} from "@repo/zod-schemas";
import { ZodError } from "zod";

import config from "../config/config.js";
import { Prisma } from "../generated/prisma/index.js";
import { findUniqueUser, loginUser, registerUser } from "../services/auth.service.js";
import { AppError } from "../utils/appError.js";
import redisClient from "../utils/connectRedis.js";
import { signJwt, verifyJwt } from "../utils/jwt.js";

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

const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedBody = loginUserSchema.parse(req.body);
    const { accessToken, refreshToken } = await loginUser(parsedBody);

    res.cookie("access_token", accessToken, accessTokenCookieOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenCookieOptions);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Login successful",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    next(error);
  }
};

const registerHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedBody = registerUserSchema.parse(req.body);
    const { name, password, username } = parsedBody;

    await registerUser({ name, password, username });

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Successfully created profile",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return next(new AppError(409, "A record with this value already exists", [{ field: "username", message: "Duplicate entry" }]));
    }
    next(error);
  }
};

const logoutHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user;
    if (!user) return next(new AppError(401, "You're not logged in"));

    await redisClient.del(user.id);

    res.clearCookie("access_token", cookiesOptions);
    res.clearCookie("refresh_token", cookiesOptions);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Logout successful",
    });
  } catch (error) {
    next(error);
  }
};

const refreshHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies.refresh_token as string;
    if (!refreshToken) throw new AppError(401, "Missing refresh token");
    if (!config.refreshTokenPublicKey) throw new AppError(500, "Server configuration error");

    const payload = verifyJwt(refreshToken, config.refreshTokenPublicKey);
    if (!payload?.sub) throw new AppError(401, "Session has expired or user doesn't exist");

    const session = await redisClient.get(payload.sub as string);
    if (typeof session !== "string") throw new AppError(401, "Session has expired or user doesn't exist");

    const sessionParse = LoginResponseSchema.parse(JSON.parse(session));
    const user = await findUniqueUser({ id: sessionParse.id }, { password: true });

    if (!user) throw new AppError(401, "Session has expired or user doesn't exist");

    const accessToken = signJwt({ sub: user.id }, config.accessTokenPrivateKey, {
      expiresIn: config.refreshTokenExpiresIn * 60 * 1000,
    });

    res.cookie("access_token", accessToken, accessTokenCookieOptions);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Access token refreshed",
    });
  } catch (error) {
    if (error instanceof AppError) return next(error);
    next(new AppError(401, "Session has expired or user doesn't exist"));
  }
};

const getMeHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user;
    if (!user) return next(new AppError(401, "You're not logged in"));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved user profile",
      data: {
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export { getMeHandler, loginHandler, logoutHandler, refreshHandler, registerHandler };
