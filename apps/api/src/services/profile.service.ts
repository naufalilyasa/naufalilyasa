import { ProfileRequestDTO } from "@repo/zod-schemas";
import { Role } from "generated/prisma/index.js";

import { prisma } from "~/prisma/prisma.js";

export const getAllProfiles = async (): Promise<
  {
    id: string;
    username: string;
    name: string;
    role: Role;
    updatedAt: Date;
    createdAt: Date;
  }[]
> => {
  const profiles = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      name: true,
      role: true,
      updatedAt: true,
      createdAt: true,
    },
    where: {
      role: {
        not: "ADMIN", // Exclude admin profiles
      },
    },
  });

  return profiles;
};

export const getProfileById = async (
  userId: string,
): Promise<{
  id: string;
  username: string;
  name: string;
  role: Role;
  updatedAt: Date;
  createdAt: Date;
}> => {
  const profiles = await prisma.user.findFirstOrThrow({
    select: {
      id: true,
      username: true,
      name: true,
      role: true,
      updatedAt: true,
      createdAt: true,
    },
    where: {
      role: {
        not: "ADMIN", // Exclude admin profiles
      },
      AND: {
        id: userId,
      },
    },
  });

  return profiles;
};

export const updateProfile = async (payload: ProfileRequestDTO, userId: string) => {
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });

  return result;
};
