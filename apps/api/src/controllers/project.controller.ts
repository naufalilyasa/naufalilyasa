import {
  baseProjectSchema,
  CreateProjectBackendDTO,
  paramsProjectSchema,
  paramsProjectSlugSchema,
  projectBackendSchema,
} from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { Prisma } from "../generated/prisma/index.js";
import { prisma } from "../prisma/prisma.js";
import {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  updateProject,
} from "../services/project.service.js";
import { uploadSingleImage } from "../services/upload.services.js";
import { AppError } from "../utils/appError.js";
import { deleteSingleImage } from "../utils/deleteImage.js";

export const getAllProjectsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const projects = await getAllProjects(user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all projects",
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsProjectSchema.parse(req.params);
    const project = await getProjectById(parsedParams.projectId, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved project",
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

export const getProjectBySlugHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsProjectSlugSchema.parse(req.params);
    const project = await getProjectBySlug(parsedParams.slug, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved project",
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

export const createProjectHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const file = req.file as Express.Multer.File | undefined;
    const parsedBase = baseProjectSchema.parse(req.body);

    let thumbnail: undefined | { public_id: string; secure_url: string };
    if (file) {
      thumbnail = await uploadSingleImage(file, "naufalilyasa/projects");
      (req as any).uploadResponsePublicId = thumbnail.public_id;
    }

    const payload: CreateProjectBackendDTO = {
      ...req.body,
      ...parsedBase,
      thumbnail: thumbnail ? { url: thumbnail.secure_url, publicId: thumbnail.public_id } : undefined,
    };

    const parsedPayload = projectBackendSchema.parse(payload);
    await createProject(parsedPayload, user.id);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Successfully created project",
    });
  } catch (error) {
    if (req.file && Object.prototype.hasOwnProperty.call(req, "uploadResponsePublicId")) {
      const publicId = (req as any).uploadResponsePublicId;
      if (publicId) await deleteSingleImage(publicId).catch(console.error);
    }
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      const field = (error.meta?.target as string[])?.includes("slug") ? "slug" : "title";
      return next(new AppError(409, "A record with this value already exists", [{ field, message: "Duplicate entry" }]));
    }
    next(error);
  }
};

export const editProjectHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsProjectSchema.parse(req.params);
    const file = req.file as Express.Multer.File | undefined;
    const parsedBase = baseProjectSchema.parse(req.body);

    let thumbnail: undefined | { public_id: string; secure_url: string };
    if (file) {
      thumbnail = await uploadSingleImage(file, "naufalilyasa/projects");
      (req as any).uploadResponsePublicId = thumbnail.public_id;
    }

    const payload: CreateProjectBackendDTO = {
      ...req.body,
      ...parsedBase,
      thumbnail: thumbnail ? { url: thumbnail.secure_url, publicId: thumbnail.public_id } : undefined,
    };

    const parsedPayload = projectBackendSchema.parse(payload);

    const existingData = await prisma.project.findFirst({
      where: { id: parsedParams.projectId },
      select: { thumbnail: { select: { publicId: true } } },
    });

    if (thumbnail && existingData?.thumbnail) {
      await deleteSingleImage(existingData.thumbnail.publicId);
    }

    await updateProject(parsedParams.projectId, parsedPayload, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully edited project",
    });
  } catch (error) {
    if (req.file && Object.prototype.hasOwnProperty.call(req, "uploadResponsePublicId")) {
      const publicId = (req as any).uploadResponsePublicId;
      if (publicId) await deleteSingleImage(publicId).catch(console.error);
    }
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      const field = (error.meta?.target as string[])?.includes("slug") ? "slug" : "title";
      return next(new AppError(409, "A record with this value already exists", [{ field, message: "Duplicate entry" }]));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Project not found"));
    }
    next(error);
  }
};

export const deleteProjectHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsProjectSchema.parse(req.params);

    await prisma.project.delete({
      where: { id: parsedParams.projectId },
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully deleted project",
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
