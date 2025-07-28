import { baseProjectSchema } from "../shared/project-schema.js";

import z from "zod";

export const projectImagesSchema = z
  .array(
    z.object({
      caption: z.string().optional(),
      url: z.url("Image URL must be a valid URL").min(1),
    })
  )
  .optional();

export const createProjectWithImages = baseProjectSchema.extend({
  projectImages: projectImagesSchema,
});

export type CreateProjectBackendDTO = z.infer<typeof createProjectWithImages>;
export type EditProjectBackendDTO = z.infer<typeof createProjectWithImages>;
export type ProjectImagesDTO = z.infer<typeof projectImagesSchema>;
