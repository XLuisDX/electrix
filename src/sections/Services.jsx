import { useState } from "react";
import { allservices } from "../export";
import { motion, AnimatePresence } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const openModal = (service) => setActiveService(service);
  const closeModal = () => setActiveService(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#0E1825] py-[100px] px-6 lg:px-0 overflow-hidden bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[#0E1825]/70 z-0" />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        viewport={{ once: true }}
        className="absolute -top-50 -left-20 w-[300px] h-[300px] bg-[#D2243D]/20 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-0 w-[200px] h-[200px] bg-white/10 blur-2xl rounded-full z-0"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        viewport={{ once: true }}
        className="relative z-10 lg:w-[80%] w-full max-w-[1200px] m-auto flex flex-col justify-center items-center gap-[30px]"
      >
        <motion.h2
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-[#D2243D] text-xl uppercase tracking-widest"
        >
          What We Offer
        </motion.h2>
        <motion.h1
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-white uppercase text-[36px] lg:text-[44px] font-extrabold text-center"
        >
          Premium Electrical & Security Services
        </motion.h1>
        <motion.p
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-gray-300 text-center max-w-2xl text-[16px] leading-relaxed"
        >
          Our tailored services are designed to bring safety, innovation, and
          modern control into every space.
        </motion.p>
        <motion.div
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="w-[100px] h-[4px] bg-[#D2243D] rounded"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
          className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden h-[300px] cursor-pointer transform transition duration-300 hover:scale-[1.03] shadow-xl"
              onClick={() => openModal(item)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${item.bg})` }}
              />
              <div className="absolute inset-0 bg-[#0E1825]/70 z-0" />
              <div className="relative z-10 h-full w-full flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.about}</p>
                <button className="mt-4 self-start bg-[#D2243D] text-white px-5 py-2 rounded-md text-sm hover:bg-white hover:text-[#0E1825] transition">
                  More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-center items-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#0E1825] text-white max-w-xl w-full rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="h-[180px] bg-cover bg-center"
                style={{ backgroundImage: `url(${activeService.bg})` }}
              />
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <h2 className="text-2xl font-bold text-[#D2243D] mb-4">
                  {activeService.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activeService.details}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-[#D2243D] px-3 py-1 rounded-full hover:bg-white hover:text-[#0E1825] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
