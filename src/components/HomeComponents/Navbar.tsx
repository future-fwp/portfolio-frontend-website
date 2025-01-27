import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="sticky top-0 bg-black z-[9999] w-full">
			<div className="flex  justify-between items-center max-w-[1200px] mx-auto px-4 py-4">
				<div className="logo">
					<h2>MyFuturePortfolio</h2>
				</div>
				<ul className="max-md:hidden md:flex justify-center items-center">
					<li className=" px-2 py-2">
						<a href="#home">Home</a>
					</li>
					<li className="px-2 py-2">
						<a href="#about">About</a>
					</li>
					<li className="px-2 py-2">
						<a href="#skill">Skill</a>
					</li>
					<li className="px-2 py-2">
						<a href="#project">Project</a>
					</li>
					<li className="px-2 py-2">
						<a href="#footer">Contact me</a>
					</li>
				</ul>
				<div
					id="flip"
					className="md:hidden"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
			</div>

			<ul
				id="panel"
				className={`md:hidden overflow-hidden transition-all duration-1000 ease-in-out ${
					open ? "max-h-64" : "max-h-0"
				}`}
			>
				<li className=" px-2 py-2">
					<a href="#home">Home</a>
				</li>
				<li className="px-2 py-2">
					<a href="#about">About</a>
				</li>
				<li className="px-2 py-2">
					<a href="#skill">Skill</a>
				</li>
				<li className="px-2 py-2">
					<a href="#project">Project</a>
				</li>
				<li className="px-2 py-2">
					<a href="#footer">Contact me</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
