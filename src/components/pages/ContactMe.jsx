import contactImg from "../../assets/contact1.png";
import { contacts, socials } from "../data/data";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/variants";
function ContactMe() {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
      };
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const handleMessageChange = (e) => {
        setMessage(e.target.value);
      };
      const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };

    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lw8jk5m", "template_6trw5hq", form.current, {
        publicKey: "7iSfveuO-yrYcAbJm",
      })
      .then(
        () => {
            setName("");
            setTitle("");
            setEmail("");
            setMessage("");
            setSuccess("Message sent successfully!");
            setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 text-dark_text"
      >
        <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-6xl text-yellow-400 mb-10 text-center">
          Contact Me
        </motion.h2>

        <div
          id="inner-layout"
          className="flex flex-col md:flex-row  justify-between gap-24 bg-dark_secondary rounded-2xl p-8"
        >
          <div>
            <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            
            id="get-in-touch" className="flex flex-col gap-8 w-full">
              <h2 className="text-3xl mb-4 text-yellow-400">
                Get In Touch
              </h2>
              <p>
                I'm always open to new opportunities, collaborations, or just a
                chat.
                <br />
                Feel free to reach out using the form below — let’s build
                something great together!
              </p>
            </motion.div>
            <p className="font-bold text-3xl text-green-400">{success}</p>
            <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            
            id="form" className="">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 mt-8"
              >
                <input
                  name="name"
                  className="h-12 rounded-lg bg-[#556680] px-2"
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                    onChange={handleNameChange}
                />
                <input
                  name="title"
                  className="h-12 rounded-lg bg-[#556680] px-2"
                  type="title"
                  placeholder="Subject"
                  required
                  value={title}
                    onChange={handleTitleChange}
                />
                <input
                  name="email"
                  className="h-12 rounded-lg bg-[#556680] px-2"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                    onChange={handleEmailChange}
                />
                <textarea
                  name="message"
                  className=" rounded-lg bg-[#556680] p-2"
                  type="text"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  value={message}
                    onChange={handleMessageChange}
                ></textarea>
                <button
                  className="w-full h-12 rounded-lg font-bold text-xl bg-yellow-400 hover:bg-yellow-500 transition-all duration-300"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            id="right"
            className="flex flex-col items-center justify-center gap-12"
          >
            <div>
              <img
                src={contactImg}
                alt="Email icon"
                className="max-w-[300px]"
              />
            </div>
            <div
              id="info"
              className="flex flex-col gap-4 items-start justify-start"
            >
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-center gap-2">
                  <contact.icon className="text-3xl text-yellow-400" />
                  <a href={contact.link} className="text-2xl hover:opacity-50 ">
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            <div id="socials" className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl h-12 w-12 border border-yellow-400 text-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
