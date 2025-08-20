import { baseProfileSchema } from "../shared/profile-schema.js";

import { z } from "zod";

export const profileRequestSchema = baseProfileSchema.extend({
  photoUrl: z.url("Invalid photo URL").optional(),
  photoId: z.string().optional(),
});

export type ProfileRequestDTO = z.infer<typeof profileRequestSchema>;
