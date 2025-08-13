import type { UserType } from "@repo/types/auth";
import type {
  LoginResponseDTO,
  LoginUserDTO,
} from "@repo/zod-schemas/shared/auth-schema";

import bcrypt from "bcrypt";
import config from "config/config.js";
import { Prisma, Role } from "generated/prisma/index.js";
import { omit } from "lodash-es";
import { z } from "zod/v4";

import { prisma } from "~/prisma/prisma.js";
import { AppError } from "~/utils/app-error.js";
import redisClient from "~/utils/connect-redis.js";
import { signJwt } from "~/utils/jwt.js";

export const loginUser = async (
  payload: LoginUserDTO,
): Promise<{ accessToken: string; refreshToken: string; user: LoginResponseDTO }> => {
  const { password, username } = payload;

  // Querying to get user input detail data
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      password: true,
      username: true,
      role: true,
    },
    where: {
      username,
    },
  });

  // Check if user exist or already register
  if (!user) {
    throw new AppError(403, `Invalid username or password`);
  }

  // Check user password using bcrypt compare
  const comparedPassword = await bcrypt.compare(password, user.password);

  if (!comparedPassword) {
    throw new AppError(403, "Invalid username or password");
  }

  // Create access token and refresh token to get access of our application
  const { accessToken, refreshToken } = await signTokens({ ...user });

  const LoginResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    username: z.string(),
  });

  return {
    accessToken,
    refreshToken,
    user: LoginResponseSchema.parse(omit(user, ["password"])),
  };
};

export const registerUser = async (payload: Prisma.UserCreateInput) => {
  const { name, password, username } = payload;

  // Check username to makesure username input not yet use
  const checkUsername = await prisma.user.findUnique({
    select: {
      username: true,
    },
    where: {
      username,
    },
  });

  if (checkUsername) {
    throw new AppError(401, `Username ${username} already exist.`);
  }

  // Hash password input
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const result = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
      username,
    },
  });

  return { result };
};

export const signTokens = async (
  payload: UserType & { role: Role },
): Promise<{ accessToken: string; refreshToken: string }> => {
  // Create session
  await redisClient.set(payload.id, JSON.stringify(omit(payload, ["password"])), {
    expiration: { type: "EX", value: config.redisCacheExpiresIn * 60 },
  });

  // Create jwt token
  const accessToken = signJwt({ sub: payload.id }, config.accessTokenPrivateKey, {
    expiresIn: config.accessTokenExpiresIn * 60 * 1000,
  });
  const refreshToken = signJwt({ sub: payload.id }, config.refreshTokenPrivateKey, {
    expiresIn: config.refreshTokenExpiresIn * 60 * 1000,
  });

  return { accessToken, refreshToken };
};

export const findUniqueUser = async (
  where: Prisma.UserWhereUniqueInput,
  omit: Prisma.UserOmit,
) => {
  return await prisma.user.findUnique({
    omit,
    where,
  });
};
