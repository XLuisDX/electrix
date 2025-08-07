
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  return (
    <div
      id="scroll-to-top"
      className="fixed bottom-20 right-6 bg-[#D2243D] hover:bg-white hover:text-[#0E1825] text-white p-3 rounded-full z-50 cursor-pointer shadow-lg transition"
    >
      <Link to="hero" spy={true} offset={-100} smooth={true}>
        <FaArrowUp className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
