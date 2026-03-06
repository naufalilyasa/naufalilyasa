import { paramsProjectSlugSchema, paramsSlugBlogSchema } from "@repo/zod-schemas";
import config from "../config/config.js";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "../prisma/prisma.js";
import { AppError } from "../utils/appError.js";
import { getAllBlogs, getBlogById } from "../services/blog.service.js";

export const getAllTechnologiesHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await prisma.technology.findMany({});

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all technologies",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPublicProjectsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await prisma.project.findMany({
      where: { userId: config.userId },
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
      message: "Successfully retrieved all public projects",
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

export const getPublicProjectBySlugHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedParams = paramsProjectSlugSchema.parse(req.params);

    const project = await prisma.project.findFirstOrThrow({
      where: {
        slug: parsedParams.slug,
        userId: config.userId,
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
      message: "Successfully retrieved public project",
      data: project,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Project not found"));
    }
    next(error);
  }
};

export const getPublicUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await prisma.user.findFirstOrThrow({
      where: {
        id: config.userId,
      },
      omit: {
        password: true,
        photoId: true,
      },
      include: {
        userTechnologies: {
          select: {
            technology: true,
          },
        },
        workExperiences: {
          orderBy: {
            startDate: "desc",
          },
          include: {
            technologies: {
              include: {
                technology: true,
              },
            },
          },
        },
        educations: {
          orderBy: {
            startDate: "desc",
          },
        },
      },
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved public profile",
      data: profile,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Profile not found"));
    }
    next(error);
  }
};

export const getPublicAllBlogsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await getAllBlogs(config.userId);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all public blogs",
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getPublicBlogBySlugHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsedParams = paramsSlugBlogSchema.parse(req.params);
    const blog = await getBlogById(parsedParams.slug, config.userId);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved public blog",
      data: blog,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Blog not found"));
    }
    next(error);
  }
};
