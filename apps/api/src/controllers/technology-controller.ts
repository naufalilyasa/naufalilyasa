import { NextFunction, Request, Response } from "express";

import { prisma } from "~/prisma/prisma.js";
import { AppError } from "~/utils/app-error.js";

export const getAllTechnologiesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await prisma.technology.findMany({});

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Successfully get all technologies",
      data: result,
    });
    return;
  } catch (error) {
    return next(error);
  }
};
