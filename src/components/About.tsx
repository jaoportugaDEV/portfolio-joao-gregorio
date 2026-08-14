import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="sobre" className="section-shell section-space space-y-10">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Construo produtos reais com base full stack e foco em IA aplicada"
      />
      <div className="reveal reveal-delay-1 mx-auto flex w-full max-w-4xl flex-col items-center gap-10">
        <div className="relative h-36 w-36 overflow-hidden rounded-full border border-slate-600 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
          <Image
            src="/joao-profile.png"
            alt="Foto de Joao Gregorio"
            fill
            className="object-cover"
            sizes="144px"
            priority
          />
        </div>
        <div className="grid gap-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
          {portfolioData.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
