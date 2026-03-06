import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/index.js";
import { AppError } from "../utils/appError.js";
import {
    experienceRequestSchema,
    paramsExperienceSchema,
    ExperienceRequestDTO,
} from "@repo/zod-schemas";
import {
    createExperience,
    deleteExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
} from "../services/experience.service.js";
import { uploadSingleImage } from "../services/upload.services.js";
import { deleteSingleImage } from "../utils/deleteImage.js";
import { prisma } from "../prisma/prisma.js";

export const getAllExperiencesHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const experiences = await getAllExperiences(user.id);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully retrieved experiences",
            data: experiences,
        });
    } catch (error) {
        next(error);
    }
};

export const getExperienceByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedParams = paramsExperienceSchema.parse(req.params);
        const experience = await getExperienceById(parsedParams.experienceId, user.id);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully retrieved experience",
            data: experience,
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedErrors = error.issues.map((i) => ({
                field: i.path.join("."),
                message: i.message,
            }));
            return next(new AppError(400, "Validation failed", formattedErrors));
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            return next(new AppError(404, "Experience not found"));
        }
        next(error);
    }
};

export const createExperienceHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const file = req.file as Express.Multer.File | undefined;
        const rawBody = req.body.data ? JSON.parse(req.body.data) : req.body;
        let logo: undefined | { public_id: string; secure_url: string };

        if (file) {
            logo = await uploadSingleImage(file, "naufalilyasa/experiences");
        }

        const payload: ExperienceRequestDTO = {
            ...rawBody,
            logoUrl: logo ? logo.secure_url : undefined,
            logoId: logo ? logo.public_id : undefined,
        };

        const parsedPayload = experienceRequestSchema.parse(payload);
        const result = await createExperience(parsedPayload, user.id);

        res.status(201).json({
            statusCode: 201,
            status: "success",
            message: "Successfully created experience",
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
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
            return next(
                new AppError(409, "A record with this value already exists", [
                    { field: "experience", message: "Duplicate entry" },
                ])
            );
        }
        next(error);
    }
};

export const updateExperienceHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedParams = paramsExperienceSchema.parse(req.params);
        const file = req.file as Express.Multer.File | undefined;
        const rawBody = req.body.data ? JSON.parse(req.body.data) : req.body;

        let logo: undefined | { public_id: string; secure_url: string };

        if (file) {
            logo = await uploadSingleImage(file, "naufalilyasa/experiences");
        }

        const payload: ExperienceRequestDTO = {
            ...rawBody,
            logoUrl: logo ? logo.secure_url : rawBody.logoUrl,
            logoId: logo ? logo.public_id : rawBody.logoId,
        };

        const parsedPayload = experienceRequestSchema.parse(payload);

        if (logo) {
            const existing = await prisma.workExperience.findFirst({
                where: { id: parsedParams.experienceId },
                select: { logoId: true },
            });
            if (existing?.logoId) {
                await deleteSingleImage(existing.logoId);
            }
        }

        const result = await updateExperience(parsedParams.experienceId, parsedPayload, user.id);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully updated experience",
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
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            return next(new AppError(404, "Experience not found"));
        }
        next(error);
    }
};

export const deleteExperienceHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user as { id: string } | null;
        if (!user) return next(new AppError(401, "You're not logged in"));

        const parsedParams = paramsExperienceSchema.parse(req.params);

        const existing = await prisma.workExperience.findFirst({
            where: { id: parsedParams.experienceId, userId: user.id },
            select: { logoId: true },
        });

        if (existing?.logoId) {
            await deleteSingleImage(existing.logoId);
        }

        await deleteExperience(parsedParams.experienceId, user.id);

        res.status(200).json({
            statusCode: 200,
            status: "success",
            message: "Successfully deleted experience",
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const formattedErrors = error.issues.map((i) => ({
                field: i.path.join("."),
                message: i.message,
            }));
            return next(new AppError(400, "Validation failed", formattedErrors));
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            return next(new AppError(404, "Experience not found"));
        }
        next(error);
    }
};
