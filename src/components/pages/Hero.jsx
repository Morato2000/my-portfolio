import heroimg from "../../assets/hero2.png";
import { TbCircleDashed } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/variants";


function Hero() {
  return (
    <>
      <div id="hero" className="pt-40 pb-16 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center relative max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col gap-4 text-center md:text-left  justify-center md:justify-center h-full">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="text-xl lg:text-4xl uppercase text-green-400"
            >
              Front-End Developer
            </motion.h2>
            <motion.h1
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="text-4xl md:text-[2.8rem] lg:text-6xl font-bold font-special text-yellow-400"
            >
              Uzoigwe Samuel
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="text-lg mt-4 text-white"
            >
              Motivated and diligent Web Developer <br />
              with years of experience.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <a
                href="https://drive.google.com/file/d/1fWyuV4SXIOtLbNoDm0Gv8rEkkGzIqO3l/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded-full text-black font-bold bg-yellow-400 hover:bg-yellow-500 transition duration-300 cursor-pointer"
              >
                Download CV
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="h-full relative flex justify-center items-center mt-8"
          >
            <img
              src={heroimg}
              alt="profile pic"
              className="max-h-[350px] w-auto relative z-10"
            />
            <div className="absolute inset-0 flex justify-center items-center animate-pulse">
              <div>
                <TbCircleDashed className="h-[500px] w-[500px] text-yellow-400/60 blur-md animate-[spin_20s_linear_infinite]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
