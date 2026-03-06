import { Prisma } from "../generated/prisma/index.js";
import { prisma } from "../prisma/prisma.js";
import type { RequestEducationBackendDTO } from "@repo/zod-schemas";

export const getAllEducations = async (userId: string) => {
    return await prisma.education.findMany({
        where: { userId },
        orderBy: { endDate: { sort: "desc", nulls: "first" } },
    });
};

export const getEducationById = async (id: string, userId: string) => {
    return await prisma.education.findFirst({
        where: { id, userId },
    });
};

export const createEducation = async (
    payload: RequestEducationBackendDTO,
    userId: string
) => {
    const {
        institution,
        location,
        category,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
        description,
        achievements,
    } = payload;

    return await prisma.education.create({
        data: {
            institution,
            location,
            category,
            degree,
            fieldOfStudy,
            startDate: new Date(startDate),
            endDate: endDate ? new Date(endDate) : null,
            description,
            achievements: achievements || [],
            user: {
                connect: { id: userId },
            },
        },
    });
};

export const updateEducation = async (
    id: string,
    payload: RequestEducationBackendDTO,
    userId: string
) => {
    const {
        institution,
        location,
        category,
        degree,
        fieldOfStudy,
        startDate,
        endDate,
        description,
        achievements,
    } = payload;

    return await prisma.education.update({
        where: { id, userId },
        data: {
            institution,
            location,
            category,
            degree,
            fieldOfStudy,
            startDate: new Date(startDate),
            endDate: endDate ? new Date(endDate) : null,
            description,
            achievements: achievements || [],
        },
    });
};

export const deleteEducation = async (id: string, userId: string) => {
    return await prisma.education.delete({
        where: { id, userId },
    });
};
