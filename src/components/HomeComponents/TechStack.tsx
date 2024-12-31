import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { techStack } from "../utils/data";
import "./styled/TechStack.css";


// Custom Hook
const useDivideStack = (stackType: string) => {
	const [typeStack, setTypeStack] = useState<Array<{ name: string; icon: string }>>([]);

	useEffect(() => {
		const filteredStack: any = techStack.filter((stack) => stack.type.includes(stackType));
		setTypeStack(filteredStack);
	}, [stackType]);

	return { typeStack };
};

// Component
const TechStack = () => {
	const { typeStack: frontEndStack } = useDivideStack("Frontend");
	const { typeStack: backEndStack } = useDivideStack("Backend");

	return (
		<motion.div
			className="relative"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }} // Adjust delay here
		>
			<div className="max-w-[1200px] mx-auto">
				<h2 className="w-full text-center">Skill/Stack</h2>
				{/* Frontend */}
				<div className="relative mt-5">
					<h3 className="w-full text-center pb-[0.5rem]">Frontend</h3>
					<div className="md:flex md:justify-center grid grid-cols-2">
						{frontEndStack.map((each, index) => (
							<motion.div
								className="flex techStack items-center justify-between flex-col gap-2 p-2"
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} // Stagger delay
							>
								<p>{each.name}</p>
								{each.icon}
							</motion.div>
						))}
					</div>
				</div>
				{/* Backend */}
				<div className="relative mt-5">
					<h3 className="text-center w-full pb-[0.5rem]">Backend</h3>
					<div className="md:flex md:justify-center grid grid-cols-2">
						{backEndStack.map((each, index) => (
							<motion.div
								className="flex techStack justify-between items-center flex-col gap-2 p-2"
								key={index}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} // Stagger delay
							>
								<p>{each.name}</p>
								{each.icon}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TechStack;
