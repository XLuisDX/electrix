import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.jpg";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const projects = [
  { image: project1, title: "Security System Setup" },
  { image: project2, title: "Smart Lighting Project" },
  { image: project3, title: "Audio Distribution System" },
  { image: project4, title: "Smart Panel Upgrade" },
  { image: project5, title: "Warehouse Surveillance" },
  { image: project6, title: "Home Door Bell" },
  { image: project7, title: "Custom House Led Numbers" },
  { image: project8, title: "Outdoor Camera Grid" },
];

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0E1825] py-[100px] px-6 lg:px-0 overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-40 left-80 w-[150px] h-[150px] bg-[#D2243D]/20 blur-3xl rounded-full z-0"
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
          className="text-[#D2243D] text-xl uppercase tracking-widest"
        >
          Portfolio
        </motion.h2>
        <motion.h1
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="text-white uppercase text-[36px] lg:text-[44px] font-extrabold text-center"
        >
          Our Best Projects
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          viewport={{ once: true }}
          className="w-[100px] h-[4px] bg-[#D2243D] rounded"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomInVariants}
        className="relative z-10 w-full max-w-[1300px] m-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={zoomInVariants}
            className="relative group h-[250px] overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold text-center px-4">
                {project.title}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
