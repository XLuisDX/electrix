import { planning } from "../export";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Working = () => {
  return (
    <section
      id="working"
      className="relative w-full bg-[#0E1825] py-[100px] px-6 lg:px-0 overflow-hidden"
    >
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
          className="text-[#D2243D] text-xl uppercase tracking-widest"
        >
          Step by Step
        </motion.h2>
        <motion.h1
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-white uppercase text-[36px] lg:text-[44px] font-extrabold text-center"
        >
          How It Works
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
          className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white shadow-xl flex flex-col items-center gap-4 transition duration-300 hover:scale-[1.03]"
            >
              <div className="w-[80px] h-[80px] bg-[#D2243D] flex items-center justify-center rounded-full shadow-lg transition hover:bg-white hover:text-[#0E1825]">
                <item.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-center uppercase">
                {item.title}
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                {item.about}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Working;
