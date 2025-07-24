import { createProjectBackendSchema, paramsProjectSchema } from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "generated/prisma/index.js";

import { prisma } from "~/prisma/prisma.js";
import {
  createProject,
  getAllProjects,
  getProjectById,
} from "~/services/project-service.js";
import { uploadImages } from "~/services/upload-services.js";
import { AppError } from "~/utils/appError.js";

export const getAllProjectsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await getAllProjects();

    if (!projects) {
      next(new AppError(403, "Failed to get projects"));
      return;
    }

    res.status(200).json({
      data: projects,
      message: "Get projects success",
      status: "success",
    });
    return;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return new AppError(409, "Duplicate entry");
      }
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return new AppError(500, error.message);
    }
    next(error);
  }
};

export const getProjectByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  if (!id) {
    next(new AppError(400, "Missing required parameter: 'id'"));
  }

  try {
    const project = getProjectById(String(id));

    res.status(200).json({
      data: project,
      message: "Get project by id success",
      status: "success",
    });
    return;
  } catch (error) {
    if (Prisma.PrismaClientUnknownRequestError) {
      next(new AppError(500, "Server internal error"));
    }
    next(error);
  }
};

export const createProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const parsedParams = paramsProjectSchema.safeParse(req.params);

  if (!parsedParams.success) {
    throw new AppError(400, parsedParams.error.message);
  }

  if (!parsedParams.data?.id) {
    throw new AppError(400, "Payload request not found");
  }

  const files = req.files as Express.Multer.File[];

  const payload = {
    ...req.body,
    projectImages: files?.map((file) => ({
      caption: req.body.projectImages.caption,
      file,
    })),
    techStack: JSON.parse(req.body.techStack),
  };

  const parsed = createProjectBackendSchema.safeParse(payload);

  if (!parsed.success) {
    const formattedErrors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    throw new AppError(400, "Validation failed", formattedErrors);
  }

  if (!parsed.data) {
    throw new AppError(400, "Payload request not found");
  }

  if (!parsed.data.projectImages) {
    throw new AppError(400, "Payload request not found");
  }

  const uploads = await uploadImages(
    parsed.data.projectImages.map((file) => file.buffer),
  );

  try {
    await createProject(parsed.data, parsedParams.data?.id);
  } catch (error) {
    next(error);
  }

  res.status(200).json({
    message: "Success create project",
    status: "success",
  });
  return;
};

export const editProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const {
    description,
    endDate,
    projectImages,
    projectName,
    startDate,
    techStack,
    url,
    userId,
  } = req.body;

  try {
    await prisma.project.update({
      data: {
        description,
        endDate,
        projectImages,
        projectName,
        startDate,
        techStack,
        url,
        userId,
      },
      include: {
        projectImages: true,
      },
      where: {
        id: String(id),
      },
    });
  } catch (error) {
    next(error);
  }

  res.status(200).json({
    message: "Success edit project",
    status: "success",
  });
  return;
};

export const deleteProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;

  try {
    await prisma.project.delete({
      where: {
        id: String(id),
      },
    });
  } catch (error) {
    next(error);
  }

  res.status(200).json({
    message: "Success delete project",
    status: "success",
  });
  return;
};
