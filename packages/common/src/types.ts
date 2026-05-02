import { z } from "zod";

export const CreateUserSchema = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string(),
    name: z.string()
})

export const SigninSchema = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string(),
})

export const CreateRoomSchema = z.object({
    name: z.string().min(2).max(20),
})
