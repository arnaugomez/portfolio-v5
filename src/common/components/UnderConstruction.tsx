export function UnderConstruction() {
	return (
		<div className="px-4 sm:px-8 overflow-hidden min-h-screen flex items-center justify-center bg-gray-100">
			<div className="max-w-screen-xl mx-auto py-20">
				<h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6">
					Page Under Construction
				</h1>
				<p className="text-lg sm:text-2xl text-gray-600 mb-12">
					I am working hard to bring you an amazing experience. Stay tuned for
					updates!
				</p>
				<div className="space-y-4">
					<p className="text-xl text-gray-700">Coming Soon:</p>
					<ul className="list-disc list-inside text-left inline-block text-gray-700">
						<li>Projects</li>
						<li>Work experience</li>
						<li>Reviews</li>
						<li>Education</li>
						<li>Certifications</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="mt-12">
					<p className="text-lg sm:text-xl text-gray-700">
						If you want to contact me, send me a message on{" "}
						<a
							href="https://www.linkedin.com/in/arnaugomez/"
							className="text-blue-500 underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
