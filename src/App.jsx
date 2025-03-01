import { Analytics } from "@vercel/analytics/react";

import { Nav } from "./components/Nav.jsx";
import { Contact } from "./components/Contact.jsx";
import { Projects } from "./components/Projects.jsx";
import { About } from "./components/About.jsx";
import { Introduction } from "./components/Introduction.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Certificates } from "./components/Certificates.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Analytics />
        <Nav />
      <section id="intro">
        <Introduction />
      </section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="certificate"><Certificates /></section>
      <section id="projects"><Projects /></section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
