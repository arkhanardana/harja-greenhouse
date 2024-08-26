import { z } from "zod";

export const registerSchema = z.object({
	username: z.string().min(3, "Username harus minimal 3 karakter"),
	email: z.string().email("Email tidak valid"),
	password: z.string().min(6, "Password harus minimal 6 karakter"),
});

export const loginSchema = z.object({
	email: z.string().email("Email tidak valid"),
	password: z.string().min(6, "Password harus minimal 6 karakter"),
});
