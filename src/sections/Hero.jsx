import backgroundImage from "../assets/homeimg.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 500);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 px-6 lg:px-20 xl:px-32 pt-32 pb-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent z-0" />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full z-0"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="relative z-10 lg:w-[55%] w-full flex flex-col justify-center items-start gap-8 max-w-2xl"
      >
        <motion.div
          variants={slideUpVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
            Powering Tennessee
          </span>
        </motion.div>

        <motion.h1
          variants={slideUpVariants}
          className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          Modern and Reliable
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            Electrical Solutions
          </span>
        </motion.h1>

        <motion.p
          variants={slideUpVariants}
          className="text-slate-300 text-lg lg:text-xl leading-relaxed max-w-xl"
        >
          We specialize in electrical installations, smart surveillance, and pro
          audio systems for homes and businesses. Let us help you stay connected
          and secure.
        </motion.p>

        <motion.div
          variants={zoomInVariants}
          className="flex flex-wrap gap-4 mt-2"
        >
          <Link to="services" spy={true} offset={-100} smooth={true}>
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300">
              Explore Services
            </button>
          </Link>
          <Link to="contact" spy={true} offset={-100} smooth={true}>
            <button className="border-2 border-slate-600 hover:border-red-500 text-white hover:text-red-400 px-8 py-3.5 rounded-full font-semibold backdrop-blur-sm hover:bg-red-500/10 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        viewport={{ once: true }}
        className="relative z-10 w-full lg:w-[40%] max-w-md bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800/50"
      >
        <h3 className="text-white text-2xl font-bold mb-6">Get a Free Quote</h3>

        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-[60] backdrop-blur-sm border border-green-400/20"
          >
            <p className="font-medium">
              Message received! We will contact you shortly.
            </p>
          </motion.div>
        )}

        <form
          action={`mailto:info@lydelectrix.com`}
          method="POST"
          encType="text/plain"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent resize-none transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-300">
            <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Phone
            </h4>
            <p className="text-white font-semibold text-sm">(615) 428-9475</p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-300">
            <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
              Email
            </h4>
            <p className="text-white font-semibold text-sm">
              info@lydelectrix.com
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700/30">
          <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">
            Follow Us
          </h4>
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
      </motion.div>

      <motion.a
        href="https://wa.me/16154289475?text=Hello%20LyD%20Electrix!%20I'd%20like%20to%20request%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </section>
  );
};

export default Hero;