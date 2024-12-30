import React from "react";
import CTAIcon from "../assets/CTA/CTAIcon";
import "./styled/CTA.css";
const CTA = () => {
	return (
		<div className="max-w-[1200px] mx-auto md:px-8 px-6 lg:px-10 lg:py-16 md:py-12 py-10">
			<div className="flex flex-col-reverse md:flex-row justify-between items-center">
				<div className="w-[60%] flex flex-col gap-3">
					<h1>Lorem ipsum dolor sit amet.</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ducimus tenetur veniam rem ratione
						consequuntur debitis blanditiis doloribus esse impedit.
					</p>
				</div>
				<div className="cta-image ">
					<CTAIcon />
				</div>
			</div>
		</div>
	);
};

export default CTA;
