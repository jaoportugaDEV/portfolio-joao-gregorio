import Link from "next/link";
import { caseStudies } from "@/data/projects";
import { mensagemPadrao, profile, whatsappLink } from "@/data/profile";
import { Editor } from "./Editor";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden className="brilho pointer-events-none absolute inset-0" />
      <div aria-hidden className="malha pointer-events-none absolute inset-0" />
      <div className="shell relative grid items-center gap-x-12 gap-y-16 pt-12 pb-24 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:pt-20 lg:pb-28">
        <div>
          <h1 className="t-display max-w-[14ch]">Sites e sistemas para pequenos negócios, feitos um de cada vez.</h1>
          <p className="t-lead muted mt-7 max-w-[46ch]">
            Sou o {profile.name}, desenvolvedor web em Presidente Prudente. Aqui cada projeto aparece por dentro: de onde
            veio a ideia, como a marca nasceu e o que tem no código.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#projetos" className="btn btn-cheio">
              Ver os projetos
            </Link>
            <a href={whatsappLink(mensagemPadrao)} target="_blank" rel="noreferrer" className="btn btn-linha">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        <div className="pr-[4%] pb-8">
          <Editor projetos={caseStudies} />
        </div>
      </div>
    </section>
  );
}
