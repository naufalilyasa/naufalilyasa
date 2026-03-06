import { z } from "zod";
import { baseExperienceSchema } from "../shared/experience-schema.js";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const experienceFormSchema = baseExperienceSchema.extend({
    technologies: z.array(z.string()).min(1, { message: "Select at least one technology" }),
    logo: z
        .any()
        .refine(
            (file) => {
                if (!file || file.length === 0) return true; // Optional file
                return file.size <= MAX_FILE_SIZE;
            },
            { message: "Max image size is 5MB." }
        )
        .refine(
            (file) => {
                if (!file || file.length === 0) return true; // Optional file
                return ACCEPTED_IMAGE_MIME_TYPES.includes(file.type);
            },
            {
                message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
            }
        )
        .optional(),
});

export type ExperienceFormDTO = z.infer<typeof experienceFormSchema>;
