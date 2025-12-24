import { clients } from "../export";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-1/3 w-96 h-96 bg-red-500/15 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-1/3 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="flex flex-col justify-center items-center gap-6 mb-16"
        >
          <motion.div
            variants={slideUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"
          >
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
              Testimonials
            </span>
          </motion.div>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight"
          >
            What They Say
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              About Us
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {clients.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 p-8 rounded-3xl shadow-2xl hover:shadow-red-500/20 hover:border-red-500/30 transition-all duration-500"
            >
              <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <FaQuoteLeft className="text-red-400 text-xl" />
              </div>

              <div className="flex flex-col items-center text-center gap-6 mt-8">
                <p className="text-slate-300 text-sm leading-relaxed italic min-h-[120px] flex items-center">
                  {item.about}
                </p>

                <div className="flex gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/30 rounded-full blur-lg" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-red-500/50 shadow-lg"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <span className="text-slate-400 text-sm font-medium">
                    {item.post}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;