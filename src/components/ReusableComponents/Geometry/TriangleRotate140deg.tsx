import React from "react";

const TriangleRotate140deg = ({ addlayout }: { addlayout: string }) => {
	return (
		<div className={`absolute ${addlayout}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1106"
				height="1123"
				viewBox="0 0 1106 1123"
				fill="none"
			>
				<g filter="url(#filter0_f_1_220)">
					<path
						d="M455.685 200.577L905.305 922.963L200.088 505.185L455.685 200.577Z"
						fill="#23F7DB"
						fill-opacity="0.43"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_1_220"
						x="0.0883789"
						y="0.576782"
						width="1105.22"
						height="1122.39"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood
							flood-opacity="0"
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
							result="effect1_foregroundBlur_1_220"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default TriangleRotate140deg;
