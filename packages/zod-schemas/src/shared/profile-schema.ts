import z from "zod";

export const RoleEnum = z.enum(["ADMIN", "USER"]);

export const paramsProfileSchema = z.object({
  userId: z.uuid(),
});

export const baseProfileSchema = z
  .object({
    // Optional fields
    email: z.email("Invalid email format").optional(),
    phoneNumber: z
      .string()
      .regex(
        /^\+?[1-9]\d{7,14}$/,
        "Use international format (E.164), e.g., +628123456789"
      )
      .optional(),
    description: z
      .string()
      .max(1000, "Description must not exceed 1000 characters")
      .optional(),
    github: z.url("Invalid GitHub URL").optional(),
    linkedin: z.url("Invalid LinkedIn URL").optional(),
    website: z.url("Invalid website URL").optional(),
  })
  .strict();

// DTO type from Zod inference
export type ProfileDTO = z.infer<typeof baseProfileSchema>;
export type ParamsProfileDTO = z.infer<typeof paramsProfileSchema>;
