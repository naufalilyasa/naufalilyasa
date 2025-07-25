/* eslint-disable no-unused-vars */
import type { NextFunction, Request, Response } from "express";

import { AppError } from "~/utils/appError.js";

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  const responseData: Record<string, any> = {
    message: err.message,
  };

  if (err.errors) {
    responseData.errors = err.errors.map((error) => error.message);
  }

  res.status(statusCode).json({
    data: responseData,
    status,
    statusCode,
  });
};
