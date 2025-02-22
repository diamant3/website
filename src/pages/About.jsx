export function About() {
    const education = [
        {
            id: 0,
            name: "University of Makati",
            desc: "Bachelor of Science in Computer Science",
            year: "2019 - current",
            website: "https://umak.edu.ph"
        },
        {
            id: 1,
            name: "MCA Montessori School",
            desc: "Information Communication and Technology",
            year: "2017 - 2019",
            website: "https://mcams.edu.ph/"
        },
    ]

    const career = [
        {
            id: 0,
            name: "Station Square East Commercial Corporation",
            desc: "On-the-Job Training in the Finance Department",
            year: "2018(80 Hours)",
            website: "#" // no website
        }
    ]

    return (
        <>
            <div className="pt-6">
                <h1 className="text-4xl font-bold text-center text-white pt-2">About Me</h1>

                <p className="text-2xl text-white text-center pt-4 px-16">
                Hi, I'm Diamond Engalan Rivero, a passionate programmer from Taguig, Philippines with a deep interest in system-level development. 
                I love exploring how computers work from the ground up, whether it's low-level programming, operating systems, or optimizing software for efficiency. 
                </p>

                <p className="text-2xl text-white text-center pt-4 px-16">
                Currently, I'm diving into C/C++ and Linux, honing my skills in system programming and pushing myself to understand the intricate details of software and hardware interaction.
                When I'm not coding, you'll find me tinkering with open-source projects, experimenting with different system architectures, or diving into technical deep dives on compilers, memory management, and OS internals.
                </p>

                <p className="text-2xl text-white text-center pt-4 px-16">
                I'm always open to connecting with like-minded engineers and collaborating on exciting projects. Feel free to reach out!
                </p>
            </div>
        </>
    );
}