import { z } from "zod";

export const notableProjectSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    impact: z.string().min(1, "Impact is required"),
});

export const baseExperienceSchema = z.object({
    companyName: z.string().min(1, "Company name is required"),
    position: z.string().min(1, "Position is required"),
    location: z.string().min(1, "Location is required"),
    type: z.string().min(1, "Type is required"),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable().optional(),
    description: z.string().min(1, "Description is required"),
    achievements: z.array(z.string()).default([]),
    notableProjects: z.array(notableProjectSchema).default([]),
});
