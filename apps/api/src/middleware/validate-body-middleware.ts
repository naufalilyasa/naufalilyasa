import type { NextFunction, Request, Response } from "express";

import { ZodType } from "zod/v4";

import { AppError } from "~/utils/appError.js";

export const validateBody =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const formattedErrors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      next(new AppError(400, "Validation failed", formattedErrors));
    }

    req.body = result.data;
    next();
  };
