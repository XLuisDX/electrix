import { planning } from "../export";
import backgroundImage from "../assets/working.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Working = () => {
  return (
    <section
      id="working"
      className="relative w-full py-24 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm"
          >
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
              Step by Step
            </span>
          </motion.div>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight"
          >
            How It
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Works
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 p-8 rounded-3xl shadow-2xl hover:shadow-red-500/20 hover:border-red-500/30 transition-all duration-500"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-sm font-bold">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-500/30 transition-all duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center rounded-2xl shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="text-white text-3xl" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center text-white group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-center text-sm leading-relaxed">
                  {item.about}
                </p>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Working;