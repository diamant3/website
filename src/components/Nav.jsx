import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Nav() {
    const [activeSection, setActiveSection] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navList = ["intro", "about", "experience", "skills", "projects", "contact"];

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
        setDropdownOpen(false);
    };

    return (
        <div className="overflow-x-hidden w-full mb-4">
            <nav className={`fixed top-0 left-0 w-full backdrop-blur-lg bg-opacity-50 transition-all duration-300 z-50 ${scrolled ? "bg-slate-800" : "bg-transparent py-2"}`}>
                <div className="w-full flex justify-between items-center px-4 md:px-8">
                    <h1 className="text-xl font-extrabold text-slate-200">Diamond Rivero</h1>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        {navList.map((section) => (
                            <button key={section} onClick={() => scrollToSection(section)}
                                className={`capitalize text-lg font-bold p-2 transition-all ${activeSection === section ? "text-blue-400 font-bold" : "text-slate-200 hover:text-blue-400"}`}>
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Navigation - Terminal Style Dropdown */}
                    <div className="relative md:hidden">
                        <button className="py-2 text-slate-200 flex items-center gap-2" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <span className="text-lg">[ Menu ]</span>
                            <ChevronDown size={24} />
                        </button>

                        {/* Dropdown */}
                        <div className={`absolute right-0 mt-2 w-48 bg-[#121212] text-slate-200 border border-blue-400 rounded-md shadow-lg transition-all duration-300 ${dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                            <div className="flex flex-col space-y-2 p-3">
                                {navList.map((section) => (
                                    <button key={section} onClick={() => scrollToSection(section)}
                                        className={`capitalize text-lg font-bold p-2 transition-all text-left ${activeSection === section ? "text-blue-400 font-bold" : "text-slate-200 hover:text-blue-400"}`}>
                                        {section}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
