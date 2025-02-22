import { useState } from "react";
import { Menu, X, } from "lucide-react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-screen">
            {/* Header */}
            <header className="flex items-center justify-center mx-4 text-white p-2">
                <div className="flex items-center space-x-2">
                    <img
                        src="https://github.com/diamant3.png"
                        alt="Profile"
                        className="w-24 rounded-full"
                    />
                </div>
                {/* <button
                    className="p-2 rounded-md text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className="hidden md:flex space-x-14">
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                </nav> */}
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar - Only in Mobile View */}
                <div
                    className={`fixed inset-y-0 right-0 transform bg-slate-200 w-48 p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
                >
                    {isOpen && (
                        <button
                            className="absolute top-7 right-7"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} className="hover:text-blue-400" />
                        </button>
                    )}
                    <nav>
                        <ul className="pt-10">
                            <li className="mb-2 flex justify-center items-center cursor-pointer">
                                <span className="text-2xl"><a href="/about" className="hover:text-blue-400">About</a></span>
                            </li>
                            <li className="mb-2 flex justify-center items-center cursor-pointer">
                                <span className="text-2xl"><a href="/projects" className="hover:text-blue-400">Projects</a></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
