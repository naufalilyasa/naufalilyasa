import {
  baseProfileSchema,
  paramsProfileSchema,
  ProfileRequestDTO,
  profileRequestSchema,
  registerUserSchema,
} from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { Prisma, Role } from "generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "~/prisma/prisma.js";
import { registerUser } from "~/services/auth.service.js";
import {
  getAllProfiles,
  getProfileById,
  updateProfile,
} from "~/services/profile.service.js";
import { uploadSingleImage } from "~/services/upload.services.js";
import { AppError } from "~/utils/appError.js";
import { deleteSingleImage } from "~/utils/deleteImage.js";

export const getAllProfilesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      id: string;
      username: string;
      name: string;
      role: Role;
      updatedAt: Date;
      createdAt: Date;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    const profiles = await getAllProfiles();

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Succesfully get profiles",
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};

export const getProfileByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      id: string;
      username: string;
      name: string;
      role: Role;
      updatedAt: Date;
      createdAt: Date;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    const parsedParams = paramsProfileSchema.parse(req.params);

    const profile = await getProfileById(parsedParams.userId);

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

export const createProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      id: string;
      username: string;
      name: string;
      role: Role;
      updatedAt: Date;
      createdAt: Date;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    // Validate body
    const parsedBody = registerUserSchema.parse(req.body);

    // Request data input from body
    const { name, password, username } = parsedBody;
    const payload: Prisma.UserCreateInput = {
      name,
      password,
      username,
    };

    // Register user to database
    await registerUser(payload);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully edited profile",
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

export const updateProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      id: string;
      username: string;
      name: string;
      role: Role;
      updatedAt: Date;
      createdAt: Date;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    const filePhoto: Express.Multer.File | undefined = req.file;

    // Parse params
    const parsedParams = paramsProfileSchema.parse(req.params);

    // Parse base payload
    const parsedBase = baseProfileSchema.parse(req.body);

    // Upload photo if exists
    let photo: undefined | { public_id: string; secure_url: string } = undefined;

    if (filePhoto) {
      const uploadResponse = await uploadSingleImage(filePhoto, "naufalilyasa/profiles");

      photo = uploadResponse;
    }

    // Create payload
    const payload: ProfileRequestDTO = {
      ...parsedBase,
      photoUrl: photo ? photo.secure_url : undefined,
      photoId: photo ? photo.public_id : undefined,
    };

    const parsedPayload = profileRequestSchema.parse(payload);

    // Delete existing thumbnail on cloudinary before update
    const existingThumbnail = await prisma.user.findFirst({
      where: {
        id: parsedParams.userId,
      },
      select: {
        photoUrl: true,
        photoId: true,
      },
    });

    if (existingThumbnail) {
      if (existingThumbnail.photoId) {
        await deleteSingleImage(existingThumbnail.photoId);
      }
    }

    await updateProfile(parsedPayload, parsedParams.userId);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully edited profile",
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

export const deleteProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = res.locals.user as null | {
      id: string;
      username: string;
      name: string;
      role: Role;
      updatedAt: Date;
      createdAt: Date;
    };

    if (!user) {
      return next(new AppError(401, "You're not logged in"));
    }

    // Parse params id
    const parsedParams = paramsProfileSchema.parse(req.params);

    await prisma.user.delete({
      where: {
        id: parsedParams.userId,
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
