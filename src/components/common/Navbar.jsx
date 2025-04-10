import { SquareArrowOutDownRight } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navlinks } from "../data/data";
import { useState } from "react";
import { Link } from "react-scroll"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    
      <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-1/2 transform -translate-x-1/2 z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full text-dark_text bg-dark_secondary items-center rounded-full border border-green-400 px-6 py-3 shadow-md">
          <div>
            <h1 className="font-body font-bold text-xl hidden md:block">
              Uzoigwe Samuel
            </h1>
            <h1 className="font-special  font-extrabold text-4xl text-white sm:block md:hidden">
            U<span className="text-yellow-400">S</span>
            </h1>
          </div>
          <div className={`${isOpen ? "sm:block" : "sm:hidden"} lg:block`}>
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex gap-6 font-bold text-center lg:flex-row flex-col lg:relative space-y-12 lg:space-y-0 absolute  top-full left-0 w-full lg:text-md text-xl cursor-pointer  backdrop-blur-lg bg-dark_secondary py-4`}
            >
              {navlinks.map((link) => (
                <li key={link.id} className="group">
                  <Link 
                    to={link.url}
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                    className="hover:text-dark_accent  transition-all duration-500"
                  >
                    {link.text}
                  </Link>
                  <div className="mx-auto w-0 bg-green-400 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          className="px-4 py-2 cursor-pointer rounded-full text-xl font-bold  border-yellow-400 border flex items-center gap-1 bg-gradient-to-r from-green-400 to-yellow-600 hover:shadow-[0_0_20px_0_rgba(0,255,156,1)] hover:border-green-500  hover:scale-110 transition-all duration-500 ease-in-out hide-hire-button">
            Hire Me
            <div className="hidden md:block">
            <SquareArrowOutDownRight  /> 
            </div>
          </Link>
        </div>
        <div className="flex sm:flex lg:hidden p-4 items-center justify-center rounded-full border-[0.5px] border-green-400 ">
          <button
            className="text-2xl p-3 border border-yellow-400  rounded-full text-white"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu className=" text-white"/>
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
