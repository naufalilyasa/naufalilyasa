import { ProfileRequestDTO } from "@repo/zod-schemas";
import { $Enums, Role } from "generated/prisma/index.js";

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

export const getProfileById = async (userId: string) => {
  const profiles = await prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    },
    omit: {
      id: true,
      password: true,
      photoId: true,
    },
    include: {
      userTechnologies: {
        select: {
          technology: true,
        },
      },
    },
  });

  return profiles;
};

export const updateProfile = async (payload: ProfileRequestDTO, userId: string) => {
  const { technologies, ...rest } = payload;
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...rest,
      userTechnologies: technologies
        ? {
            deleteMany: {},
            create: technologies.map((techId) => ({
              technologyId: techId,
            })),
          }
        : undefined,
    },
    include: {
      userTechnologies: { include: { technology: true } },
    },
  });

  return result;
};
