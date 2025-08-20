import { paramsProfileSchema } from "@repo/zod-schemas";
import { NextFunction, Request, Response } from "express";
import { Role } from "generated/prisma/index.js";
import { ZodError } from "zod";

import { getAllProfiles, getProfileById } from "~/services/profile.service.js";
import { AppError } from "~/utils/appError.js";

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

    const file: Express.Multer.File | undefined = req.file;

    // Parse base payload
    const parsedBase = baseProjectSchema.parse(req.body);

    res.status(200).json({ message: "Get all profiles" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Logic to get all profiles
    res.status(200).json({ message: "Get all profiles" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Logic to get all profiles
    res.status(200).json({ message: "Get all profiles" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
