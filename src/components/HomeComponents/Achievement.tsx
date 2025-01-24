import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Achievements } from "../../libs/data";
import Meteorite from "../ReusableComponents/Geometry/Meteorite";

const AnimatedCounter = ({ value }: { value: number }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 20,
		stiffness: 60,
	});

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current) {
				ref.current.textContent = Math.floor(latest).toString();
			}
		});
	}, [springValue]);

	return (
		<motion.span
			ref={ref}
			initial={{ opacity: 0 }}
			animate={{ opacity: isInView ? 1 : 0 }}
			transition={{ duration: 0.2 }}
		>
			0
		</motion.span>
	);
};

const Achievement = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<div
			id="about"
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
