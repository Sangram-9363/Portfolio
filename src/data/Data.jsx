import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

export const personal = {
  name: "Sangram Nikam",
  mobNo: "+91 8956149363",
  email: "sangramnikam5566@gmail.com",
  address: "Pune, Maharashtra",
  linkedin: "https://www.linkedin.com/in/sangram-nikam-2143731b6/",
  github: "https://github.com/Sangram-9363",
  title: "Front-end  web developer",
  description:
    "I am a motivated individual with a strong passion for learning and self-growth.",
};

export const summary =
  "Hey there! I'm Sangram, a web developer in the making, passionate about building sleek and functional web applications. Right now, I'm deep into React, Redux, and Tailwind CSS, exploring how to create smooth user experiences and scalable apps.I enjoy solving problems, playing around with UI designs, and learning new technologies every day.Always excited to learn, experiment, and build cool stuff—let’s connect and create something awesome!";

export const skillsText =
  " I not only work with these technologies but excellent in using them with best practices to deliver high-quality results, I have been working with all these skills to build my portfolio projects";

export const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "Bootstrap",
    icon: RiBootstrapFill,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Node.JS",
    icon: IoLogoNodejs,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Express.JS",
    icon: SiExpress,
  },
];

export const projects = [
  {
    name: "Movies App",
    align: "right",
    image: "/Images/Movio.png",
    link: "https://movie-app-sooty-alpha.vercel.app/",
    tech: ["React js", "Redux toolkit", "Tailwind css"],
  },
  {
    name: "Personal Reminder web App",
    align: "left",
    image: "/Images/PersonalReminder.png",
    link: "https://personal-reminder-app.vercel.app/",
    tech: ["React js", "Tailwind css"],
  },
  {
    name: "Amazon Clone",
    align: "right",
    image: "/Images/Amazon.jpg",
    link: "https://amazone-clone-five-theta.vercel.app/",
    tech: ["HTML 5", "CSS 3"],
  },
  {
    name: "Netflix Clone",
    align: "left",
    image: "/Images/Netflix.jpg",
    tech: ["HTML 5", "CSS 3"],
    link: "https://netflix-clone-sooty-six-75.vercel.app/",
  },
];

export const projectDesc =
  "As a beginner in web development, I have worked on projects that showcase my skills in front-end development using React, Redux, and Tailwind CSS. I am eager to keep learning and building more projects to expand my expertise";

export const educations = [
  {
    id: 1,
    name: "Master of Computer Application(MCA)",
    university: "Savitribai Phule Pune University, Pune",
    grade: "8.5",
    duration: "2023 - 2025",
  },
  {
    id: 2,
    name: "Bachelor of Computer Science(BCS)",
    university: "Shivaji University, Kolhapur",
    grade: "8.2",
    duration: "2020 - 2023",
  },
];
