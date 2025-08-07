import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { Link } from "react-scroll";
import favicon from "../assets/favicon.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0E1825] text-white pt-[60px] pb-10 border-t border-white/10">
      <div className="max-w-[1200px] w-[90%] m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={favicon}
              alt="LyD Electrix"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold">
              LyD <span className="text-[#D2243D] italic">Electrix</span>
            </h2>
          </div>
          <p className="text-sm text-gray-300">
            Smart, secure, and powerful installations for homes and businesses
            across Tennessee.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#D2243D]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {["home", "about", "services", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    spy={true}
                    offset={-100}
                    smooth={true}
                    className="cursor-pointer text-gray-300 hover:text-white transition"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#D2243D]">
            Contact Info
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Dickson, TN
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> (615) 555-1234
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contact@lydelectrix.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#D2243D]">
            Follow Us
          </h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com/lydelectrix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-[#D2243D] text-white hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/lydelectrix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-white/10 hover:bg-[#D2243D] text-white hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          <FaCopyright className="text-[#D2243D]" />
          <p>{year} LyD Electrix LLC — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
