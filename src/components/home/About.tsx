import Image from "next/image";
import { about, profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="shell grid gap-10 py-20 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16 lg:py-28">
      <div>
        <div className="peca mx-auto w-full max-w-[20rem] rotate-[-1.5deg] md:mx-0">
          <Image
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            width={1024}
            height={992}
            sizes="(min-width: 768px) 320px, 80vw"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div>
        <h2 className="t-titulo">Sobre mim</h2>
        <div className="texto mt-6 space-y-4">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-linha pt-6 sm:grid-cols-2">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="muted text-[0.9rem]">{f.label}</dt>
              <dd className="mt-0.5">{f.value}</dd>
            </div>
          ))}
        </dl>
        <a href={profile.cvUrl} download="Curriculo_Joao_Desenvolvedor.pdf" className="link mt-8 inline-block">
          Baixar o currículo em PDF
        </a>
      </div>
    </section>
  );
}
