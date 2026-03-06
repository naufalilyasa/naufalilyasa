import { z } from "zod";

export const baseEducationSchema = z.object({
    institution: z.string().min(2, "Institution name is required"),
    location: z.string().min(2, "Location is required"),
    category: z.enum(["FORMAL", "INFORMAL"]),
    degree: z.string().optional().nullable(),
    fieldOfStudy: z.string().optional().nullable(),
    startDate: z.coerce.date({
        message: "Start date is required",
    }),
    endDate: z.coerce.date().nullable().optional(),
    description: z.string().optional().nullable(),
    achievements: z.array(z.string()).default([]),
});

export const paramsIdSchema = z.object({
    id: z.string().min(1, "ID is required"),
});

