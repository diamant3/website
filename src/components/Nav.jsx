import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
    const [activeSection, setActiveSection] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navList = ["intro", "about", "experience", "skills", "certificates", "projects", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                    currentSection = section.getAttribute("id");
                }
            });
            setActiveSection(currentSection);
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setSidebarOpen(false);
    };

    return (
        <div className="overflow-x-hidden w-full">
            <nav className={`fixed top-0 left-0 w-full backdrop-blur-lg bg-opacity-50 transition-all duration-300 z-50 ${scrolled ? "bg-transparent py-2" : "py-4"}`}>
                <div className="w-full flex justify-between items-center px-4 md:px-8">
                    <h1 className="text-xl font-extrabold text-slate-200">Diamond Rivero</h1>
                    <div className="hidden md:flex space-x-4">
                        {navList.map((section) => (
                            <button key={section} onClick={() => scrollToSection(section)}
                                className={`capitalize text-lg font-bold p-2 transition-all ${activeSection === section ? "text-blue-400 font-bold" : "text-slate-200 hover:text-blue-400"}`}>
                                {section}
                            </button>
                        ))}
                    </div>
                    <button className="md:hidden text-slate-200" onClick={() => setSidebarOpen(true)}>
                        <Menu size={30} />
                    </button>
                </div>
            </nav>
            <div className={`fixed top-0 right-0 h-full w-48 bg-[#121212] text-slate-200 shadow-xl transform transition-transform z-50 ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <div className="flex justify-end items-center px-6 py-4">
                    <button onClick={() => setSidebarOpen(false)}><X size={30} className="text-slate-200" /></button>
                </div>
                <div className="flex flex-col space-y-6 px-6 py-6">
                    {navList.map((section) => (
                        <button key={section} onClick={() => scrollToSection(section)}
                        className={`capitalize text-lg font-bold p-2 transition-all ${activeSection === section ? "text-blue-400 font-bold" : "text-slate-200 hover:text-blue-400"}`}>
                            {section}
                        </button>
                    ))}
                </div>
            </div>
            {sidebarOpen && <div className="fixed inset-0 bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>}
        </div>
    );
}