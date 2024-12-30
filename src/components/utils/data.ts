import Award from "../assets/IconAchievement/Award";
import Research from "../assets/IconAchievement/Research";
import Developer from "../assets/IconAchievement/Developer";
import {
	NextIcon,
	AngularIcon,
	TailwindCssIcon,
	HtmlIcon,
	CssIcon,
	ReactIcon,
	PythonIcon,
	MongoDBIcon,
	JSIcon,
	Typescript,
} from "../assets/Icontechstack/TechStackIcon";
import MockProjectPicture from "../../assets/pink-7761356_1280.png";
import { GitHubIcon, LinkedIn, Phone } from "../assets/Footer/Contact";
export const Achievements = [
	{
		number: 42,
		acheivment: "project are completed ",
		icon: Award,
	},
	{
		number: 36,
		acheivment: "project are completed ",
		icon: Research,
	},
	{
		number: 36,
		acheivment: "project are completed ",
		icon: Developer,
	},
];

export const techStack = [
	{
		name: "Next.js",
		icon: NextIcon,
		type: "Frontend",
	},
	{
		name: "Typescript",
		icon: Typescript,
		type: ["Frontend", "Backend"],
	},
	{
		name: "JavaScript",
		icon: JSIcon,
		type: ["Frontend", "Backend"],
	},
	{
		name: "React",
		icon: ReactIcon,
		type: "Frontend",
	},
	{
		name: "Python",
		icon: PythonIcon,
		type: "Backend",
	},
	{
		name: "MongoDB",
		icon: MongoDBIcon,
		type: "Backend",
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
		name: "Angular",
		icon: AngularIcon,
		type: "Frontend",
	},
];

export const projects = [
	{
		project: "Project 1",
		description: "This is a project 1",
		techStack: ["Next.js", "React", "TailwindCSS"],
		link: "https://github.com",
		imagePreview: MockProjectPicture,
	},
	{
		project: "Project 2",
		description: "This is a project 2",
		techStack: ["Next.js", "React", "TailwindCSS"],
		link: "https://github.com",
		imagePreview: MockProjectPicture,
	},
	{
		project: "Project 3",
		description: "This is a project 2",
		techStack: ["html", "css", "Node.js", "MongoDB", "RestAPI"],
		link: "https://github.com",
		imagePreview: MockProjectPicture,
	},
	{
		project: "Project 4",
		description: "This is a project 2",
		techStack: ["RestAPI", "React", "TailwindCSS"],
		link: "https://github.com",
		imagePreview: MockProjectPicture,
	},
];

export const timeLine = [
	{
		year: "2022-now",
		title: " Chulalongkorn University",
		description: "B.Eng Mechanical engineering",
		Grade: "3.xx",
	},
	{
		year: "2019-2021",
		title: " Mahidol Wittayanusorn School",
		description: "Mathayom 6, Secondary School student",
		Grade: "3.xx",
	},
];

export const Experience = [
	{
		year: "2022-now",
		role: "Frontend developer",
		experience: "Attend to the project",
	},
	{
		year: "2019-2020",
		role: "(Future) Frontend developer",
		experience: "Taking course in web development",
	},
	{
		year: "2018-2020",
		role: "(Intern) Frontend developer",
		experience: "Internship at the company",
	},
	{
		year: "2017-2019",
		role: "(Future) Frontend developer",
		experience: "Taking course in web development",
	},
];

export const Contact = [
	{
		iconFooter: Phone,
		textFooter: "Phone: 081-1234567",
	},
	{
		iconFooter: GitHubIcon,
		textFooter: "Github: https://github.com/future-html",
	},
	{
		iconFooter: LinkedIn,
		textFooter: "Linkedin: https://www.linkedin.com/in/future-html/",
	},
];
