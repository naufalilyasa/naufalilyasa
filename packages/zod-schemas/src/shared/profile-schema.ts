import z from "zod";

export const RoleEnum = z.enum(["ADMIN", "USER"]);

export const paramsProfileSchema = z.object({
  userId: z.uuid(),
});

const trimStr = z.string().trim();

export const baseProfileSchema = z
  .object({
    name: trimStr.min(1, "Name is required"),
    username: trimStr
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must be at most 30 characters")
      .regex(/^[a-z0-9._-]+$/i, "Only letters, numbers, ., _, - are allowed"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(72, "Password must be at most 72 characters"),
    role: RoleEnum.default("USER").optional(),

    // Optional fields
    email: z.string().email("Invalid email format").optional(),
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
