import z from "zod";

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

  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    error: "Start date must be a valid ISO 8601 date string.",
  }),

  endDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      error: "End date must be a valid ISO 8601 date string, or left empty.",
    }),

  githubUrl: z.url({ error: "GitHub URL must be a valid URL." }).optional(),

  liveUrl: z.url({ error: "Live URL must be a valid URL." }).optional(),

  category: z.enum([
    "FULLSTACK",
    "FRONTEND",
    "BACKEND",
    "MOBILE",
    "DESKTOP",
    "AIML",
    "DEVOPS",
  ]),

  featured: z.boolean(),

  technologies: z
  .string()
  .refine(
    (val) => {
      try {
        const parsed = JSON.parse(val);
          return (
            Array.isArray(parsed) &&
            parsed.every((id) => typeof id === "string")
          );
        } catch {
          return false;
        }
      },
      {
        error:
        'Technologies must be a JSON stringified array of string IDs (e.g. ["react", "nextjs"]).',
      }
    )
    .transform((val) => JSON.parse(val) as string[]),

  projectDetail: z
    .string()
    .refine(
      (val) => {
        try {
          const parsed = JSON.parse(val);
          return typeof parsed === "object" && parsed !== null;
        } catch {
          return false;
        }
      },
      {
        error:
          "Project detail must be a valid JSON string representing Editor.js data.",
      }
    )
    .optional()
    .transform((val) => (val ? JSON.parse(val) : undefined)),
});

export type ParamsProjectDTO = z.infer<typeof paramsProjectSchema>;
export type CreateBaseProjectDTO = z.infer<typeof baseProjectSchema>;
