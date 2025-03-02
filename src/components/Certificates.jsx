import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { id: 1, title: "LFW111: Introduction to Node.js", link: "https://www.credly.com/badges/5ea95276-da21-4f4e-abac-19c547c2be8d/public_url" },
  { id: 2, title: "Postman API Fundamentals Student Expert", link: "https://badgr.com/public/assertions/WKz2boX4Ql-WFXUdNicsDw" },
  { id: 3, title: "Sample Title", link: "#" },
];

export function Certificates() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-white p-4">
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-center text-white"
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Certificates
      </motion.h1>
      <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="block h-1 bg-blue-500 mx-auto mt-2 rounded-full mb-8"
        />
      <motion.ul 
        className="list-none text-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        {certificates.map((cert) => (
          <motion.li 
            key={cert.id} 
            className="mb-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-bold">{cert.title}</p>
            <motion.a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              View Certificate
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
