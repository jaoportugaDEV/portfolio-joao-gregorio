import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/projects";

export function CaseHero({ project }: { project: CaseStudy }) {
  return (
    <header>
      <div className="shell pt-10 pb-14 lg:pt-14 lg:pb-20">
        <Link href="/#projetos" className="link inline-flex min-h-11 items-center text-[0.95rem]">
          Todos os projetos
        </Link>
        <div className="mt-4 grid gap-10 sm:mt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-medium" style={{ color: "var(--case-accent-text)" }}>
              {project.type}, {project.place}, {project.year}
            </p>
            <h1 className="t-display mt-3 max-w-[14ch]">{project.name}</h1>
            <p className="t-lead mt-7 max-w-[52ch]">{project.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {project.links.site ? (
                <a href={project.links.site} target="_blank" rel="noreferrer" className="btn btn-cheio">
                  Abrir o site
                </a>
              ) : null}
              <a href="#contato" className="btn btn-linha">
                Conversar sobre um projeto assim
              </a>
            </div>
          </div>
          <dl className="self-end border-t-2 pt-2" style={{ borderColor: "var(--case-ink)" }}>
            {project.facts.map((f) => (
              <div
                key={f.label}
                className="grid gap-1 border-b py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4"
                style={{ borderColor: "color-mix(in srgb, var(--case-ink) 18%, transparent)" }}
              >
                <dt className="muted text-[0.9rem]">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div style={{ background: "var(--case-accent)" }}>
        <div className="shell relative pt-10 pb-16 sm:py-14 lg:py-16">
          <div className="peca w-[88%] sm:w-[80%]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              sizes="(min-width: 1200px) 920px, (min-width: 640px) 80vw, 88vw"
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="peca absolute right-4 bottom-3 w-[28%] max-w-[15rem] sm:right-8 sm:bottom-8 sm:w-[27%] sm:rotate-[2.5deg]">
            <Image
              src={project.coverPhone.src}
              alt={project.coverPhone.alt}
              width={project.coverPhone.width}
              height={project.coverPhone.height}
              sizes="(min-width: 1200px) 240px, 28vw"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
