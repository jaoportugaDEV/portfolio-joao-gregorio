import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
