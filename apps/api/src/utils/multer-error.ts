import { NextFunction, Request, Response } from "express";
import { MulterError } from "multer";

import { AppError } from "./app-error.js";

// Error handling middleware untuk multer errors
export const handleMulterError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return next(new AppError(400, "File size too large. Maximum file size is 5MB."));
    }
    if (err.code === "LIMIT_FILE_COUNT") {
      return next(new AppError(400, "Too many files. Maximum 20 files allowed."));
    }
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return next(
        new AppError(400, 'Unexpected field. Please use "images" as field name.'),
      );
    }
  }

  if (err instanceof Error && err.message.includes("Only image files")) {
    return next(new AppError(400, err.message));
  }

  next(err);
};
