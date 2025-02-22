import { Footer } from "../components/Footer";
// import { Header } from "../components/Header";
import { Projects } from "./Projects";
import { About } from "./About";
import { Introduction } from "./Introduction";
import { Experience } from "./Experience";
import { Skills } from "./Skills.jsx";

export function Content() {
    return (
        <>
            <Introduction />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}
