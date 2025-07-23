import z4 from "zod/v4";

export const loginUserSchema = z4.object({
  password: z4
    .string({ error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password must not exceed 32 characters" }),
  username: z4
    .string({ error: "Username is required" })
    .min(5, { message: "Username must be at least 5 characters" })
    .max(32, { message: "Username must not exceed 32 characters" }),
});

export const registerUserSchema = z4
  .object({
    name: z4.string({ error: "Name is required" }).min(1, {
      message: "Name cannot be empty",
    }),
    password: z4
      .string({ error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(32, { message: "Password must not exceed 32 characters" }),
    passwordConfirm: z4
      .string({ error: "Password confirmation is required" })
      .min(8, {
        message: "Password confirmation must be at least 8 characters",
      })
      .max(32, {
        message: "Password confirmation must not exceed 32 characters",
      }),
    username: z4
      .string({ error: "Username is required" })
      .min(5, { message: "Username must be at least 5 characters" })
      .max(32, { message: "Username must not exceed 32 characters" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export type LoginUserDTO = z4.infer<typeof loginUserSchema>;
export type RegisterUserDTO = z4.infer<typeof registerUserSchema>;
