import { z } from "zod";

export const paramsSlugBlogSchema = z.object({
  slug: z.string().min(1, "slug is required."),
});

export const paramsBlogIdBlogSchema = z.object({
  blogId: z.string().min(1, "slug is required."),
});

export const baseBlogSchema = z.object({
  title: z
    .string()
    .min(1, { error: "Blog title is required and cannot be empty." }),

  slug: z.string().min(1, {
    error: "Project description is required and cannot be empty.",
  }),

  excerpt: z
    .string()
    .min(1, {
      error: "Project description is required and cannot be empty.",
    })
    .max(400)
    .optional(),
  categorySlug: z.string().optional(),
});

export type RequestBaseBlogDTO = z.infer<typeof baseBlogSchema>;
