import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const myProjectList = ["sysig", "psp-controller", "chip-walo", "lbp", "vchip8", "srtf-visualizer"];

export default function Projects() {
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://api.github.com/users/diamant3/repos?per_page=100");
        if (!res.ok) throw new Error("Failed to load projects.");
        const data = await res.json();
        setProjects(data.filter((proj) => myProjectList.includes(proj.name.toLowerCase())));
      } catch (err) {
        setError("Failed to load projects.");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-12">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8"
      >
        Project Showcase
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="block h-1 bg-blue-500 mx-auto mt-2 rounded-full"
        />
      </motion.h1>

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : projects.length > 0 ? (
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 px-4 py-2 w-full max-w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="flex-shrink-0 w-72 md:w-96 bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <img
                src={`https://picsum.photos/200/300?random=${index}`}
                alt={project.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description || "No description available."}</p>
              <a href={project.html_url} className="text-blue-400 font-semibold hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">No projects available</p>
      )}
    </div>
  );
}
