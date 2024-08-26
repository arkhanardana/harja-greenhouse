"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const images = {
	logo: "/images/logo-green.png",
	alt: "Harja Logo",
};

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<header
			className={`sticky top-0 z-10 w-full transition duration-300 ease-in-out ${
				scrolled ? "bg-white backdrop-blur-lg bg-opacity-75 shadow-md" : "bg-transparent"
			}`}
		>
			<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Harja</span>
						<Image width={32} height={32} alt={images.alt} src={images.logo} className="h-8 w-auto" />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<a href="#" className="text-sm font-semibold leading-6 text-black hover:underline">
						Home
					</a>
					<a href="#about" className="text-sm font-semibold leading-6 text-black hover:underline">
						About
					</a>
					<a href="/dashboard" className="text-sm font-semibold leading-6 text-black hover:underline">
						Dashboard
					</a>
					<a href="#contact" className="text-sm font-semibold leading-6 text-black hover:underline">
						Contact
					</a>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="/auth/login"
						className="text-sm font-semibold leading-6 text-white px-[18px] rounded-md py-[7px] bg-[#188753] hover:bg-[#145d40]"
					>
						Log in
					</a>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 max-w-full shadow-lg rounded-xl right-0 z-10 w-full h-96 overflow-y-auto bg-slate-50 px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Harja</span>
							<Image width={32} height={32} alt={images.alt} src={images.logo} className="h-8 w-auto" />
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Home
								</a>
								<a
									href="#about"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									About
								</a>
								<a
									href="/dashboard"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Dashboard
								</a>
								<a
									href="#contact"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Contact
								</a>
							</div>
							<div className="py-6 flex">
								<a
									href="/auth/login"
									className="-mx-3 flex items-center bg-transparent p-5 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
