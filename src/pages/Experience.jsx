"use client";

import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      title: "Education",
      items: [
        {
          institution: "University of Makati",
          degree: "Bachelor of Science in Computer Science",
          years: "2019 - Present",
        },
        {
          institution: "MCA Montessori School",
          degree: "Information Communication and Technology",
          years: "2017 - 2019",
        },
      ],
    },
    {
      title: "Career",
      items: [
        {
          company: "Company A",
          role: "Position A",
          years: "2025 - Present",
        },
        {
          company: "Station Square East Commercial Corporation",
          role: "IT Support Specialist Trainee",
          years: "2018 (80 Hours)",
        },
      ],
    },
    {
      title: "Volunteering",
      items: [
        {
          organization: "Organization A",
          role: "Position A",
          years: "2021 - Present",
        },
        {
          organization: "PSPDEV",
          role: "Contributor & Member",
          years: "2023 - Present",
        },
      ],
    },
  ];

  return (
    <div className="py-12 px-6 flex flex-col items-center">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white relative mb-8"
      >
        Experience
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="block h-1 bg-blue-500 mx-auto mt-2 rounded-full"
        />
      </motion.h1>

      <div className="relative w-full max-w-2xl">
        {/* Animated Vertical Timeline Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          exit={{ height: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600"
        ></motion.div>

        {experiences.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ amount: 0.3 }}
            className="relative flex flex-col items-center mb-10"
          >
            {/* Section Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ amount: 0.3 }}
              className="w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + i * 0.2 }}
                    viewport={{ amount: 0.3 }}
                    className="bg-gray-900 p-4 rounded-md shadow"
                  >
                    <p className="text-lg text-white font-semibold">{item.role || item.degree}</p>
                    <p className="text-gray-300">{item.company || item.institution || item.organization}</p>
                    <p className="text-gray-400">{item.years}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
