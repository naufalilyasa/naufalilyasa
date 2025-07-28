import { CreateProjectBackendDTO, EditProjectBackendDTO } from "@repo/zod-schemas";

import { prisma } from "~/prisma/prisma.js";

export const getAllProjects = async (userId: string) => {
  return await prisma.project.findMany({
    orderBy: { endDate: "asc" },
    skip: 0,
    take: 10,
    where: {
      userId,
    },
  });
};

export const getProjectById = async (id: string, userId: string) => {
  return await prisma.project.findFirstOrThrow({
    include: {
      projectImages: true,
    },
    where: {
      id,
      AND: {
        userId,
      },
    },
  });
};

export const createProject = async (payload: CreateProjectBackendDTO, userId: string) => {
  const { description, endDate, projectImages, projectName, startDate, techStack, url } =
    payload;

  return await prisma.project.create({
    data: {
      description: description,
      endDate: endDate,
      projectImages: {
        create: projectImages?.map((image) => ({
          caption: image.caption,
          url: image.url,
        })),
      },
      projectName: projectName,
      startDate: startDate,
      techStack: techStack,
      url: url,
      userId: userId,
    },
    include: {
      projectImages: true,
    },
  });
};

export const updateProject = async (
  id: string,
  payload: EditProjectBackendDTO,
  userId: string,
) => {
  const { description, endDate, projectImages, projectName, startDate, techStack, url } =
    payload;

  return await prisma.project.update({
    where: {
      id,
      AND: {
        userId,
      },
    },
    data: {
      description: description,
      endDate: endDate,
      projectImages: {
        deleteMany: {},
        create: projectImages?.map((image) => ({
          caption: image.caption,
          url: image.url,
        })),
      },
      projectName: projectName,
      startDate: startDate,
      techStack: techStack,
      url: url,
      userId: userId,
    },
    include: {
      projectImages: true,
    },
  });
};
