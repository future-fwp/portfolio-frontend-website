import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Achievements } from "../utils/data";
import Meteorite from "../ReusableComponents/Geometry/Meteorite";

const AnimatedCounter = ({ value }: { value: any }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.span
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<motion.span
				initial={{ opacity: 0 }}
				animate={
					isInView
						? {
								opacity: 1,
								count: parseInt(value),
						  }
						: { count: 0 }
				}
				transition={{ duration: 2, delay: 0.2 }}
				onUpdate={({ count }) => {
					if (ref.current) {
						ref.current.textContent = Math.floor(count).toString();
					}
				}}
			/>
		</motion.span>
	);
};

const Achievement = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<div
			ref={sectionRef}
			className="grid md:grid-cols-2 lg:grid-cols-3 px-5 py-10 max-w-[1200px] mx-auto relative"
		>
			<Meteorite addlayout="right-0" />
			{Achievements.map((achievement, index) => (
				<motion.main
					key={index}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className="flex justify-between border items-center px-4 py-3"
				>
					<section>
						<h2 className="text-[#23F7DB]">
							<AnimatedCounter value={achievement.number} />
						</h2>
						<motion.h4
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
						>
							{achievement.acheivment}
						</motion.h4>
					</section>
					{achievement.icon && (
						<motion.div
							initial={{ scale: 0 }}
							animate={isInView ? { scale: 1 } : { scale: 0 }}
							transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
						>
							<achievement.icon />
						</motion.div>
					)}
				</motion.main>
			))}
		</div>
	);
};

export default Achievement;
