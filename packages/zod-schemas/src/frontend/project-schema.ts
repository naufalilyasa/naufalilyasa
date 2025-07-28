import { baseProjectSchema } from "../shared/project-schema.js";
import z4 from "zod/v4";

export const createProjectFormSchema = baseProjectSchema.extend({
  projectImages: z4
    .array(
      z4.object({
        file: z4
          .file({ message: "Must be a valid file" })
          .min(1)
          .max(5 * 1024 * 1024, "Max 5 MB size")
          .mime([
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
            "image/svg+xml",
          ]),

        caption: z4.string().optional(),
      })
    )
    .optional(),
});

export type CreateProjectFormDTO = z4.infer<typeof createProjectFormSchema>;
