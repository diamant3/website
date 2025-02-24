import { Analytics } from "@vercel/analytics/react"

import { Footer } from "./components/Footer.jsx";
import { Projects } from "./pages/Projects.jsx";
import { About } from "./pages/About.jsx";
import { Introduction } from "./pages/Introduction.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Skills } from "./pages/Skills.jsx";

export default function App() {
  return (
    <>
      <Analytics />
      <Introduction />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
