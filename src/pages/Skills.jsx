import { motion } from "framer-motion";

const skillsData = [
    "Arduino",
    "C/C++", 
    "HTML/CSS", 
    "C++", 
    "Linux"
];

export function Skills() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white relative mb-8">
        Skills
      <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h1>
      <div className="flex flex-cols-2 sm:flex-cols-3 items-center justify-center gap-2">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-800 text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
      </>
  );
}
