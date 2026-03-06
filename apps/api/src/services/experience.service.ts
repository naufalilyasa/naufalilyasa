import { ExperienceRequestDTO } from "@repo/zod-schemas";
import { prisma } from "../prisma/prisma.js";

export const getAllExperiences = async (userId: string) => {
    return await prisma.workExperience.findMany({
        where: { userId },
        orderBy: { startDate: "desc" },
        include: {
            technologies: {
                include: { technology: true },
            },
        },
    });
};

export const getExperienceById = async (id: string, userId: string) => {
    return await prisma.workExperience.findFirstOrThrow({
        where: { id, userId },
        include: {
            technologies: {
                include: { technology: true },
            },
        },
    });
};

export const createExperience = async (payload: ExperienceRequestDTO, userId: string) => {
    const { technologies, notableProjects, ...rest } = payload;

    return await prisma.workExperience.create({
        data: {
            ...rest,
            // @ts-ignore
            notableProjects: notableProjects || [],
            user: { connect: { id: userId } },
            technologies: technologies
                ? {
                    create: technologies.map((techId) => ({
                        technologyId: techId,
                    })),
                }
                : undefined,
        },
        include: {
            technologies: { include: { technology: true } },
        },
    });
};

export const updateExperience = async (id: string, payload: ExperienceRequestDTO, userId: string) => {
    const { technologies, notableProjects, ...rest } = payload;

    return await prisma.workExperience.update({
        where: { id, userId },
        data: {
            ...rest,
            // @ts-ignore
            notableProjects: notableProjects || [],
            technologies: technologies
                ? {
                    deleteMany: {},
                    create: technologies.map((techId) => ({
                        technologyId: techId,
                    })),
                }
                : undefined,
        },
        include: {
            technologies: { include: { technology: true } },
        },
    });
};

export const deleteExperience = async (id: string, userId: string) => {
    return await prisma.workExperience.delete({
        where: { id, userId },
    });
};
