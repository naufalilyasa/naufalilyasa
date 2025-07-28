import z from "zod";

export const paramsProjectSchema = z.object({
  id: z.string().min(1, "Project ID is required."),
});

export const baseProjectSchema = z.object({
  projectName: z
    .string({
      error: "Project name is required",
    })
    .min(1, { error: "Project name cannot be empty" }),

  description: z
    .string({
      error: "Description is required",
    })
    .min(1, { error: "Description cannot be empty" }),

  startDate: z.date({ error: "Start date must be a valid date" }),

  endDate: z.date({ error: "End date must be a valid date" }).optional(),

  url: z.url({ error: "Project URL must be a valid URL" }).optional(),

  techStack: z
    .array(z.string().min(1, "Technology name cannot be empty"))
    .min(1, { error: "At least one tech stack is required" }),
});

export type ParamsProjectDTO = z.infer<typeof paramsProjectSchema>;
export type CreateBaseProjectDTO = z.infer<typeof baseProjectSchema>;
