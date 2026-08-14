import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { TimelineSection } from "@/components/TimelineSection";
import { TopNav } from "@/components/TopNav";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-slate-100">
      <TopNav />
      <Hero />
      <main>
        <About />
        <Services />
        <Projects />
        <Stack />
        <TimelineSection
          id="academico"
          eyebrow="Academico"
          title="Formacao e base tecnica"
          subtitle="Trajetoria academica e formativa alinhada ao desenvolvimento de software."
          items={portfolioData.academic}
        />
        <TimelineSection
          eyebrow="Eventos e experiencia"
          title="Vivencias relevantes da jornada"
          subtitle="Contextos que reforcam adaptabilidade, foco em produto e entrega continua."
          items={portfolioData.events}
          variant="alt"
        />
      </main>
      <Contact />
    </div>
  );
}
