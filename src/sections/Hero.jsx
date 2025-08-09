import backgroundImage from "../assets/homeimg.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col lg:flex-row justify-between items-center gap-10 px-6 lg:px-[150px] pt-[140px] pb-10 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#0E1825]/70 z-0" />

      {/* Decorative Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-28 h-28 bg-[#D2243D]/30 blur-2xl rounded-full z-0"
      />
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 blur-2xl rounded-full z-0"
      />

      {/* Left Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="relative z-10 lg:w-[55%] w-full flex flex-col justify-center items-start gap-6 text-left"
      >
        <motion.h2
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-[#D2243D] text-xl font-semibold tracking-widest uppercase"
        >
          Powering Tennessee
        </motion.h2>
        <motion.h1
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] lg:text-[54px] font-extrabold leading-tight"
        >
          Modern and Reliable Electrical Solutions
        </motion.h1>
        <div className="w-[100px] h-[4px] bg-[#D2243D] rounded" />
        <p className="text-white text-base lg:text-lg leading-relaxed">
          We specialize in electrical installations, smart surveillance, and pro
          audio systems for homes and businesses. Let us help you stay connected
          and secure.
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-[#D2243D] hover:bg-white hover:text-[#0E1825] px-6 py-3 rounded-md text-white font-semibold transition"
          >
            <Link to="services" spy={true} offset={-100} smooth={true}>
              Explore Services
            </Link>
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            viewport={{ once: true }}
            className="border-2 border-white hover:border-[#D2243D] hover:text-[#D2243D] px-6 py-3 rounded-md text-white font-semibold transition"
          >
            <Link to="contact" spy={true} offset={-100} smooth={true}>
              Contact Us
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        viewport={{ once: true }}
        className="relative z-10 w-full lg:w-[40%] bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_40px_rgba(255,255,255,0.1)] border border-white/10"
      >
        <h3 className="text-white text-2xl font-semibold mb-4">
          Get a Free Quote
        </h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#D2243D] text-white font-semibold py-3 rounded-md hover:bg-white hover:text-[#0E1825] transition"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6 w-full">
          {/* Phone */}
          <div className="flex items-start gap-2 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div>
              <h4 className="text-white font-semibold text-sm">Phone</h4>
              <p className="text-gray-300 text-sm">(615) 428-9475</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-2 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div>
              <h4 className="text-white font-semibold text-sm">Email</h4>
              <p className="text-gray-300 text-sm">info@lydelectrix.com</p>
            </div>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="mt-6">
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1CEYFEm9T1/"
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
      </motion.div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/16154289475?text=Hello%20LyD%20Electrix!%20I’d%20like%20to%20request%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Hero;
