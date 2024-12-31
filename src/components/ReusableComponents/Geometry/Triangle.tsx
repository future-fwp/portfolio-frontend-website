
const Triangle = ({ addlayout }: { addlayout: string }) => {
	return (
		<div className={`absolute ${addlayout}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="978"
				height="1037"
				viewBox="0 0 978 1037"
				fill="none"
			>
				<g filter="url(#filter0_f_1_5)">
					<path
						d="M201 836L615.534 201L776.5 351.5L201 836Z"
						fill="#23F7DB"
						fill-opacity="0.94"
					/>
					<path
						d="M201 836L615.534 201L776.5 351.5L201 836Z"
						stroke="#23F7DB"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_1_5"
						x="0.581299"
						y="0.228271"
						width="976.672"
						height="1036.15"
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
							result="effect1_foregroundBlur_1_5"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default Triangle;
