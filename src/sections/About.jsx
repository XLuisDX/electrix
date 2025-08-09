import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaBolt, FaShieldAlt, FaCogs } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0E1825] lg:py-[100px] py-[60px] px-6 lg:px-0 overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-40 w-[300px] h-[300px] bg-white/10 blur-2xl rounded-full z-0"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-30 w-[100px] h-[100px] bg-white/10 blur-2xl rounded-full z-0"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        viewport={{ once: true }}
        className="lg:w-[80%] w-full max-w-[1200px] m-auto flex flex-col lg:flex-row justify-between items-start gap-[60px]"
      >
        {/* Background Shape */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          viewport={{ once: true }}
          className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#D2243D]/10 blur-3xl rounded-full z-0"
        />

        {/* Left Column */}
        <div className="relative z-10 lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
          <motion.h2
            variants={slideUpVariants}
            viewport={{ once: true }}
            className="text-[#D2243D] text-xl font-semibold uppercase tracking-widest"
          >
            Who We Are
          </motion.h2>
          <motion.h1
            variants={slideUpVariants}
            viewport={{ once: true }}
            className="text-white uppercase text-[38px] lg:text-[46px] font-extrabold"
          >
            Experts in Power, Security & Smart Systems
          </motion.h1>
          <div className="w-[100px] h-[4px] bg-[#D2243D] rounded" />
          <p className="text-xl italic text-gray-200 mt-4 leading-snug">
            More than just electricians — we deliver safety, innovation, and
            peace of mind for homes and businesses across Tennessee.
          </p>

          {/* Core Values / Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div className="flex items-start gap-4">
              <FaBolt className="text-[#D2243D] text-2xl mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg">Reliable Power</h4>
                <p className="text-gray-300 text-sm leading-snug">
                  Safe and efficient electrical systems for every property.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaShieldAlt className="text-[#D2243D] text-2xl mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg">Security First</h4>
                <p className="text-gray-300 text-sm leading-snug">
                  Smart surveillance that protects what matters most.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaCogs className="text-[#D2243D] text-2xl mt-1" />
              <div>
                <h4 className="text-white font-bold text-lg">
                  Tech Integration
                </h4>
                <p className="text-gray-300 text-sm leading-snug">
                  Modern systems that work seamlessly with your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative z-10 lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <p className="text-white text-lg lg:text-justify text-center leading-relaxed">
            At L&D Electrix LLC, we specialize in custom electrical solutions,
            surveillance camera systems, and professional audio installations.
            Whether you are building new or upgrading existing infrastructure,
            our team brings expert craftsmanship, high-end technology, and full
            commitment to safety.
          </p>
          <motion.button
            variants={zoomInVariants}
            viewport={{ once: true }}
            className="bg-[#D2243D] hover:bg-white hover:text-[#0E1825] px-10 py-3 rounded-lg text-white font-semibold transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
