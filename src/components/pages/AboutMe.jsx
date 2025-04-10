import aboutimg from "../../assets/about1.jpg";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import {fadeIn} from "../../motions/variants";
import { Link } from "react-scroll";

function AboutMe() {
  return (
    <>
      <div id="about" className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center text-dark_text">
        <motion.div 
         variants={fadeIn("right", 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
        >
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <h2 className="text-6xl text-[#FACC15]  mb-10">
            About Me
          </h2>
          <p className="text-dark_text">
            I’m a passionate Web Developer with over 5 years of experience in
            building fast, secure, and dynamic web applications. My expertise
            lies in React, Node.js, and Tailwind CSS, allowing me to create
            modern, responsive, and scalable solutions.
            <br />
            I thrive on solving complex problems and turning ideas into seamless
            digital experiences. Whether it’s crafting sleek user interfaces,
            optimizing backend performance, or ensuring top-notch security, I’m
            always committed to delivering excellence.
            <br />
            Beyond coding, I enjoy staying up-to-date with the latest tech
            trends and pushing boundaries in web development.
            <br />
            Let’s build something amazing together!
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            className=" cursor-pointer border border-green-700 rounded-full py-2 px-6 text-lg flex items-center mt-10 
  hover:bg-yellow-500 hover:text-black 
  transition-all duration-500 self-center md:self-start text-green-700"
          >
            My Projects
          </Link>
        
        </div>
        </motion.div>
        
        <motion.div
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
        >
        <div className="h-[500px] w-[300px] relative">
            <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
                <img src={aboutimg} alt="about me img"  className="h-full w-full object-cover" />
            </div>
            <div className="h-[500px] w-[250px] bg-green-400 dark:bg-green-700 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10">
            </div>
        </div>
        </motion.div>
        
      </div>
    </>
  );
}
export default AboutMe;
