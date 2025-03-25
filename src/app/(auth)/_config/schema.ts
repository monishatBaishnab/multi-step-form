import { z } from "zod";

const stepSchema = [
  z.object({
    full_name: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email format"),
    mobile: z.string().min(10, "Phone number must be at least 10 digits"),
  }),
  z.object({
    street: z.string().min(1, "Street Address is required"),
    city: z.string().min(1, "City is required"),
    zip: z
      .string()
      .min(5, "Zip Code must be at least 5 digits")
      .regex(/^\d+$/, "Zip Code must contain only numbers"),
  }),
  z
    .object({
      username: z.string().min(4, "Username must be at least 4 characters"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }),
];

export default stepSchema;
