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

  githubUrl: z.url({ error: "GitHub URL must be a valid URL." }).optional(),

  liveUrl: z.url({ error: "Live URL must be a valid URL." }).optional(),

  category: z.enum(
    ["FULLSTACK", "FRONTEND", "BACKEND", "MOBILE", "DESKTOP", "AIML", "DEVOPS"],
    {
      error: () => ({
        message:
          "Kategori tidak valid. Silakan pilih dari daftar yang tersedia.",
      }),
    }
  ),
});

export type ParamsProjectDTO = z.infer<typeof paramsProjectSchema>;
export type CreateBaseProjectDTO = z.infer<typeof baseProjectSchema>;
