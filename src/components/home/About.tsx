import Image from "next/image";
import { Marca } from "@/components/site/Marca";
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
        <figure className="mx-auto mt-10 w-full max-w-[20rem] md:mx-0">
          <div className="rounded-[var(--raio-bloco)] border border-linha bg-[#070b18] p-5 font-mono text-[0.85rem] leading-relaxed text-nanquim shadow-[var(--sombra-peca)]">
            <p className="flex items-center gap-2 text-grafite">
              <Marca className="size-5 text-cobalto" />
              joao@braganca
            </p>
            <p className="mt-4">
              <span className="text-sinal">~/estudos</span> $ cat formacao
            </p>
            <p className="mt-1 font-semibold">Engenharia Informática</p>
            <p className="text-grafite">
              UPB, Portugal, 2022 a 2026
              <span aria-hidden className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-sinal" />
            </p>
          </div>
          <figcaption className="sr-only">Formação em Engenharia Informática na UPB, em Portugal</figcaption>
        </figure>
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
