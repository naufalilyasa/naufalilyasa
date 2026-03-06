import type { UserType } from "@repo/types/auth";

import { type LoginResponseDTO, LoginResponseSchema, type LoginUserDTO } from "@repo/zod-schemas";
import bcrypt from "bcrypt";
import { omit } from "lodash-es";

import config from "../config/config.js";
import { Prisma, Role } from "../generated/prisma/index.js";
import { prisma } from "../prisma/prisma.js";
import { AppError } from "../utils/appError.js";
import redisClient from "../utils/connectRedis.js";
import { signJwt } from "../utils/jwt.js";

export const loginUser = async (
  payload: LoginUserDTO,
): Promise<{ accessToken: string; refreshToken: string; user: LoginResponseDTO }> => {
  const { password, username } = payload;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    throw new AppError(401, `Invalid username or password`);
  }

  const comparedPassword = await bcrypt.compare(password, user.password);

  if (!comparedPassword) {
    throw new AppError(401, "Invalid username or password");
  }

  const { accessToken, refreshToken } = await signTokens({ ...user });

  return {
    accessToken,
    refreshToken,
    user: LoginResponseSchema.parse(omit(user, ["password"])),
  };
};

export const registerUser = async (payload: Prisma.UserCreateInput) => {
  const { name, password, username } = payload;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  return await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
      username,
    },
  });
};

export const signTokens = async (
  payload: UserType & { role: Role },
): Promise<{ accessToken: string; refreshToken: string }> => {
  // Create session
  await redisClient.set(payload.id, JSON.stringify(omit(payload, ["password"])), { EX: config.redisCacheExpiresIn * 60 });

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
  omitOpts?: Prisma.UserOmit,
) => {
  return await prisma.user.findUnique({
    omit: omitOpts,
    where,
  });
};
