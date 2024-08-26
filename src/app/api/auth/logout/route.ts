import { NextResponse } from "next/server";

export async function POST() {
	const response = NextResponse.redirect("/auth/login");
	// Hapus token dengan mengatur maxAge ke -1
	response.cookies.set("token", "", { maxAge: -1 });
	return response;
}
