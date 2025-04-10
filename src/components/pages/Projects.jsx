import { projects } from "../data/data";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/variants";

function Projects() {
  return (
    <>
      <div id="projects" className="max-w-[1200px] mx-auto px-4 py-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="flex flex-col items-center mt-[100px]"
        >
          <h2 className="text-6xl  text-yellow-400 mb-10">
            Projects
          </h2>
          <p className="text-lg text-center text-white">
            A showcase of the projects I've built, blending creativity with
            technical skills using modern web technologies.
          </p>
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
          {projects.map((project, index) => (
            <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
              key={project.id}
              className={`flex flex-col-reverse w-full items-center gap-8 justify-end text-2xl md:text-3xl text-yellow-400 ${
                project.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                variants={fadeIn("right", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <h2
                  className={`font-bold text-center ${
                    project.align === "left" ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`text-lg text-center text-dark_text ${
                    project.align === "left" ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className={`text-green-400 text-lg flex gap-2 items-center  hover:opacity-80 transition-all duration-500 cursor-pointer justify-center ${
                    project.align === "left"
                      ? "md:justify-end"
                      : "md:justify-self-start"
                  }`}
                >
                  View
                  <FaPersonWalkingArrowRight />
                </a>
              </motion.div>

              <div className="max-h-[220px] max-w-[440px] rounded-xl overflow-hidden hover:scale-110 transition-all duration-500 relative border border-green-400 shadow-lg shadow-green-400/50">
                <div className="w-full h-full absolute top-0 left-0 bg-green-400/40 hover:opacity-0 transition-all duration-500  hidden md:block"></div>
                <img
                  src={project.image}
                  alt="Project images"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
