// constants/index.ts

import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// All Skills with descriptions
export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
    description: "Markup language for webpages.",
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
    description: "Stylesheets for webpages.",
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
    description: "Programming language for interactivity.",
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
    description: "Utility-first CSS framework.",
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
    description: "Library for building UIs.",
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
    description: "JS superset with types.",
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
    description: "React framework with SSR.",
  },
  {
    skill_name: "Vite.js",
    image: "vite.png",
    width: 80,
    height: 80,
    description: "Next-generation frontend build tool for fast development & optimized bundling",
  },
  {
  skill_name: "Vue.js",
  image: "vuejs.png", // place this image in public/images/
  width: 80,
  height: 80,
  description: "JavaScript framework for building user interfaces & single-page applications",
},

  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
    description: "CSS framework for responsive UI.",
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
    description: "Javascript runtime for backend.",
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 80,
    height: 80,
    description: "NoSQL database JSON .",
  },
  {
  skill_name: "Java",
  image: "java.png", // place in public/images/
  width: 80,
  height: 80,
  description: "Object-oriented programming language used for web, desktop",
},
{
  skill_name: "Python",
  image: "python.png", // place in public/images/
  width: 80,
  height: 80,
  description: "High-level programming language and AI/ML development",
}
] as const;

// Social links with icons
export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/the_skrishna_sutar/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/krishna.sutar.98622/",
  },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shrikrishna-sutar-3b601524b/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Skrishna0703",
  },
  { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com" },
  { name: "YouTube", icon: FaYoutube, link: "https://youtube.com" },
] as const;

// Frontend Skills
export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
    description: "Core markup language for structuring web content",
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
    description: "Style sheet language for designing web pages",
  },
  // {
  //   skill_name: "JavaScript",
  //   image: "js.png",
  //   width: 65,
  //   height: 65,
  //   description: "Dynamic programming language for interactive web apps",
  // },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
    description: "Popular library for building dynamic user interfaces",
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
    description: "React framework for production-grade applications",
  },
] as const;

// Backend Skills
export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
    description: "JavaScript runtime for server-side development",
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 80,
    height: 80,
    description: "NoSQL database for modern applications",
  },
  {
    skill_name: "SQL",
    image: "mysql.png",
    width: 80,
    
    height: 80,
    description: "Language for managing relational databases",
  },
  {
  skill_name: "PHP",
  image: "php.png", // place in public/images/
  width: 80,
  height: 80,
  description: "Server-side scripting language for web development",
},
] as const;

// Fullstack Skills
// export const FULLSTACK_SKILL = [
//   {
//     skill_name: "MERN Stack",
//     image: "mern.png",
//     width: 100,
//     height: 100,
//     description: "MongoDB, Express, React, Node.js stack",
//   },
//   {
//     skill_name: "Next.js + Node.js",
//     image: "next-node.png",
//     width: 100,
//     height: 100,
//     description: "Full-stack development with Next.js and Node.js",
//   },
// ] as const;

// Other Skills
export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
    description: "Version control system for code management",
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 80,
    height: 80,
    description: "Platform for code hosting and collaboration",
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 70,
    height: 70,
    description: "Platform for building web and mobile apps",
  },
  {
    skill_name: "VS Code",
    image: "vs.png",
    width: 80,
    height: 80,
   description: "Popular code editor for development with rich extensions and features",
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
    description: "Platform for API development and testing",
  },
] as const;

// Projects
export const PROJECTS = [
  {
    title: "Weather Dashboard Application",
    image: "/projects/WeatherDashboard.png",
    langs: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    liveLink: "https://weatherapplicationas-neuai-project.netlify.app/",
    githubLink: "https://github.com/Skrishna0703/weather-dashboard",
  },
  {
    title: "Text to Image Generator (Pixelize)",
    image: "/projects/pixelize.png",
    langs: [
      "React.js",
      "CSS",
      "Node.js",
      "Vite.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    liveLink: "https://pixelize.onrender.com/",
    githubLink: "https://github.com/Skrishna0703/Pixelize",
  },
  {
    title: "ChatGPT Clone",
    image: "/projects/chatgptclone.png",
    langs: ["React.js", "CSS", "JavaScript", "API"],
    liveLink: "https://chatgptclonereact.netlify.app/",
    githubLink: "https://github.com/Skrishna0703/ChatGPT-Clone",
  },
  {
    title: "GenAI-Powered Financial Assistant",
    image: "/projects/FA.png",
    langs: ["React.js", "CSS", "API", "Node.js", "Vite.js"],
    liveLink: "https://financial-assistant07.netlify.app/",
    githubLink: "https://github.com/Skrishna0703/Financial-Assistant",
  },
  {
    title: "Tomato-Food Delivery App",
    image: "/projects/FDA.png",
    langs: [
      "ReactJS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Web3Forms",
      "Netlify",
      "Render",
    ],
    liveLink: "https://tomato-fda.netlify.app/",
    githubLink: "https://github.com/Skrishna0703/Food-Del",
  },
  {
    title: "AI Mental Wellness Companion",
    image: "/projects/mindful.png",
    langs: ["React.js", "Tailwind CSS", "Framer Motion", "Netlify"],
    liveLink: "https://ai-mental-wellness-companion.netlify.app/",
    githubLink: "https://github.com/Skrishna0703/AI-Mental-Wellness-Companion",
  },
  {
    title: "Career Aligner – GenAI-Powered Job Application Assistant",
    image: "/projects/LJA.png",
    langs: [
      "Streamlit",
      "Google Gemini API",
      "Python",
      "PyPDF2",
      "docx",
      "reportlab",
      "Lottie",
      "HTML/CSS/JS",
    ],
    liveLink: "https://career-aligner.streamlit.app/",
    githubLink: "https://github.com/Skrishna0703/Career-Aligner",
  },
  {
    title: "TechKart – eCommerce Site",
    image: "/projects/Techkart.png",
    langs: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Razorpay",
      "React.js",
      "MongoDB",
      "Clerk",
      "Render",
      "Vercel",
    ],
    liveLink: "https://tech-kart-kappa.vercel.app/",
    githubLink: "https://github.com/Skrishna0703/Career-Aligner",
  },
] as const;

// Footer data
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Skrishna0703",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shrikrishna-sutar-3b601524b/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:shrikrishnasutar0703@gmail.com",
      },
    ],
  },
] as const;

// Navigation links
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;
