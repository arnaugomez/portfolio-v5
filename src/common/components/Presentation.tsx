import { GithubIcon, GlobeIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { DynamicText } from "./DynamicText";

export function Presentation() {
	return (
		<div className="px-4 sm:px-8 overflow-hidden">
			<div className="max-w-screen-xl mx-auto">
				<div className="sm:flex space-y-8 sm:space-y-0 sm:space-x-4">
					<div className="sm:w-60 md:w-72 xl:w-80 flex-none min-w-0">
						<div className="flex sm:block space-x-4 sm:space-x-0 flex-none min-w-0">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="https://avatars.githubusercontent.com/u/66358043?v=4"
								alt=""
								className="w-20 h-20 mb-4 rounded-full object-contain flex-none"
							/>
							<div className="flex-1">
								<h2 className="text-2xl font-bold mb-2">Arnau Gómez</h2>
								<p className="text-slate-700 text-md">Software Engineer</p>
								<p className="text-slate-700 text-sm flex items-center">
									<GlobeIcon
										className="size-3 mr-1 text-slate-700 animate-spin"
										style={{ animationDuration: "10s !important" }}
									/>
									<span>Barcelona, Spain</span>
								</p>
							</div>
						</div>
						<div className="h-4"></div>
						<div className="flex space-x-4">
							<a
								className="flex-1 sm:flex-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-300 bg-background text-slate-500 hover:bg-slate-100 hover:text-slate-700 size-8"
								href="https://github.com/arnaugomez"
							>
								<span className="sr-only">Github</span>
								<GithubIcon className="size-4 " />
							</a>
							<a
								className="flex-1 sm:flex-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-300 bg-background text-slate-500 hover:bg-slate-100 hover:text-slate-700 size-8"
								href="https://www.linkedin.com/in/arnaugomez/"
							>
								<span className="sr-only">LinkedIn</span>
								<LinkedinIcon className="size-4 " />
							</a>
							<a
								className="flex-1 sm:flex-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-300 bg-background text-slate-500 hover:bg-slate-100 hover:text-slate-700 size-8"
								href="https://www.youtube.com/@arnau-gomez"
							>
								<span className="sr-only">YouTube</span>
								<YoutubeIcon className="size-4 " />
							</a>
						</div>
					</div>
					<DynamicText />
				</div>
			</div>
		</div>
	);
}
