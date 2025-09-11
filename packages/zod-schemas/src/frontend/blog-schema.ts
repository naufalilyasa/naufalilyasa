import { baseBlogSchema } from "../shared/blog-schema.js";
import { z } from "zod";

export const blogFormSchema = baseBlogSchema.extend({
  published: z.boolean().optional(),
  publishedAt: z
    .date({
      error: "publishedAt must be a valid date.",
    })
    .optional(),

  content: z.object({
    time: z.number(),
    blocks: z.array(
      z.object({
        id: z.string().optional(),
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

  tags: z
    .array(
      z.union([
        z.object({
          id: z.cuid(),
          name: z.string().optional(),
        }),
        z.object({
          name: z.string().min(1),
          id: z.string().optional(),
        }),
      ])
    )
    .optional(),
});

export type BlogFormDTO = z.infer<typeof blogFormSchema>;
