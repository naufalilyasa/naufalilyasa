/* eslint-disable no-unused-vars */
import type { NextFunction, Request, Response } from "express";

import config from "../config/config.js";

import { AppError } from "../utils/appError.js";

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

  const response: Record<string, any> = {
    statusCode,
    status,
    message: config.nodeEnv === "production" && statusCode === 500 ? "Something went wrong" : message,
  };

  if (errors.length > 0) {
    response.errors = errors;
  }

  res.status(statusCode).json(response);
};
