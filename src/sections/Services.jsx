import { useState } from "react";
import { allservices } from "../export";
import { motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const openModal = (service) => setActiveService(service);
  const closeModal = () => setActiveService(null);

  return (
    <section
      id="services"
      className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 0.8, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-6 mb-16"
        >
          <motion.div
            variants={slideUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"
          >
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
              What We Offer
            </span>
          </motion.div>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight"
          >
            Premium Electrical &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Security Services
            </span>
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-slate-400 text-center max-w-2xl text-lg leading-relaxed"
          >
            Our tailored services are designed to bring safety, innovation, and
            modern control into every space.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
              onClick={() => openModal(item)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.bg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full w-full flex flex-col justify-end p-7">
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.about}
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <FaArrowRight className="text-xs" />
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaArrowRight className="text-red-400 text-sm" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex justify-center items-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-slate-900 text-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105"
                  style={{ backgroundImage: `url(${activeService.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-11 h-11 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-red-500 hover:border-red-500 text-white transition-all duration-300 flex items-center justify-center group"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-lg group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white">
                    {activeService.title}
                  </h2>
                </div>
              </div>

              <div className="p-8 max-h-[50vh] overflow-y-auto">
                <p className="text-slate-300 text-base leading-relaxed">
                  {activeService.details}
                </p>

                <button
                  onClick={closeModal}
                  className="mt-8 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Got it</span>
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;