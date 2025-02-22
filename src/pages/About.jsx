export function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-16">
            {/* Section Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white relative">
                About Me
                <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"></span>
            </h1>
    
            {/* Content Wrapper with Glassmorphism Effect */}
            <div className="mt-8 max-w-3xl bg-gray-800 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg">
                <p className="text-lg md:text-2xl text-white text-center leading-relaxed">
                    Hi, I'm <span className="text-blue-400 font-semibold">Diamond Engalan Rivero</span>, a passionate programmer from Taguig, Philippines,  
                    with a deep interest in system-level development. I love exploring how computers work from the ground up—whether it's low-level programming,  
                    operating systems, or optimizing software for efficiency.
                </p>
    
                <p className="text-lg md:text-2xl text-white text-center leading-relaxed mt-6">
                    Currently, I'm diving into C/C++ and Linux, honing my skills in system programming, and pushing myself to understand  
                    the intricate details of software and hardware interaction.  
                    When I'm not coding, you'll find me tinkering with open-source projects, experimenting with different system architectures,  
                    or diving into technical deep dives on compilers, memory management, and OS internals.
                </p>
    
                <p className="text-lg md:text-2xl text-white text-center leading-relaxed mt-6">
                    I'm always open to connecting with like-minded engineers and collaborating on exciting projects. Feel free to reach out!
                </p>
            </div>
        </div>
    );    
}