import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Guia } from "@/components/home/Guia";
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
      {/* espaço para o guia fixo no canto não cobrir o rodapé no celular */}
      <div aria-hidden className="h-20 sm:hidden" />
      <Guia />
    </main>
  );
}
