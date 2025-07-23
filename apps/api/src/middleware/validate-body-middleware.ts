import type { NextFunction, Request, Response } from "express";

import { ZodError, ZodType } from "zod/v4";

import type { RegisterUserDTO } from "~/schemas/auth-schema.js";

import { AppError } from "~/utils/appError.js";

export const validateBody =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body as RegisterUserDTO);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        next(new AppError(400, "Validation failed", formattedErrors));
      }

      next(error);
    }
  };
