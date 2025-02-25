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
    <>
      <Analytics />
      <Nav />
      <section id="intro">
        <Introduction />
      </section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
