import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons

export function Nav() {
    const [activeSection, setActiveSection] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setSidebarOpen(false); // Close sidebar after clicking
    };

    return (
        <>
            {/* Top Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full backdrop-blur-lg bg-opacity-50 transition-all duration-300 z-50 ${
                    scrolled ? "bg-gray-900/80 shadow-lg" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
                    {/* Logo */}
                    <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">Diamond Rivero</h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navList.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                                    activeSection === section
                                        ? "text-blue-400 font-bold"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                                }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white z-50" onClick={() => setSidebarOpen(true)}>
                        <Menu size={30} />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-gray-900/90 text-white shadow-xl transform transition-transform z-50 ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                    <h2 className="text-lg font-semibold text-blue-400">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                        <X size={30} className="text-white" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="flex flex-col space-y-6 px-6 py-6">
                    {navList.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`capitalize text-xl font-medium py-2 transition-all duration-300 ${
                                activeSection === section
                                    ? "text-blue-400 font-bold"
                                    : "text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg px-4"
                            }`}
                        >
                            {section}
                        </button>
                    ))}
                </div>
            </div>

            {/* Background Overlay (when sidebar is open) */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
}
