import { clients } from "../export";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="relative w-full bg-[#0E1825] py-[100px] px-6 lg:px-0 overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#D2243D]/20 blur-3xl rounded-full z-0"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-white/10 blur-2xl rounded-full z-0"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="relative z-10 lg:w-[80%] w-full max-w-[1200px] m-auto flex flex-col justify-center items-center gap-[30px]"
      >
        <motion.h2
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-[#D2243D] text-xl uppercase tracking-widest text-center"
        >
          Testimonials
        </motion.h2>
        <motion.h1
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-white uppercase text-[36px] lg:text-[44px] font-extrabold text-center"
        >
          What They Say About Us
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="w-[100px] h-[4px] bg-[#D2243D] rounded"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10"
        >
          {clients.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-white shadow-xl hover:scale-[1.03] transition duration-300 flex flex-col items-center text-center gap-4"
            >
              <p className="text-sm text-gray-300 leading-relaxed italic">
                {item.about}
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D2243D] mt-4"
              />
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <span className="text-[#D2243D] text-sm font-medium">
                {item.post}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
