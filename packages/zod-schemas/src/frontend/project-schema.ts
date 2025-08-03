import { baseProjectSchema } from "../shared/project-schema.js";
import { z } from "zod";

export const projectFormSchema = baseProjectSchema.extend({
  featured: z.boolean().optional(),
  startDate: z.date({
    error: "Start date must be a valid date.",
  }),

  endDate: z
    .date({
      error: "End date must be a valid date, or left empty.",
    })
    .optional(),

  technologies: z
    .array(z.string().min(1, "Technology name cannot be empty"))
    .min(1, "Please select at least one technology")
    .max(20, "You can select up to 20 technologies only"),

  projectDetail: z.object({
    time: z.number(),
    blocks: z.array(
      z.object({
        id: z.string(),
        type: z.string(),
        data: z.record(z.string(), z.unknown()),
      })
    ),
    version: z.string(),
  }),

  thumbnail: z
    .file({ message: "Must be a valid file" })
    .min(1)
    .max(5 * 1024 * 1024, "Max 5 MB size")
    .mime([
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
    ])
    .optional(),
});

export type CreateProjectFormDTO = z.infer<typeof projectFormSchema>;
