import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";
import { FaBolt, FaShieldAlt, FaCogs } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 lg:py-24 py-16 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20"
        >
          <div className="lg:w-[55%] w-full flex flex-col justify-center items-start gap-8">
            <motion.div
              variants={slideUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"
            >
              <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
                Who We Are
              </span>
            </motion.div>

            <motion.h1
              variants={slideUpVariants}
              className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Experts in Power, Security &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Smart Systems
              </span>
            </motion.h1>

            <motion.p
              variants={slideUpVariants}
              className="text-slate-300 text-xl leading-relaxed"
            >
              More than just electricians — we deliver safety, innovation, and
              peace of mind for homes and businesses across Tennessee.
            </motion.p>

            <motion.div
              variants={slideUpVariants}
              className="grid grid-cols-1 gap-5 w-full mt-4"
            >
              {[
                {
                  icon: FaBolt,
                  title: "Reliable Power",
                  description:
                    "Safe and efficient electrical systems for every property.",
                },
                {
                  icon: FaShieldAlt,
                  title: "Security First",
                  description:
                    "Smart surveillance that protects what matters most.",
                },
                {
                  icon: FaCogs,
                  title: "Tech Integration",
                  description:
                    "Modern systems that work seamlessly with your lifestyle.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideUpVariants}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-red-500/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                    <item.icon className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={slideUpVariants}
            className="lg:w-[40%] w-full flex flex-col justify-center gap-6"
          >
            <div className="p-8 rounded-3xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
              <p className="text-slate-300 text-lg leading-relaxed">
                At L&D Electrix LLC, we specialize in custom electrical
                solutions, surveillance camera systems, and professional audio
                installations.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                Whether you are building new or upgrading existing
                infrastructure, our team brings expert craftsmanship, high-end
                technology, and full commitment to safety.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;