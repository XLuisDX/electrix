import { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import favicon from "../assets/favicon.png";
import { AnimatePresence, motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Projects", path: "projects" },
    { link: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isMenuOpen) {
      disableBodyScroll(body);
    } else {
      enableBodyScroll(body);
    }
    return () => enableBodyScroll(body);
  }, [isMenuOpen]);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E1825]/70 backdrop-blur-md shadow-md"
          : "bg-[#0E1825]/20"
      }`}
    >
      <div className="flex justify-between items-center gap-2 lg:px-16 px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={favicon}
            alt="L&D Electrix"
            className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
          />
          <span className="text-white text-xl md:text-2xl font-semibold tracking-wide sm:inline">
            L&D
            <span className="text-[#D2243D] italic"> Electrix</span>
          </span>
        </div>

        <ul className="lg:flex justify-center items-center gap-6 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-medium cursor-pointer px-4 py-2 rounded-lg hover:bg-[#D2243D] hover:text-white transition duration-300"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex">
          <Link
            className="bg-[#D2243D] hover:bg-white hover:text-[#0E1825] text-white px-6 py-2 rounded-full font-semibold transition duration-300"
            to="contact"
            spy={true}
            offset={-100}
            smooth={true}
          >
            Book Now
          </Link>
        </div>

        <div className="flex lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaXmark className="text-[#D2243D] text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-[#D2243D] text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 h-screen bg-[#0E1825] text-white flex flex-col justify-center items-center z-[9999] gap-12 overflow-y-auto px-6"
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-4xl text-[#D2243D] hover:text-white transition"
            >
              <FaXmark />
            </button>

            <ul className="flex flex-col gap-8 text-2xl uppercase font-semibold text-center">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="cursor-pointer hover:text-[#D2243D] transition"
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              ))}
            </ul>

            <Link
              to="contact"
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
              className="bg-[#D2243D] hover:bg-white hover:text-[#0E1825] text-white px-8 py-3 rounded-full font-bold text-lg transition"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
