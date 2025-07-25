import { z } from "zod";

export const loginUserSchema = z.object({
  password: z
    .string({ error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password must not exceed 32 characters" }),
  username: z
    .string({ error: "Username is required" })
    .min(5, { message: "Username must be at least 5 characters" })
    .max(32, { message: "Username must not exceed 32 characters" }),
});

export const LoginResponseSchema = z.object({
  username: z.string(),
  id: z.string(),
  name: z.string(),
});

export const registerUserSchema = z
  .object({
    name: z.string({ error: "Name is required" }).min(1, {
      message: "Name cannot be empty",
    }),
    password: z
      .string({ error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(32, { message: "Password must not exceed 32 characters" }),
    passwordConfirm: z
      .string({ error: "Password confirmation is required" })
      .min(8, {
        message: "Password confirmation must be at least 8 characters",
      })
      .max(32, {
        message: "Password confirmation must not exceed 32 characters",
      }),
    username: z
      .string({ error: "Username is required" })
      .min(5, { message: "Username must be at least 5 characters" })
      .max(32, { message: "Username must not exceed 32 characters" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export type LoginUserDTO = z.infer<typeof loginUserSchema>;
export type LoginResponseDTO = z.infer<typeof LoginResponseSchema>;
export type RegisterUserDTO = z.infer<typeof registerUserSchema>;
