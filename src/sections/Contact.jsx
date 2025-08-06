import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0E1825] py-[100px] px-6 lg:px-0 overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#D2243D]/20 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-white/10 blur-2xl rounded-full z-0"
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
        </motion.div>

        {/* Right Side (Form) */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="lg:w-[45%] w-full flex flex-col gap-4 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
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
            Submit Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
