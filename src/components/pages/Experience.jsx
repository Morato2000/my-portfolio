import expImg from "../../assets/exp1.png";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/variants";
function Experience() {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <div id="experience" className="max-w-[1200px] mx-auto px-4">
        <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col items-center mt-[100px]">
          <h2 className="text-6xl text-yellow-400 mb-10">Experience</h2>
        </motion.div>
        <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="flex flex-col gap-6 w-full lg:w-[600px]">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="font-bold font-special text-3xl text-center text-green-400 uppercase  ">
                Since
              </p>
              <p className="font-bold text-5xl  text-yellow-400">
                2019 <br className="hidden lg:block" />
                <span className="text-gray-600 lg:px-10">-</span>
                <br className="hidden lg:block" /> {currentDate}
              </p>
              <p className=" text-xl text-white text-center">
                With over 5 years of hands-on experience,
                <br /> I craft sleek, responsive web apps.
              </p>
            </div>
          </div>
          <div className="w-full max-w-md">
            <img
              src={expImg}
              alt="expImg"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full lg:w-[70%] border text-dark_text border-green-400 rounded-xl p-4 mt-8 lg:mt-4">
            <p className="text-lg text-center">
              I’ve built and maintained responsive websites and applications
              using technologies like{" "}
              <span className="font-bold text-green-400">
                HTML, CSS, JavaScript, React, Next.js, Node.js, and Tailwind CSS
              </span>
              .<br />
              <br /> My journey spans across both freelance and team-based
              environments, where I’ve consistently delivered high-quality,
              scalable solutions.
            </p>
          </div>
        </motion.div>
        <hr className="w-full h-1 mt-4 bg-green-400 hidden md:block" />
      </div>
    </>
  );
}

export default Experience;
