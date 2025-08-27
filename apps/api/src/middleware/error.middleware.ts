/* eslint-disable no-unused-vars */
import type { NextFunction, Request, Response } from "express";

import config from "#/config/config.js";

import { AppError } from "#/utils/appError.js";

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = 500;
  let status = "error";
  let message = "Internal server error";
  let errors: any[] = [];

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    status = err.status;
    message = err.message;
    errors = err.errors ?? [];
  }

  const responseData: Record<string, any> = {
    message: err.message,
  };

  if (errors.length > 0) {
    responseData.errors = errors;
  }

  // Don't leak error details in production
  if (config.nodeEnv === "production" && statusCode === 500) {
    responseData.message = "Something went wrong";
  }

  res.status(statusCode).json({
    data: responseData,
    status,
    statusCode,
  });
};
