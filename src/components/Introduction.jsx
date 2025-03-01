import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Introduction() {
    const profileImg = "https://avatars.githubusercontent.com/u/71203851?v=4";
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="text-white min-h-screen flex flex-col items-center justify-center px-6 mt-12">
            <motion.div 
                ref={ref} 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center"
            >
                {/* Profile Image */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl mb-6">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Text Section */}
                <h1 className="text-4xl md:text-5xl font-bold pb-2 text-white">
                    Hey, I'm Diamond Rivero
                </h1>
                <p className="text-2xl md:text-3xl font-mono font-semibold leading-tight text-gray-300">
                    Enthusiastic about computers and anything related!
                </p>
                
                {/* Contact Button */}
                <motion.a 
                    href="#contact" 
                    className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Contact Me
                </motion.a>
            </motion.div>
        </div>
    );
}
