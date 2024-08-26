import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/lib/validation";

export async function POST(request: Request) {
	try {
		const { username, email, password } = await request.json();

		const result = registerSchema.safeParse({ username, email, password });
		if (!result.success) {
			return NextResponse.json({ message: result.error.errors[0].message }, { status: 400 });
		}

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});
		if (existingUser) {
			return NextResponse.json({ message: "Email already in use" }, { status: 409 });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Internal server error" }, { status: 500 });
	}
}
