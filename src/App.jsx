import { Analytics } from "@vercel/analytics/react";

import { Nav } from "./components/Nav.jsx";
import { Contact } from "./components/Contact.jsx";
import { Projects } from "./pages/Projects.jsx";
import { About } from "./pages/About.jsx";
import { Introduction } from "./pages/Introduction.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Skills } from "./pages/Skills.jsx";

export default function App() {
  return (
    <div>
      <Analytics />
      <Nav />
      <section id="intro" className="h-screen flex justify-center items-center bg-gray-800 text-white text-4xl">
        <Introduction />
      </section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact" className="min-h-screen flex justify-center items-center text-2xl">
        <Contact />
      </section>
    </div>
  );
}
