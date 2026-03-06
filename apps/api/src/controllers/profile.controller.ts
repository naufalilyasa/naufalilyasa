import {
  baseProfileSchema,
  paramsProfileSchema,
  ProfileRequestDTO,
  profileRequestSchema,
  registerUserSchema,
} from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { Prisma, Role } from "../generated/prisma/index.js";
import { ZodError } from "zod";

import { prisma } from "../prisma/prisma.js";
import { registerUser } from "../services/auth.service.js";
import {
  getAllProfiles,
  getProfileById,
  updateProfile,
} from "../services/profile.service.js";
import { uploadSingleImage } from "../services/upload.services.js";
import { AppError } from "../utils/appError.js";
import { deleteSingleImage } from "../utils/deleteImage.js";

export const getAllProfilesHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const profiles = await getAllProfiles();

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved profiles",
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};

export const getProfileByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsProfileSchema.parse(req.params);
    const profile = await getProfileById(parsedParams.userId);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully retrieved profile",
      data: profile,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Profile not found"));
    }
    next(error);
  }
};

export const createProfileHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedBody = registerUserSchema.parse(req.body);
    const { name, password, username } = parsedBody;

    await registerUser({ name, password, username });

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Successfully created profile",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return next(new AppError(409, "A record with this value already exists", [{ field: "username", message: "Duplicate entry" }]));
    }
    next(error);
  }
};

export const updateProfileHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const filePhoto = req.file as Express.Multer.File | undefined;
    const parsedParams = paramsProfileSchema.parse(req.params);
    const parsedBase = baseProfileSchema.parse(req.body);

    let photo: undefined | { public_id: string; secure_url: string };
    if (filePhoto) {
      photo = await uploadSingleImage(filePhoto, "naufalilyasa/profiles");
    }

    const payload: ProfileRequestDTO = {
      ...parsedBase,
      technologies: req.body.technologies,
      photoUrl: photo ? photo.secure_url : undefined,
      photoId: photo ? photo.public_id : undefined,
    };

    const parsedPayload = profileRequestSchema.parse(payload);

    const existingThumbnail = await prisma.user.findFirst({
      where: { id: parsedParams.userId },
      select: { photoUrl: true, photoId: true },
    });

    if (existingThumbnail?.photoId) {
      await deleteSingleImage(existingThumbnail.photoId);
    }

    await updateProfile(parsedPayload, parsedParams.userId);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully edited profile",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Profile not found"));
    }
    next(error);
  }
};

export const deleteProfileHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = res.locals.user as { id: string } | null;
    if (!user) return next(new AppError(401, "You're not logged in"));

    const parsedParams = paramsProfileSchema.parse(req.params);

    await prisma.user.delete({
      where: { id: parsedParams.userId },
    });

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully deleted profile",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((i) => ({ field: i.path.join("."), message: i.message }));
      return next(new AppError(400, "Validation failed", formattedErrors));
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return next(new AppError(404, "Profile not found"));
    }
    next(error);
  }
};
