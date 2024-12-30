import React from "react";
import Navbar from "./HomeComponents/Navbar";
import Hero from "./HomeComponents/Hero";
import Achievement from "./HomeComponents/Achievement";
import TechStack from "./HomeComponents/TechStack";
import Project from "./HomeComponents/Project";
import EduExp from "./HomeComponents/EduExp";
import CTA from "./HomeComponents/CTA";
import Footer from "./HomeComponents/Footer";

const HomePages = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Achievement />
			<TechStack />
			<Project />
			<EduExp />
			<CTA />
			<Footer />
		</div>
	);
};

export default HomePages;
