import { baseExperienceSchema } from "../shared/experience-schema.js";
import { z } from "zod";

export const experienceRequestSchema = baseExperienceSchema.extend({
    technologies: z.array(z.string()).optional(),
    logoUrl: z.string().url().optional(),
    logoId: z.string().optional(),
});

export const paramsExperienceSchema = z.object({
    experienceId: z.string().min(1, "Experience ID is required"),
});

export type ExperienceRequestDTO = z.infer<typeof experienceRequestSchema>;
