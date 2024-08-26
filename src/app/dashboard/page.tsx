"use client";

import Image from "next/image";
import Link from "next/link";
import { Wrench, Package, Package2, PanelLeft, Search, Settings, Users2, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { FaTemperatureLow } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { BsMoisture } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const router = useRouter();
	const logo = {
		url: "/images/logo-green.png",
		alt: "Harja Logo",
		width: 50,
		height: 50,
	};

	const handleLogout = async () => {
		await fetch("/api/auth/logout", { method: "POST" });
		router.push("/auth/login"); // Redirect ke halaman login
	};

	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
				<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
					<Link
						href="#"
						className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[#188753] text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
					>
						<Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
						<span className="sr-only">Harja</span>
					</Link>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<House className="h-5 w-5" />
									<span className="sr-only">Dashboard</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Dashboard</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Wrench className="h-5 w-5" />
									<span className="sr-only">Tools</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Tools</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Package className="h-5 w-5" />
									<span className="sr-only">Products</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Products</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Users2 className="h-5 w-5" />
									<span className="sr-only">Customers</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Customers</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
				<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
								>
									<Settings className="h-5 w-5" />
									<span className="sr-only">Settings</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Settings</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>

			{/* Mobile Menu */}
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button size="icon" variant="outline" className="sm:hidden">
								<PanelLeft className="h-5 w-5" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="sm:max-w-xs">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="#"
									className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#188753] text-lg font-semibold text-primary-foreground md:text-base"
								>
									<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
									<span className="sr-only">Harja</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-accent-foreground hover:text-foreground"
								>
									<House className="h-5 w-5" />
									Dashboard
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-accent-foreground hover:text-foreground"
								>
									<Wrench className="h-5 w-5" />
									Tools
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-accent-foreground hover:text-foreground"
								>
									<Users2 className="h-5 w-5" />
									Customers
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-accent-foreground hover:text-foreground"
								>
									<Settings className="h-5 w-5" />
									Settings
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<div className="relative ml-auto flex-1 md:grow-0">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search..."
							className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
						/>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon" className="overflow-hidden rounded-full">
								<Image src={logo.url} alt={logo.alt} width={logo.width} height={logo.height} />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>

				{/* Cards */}
				<hr className="border" />
				<h1 className="flex text-3xl font-bold mx-7 pt-6">Dashboard</h1>
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
					<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
							<Card x-chunk="dashboard-05-chunk-1">
								<CardHeader className="pb-2">
									<CardDescription className="text-lg">Humidity</CardDescription>
									<CardTitle className="text-4xl font-medium">30%</CardTitle>
								</CardHeader>
								<CardContent>
									<BsMoisture className="ml-auto" size={35} />
								</CardContent>
								<CardFooter>
									<Progress className="bg-[#188753]" value={0} aria-label="25% increase" />
								</CardFooter>
							</Card>
							<Card x-chunk="dashboard-05-chunk-1">
								<CardHeader className="pb-2">
									<CardDescription className="text-lg">Temperature</CardDescription>
									<CardTitle className="text-4xl font-medium">30°C</CardTitle>
								</CardHeader>
								<CardContent className="flex items-center">
									<FaTemperatureLow className="ml-auto" size={35} />
								</CardContent>
								<CardFooter>
									<Progress className="bg-[#188753]" value={0} aria-label="25% increase" />
								</CardFooter>
							</Card>
							<Card x-chunk="dashboard-05-chunk-1">
								<CardHeader className="pb-2">
									<CardDescription className="text-lg">Soil Mosture</CardDescription>
									<CardTitle className="text-4xl font-medium">30°C</CardTitle>
								</CardHeader>
								<CardContent className="flex items-center">
									<FaWater className="ml-auto" size={35} />
								</CardContent>
								<CardFooter>
									<Progress className="bg-[#188753]" value={0} aria-label="25% increase" />
								</CardFooter>
							</Card>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
