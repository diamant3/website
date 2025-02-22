import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Projects() {
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const myProjectList = ["sysig", "psp-controller", "chip-walo", "lbp", "vchip8", "srtf-visualizer"];

  useEffect(() => {
    const url = "https://api.github.com/users/diamant3/repos?per_page=70";
    const fetchRepos = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRepos();
  }, []);

  const projectItems = projects.filter(item => myProjectList.includes(item.name.trim().toLowerCase()));
  const projectList = projectItems.map((project, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0 w-full bg-slate-100 p-6 rounded-lg shadow-md text-center mx-1" 
    >
      <img src={ "https://picsum.photos/200/300" } alt={project.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-3xl font-bold">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a href={project.html_url} className="text-blue-600 font-semibold">View Project</a>
    </motion.div>
  ))

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 460;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-[90%] max-w-lg mx-auto overflow-hidden p-6">
      <h2 className="text-4xl font-bold text-center text-white mb-4" id="#projects">Projects</h2>
      {projects.length > 0 ? (
        <>
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-400 p-2 rounded-full shadow-md z-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeft color="white" size={24} />
          </button>

          <div ref={carouselRef} className="flex overflow-x-scroll no-scrollbar scroll-smooth w-full rounded-lg px-2">
            {projectList}
          </div>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-400 p-2 rounded-full shadow-md z-10"
            onClick={() => scroll("right")}
          >
            <ChevronRight color="white" size={24} />
          </button>
        </>
      ) : (
        <p className="text-center text-red-600">No projects available</p>
      )}
    </div>
  );
}
