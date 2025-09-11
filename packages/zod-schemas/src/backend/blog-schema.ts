import { baseBlogSchema } from "../shared/blog-schema.js";

import { z } from "zod";

export const blogBackendSchema = baseBlogSchema.extend({
  published: z
    .union([z.boolean(), z.enum(["true", "false"])])
    .transform((val) => val === true || val === "true")
    .optional(),

  publishedAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      error: "Invalid publishedAt time value",
    })
    .optional(),

  content: z.object({
    time: z
      .union([z.number(), z.string()])
      .transform((val) => (typeof val === "string" ? Number(val) : val))
      .refine((val) => !isNaN(val), {
        message: "Invalid content time value",
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
  }),

  thumbnail: z
    .object({
      url: z.url("Image URL must be a valid URL"),
      publicId: z.string("Image public id must be a valid string"),
    })
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
    .default([]),
});

export type RequestBlogBackendDTO = z.infer<typeof blogBackendSchema>;
