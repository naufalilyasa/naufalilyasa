import {
  baseBlogSchema,
  baseProjectSchema,
  blogBackendSchema,
  CreateProjectBackendDTO,
  paramsBlogIdBlogSchema,
  paramsSlugBlogSchema,
  RequestBlogBackendDTO,
} from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "../prisma/prisma.js";
import { uploadSingleImage } from "../services/upload.services.js";
import { AppError } from "../utils/appError.js";
import { deleteSingleImage } from "../utils/deleteImage.js";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../services/blog.service.js";

export const getAllBlogsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const blogs = await getAllBlogs(user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved all blogs",
      data: blogs,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") return next(new AppError(409, "Duplicate entry"));
    }
    next(error);
  }
};

export const getBlogBySlugHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsSlugBlogSchema.parse(req.params);
    const blog = await getBlogById(parsedParams.slug, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved blog",
      data: blog,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") return next(new AppError(404, "Blog not found"));
    }
    next(error);
  }
};

export const createBlogHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const file = req.file as Express.Multer.File | undefined;
    const parsedBase = baseBlogSchema.parse(req.body);

    let thumbnail: undefined | { public_id: string; secure_url: string };
    if (file) {
      thumbnail = await uploadSingleImage(file, "naufalilyasa/blogs");
    }

    const payload: RequestBlogBackendDTO = {
      ...parsedBase,
      ...req.body,
      thumbnail: thumbnail ? { url: thumbnail.secure_url, publicId: thumbnail.public_id } : undefined,
    };

    const parsedPayload = blogBackendSchema.parse(payload);
    await createBlog(parsedPayload, user.id);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Successfully created blog",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return next(new AppError(409, "A record with this value already exists", [{ field: "slug", message: "Duplicate entry" }]));
    }
    next(error);
  }
};

export const editBlogHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsBlogIdBlogSchema.parse(req.params);
    const file = req.file as Express.Multer.File | undefined;
    const parsedBase = baseProjectSchema.parse(req.body);

    let thumbnail: undefined | { public_id: string; secure_url: string };
    if (file) {
      thumbnail = await uploadSingleImage(file, "naufalilyasa/projects");
    }

    const payload: CreateProjectBackendDTO = {
      ...parsedBase,
      ...req.body,
      thumbnail: thumbnail ? { url: thumbnail.secure_url, publicId: thumbnail.public_id } : undefined,
    };

    const parsedPayload = blogBackendSchema.parse(payload);

    const existingThumbnail = await prisma.project.findFirst({
      where: { id: parsedParams.blogId },
      select: { thumbnail: { select: { publicId: true } } },
    });

    if (existingThumbnail?.thumbnail) {
      await deleteSingleImage(existingThumbnail.thumbnail.publicId);
    }

    await updateBlog(parsedParams.blogId, parsedPayload, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully edited project",
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

export const deleteBlogHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsBlogIdBlogSchema.parse(req.params);

    await prisma.blogPost.delete({
      where: { id: parsedParams.blogId },
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully deleted blog",
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
