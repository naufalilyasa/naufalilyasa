import { baseProfileSchema } from "../shared/profile-schema.js";

import { z } from "zod";

export const profileRequestSchema = baseProfileSchema.extend({
  technologies: z
    .array(z.string().min(1, "Technology name cannot be empty"))
    .min(1, "Please select at least one technology")
    .max(100, "You can select up to 100 technologies only"),
  photoUrl: z.url("Invalid photo URL").optional(),
  photoId: z.string().optional(),
});

export type ProfileRequestDTO = z.infer<typeof profileRequestSchema>;
