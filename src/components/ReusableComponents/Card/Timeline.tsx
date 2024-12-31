
import Flag from "../../../assets/material-symbols_flag.svg";
const Timeline = ({
	year,
	title,
	description,
	grade,
	role,
	experience,
}: {
	year: string;
	title?: string;
	description?: string;
	grade?: string;
	role?: string;
	experience?: string;
}) => {
	return (
		<li className="flex">
			<div className="flex flex-col items-center">
				<div className="w-4 h-4 rounded-full bg-[#23F7DB]"></div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="2"
					height="270"
					viewBox="0 0 2 270"
					fill="none"
				>
					<path
						d="M1 0V270"
						stroke="url(#paint0_linear_1_200)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1_200"
							x1="1.5"
							y1="0"
							x2="1.5"
							y2="270"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#23F7DB" />
							<stop
								offset="1"
								stop-color="white"
							/>
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="">
				<img
					alt={title}
					src={Flag}
					className=""
				/>
			</div>
			<div>
				<h3>{year}</h3>
				{title && <h5>{title}</h5>}
				{description && <p>{description}</p>}
				{grade && <span>GPA :{grade}</span>}
				{role && <h3>Role :{role}</h3>}
				{experience && <h5>{experience}</h5>}
			</div>
		</li>
	);
};

export default Timeline;
