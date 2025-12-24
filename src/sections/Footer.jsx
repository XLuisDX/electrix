import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCopyright,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";
import favicon from "../assets/favicon.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-8 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 mb-12">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md group-hover:bg-red-500/30 transition-all duration-300" />
                <img
                  src={favicon}
                  alt="LyD Electrix"
                  className="relative w-11 h-11 object-contain drop-shadow-2xl"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                L&D{" "}
                <span className="text-red-500 font-light italic">Electrix</span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Smart, secure, and powerful installations for homes and businesses
              across Tennessee.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["home", "about", "services", "projects", "contact"].map(
                (section) => (
                  <li key={section}>
                    <Link
                      to={section}
                      spy={true}
                      offset={-100}
                      smooth={true}
                      className="cursor-pointer text-slate-400 hover:text-red-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-red-500 group-hover:w-3 transition-all duration-300" />
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-start gap-3 group hover:text-slate-300 transition-colors duration-300">
                <FaMapMarkerAlt className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Dickson, TN</span>
              </li>
              <li className="flex items-start gap-3 group hover:text-slate-300 transition-colors duration-300">
                <FaPhoneAlt className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>(615) 428-9475</span>
              </li>
              <li className="flex items-start gap-3 group hover:text-slate-300 transition-colors duration-300">
                <FaEnvelope className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>info@lydelectrix.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1CEYFEm9T1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 flex justify-center items-center rounded-xl bg-slate-800/50 border border-slate-700/30 hover:bg-red-500 hover:border-red-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://instagram.com/lydelectrix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 flex justify-center items-center rounded-xl bg-slate-800/50 border border-slate-700/30 hover:bg-red-500 hover:border-red-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <FaCopyright className="text-red-500" />
              <p>{year} L&D Electrix LLC. All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-slate-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-slate-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
