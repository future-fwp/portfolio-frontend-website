import CTAIcon from "../assets/CTA/CTAIcon";
import "./styled/CTA.css";
const CTA = () => {
	return (
		<div className="max-w-[1200px] mx-auto md:px-8 px-6 lg:px-10 lg:py-16 md:py-12 py-10">
			<div className="flex flex-col-reverse md:flex-row justify-between items-center">
				<div className="md:w-[60%] text-center md:text-start flex flex-col gap-3">
					<h1 className="text-4xl ">From solving mechanical problems to building web development</h1>
					<p className="text-2xl font-medium tracking-tight">
						I’m passionate about creating user-friendly solutions. Let’s connect and build something amazing
						together!
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
