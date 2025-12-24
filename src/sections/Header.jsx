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
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 lg:px-12 px-6 py-5">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md group-hover:bg-red-500/30 transition-all duration-300" />
            <img
              src={favicon}
              alt="L&D Electrix"
              className="relative w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-2xl"
            />
          </div>
          <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
            L&D
            <span className="text-red-500 font-light italic"> Electrix</span>
          </span>
        </div>

        <nav className="lg:flex justify-center items-center gap-2 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-slate-300 text-sm font-medium cursor-pointer px-4 py-2.5 rounded-lg hover:bg-slate-800/50 hover:text-white transition-all duration-300"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            to="contact"
            spy={true}
            offset={-100}
            smooth={true}
          >
            Book Now
          </Link>
        </div>

        <button
          className="flex lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaXmark className="text-red-500 text-2xl" />
          ) : (
            <FaBars className="text-red-500 text-2xl" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 h-screen bg-slate-950 text-white flex flex-col justify-center items-center z-[9999] overflow-y-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-transparent" />

            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 p-3 rounded-full hover:bg-slate-800/50 transition-all duration-300"
              aria-label="Close menu"
            >
              <FaXmark className="text-3xl text-red-500" />
            </button>

            <nav className="relative flex flex-col gap-6 text-center">
              {navItems.map(({ link, path }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="text-2xl font-medium text-slate-300 hover:text-white cursor-pointer transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <Link
                to="contact"
                spy={true}
                offset={-100}
                smooth={true}
                onClick={closeMenu}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-10 py-3.5 rounded-full font-semibold text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;