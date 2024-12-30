import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Timeline from "../ReusableComponents/Card/Timeline";
import { Experience, timeLine } from "../utils/data";
import Flag from "../../assets/material-symbols_flag.png";
import "./styled/EduExp.css";
import { EducationIcon, ExperienceIcon } from "../assets/IconExperience/ExpEdu";
import Meteorite from "../ReusableComponents/Geometry/Meteorite";

// Animated Timeline Item component
const AnimatedTimeline = ({ children, index, delay = 0 }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<motion.li
			ref={ref}
			initial={{ opacity: 0, x: -20 }}
			animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
			transition={{
				duration: 0.5,
				delay: delay + index * 0.2,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.li>
	);
};

// Animated Section Title
const AnimatedTitle = ({ children, delay = 0 }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.h2
			ref={ref}
			className="flex items-center"
			initial={{ opacity: 0, y: -20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
			transition={{
				duration: 0.5,
				delay: delay,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.h2>
	);
};

const EduExp = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true });

	return (
		<div
			className="relative"
			ref={containerRef}
		>
			<div className="max-w-[768px] flex flex-col max-md:items-center mx-auto lg:flex-row lg:justify-between lg:gap-5">
				{/* Education Section */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0 }}
				>
					<AnimatedTitle>
						Education{" "}
						<span className="edu-exp-icon">
							<EducationIcon />
						</span>
					</AnimatedTitle>
					<ul className={`list-image-[url()]`}>
						{timeLine.map((timeline, index) => (
							<AnimatedTimeline
								key={index}
								index={index}
							>
								<Timeline
									year={timeline.year}
									title={timeline.title}
									description={timeline.description}
									grade={timeline.Grade}
									role={undefined}
									experience={undefined}
								/>
							</AnimatedTimeline>
						))}
					</ul>
				</motion.div>

				{/* Experience Section */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 1.5 }} // 1.5 second delay for experience section
				>
					<AnimatedTitle delay={1}>
						Experience{" "}
						<span className="edu-exp-icon">
							<ExperienceIcon />
						</span>
					</AnimatedTitle>
					<ul>
						{Experience.map((timeline, index) => (
							<AnimatedTimeline
								key={index}
								index={index}
								delay={1}
							>
								<Timeline
									year={timeline.year}
									title={undefined}
									description={undefined}
									grade={undefined}
									role={timeline.role}
									experience={timeline.experience}
								/>
							</AnimatedTimeline>
						))}
					</ul>
				</motion.div>
			</div>
			<Meteorite addlayout="bottom-0 right-0" />
		</div>
	);
};

export default EduExp;
