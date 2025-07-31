import { baseProjectSchema } from "../shared/project-schema.js";

import z from "zod";

export const projectBackendSchema = baseProjectSchema.extend({
  thumbnail: z
    .object({
      url: z.url("Image URL must be a valid URL"),
      publicId: z.string("Image public id must be a valid string"),
    })
    .optional(),
});

export type CreateProjectBackendDTO = z.infer<typeof projectBackendSchema>;
export type EditProjectBackendDTO = z.infer<typeof projectBackendSchema>;
