import { baseProjectSchema } from "src/shared/project-schema.js";
import z from "zod";

const multerFileSchema = z.object({
  originalname: z.string(),
  mimetype: z.string().startsWith("image/", "Only image files are allowed"),
  size: z.number().max(5 * 1024 * 1024, "Max file size is 5MB"),
  buffer: z.instanceof(Buffer),
});

export const createProjectBackendSchema = baseProjectSchema.extend({
  projectImages: z.array(multerFileSchema).optional(),
});

export type CreateProjectBackendDTO = z.infer<
  typeof createProjectBackendSchema
>;
