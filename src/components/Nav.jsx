import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

export function Nav() {
    const [activeSection, setActiveSection] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 shadow-lg z-50">
                <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
                    {/* Logo */}
                    <h1 className="text-xl font-bold text-blue-400">Diamond Rivero</h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navList.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize px-4 py-2 transition-all duration-300 ${
                                    activeSection === section ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Opens Sidebar) */}
                    <button className="md:hidden text-white z-50" onClick={() => setSidebarOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Sidebar (Right side) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform z-50 ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center px-6 py-4 bg-gray-900">
                    <button onClick={() => setSidebarOpen(false)}>
                        <X size={28} className="text-white" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="flex flex-col space-y-4 px-6 py-4">
                    {navList.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`capitalize text-lg py-2 transition-all duration-300 ${
                                activeSection === section ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"
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
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
}
