import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import About from "@/components/About";
import  Hero  from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
