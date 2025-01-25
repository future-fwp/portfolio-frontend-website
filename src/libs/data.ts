import Award from "../components/assets/IconAchievement/Award";
import Research from "../components/assets/IconAchievement/Research";
import Developer from "../components/assets/IconAchievement/Developer";
import {
	TailwindCssIcon,
	HtmlIcon,
	CssIcon,
	ReactIcon,
	JestIcon,
	VitestIcon,
	JSIcon,
	Typescript,
	NextJSIcon,
	RestAPIIcon,
} from "../components/assets/Icontechstack/TechStackIcon";

import { GitHubIcon, LinkedIn, Phone } from "../components/assets/Footer/Contact";
import PictureQuiz from "../assets/Screenshot 2568-01-24 at 18.57.50.png";
import TravelQuiz from "../assets/Screenshot 2568-01-24 at 19.20.52.png";
import LandingPage from "../assets/Screenshot 2568-01-24 at 19.39.01.png";
import YoutubePage from "../assets/Screenshot 2568-01-24 at 19.50.00.png";
import FoodRecipePage from "../assets/Screenshot 2568-01-24 at 20.03.48.png";
import NextjsBlog from "../assets/Screenshot 2568-01-24 at 20.14.35.png";

export const Achievements = [
	{
		number: 40,
		acheivment: "more than 40 repositories are completed",
		icon: Award,
	},
	{
		number: 6,
		acheivment: "6 outstanding projects ",
		icon: Research,
	},
	{
		number: 2,
		acheivment: "2 years of the experience",
		icon: Developer,
	},
];

export const techStack = [
	{
		name: "React",
		icon: ReactIcon,
		type: "Frontend",
	},
	{
		name: "Jest",
		icon: JestIcon,
		type: "Testing",
	},
	{
		name: "RestAPI",
		icon: RestAPIIcon,
		type: "Testing",
	},
	{
		name: "Vitest",
		icon: VitestIcon,
		type: "Testing",
	},

	{
		name: "HTML",
		icon: HtmlIcon,
		type: "Frontend",
	},
	{
		name: "CSS",
		icon: CssIcon,
		type: "Frontend",
	},
	{
		name: "TailwindCSS",
		icon: TailwindCssIcon,
		type: "Frontend",
	},
	{
		name: "Typescript",
		icon: Typescript,
		type: ["Frontend", "Testing"],
	},
	{
		name: "JavaScript",
		icon: JSIcon,
		type: ["Frontend", "Testing"],
	},
	{
		name: "Next.js",
		icon: NextJSIcon,
		type: "Frontend",
	},
];

export const projects = [
	{
		project: "Youtube clone",
		description: `A clone of YouTube's homepage with video playback functionality and a responsive design.`,
		techStack: ["RestAPI", "React", "TailwindCSS", "Vitest"],
		link: ["https://youtubeclonefuturefwp.netlify.app", "https://github.com/future-fwp/youtube-clone-project"],
		imagePreview: YoutubePage,
	},
	{
		project: "landing page",
		description: "A responsive landing page for a fictional product or service.",
		techStack: ["React", "TailwindCSS", "Jest"],
		link: ["https://landing-page-a8f4d6.netlify.app/", "https://github.com/future-fwp/landing-page.git"],
		imagePreview: LandingPage,
	},
	{
		project: "Food recipe",
		description: "A platform for sharing and discovering delicious recipes from around the world.",
		techStack: ["React", "Jest", "TailwindCSS"],
		link: ["https://food-recipe-b3dd6e.netlify.app/", "https://github.com/future-fwp/food-recipe.git"],
		imagePreview: FoodRecipePage,
	},
	{
		project: "Quiz App",
		description: "An interactive quiz application with multiple categories and scoring system.",
		techStack: ["RestAPI", "React", "TailwindCSS", "Jest"],
		link: ["https://react-quiz-app-06f3a7.netlify.app/", "https://github.com/future-fwp/quiz.git"],
		imagePreview: PictureQuiz,
	},
	{
		project: "Next.js Blog",
		description: "A responsive landing page for a fictional product or service.",
		techStack: ["Next.js", "React", "TailwindCSS", "RestAPI", "Jest"],
		link: ["https://nextjs-blog-cf9e11.netlify.app/", "https://github.com/future-fwp/nextjs-blog"],
		imagePreview: NextjsBlog,
	},
	{
		project: "Travel website",
		description: "A responsive landing page for a fictional product or service.",
		techStack: [ "React", "TailwindCSS",  "Jest"],
		link: [
			"https://travel-website-a3bfc0.netlify.app/",
			"https://github.com/future-fwp/travel-website?tab=readme-ov-file",
		],
		imagePreview: TravelQuiz,
	},
];

export const timeLine = [
	{
		year: "2022-now",
		title: " Chulalongkorn University",
		description: "B.Eng Mechanical engineering",
	},
	{
		year: "2019-2021",
		title: " Mahidol Wittayanusorn School",
		description: "Mathayom 6, Secondary School student",
		Grade: "3.92",
	},
];

export const Experience = [
	{
		year: "Dec 2024 to Apr 2025",
		role: "Frontend developer internship",
		experience: `Worked on university website projects, taking responsibility for frontend development in the "Odd and Ends" initiative (have experience to use Next.js  integration with LIFF provided by Line Corporation)`,
	},
	{
		year: "Jun 2023 to Aug 2023",
		role: "Frontend developer internship",
		experience: `Completed an internship in computer engineering, focusing on programming and software development with senior full stack developer in Wisesight company.
`,
	},
	{
		year: "2022-now",
		role: "Github project builder",
		experience:
			"Built and contributed to 6 standout projects on GitHub, showcasing my passion for coding, problem-solving, and continuous learning. Explore my portfolio to see my growth and creativity in action!",
	},
];

export const Contact = [
	{
		iconFooter: Phone,
		textFooter: 'Phone: <a href="tel:0971896841">0971896841</a>',
	},
	{
		iconFooter: GitHubIcon,
		textFooter:
			'Github: <a href="https://github.com/future-html" target="_blank" rel="noopener noreferrer">https://github.com/future-html</a>',
	},
	{
		iconFooter: LinkedIn,
		textFooter:
			'Linkedin: <a href="https://www.linkedin.com/in/witsanuporn-promsirinimit-71654a331/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/future-html/</a>',
	},
];
