import React from "react";
import { motion } from "framer-motion";
interface Props {
	titleProject: string;
	description: string;
	TechStack: string[];
	linkDeployedWebsite: string;
	preview: string;
}

const CardProject: React.FC<Props> = ({ titleProject, description, TechStack, linkDeployedWebsite, preview }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50, y: 50 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{ opacity: 0, x: -50, y: -50 }}
			transition={{ duration: 0.5 }}
			className="bg-black z-10 relative"
		>
			<div
				className="block overflow-hidden relative w-full h-[200px]" // Set a fixed size for the container
			>
				<img
					className="block w-full h-full object-cover duration-500 ease-in-out hover:scale-125" // Ensure the image covers the container
					src={preview}
					alt={titleProject}
				/>
			</div>

			<div className="p-4 flex flex-col justify-between">
				<div>
					<h3>{titleProject}</h3>
					<p className="mb-[1rem]">{description}</p>
				</div>

				<ul className="flex gap-3 flex-wrap">
					{TechStack.map((tech, index) => {
						return (
							<li
								className="px-2 py-1 rounded-full border"
								key={JSON.stringify(tech) + index}
							>
								<span>{tech}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</motion.div>
	);
};

export default CardProject;
