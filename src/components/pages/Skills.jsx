import { skills } from "../data/data";
import mySkillsImg from "../../assets/myskills1.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/variants";

function Skills() {
  return (
    <>
      <div id="skills" className="">
        <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col items-center mt-[100px]"
          >
            <h2 className="text-6xl text-[#FACC15] mb-10">
              My Skills
            </h2>
            <p className="text-dark_text text-lg text-center">
              I specialize in crafting modern, responsive, and high-performance
              web applications using the latest technologies.
              <br />
              With a strong foundation in front-end and back-end development, I
              build seamless digital experiences that prioritize speed,
              scalability, and user engagement.
            </p>
          </motion.div>

          <div
            id="MainSkills"
            className="hidden lg:flex bottom-[50px] absolute left-[50%] -translate-x-[50%]"
          >
            <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
              {skills.map((item, index) => (
                <div key={item.id}>
                  <div className="hover:translate-y-10 transition-all duration-500">
                    <motion.div
                      variants={fadeIn("up", `0.${index}`)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0 }}
                      className="flex flex-col items-center gap-2 relative"
                    >
                      <div className="bg-white text-dark_text h-[100px] w-[100px] flex items-center justify-center rounded-full hover:bg-gray-900  hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-green-400">
                        <item.icon color={item.color} />
                      </div>
                      <p className="text-dark_text font-bold">
                        {item.title}
                      </p>
                      <div className="w-[100px] h-[200px] bg-green-400 absolute top-[50px] -z-10"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="MobileSkills" className="block lg:hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 sm:gap-10 md:gap-12">
              {skills.map((item, index) => (
                <motion.div
                  variants={fadeIn("up", `0.${index}`)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                  div
                  key={item.id}
                  className="flex flex-col items-center"
                >
                  <item.icon color={item.color} className="text-6xl" />
                  <p className="text-dark_text font-bold mt-4 text-center text-2xl">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-y-2 border-green-400 relative min-h-full">
        {/* Gradient Overlay - Ensure it's visible above the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 opacity-50 z-10"></div>

        {/* Image - Reduced brightness to make overlay more visible */}
        <img
          src={mySkillsImg}
          alt="myskills.jpg"
          className="w-full h-20 object-cover opacity-70 brightness-75"
        />
      </div>
    </>
  );
}

export default Skills;
