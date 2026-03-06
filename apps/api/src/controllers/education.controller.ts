import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/index.js";
import { AppError } from "../utils/appError.js";
import { educationBackendSchema, paramsIdSchema } from "@repo/zod-schemas";
import {
    createEducation,
    deleteEducation,
    getAllEducations,
    getEducationById,
    updateEducation,
} from "../services/education.service.js";

export const getAllEducationsHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const educations = await getAllEducations(user.id);
        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully retrieved all educations",
            data: educations,
        });
    } catch (error) {
        return next(error);
    }
};

export const getEducationByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedParams = paramsIdSchema.parse(req.params);

        const education = await getEducationById(parsedParams.id, user.id);

        if (!education) {
            return next(new AppError(404, "Education not found"));
        }

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully retrieved education",
            data: education,
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedErrors = error.issues.map((i) => ({
                field: i.path.join("."),
                message: i.message,
            }));
            return next(new AppError(400, "Validation failed", formattedErrors));
        }
        return next(error);
    }
};

export const createEducationHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedPayload = educationBackendSchema.parse(req.body);

        const result = await createEducation(parsedPayload, user.id);

        res.status(201).json({
            statusCode: 201,
            status: "success",
            message: "Successfully created education",
            data: result,
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedErrors = error.issues.map((i) => ({
                field: i.path.join("."),
                message: i.message,
            }));
            return next(new AppError(400, "Validation failed", formattedErrors));
        }
        return next(error);
    }
};

export const updateEducationHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedParams = paramsIdSchema.parse(req.params);
        const parsedPayload = educationBackendSchema.parse(req.body);

        const existing = await getEducationById(parsedParams.id, user.id);
        if (!existing) {
            return next(new AppError(404, "Education not found"));
        }

        await updateEducation(parsedParams.id, parsedPayload, user.id);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully updated education",
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedErrors = error.issues.map((i) => ({
                field: i.path.join("."),
                message: i.message,
            }));
            return next(new AppError(400, "Validation failed", formattedErrors));
        }
        return next(error);
    }
};

export const deleteEducationHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedParams = paramsIdSchema.parse(req.params);

        const existing = await getEducationById(parsedParams.id, user.id);
        if (!existing) {
            return next(new AppError(404, "Education not found"));
        }

        await deleteEducation(parsedParams.id, user.id);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully deleted education",
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedErrors = error.issues.map((i) => ({
                field: i.path.join("."),
                message: i.message,
            }));
            return next(new AppError(400, "Validation failed", formattedErrors));
        }
        return next(error);
    }
};
