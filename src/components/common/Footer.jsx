import { navlinks } from "../data/data";
function Footer() {
    return (
        <>
        <div className="px-4">
        <div className="w-full h-[1px] bg-green-400 mt-24"></div>
        <div className="text-dark_text hidden md:flex justify-between mt-4 max-w-[1200px] mx-auto">
           <p className="text-3xl text-yellow-400">Uzoigwe Samuel</p>
           <ul className="flex gap-4 text-white lg:text-xl md:text-lg">
            {navlinks.map((link) => (
                <li key={link.id} className="">
                  <a
                    href={link.url}
                    className="hover:text-dark_accent  transition-all duration-500 cursor-pointer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul> 
        </div>
        <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        </>
    );
}

export default Footer;