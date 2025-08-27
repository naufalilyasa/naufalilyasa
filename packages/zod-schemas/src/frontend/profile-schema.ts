import { baseProfileSchema } from "../shared/profile-schema.js";

import { z } from "zod";

export const profileFormSchema = baseProfileSchema.extend({
  technologies: z
    .array(z.string().min(1, "Technology name cannot be empty"))
    .min(1, "Please select at least one technology")
    .max(100, "You can select up to 100 technologies only"),
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
