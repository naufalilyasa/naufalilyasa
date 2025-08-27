import { paramsProfileSchema, paramsProjectSchema } from "@repo/zod-schemas";
import config from "#/config/config.js";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "#/generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "#/prisma/prisma.js";
import { AppError } from "#/utils/appError.js";

export const getAllTechnologiesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await prisma.technology.findMany({});

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully get all technologies",
      data: result,
    });
    return;
  } catch (error) {
    return next(error);
  }
};

export const getAllPublicProjectsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await prisma.project.findMany({
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

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully get all projects",
      data: projects,
    });
    return;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return next(new AppError(409, "Duplicate entry"));
      }
      return next(new AppError(400, error.message));
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return next(new AppError(500, error.message));
    }
    return next(error);
  }
};

export const getPublicProjectByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const parsedParams = paramsProjectSchema.parse(req.params);

  try {
    const project = await prisma.project.findFirstOrThrow({
      where: {
        id: parsedParams.projectId,
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

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Succesfully get project by id",
      data: project,
    });
    return;
  } catch (error) {
    if (Prisma.PrismaClientUnknownRequestError) {
      return next(new AppError(500, "Server internal error"));
    }
    return next(error);
  }
};

export const getPublicUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const profile = await prisma.user.findFirstOrThrow({
      where: {
        id: config.userId,
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

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Succesfully get profile by id",
      data: profile,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    return next(error);
  }
};
