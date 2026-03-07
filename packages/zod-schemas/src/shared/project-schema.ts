import { z } from "zod";

export const paramsProjectSchema = z.object({
  projectId: z.string().min(1, "Project ID is required."),
});

export const baseProjectSchema = z.object({
  title: z
    .string()
    .min(1, { error: "Project title is required and cannot be empty." }),

  description: z.string().min(1, {
    error: "Project description is required and cannot be empty.",
  }),

  githubUrl: z.preprocess(
    (val) => {
      if (val === null || val === undefined || val === "") return null;
      if (typeof val === "string" && val.trim() === "") return null;
      return val;
    },
    z.url({ message: "GitHub URL must be a valid URL." }).nullable().optional()
  ),
  liveUrl: z.preprocess(
    (val) => {
      if (val === null || val === undefined || val === "") return null;
      if (typeof val === "string" && val.trim() === "") return null;
      return val;
    },
    z.url({ message: "Live URL must be a valid URL." }).nullable().optional()
  ),
  category: z.enum(
    ["FULLSTACK", "FRONTEND", "BACKEND", "MOBILE", "DESKTOP", "AIML", "DEVOPS"],
    {
      error: () => ({
        message:
          "Kategori tidak valid. Silakan pilih dari daftar yang tersedia.",
      }),
    }
  ),
  slug: z
    .string()
    .min(1, "Slug tidak boleh kosong")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug hanya boleh berisi huruf kecil, angka, dan tanda hubung."
    ),
});

export const paramsProjectSlugSchema = z.object({
  slug: z.string().min(1, "Slug is required."),
});

export type ParamsProjectDTO = z.infer<typeof paramsProjectSchema>;
export type CreateBaseProjectDTO = z.infer<typeof baseProjectSchema>;
