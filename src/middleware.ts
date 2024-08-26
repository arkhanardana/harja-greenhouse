import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;

	if (!token) {
		console.log("No token found, redirecting to login.");
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}

	try {
		const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
		await jwtVerify(token, secret);
		console.log("Token is valid.");
		return NextResponse.next();
	} catch (error) {
		console.error("Token verification failed:", error);
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}
}

export const config = {
	matcher: ["/dashboard"],
};
