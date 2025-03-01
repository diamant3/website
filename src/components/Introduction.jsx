import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Introduction() {
    const profileImg = "https://avatars.githubusercontent.com/u/71203851?v=4";
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <div className="text-white min-h-screen flex flex-col items-center justify-center mt-8">
            {/* Hero Section */}
            <motion.div 
                ref={ref} 
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl px-6 md:px-20 gap-8 md:gap-12 py-12"
            >
                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
                >
                    <p className="text-3xl md:text-4xl font-bold pb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text animate-pulse">
                        Hey, I'm Diamond Rivero
                    </p>
                    <p className="text-4xl md:text-6xl font-mono font-bold leading-tight bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-pulse">
                        Enthusiastic about computers and anything related!
                    </p>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-6"
                    >
                        <a 
                            href="#contact" 
                            className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
