"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.3 }}
                className="flex flex-col items-center"
            >
                {/* Section Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold text-center text-white relative"
                >
                    About Me
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="block h-1 bg-blue-500 mx-auto mt-2 rounded-full"
                    />
                </motion.h1>

                {/* Content Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ amount: 0.3 }}
                    className="mt-8 max-w-3xl bg-gray-800 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg"
                >
                    {[
                        "Hi, I'm Diamond Engalan Rivero, an aspiring computer programmer from Taguig, Philippines, with a deep interest in system-level development...",
                        "Currently, I'm diving into C/C++ and Linux, honing my skills in system programming, and pushing myself to understand software and hardware interaction...",
                        "I'm always open to connecting with like-minded engineers and collaborating on exciting projects. Feel free to reach out!"
                    ].map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + index * 0.2 }}
                            viewport={{ amount: 0.3 }}
                            className="text-lg md:text-2xl text-white text-center leading-relaxed mt-6"
                        >
                            {text}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
