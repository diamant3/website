import { Analytics } from "@vercel/analytics/react";

import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

export default function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Analytics />
        <Nav />
      <section id="intro"><Introduction /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="certificates"><Certificates /></section>
      <section id="projects"><Projects /></section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
