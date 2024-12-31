import { useEffect, useState, useRef } from "react";

const Meteorite = ({ addlayout }: { addlayout: string }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const meteoriteRef = useRef(null);

	useEffect(() => {
		const updatePosition = () => {
			if (!meteoriteRef.current) return;

			const scrollY = window.scrollY;
			const scrollPercent = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
			const newY = scrollPercent * 50;

			setPosition((prev) => ({
				...prev,
				y: newY,
			}));
		};

		const handleMouseMove = (e:any) => {
			if (!meteoriteRef.current) return;

			const { clientX } = e;
			const { innerWidth } = window;

			const mouseXPercent = clientX / innerWidth - 0.5;
			// const mouseYPercent = clientY / innerHeight - 0.5;
			const newX = mouseXPercent * 30;

			setPosition((prev) => ({
				...prev,
				x: newX,
			}));
		};

		window.addEventListener("scroll", updatePosition);
		window.addEventListener("mousemove", handleMouseMove);

		updatePosition();

		return () => {
			window.removeEventListener("scroll", updatePosition);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={meteoriteRef}
			className={`
        absolute ${addlayout} 
        animate-meteorite-float animate-meteorite-glow
        transition-transform duration-300 ease-out
        will-change-transform
      `}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 610 1037"
				className="w-full h-full"
				fill="none"
			>
				<g filter="url(#filter0_f_4_2)">
					<path
						d="M776.5 201L361.966 836L201 685.5L776.5 201Z"
						className="fill-[#23F7DB] fill-opacity-94 stroke-[#23F7DB]"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_4_2"
						x="0.246948"
						y="0.617676"
						width="976.672"
						height="1036.15"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood
							floodOpacity="0"
							result="BackgroundImageFix"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="100"
							result="effect1_foregroundBlur_4_2"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default Meteorite;
