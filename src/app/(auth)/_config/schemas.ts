/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

// Step 1 schema
const step1Schema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Name must be under 100 characters"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  mobile: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid mobile number")
    .min(1, "Mobile is required"),
});

// Step 2 schema
const step2Schema = z.object({
  street_address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  zip_code: z
    .string()
    .min(1, "Zip code is required")
    .regex(/^\d{5}$/, "Invalid zip code"),
});

// Step 3 schema
const step3Schema = z
  .object({
    user_name: z
      .string()
      .min(1, "Username is required")
      .max(30, "Username must be under 30 characters"),
    password: z
      .string()
      .min(6, "Password must be at least 8 characters")
      .max(50, "Password must be under 50 characters"),
    confirm_password: z
      .string()
      .min(6, "Confirm Password must be at least 8 characters")
      .max(50, "Confirm Password must be under 50 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const validationSchemas: Record<number, any> = {
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
};
