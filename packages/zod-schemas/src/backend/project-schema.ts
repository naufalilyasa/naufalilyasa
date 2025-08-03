import { baseProjectSchema } from "../shared/project-schema.js";

import { z } from "zod";

export const projectBackendSchema = baseProjectSchema.extend({
  featured: z
    .union([z.boolean(), z.enum(["true", "false"])])
    .transform((val) => val === true || val === "true")
    .optional(),

  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    error: "Start date must be a valid ISO 8601 date string.",
  }),

  endDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      error: "End date must be a valid ISO 8601 date string, or left empty.",
    }),
  technologies: z
    .array(z.string().min(1, "Technology name cannot be empty"))
    .min(1, "Please select at least one technology")
    .max(20, "You can select up to 20 technologies only"),

  projectDetail: z
    .object({
      time: z
        .union([z.number(), z.string()])
        .transform((val) => (typeof val === "string" ? Number(val) : val))
        .refine((val) => !isNaN(val), {
          message: "Invalid time value",
        }),
      blocks: z
        .array(
          z.object({
            id: z.string(),
            type: z.string(),
            data: z.record(z.string(), z.unknown()),
          })
        )
        .optional(),
      version: z.string(),
    })
    .optional(),

  thumbnail: z
    .object({
      url: z.url("Image URL must be a valid URL"),
      publicId: z.string("Image public id must be a valid string"),
    })
    .optional(),
});

export type CreateProjectBackendDTO = z.infer<typeof projectBackendSchema>;
export type EditProjectBackendDTO = z.infer<typeof projectBackendSchema>;
