import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { portfolioSectionLoader } from "../router/loaders";

export function HomePage() {
  const section = useLoaderData<typeof portfolioSectionLoader>();

  useEffect(() => {
    if (section === "inicio") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [section]);

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
