import {
  baseProjectSchema,
  CreateProjectBackendDTO,
  paramsProjectSchema,
  projectBackendSchema,
} from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "~/prisma/prisma.js";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from "~/services/project.service.js";
import { uploadSingleImage } from "~/services/upload.services.js";
import { AppError } from "~/utils/appError.js";
import { deleteSingleImage } from "~/utils/deleteImage.js";

export const getAllProjectsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    const projects = await getAllProjects(user.id);

    if (!projects) {
      return next(new AppError(403, "Failed to get projects"));
    }

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

export const getProjectByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = res.locals.user as null | {
    createdAt: Date;
    id: string;
    name: string;
    updatedAt: Date;
    username: string;
  };

  if (!user) {
    return next(new AppError(401, "You're not logged in"));
  }

  const parsedParams = paramsProjectSchema.parse(req.params);

  try {
    const project = await getProjectById(parsedParams.projectId, user.id);

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

export const createProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    const file = req.file as Express.Multer.File | undefined;

    // Parse base payload
    const parsedBase = baseProjectSchema.parse(req.body);

    // Upload and validate images url
    let thumbnail: undefined | { public_id: string; secure_url: string } = undefined;

    if (file) {
      const uploadResponse = await uploadSingleImage(file, "naufalilyasa/projects");
      thumbnail = uploadResponse;
    }

    // Final payload
    const payload: CreateProjectBackendDTO = {
      ...parsedBase,
      ...req.body,
      projectDetail: req.body.projectDetail,
      thumbnail: thumbnail
        ? {
            url: thumbnail.secure_url,
            publicId: thumbnail!.public_id,
          }
        : undefined,
    };

    const parsedPayload = projectBackendSchema.parse(payload);

    await createProject(parsedPayload, user.id);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Successfully created project",
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

export const editProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    // Parse params id
    const parsedParams = paramsProjectSchema.parse(req.params);

    // Parse base payload
    const file: Express.Multer.File | undefined = req.file;

    // Parse base payload
    const parsedBase = baseProjectSchema.parse(req.body);

    // Upload image
    let thumbnail: undefined | { public_id: string; secure_url: string } = undefined;

    if (file) {
      const uploadResponse = await uploadSingleImage(file, "naufalilyasa/projects");

      thumbnail = uploadResponse;
    }

    // Final payload
    const payload: CreateProjectBackendDTO = {
      ...parsedBase,
      ...req.body,
      projectDetail: req.body.projectDetail,
      thumbnail: thumbnail
        ? {
            url: thumbnail.secure_url,
            publicId: thumbnail.public_id,
          }
        : undefined,
    };

    const parsedPayload = projectBackendSchema.parse(payload);

    // Delete existing thumbnail on cloudinary before update
    const existingThumbnail = await prisma.project.findFirst({
      where: {
        id: parsedParams.projectId,
      },
      select: {
        thumbnail: {
          select: {
            publicId: true,
          },
        },
      },
    });

    if (existingThumbnail) {
      if (existingThumbnail.thumbnail) {
        await deleteSingleImage(existingThumbnail.thumbnail.publicId);
      }
    }

    await updateProject(parsedParams.projectId, parsedPayload, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully edited project",
    });
    return;
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

export const deleteProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    // Parse params id
    const parsedParams = paramsProjectSchema.parse(req.params);

    await prisma.project.delete({
      where: {
        id: parsedParams.projectId,
      },
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully deleted project",
    });
    return;
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      console.error(error);
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      console.error(error);
    }
    return next(error);
  }
};
