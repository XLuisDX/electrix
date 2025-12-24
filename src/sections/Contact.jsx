import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", phone: "" });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-1/4 w-96 h-96 bg-red-500/15 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"
      />

      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 right-6 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-[60] backdrop-blur-sm border border-green-400/20"
        >
          <p className="font-medium">
            Message sent! We will contact you shortly.
          </p>
        </motion.div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto flex lg:flex-row flex-col justify-between items-start gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-8"
        >
          <motion.div
            variants={slideUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"
          >
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Reach Out With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Confidence
            </span>
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-slate-300 text-lg leading-relaxed"
          >
            Whether you are planning a new project or need urgent assistance, we
            are here to help. Lets talk about your electrical, security, or
            automation needs today.
          </motion.p>

          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 gap-4 w-full mt-4"
          >
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                value: "Dickson, TN",
              },
              {
                icon: FaPhone,
                title: "Phone",
                value: "(615) 428-9475",
              },
              {
                icon: FaEnvelope,
                title: "Email",
                value: "info@lydelectrix.com",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={slideUpVariants}
                className="group flex items-center gap-4 bg-slate-800/30 backdrop-blur-sm p-5 rounded-2xl border border-slate-700/30 hover:border-red-500/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                  <item.icon className="text-red-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white font-semibold text-sm">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          action={`mailto:info@lydelectrix.com`}
          method="POST"
          encType="text/plain"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="lg:w-[45%] w-full flex flex-col gap-5 bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800/50"
        >
          <h3 className="text-white text-2xl font-bold mb-2">
            Send us a Message
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              required
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent resize-none transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Submit Message</span>
            <FaPaperPlane className="text-sm" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;