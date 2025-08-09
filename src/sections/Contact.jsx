import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", phone: "" });
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0E1825] py-[100px] px-6 lg:px-0 overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-40 left-80 w-[250px] h-[250px] bg-[#D2243D]/20 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-60 w-[100px] h-[100px] bg-white/10 blur-2xl rounded-full z-0"
      />

      <div className="relative z-10 lg:w-[80%] w-full max-w-[1200px] m-auto flex lg:flex-row flex-col justify-between items-start gap-[60px]">
        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="lg:w-[55%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h2
            variants={slideUpVariants}
            viewport={{ once: true }}
            className="text-[#D2243D] text-xl uppercase tracking-widest"
          >
            Contact Us
          </motion.h2>
          <motion.h1
            variants={slideUpVariants}
            viewport={{ once: true }}
            className="text-white uppercase text-[36px] lg:text-[44px] font-extrabold"
          >
            Reach Out With Confidence
          </motion.h1>
          <motion.div
            variants={slideUpVariants}
            viewport={{ once: true }}
            className="w-[100px] h-[4px] bg-[#D2243D] rounded"
          />
          <motion.p
            variants={slideUpVariants}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mt-4 leading-relaxed"
          >
            Whether you are planning a new project or need urgent assistance, we
            are here to help. Let’s talk about your electrical, security, or
            automation needs today.
          </motion.p>
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6 w-full">
            {/* Location */}
            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div>
                <h4 className="text-white font-semibold text-sm">Location</h4>
                <p className="text-gray-300 text-sm">Dickson, TN</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div>
                <h4 className="text-white font-semibold text-sm">Phone</h4>
                <p className="text-gray-300 text-sm">(615) 555-1234</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div>
                <h4 className="text-white font-semibold text-sm">Email</h4>
                <p className="text-gray-300 text-sm">info@lydelectrix.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.form
          action={`mailto:info@lydelectrix.com`}
          method="POST"
          encType="text/plain"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="lg:w-[45%] w-full flex flex-col gap-4 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            required
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#D2243D] text-white font-semibold py-3 rounded-md hover:bg-white hover:text-[#0E1825] transition"
          >
            Submit Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
