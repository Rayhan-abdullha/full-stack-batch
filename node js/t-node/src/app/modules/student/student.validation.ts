import { z } from 'zod';

export const createStudentZodSchema = z.object({
  body: z.object({
    name: z
          .string().
          nonempty({ message: "Name is required" })
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(100, { message: "Name must be at most 100 characters long" }),

    email: z
        .string()
          .nonempty({ message: "Name is required" })
      .email({ message: "Invalid email address" })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: "Email format is invalid",
      }),

    password: z
        .string()
        .nonempty({ message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(50, { message: "Password must be at most 50 characters long" }),

    gender: z.enum(["male", "female"])
  }),
});

