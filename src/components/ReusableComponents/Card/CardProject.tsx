import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface Props {
	titleProject: string;
	description: string;
	TechStack: string[];
	linkDeployedWebsite: string[];
	preview: string;
}

import { ExternalLink, Github } from "lucide-react";

const CardProject: React.FC<Props> = ({ titleProject, description, TechStack, linkDeployedWebsite, preview }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50, y: 50 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{ opacity: 0, x: -50, y: -50 }}
			transition={{ duration: 0.5 }}
			className="bg-black z-10 relative group" // group is applied here
		>
			{/* Image Container */}
			<div className="block overflow-hidden relative w-full h-[200px]">
				<div className="w-full h-full bg-black inset-0 absolute z-20 opacity-0 group-hover:opacity-60 group-hover:ease-in-out group-hover:duration-500"></div>
				<Link
					to={linkDeployedWebsite[0]}
					target="_blank"
					className="absolute cursor-pointer -translate-x-[1.25rem] hidden group-hover:block -z-10 group-hover:z-[100] inset-x-1/2 inset-y-1/2 -translate-y-1/2"
				>
					<ExternalLink className="size-7" />
				</Link>
				<Link
					to={linkDeployedWebsite[1]}
					target="_blank"
					className="absolute cursor-pointer translate-x-[1.25rem] hidden group-hover:block -z-10 group-hover:z-[100] inset-x-1/2 inset-y-1/2 -translate-y-1/2"
				>
					<Github className="size-7" />
				</Link>
				<img
					className="block w-full h-full object-cover duration-500 ease-in-out group-hover:scale-105" // group-hover applied here
					src={preview}
					alt={titleProject}
				/>
			</div>

			{/* Content Container */}
			<div className="p-4 flex flex-col justify-between">
				<div>
					<h3>{titleProject}</h3>
					<p className="mb-[1rem] !text-md line-clamp-3">{description}</p>
				</div>

				<ul className="flex gap-3 flex-wrap">
					{TechStack.map((tech, index) => (
						<li
							className="px-2 py-1 rounded-full border"
							key={JSON.stringify(tech) + index}
						>
							<span>{tech}</span>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default CardProject;
