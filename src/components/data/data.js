import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
// images
import coming_soon from "../../assets/coming_soon.jpg";
import project1Img from "../../assets/project1.png";
import project2Img from "../../assets/project2.png";
export const navlinks = [
    {
        id: 1,
        url: "about",
        text: "About Me",
    },
    {
        id: 2,
        url: "skills",
        text: "Skills",
    },
    {
        id: 3,
        url: "experience",
        text: "Experience",
    },
    {
        id: 4,
        url: "projects",
        text: "Projects",
    },
    {
        id: 5,
        url: "contact",
        text: "Contact",
    },
    ]
export const skills = [
    { id: 1, title: "HTML", icon: FaHtml5, color: "#E34F26" }, // Orange
    { id: 2, title: "CSS3", icon: FaCss3, color: "#1572B6" }, // Blue
    { id: 3, title: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" }, // Yellow
    { id: 4, title: "ReactJS", icon: FaReact, color: "#61DAFB" }, // Light Blue
    { id: 5, title: "NodeJS", icon: FaNodeJs, color: "#339933" }, // Green
    { id: 6, title: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" }, // Cyan
    { id: 7, title: "NextJS", icon: TbBrandNextjs,  color: "#868686" }, // Black
    { id: 8, title: "Bootstrap", icon: FaBootstrap,  color: "#7634FA" }, // Black
];
export const projects = [
    {
        id: 1,
        align: "left",
        title: "L'Winery",
        description: "A simple winery company built with html ,css, js and bootstrap",
        image: project1Img,
        link: "https://morato2000.github.io/uu/",
    },
    {
        id: 2,
        align: "right",
        title: "LandSnatchers",
        description: "Real Estate Rentals Website",
        image: project2Img,
        link: "https://land-snatchers.vercel.app",
    },
    {
        id: 3,
        align: "left",
        title: "Project 3",
        description: "Description of project 3",
        image: coming_soon,
        link: "#",
    },
    {
        id: 4,
        align: "right",
        title: "Project 4",
        description: "Description of project 4",
        image: coming_soon,
        link: "#",
    },
];
export const contacts = [
    {
        id: 1,
        icon: IoPhonePortraitOutline,
        text: "+2348072401483",
        link: "tel:+2348072401483",
    },
    {
        id: 2,
        icon: MdEmail,
        text: "sammyif@yahoo.com",
        link: "mailto:sammyif@yahoo.com",
    },
    {
        id: 3,
        icon: FaMapLocationDot,
        text: "Abuja, Nigeria",
    }
];
export const socials = [
    {
        id: 1,
        icon: IoLogoLinkedin,
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/samuel-uzoigwe-200a2b295",
    },
    {
        id: 2,
        icon: FaWhatsapp,
        text: "WhatsApp",
        link: "https://wa.me/2348072401483",
    },
    {
        id: 3,
        icon: FaYahoo,
        text: "Yahoo",
        link: "mailto:sammyif@yahoo.com",
    },
];