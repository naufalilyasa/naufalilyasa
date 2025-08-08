import { CreateProjectBackendDTO, EditProjectBackendDTO } from "@repo/zod-schemas";
import { Prisma } from "generated/prisma/index.js";

import { prisma } from "~/prisma/prisma.js";

export const getAllProjects = async (userId: string) => {
  return await prisma.project.findMany({
    where: {
      userId,
    },
    // skip: 0,
    // take: 10,
    orderBy: { createdAt: "desc" },
    include: {
      projectDetail: true,
      technologies: {
        include: {
          technology: true,
        },
      },
      thumbnail: true,
    },
  });
};

export const getProjectById = async (id: string, userId: string) => {
  return await prisma.project.findFirstOrThrow({
    where: {
      id,
      AND: {
        userId,
      },
    },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
      projectDetail: true,
      thumbnail: true,
    },
  });
};

export const createProject = async (payload: CreateProjectBackendDTO, userId: string) => {
  const {
    description,
    title,
    startDate,
    endDate,
    githubUrl,
    thumbnail,
    liveUrl,
    featured,
    category,
    technologies,
    projectDetail,
  } = payload;

  return await prisma.project.create({
    data: {
      userId,
      description,
      title,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      githubUrl,
      thumbnail: thumbnail
        ? {
            create: {
              url: thumbnail.url,
              publicId: thumbnail.publicId,
            },
          }
        : undefined,
      liveUrl,
      featured,
      category,
      technologies: {
        create: technologies.map((techId: string) => ({
          technology: { connect: { id: techId } },
        })),
      },
      projectDetail: projectDetail
        ? {
            create: {
              content: projectDetail as Prisma.InputJsonValue,
            },
          }
        : {
            create: {
              content: {
                time: Date.now(),
                blocks: [],
                version: "2.29.0",
              },
            },
          },
    },
    include: {
      technologies: { include: { technology: true } },
      projectDetail: true,
      thumbnail: true,
    },
  });
};

export const updateProject = async (
  projectId: string,
  payload: EditProjectBackendDTO,
  userId: string,
) => {
  const { technologies, thumbnail, projectDetail } = payload;

  return await prisma.project.update({
    where: {
      id: projectId,
      AND: {
        userId,
      },
    },
    data: {
      ...payload,
      thumbnail: thumbnail
        ? {
            upsert: {
              create: {
                url: thumbnail.url,
                publicId: thumbnail.publicId,
              },
              update: {
                url: thumbnail.url,
                publicId: thumbnail.publicId,
              },
            },
          }
        : undefined,
      // replace technologies
      technologies: technologies
        ? {
            deleteMany: {},
            create: technologies.map((techId) => ({
              technology: { connect: { id: techId } },
            })),
          }
        : undefined,

      // replace projectDetail
      projectDetail: projectDetail
        ? {
            deleteMany: {},
            create: { content: projectDetail as Prisma.InputJsonValue },
          }
        : undefined,
    },
    include: {
      technologies: { include: { technology: true } },
      projectDetail: true,
      thumbnail: true,
    },
  });
};
