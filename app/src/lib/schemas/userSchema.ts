import { z } from "zod"


export const userSchema = z.object({
    username: z.string()
        .min(5, "Your name is too short")
        .max(20, "Your name is too long"),
    phone: z.number()
        .min(5, "Invalid phone number"),
    email: z.string().email()
        .min(5, "Your email is too short")
        .max(30, "you email is too long"),
    password: z.string().
        min(8, "your password is too short")
        .max(20, "your password is too long")
});


export const loginSchema = z.object({
    email: z.string().email()
        .min(5, "Your email is too short")
        .max(30, "you email is too long"),
    password: z.string().
        min(8, "your password is too short")
        .max(20, "your password is too long")
});