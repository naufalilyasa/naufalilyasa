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
import { Prisma } from "#/generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "#/prisma/prisma.js";
import { uploadSingleImage } from "#/services/upload.services.js";
import { AppError } from "#/utils/appError.js";
import { deleteSingleImage } from "#/utils/deleteImage.js";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "#/services/blog.service.js";

export const getAllBlogsHandler = async (
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

    const blogs = await getAllBlogs(user.id);

    if (!blogs) {
      return next(new AppError(403, "Failed to get blogs"));
    }

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully get all blogs",
      data: blogs,
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

export const getBlogBySlugHandler = async (
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

  const parsedParams = paramsSlugBlogSchema.parse(req.params);

  try {
    const blog = await getBlogById(parsedParams.slug, user.id);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Succesfully get blog by slug",
      data: blog,
    });
    return;
  } catch (error) {
    if (Prisma.PrismaClientUnknownRequestError) {
      return next(new AppError(500, "Server internal error"));
    }
    return next(error);
  }
};

export const createBlogHandler = async (
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
    const parsedBase = baseBlogSchema.parse(req.body);

    // Upload and validate images url
    let thumbnail: undefined | { public_id: string; secure_url: string } = undefined;

    if (file) {
      const uploadResponse = await uploadSingleImage(file, "naufalilyasa/blogs");
      thumbnail = uploadResponse;
    }

    // Final payload
    const payload: RequestBlogBackendDTO = {
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

    const parsedPayload = blogBackendSchema.parse(payload);

    await createBlog(parsedPayload, user.id);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Successfully created blog.",
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

export const editBlogHandler = async (
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
    const parsedParams = paramsBlogIdBlogSchema.parse(req.params);

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

    const parsedPayload = blogBackendSchema.parse(payload);

    // Delete existing thumbnail on cloudinary before update
    const existingThumbnail = await prisma.project.findFirst({
      where: {
        id: parsedParams.blogId,
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

    await updateBlog(parsedParams.blogId, parsedPayload, user.id);

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

export const deleteBlogHandler = async (
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
    const parsedParams = paramsBlogIdBlogSchema.parse(req.params);

    await prisma.blogPost.delete({
      where: {
        id: parsedParams.blogId,
      },
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully deleted blog",
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
