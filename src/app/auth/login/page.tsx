"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { loginSchema } from "@/lib/validation";

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const onSubmit = async (data: LoginFormInputs) => {
		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();
			console.log(result);
			if (response.ok) {
				// Simpan status login dan role di localStorage
				localStorage.setItem("isLoggedIn", "true");
				localStorage.setItem("userRole", result.role);

				// Redirect ke dashboard
				router.push(result.redirectTo || "/dashboard");
			} else {
				setError(result.message || "Login failed");
			}
		} catch (error) {
			setError("Something went wrong. Please try again.");
		}
	};

	return (
		<div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="flex justify-center lg:hidden">
						<Image
							src="/images/logo-green.png"
							alt="logo-harja"
							width={100}
							height={100}
							className="object-contain"
						/>
					</div>
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="text-balance text-muted-foreground">Masukkan email dan password untuk login</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" {...register("email")} />
							{errors.email && <p className="text-red-500">{errors.email.message}</p>}
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input id="password" type="password" {...register("password")} />
							{errors.password && <p className="text-red-500">{errors.password.message}</p>}
						</div>
						<Button type="submit" className="w-full bg-[#188753] hover:bg-[#145d40]">
							Login
						</Button>
						{error && <p className="text-red-500">{error}</p>}
					</form>
					<div className="mt-4 text-center text-sm">
						Belum punya akun?{" "}
						<Link href="/auth/register" className="underline">
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden justify-center items-center bg-muted lg:flex">
				<Image
					src="/images/logo-green.png"
					alt="logo-harja"
					width="1920"
					height="1080"
					loading="lazy"
					className="max-w-[320px] object-contain dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
