import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Projects() {
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const myProjectList = ["sysig", "psp-controller", "chip-walo", "lbp", "vchip8", "srtf-visualizer"];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/diamant3/repos?per_page=70");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError("Failed to load projects.");
      }
    };
    fetchRepos();
  }, []);

  const projectItems = projects.filter((item) => myProjectList.includes(item.name.trim().toLowerCase()));

  const projectList = projectItems.map((project, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0 w-72 md:w-96 bg-gray-800 p-6 rounded-xl shadow-lg text-center mx-2"
    >
      <img
        src={"https://picsum.photos/400/250"} 
        alt={project.name} 
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold text-white">{project.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description || "No description available."}</p>
      <a href={project.html_url} className="text-blue-400 font-semibold hover:underline">View Project</a>
    </motion.div>
  ));

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-6" id="projects">Projects</h2>
      
      {error && <p className="text-center text-red-500">{error}</p>}
      
      {projects.length > 0 ? (
        <div className="relative">
          {/* Left Scroll Button */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-400 p-3 rounded-full shadow-lg z-10 hover:bg-blue-500 transition"
            onClick={() => scroll("left")}
          >
            <ChevronLeft color="white" size={28} />
          </button>

          {/* Project List */}
          <div 
            ref={carouselRef} 
            className="flex overflow-x-scroll no-scrollbar scroll-smooth w-full gap-6 px-4 py-2 snap-x snap-mandatory"
          >
            {projectList}
          </div>
          
          {/* Right Scroll Button */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-400 p-3 rounded-full shadow-lg z-10 hover:bg-blue-500 transition"
            onClick={() => scroll("right")}
          >
            <ChevronRight color="white" size={28} />
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-300">No projects available</p>
      )}
    </div>
  );
}
