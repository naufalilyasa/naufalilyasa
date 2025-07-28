import type { NextFunction, Request, Response } from "express";

import { ZodType } from "zod/v4";

import { AppError } from "~/utils/appError.js";

export const validateParams =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
      next(new AppError(400, result.error.message));
    }

    if (!result.data) {
      next(new AppError(400, "Required params"));
    }

    next();
  };
