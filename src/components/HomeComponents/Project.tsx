import { useState, useRef, useEffect } from "react";
import CardAchievement from "../ReusableComponents/Card/CardAchievement";
import { projects, techStack } from "../utils/data";
import CardProject from "../ReusableComponents/Card/CardProject";
import FilterLanguagesButton from "../ReusableComponents/Card/FilterLanguages";
import "./styled/FilterCardSvgIcon.css";
import TriangleRotate140deg from "../ReusableComponents/Geometry/TriangleRotate140deg";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Project = () => {
	const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
	const [filteredProjects, setFilteredProjects] = useState(projects);

	const handleTechStackSelection = (stack: string) => {
		const updatedStack = selectedTechStack.includes(stack)
			? selectedTechStack.filter((item) => item !== stack)
			: [...selectedTechStack, stack];

		setSelectedTechStack(updatedStack);

		if (updatedStack.length === 0) {
			setFilteredProjects(projects);
		} else {
			const updatedProjects = projects.filter((project) =>
				updatedStack.every((stack) => project.techStack.includes(stack))
			);
			setFilteredProjects(updatedProjects);
		}
	};

	// Use a stable key based on a unique project ID if you have one.
	// If you don't have a unique ID, you can use the project title, BUT be very careful that project titles are actually unique.

	return (
		<main className="max-w-[1200px] px-6 py-10 mx-auto relative">
			<TriangleRotate140deg addlayout="" />
			<section className="text-center mb-5 w-full">
				<div className="pb-[1rem]">
					<h2 className="pb-[1rem]">Project title</h2>
					<p className="">Explore my stunning project</p>
				</div>

				<ul className="md:flex md:gap-2 grid gap-3 grid-cols-2 sm:grid-cols-4 md:justify-center">
					{techStack.map((tech) => (
						<FilterLanguagesButton
							key={tech.name}
							languages={tech.name}
							icon={tech.icon}
							onClick={() => handleTechStackSelection(tech.name)}
							isSelected={selectedTechStack.includes(tech.name)}
						/>
					))}
				</ul>
			</section>
			<ul className="grid min-[600px]:grid-cols-2 gap-6 lg:grid-cols-3">
				<AnimatePresence>
					{filteredProjects.map((project, index) => {
						// Removed index here

						// Assuming project.project is unique. If not, use a unique ID

						return (
							<motion.li
								key={JSON.stringify(project)} // CRUCIAL CHANGE: Using a stable key
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								layout
							>
								<CardProject
									titleProject={project.project}
									description={project.description}
									TechStack={project.techStack}
									linkDeployedWebsite={project.link}
									preview={project.imagePreview}
								/>
							</motion.li>
						);
					})}
				</AnimatePresence>
			</ul>
		</main>
	);
};

export default Project;
