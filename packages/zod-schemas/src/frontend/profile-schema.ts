import { baseProfileSchema } from "../shared/profile-schema.js";

import { z } from "zod";

export const profileFormSchema = baseProfileSchema.extend({
  photo: z
    .file({ message: "Must be a valid file" })
    .min(1)
    .max(5 * 1024 * 1024, "Max 5 MB size")
    .mime([
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
    ])
    .optional(),
});

export type ProfileFormDTO = z.infer<typeof profileFormSchema>;
