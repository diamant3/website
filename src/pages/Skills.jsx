import { motion } from "framer-motion";

const skillsData = [
    "Arduino",
    "C",
    "C++", 
    "HTML",
    "CSS",
    "JavaScript",
    "Python", 
    "Linux",
    "PHP",
    "GitHub",
    "Git",
    "..."
];

export function Skills() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6">
        Skills
        <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-800 text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
