"use client";

import { motion } from "framer-motion";
import "devicon/devicon.min.css";

const skillsData = [
  { name: "Arduino", icon: "devicon-arduino-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Android Studio", icon: "devicon-android-plain" },
  { name: "Java", icon: "devicon-java-plain" },
];

export function Skills() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6"
      >
        Skills
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="block h-1 bg-blue-500 mx-auto mt-2 rounded-full"
        />
      </motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            className="flex flex-col items-center bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg shadow-md text-center"
          >
            <i className={`${skill.icon} text-5xl text-blue-400 mb-2`}></i>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
