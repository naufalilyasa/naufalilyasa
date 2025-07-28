import {
  baseProjectSchema,
  CreateProjectBackendDTO,
  paramsProjectSchema,
  projectImagesSchema,
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
} from "~/services/project-service.js";
import { uploadImages } from "~/services/upload-services.js";
import { AppError } from "~/utils/appError.js";

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
      data: projects,
      message: "Successfully get all projects",
      status: "success",
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

  const id = req.params.id;

  if (!id) {
    next(new AppError(400, "Missing required parameter: 'id'"));
  }

  try {
    const project = await getProjectById(String(id), user.id);

    res.status(200).json({
      data: project,
      message: "Succesfully get project by id",
      status: "success",
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

  try {
    const files = req.files as Express.Multer.File[];

    // Parse base payload
    const basePayload = {
      ...req.body,
      techStack: JSON.parse(req.body.techStack),
    };
    const parsedBase = baseProjectSchema.parse(basePayload);

    // Upload and validate images
    const uploads = await uploadImages(files);
    const imagePayload = uploads.map((upload, index) => ({
      caption: (req.body as any)?.[index]?.caption ?? `Image ${index + 1}`,
      url: upload.secure_url,
    }));
    const parsedImages = projectImagesSchema.parse(imagePayload);

    // Final payload
    const payload: CreateProjectBackendDTO = {
      ...parsedBase,
      projectImages: parsedImages,
    };

    await createProject(payload, user.id);

    res.status(200).json({
      statusCode: 200,
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
    const basePayload = {
      ...req.body,
      techStack: JSON.parse(req.body.techStack),
    };
    const parsedBase = baseProjectSchema.parse(basePayload);

    const files = req.files as Express.Multer.File[];

    // Upload and validate images
    const uploads = await uploadImages(files);
    const imagePayload = uploads.map((upload, index) => ({
      caption: (req.body as any)?.[index]?.caption ?? `Image ${index + 1}`,
      url: upload.secure_url,
    }));

    const parsedImages = projectImagesSchema.parse(imagePayload);

    // Final payload
    const payload: CreateProjectBackendDTO = {
      ...parsedBase,
      projectImages: parsedImages,
    };

    await updateProject(parsedParams.id, payload, user.id);

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
        id: parsedParams.id,
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
    return next(error);
  }
};
