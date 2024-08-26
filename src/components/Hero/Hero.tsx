export default function Hero() {
	return (
		<div className="min-h-screen">
			<div className="relative px-4 pt-6 lg:px-4">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z- transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#188753] to-[#145d40] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
				<div className="mx-auto max-w-3xl py-48 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Announcing the projects we have created.{" "}
							<a href="#" className="font-semibold text-[#188753]">
								<span aria-hidden="true" className="absolute inset-0" />
								Read more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Harja Smart Greenhouse
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Solusi inovatif untuk menghadapi pertanian modern dan ketahanan pangan.
						</p>
						<div className="mt-7 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-[#188753] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#145d40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#145d40]"
							>
								Get started
							</a>
							<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#145d40] to-[#188753] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
		</div>
	);
}
