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
import { FaExpand } from "react-icons/fa";

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
      className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-1/4 w-96 h-96 bg-red-500/15 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 0.9, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-1/4 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"
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
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight"
          >
            Our Best
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Projects
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              whileHover={{ y: -8 }}
              className="group relative h-72 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-14 h-14 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
                  <FaExpand className="text-red-400 text-xl" />
                </div>
                <h3 className="text-white text-lg font-bold text-center leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-red-400 text-xs font-semibold">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;