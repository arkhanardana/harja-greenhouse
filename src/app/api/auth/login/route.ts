import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/lib/validation";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { serialize } from "cookie";

export async function POST(request: Request) {
	try {
		const { email, password } = await request.json();

		// Validasi input dengan Zod
		const result = loginSchema.safeParse({ email, password });
		if (!result.success) {
			return NextResponse.json({ message: result.error.errors[0].message }, { status: 400 });
		}

		// Cari user di database
		const user = await prisma.user.findUnique({
			where: { email },
		});

		// Verifikasi user dan password
		if (user && (await bcrypt.compare(password, user.password))) {
			if (!process.env.JWT_SECRET) {
				throw new Error("JWT_SECRET is not defined in environment variables");
			}

			// Buat token JWT
			const token = await new SignJWT({ userId: user.id, email: user.email, role: user.role })
				.setProtectedHeader({ alg: "HS256" }) // Set header yang diperlukan
				.setExpirationTime("1m") // Batas waktu
				.sign(new TextEncoder().encode(process.env.JWT_SECRET));

			// Set token di cookies
			const serializedToken = serialize("token", token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
				maxAge: 60,
			});

			// NextResponse untuk menyetel cookie dan mengarahkan
			const response = NextResponse.json({
				message: "Login successful",
				role: user.role,
				redirectTo: "/dashboard", // Tambahkan info redirect
			});
			response.headers.append("Set-Cookie", serializedToken);
			return response;
		} else {
			return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
		}
	} catch (error) {
		console.error("Login Error:", error); // Log error untuk debugging
		return NextResponse.json({ message: "Internal server error" }, { status: 500 });
	}
}
