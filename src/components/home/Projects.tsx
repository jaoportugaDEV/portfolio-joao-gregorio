import Image from "next/image";
import Link from "next/link";
import { Marca } from "@/components/site/Marca";
import { caseStudies, upcomingProjects, type CaseStudy } from "@/data/projects";

function Featured({ project }: { project: CaseStudy }) {
  const href = `/projetos/${project.slug}`;
  return (
    <article
      className="card-projeto grid gap-8 overflow-hidden rounded-[var(--raio-bloco)] p-5 sm:p-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12 lg:p-10"
      style={{ background: project.theme.bg, color: project.theme.ink }}
    >
      <Link href={href} tabIndex={-1} aria-hidden className="relative mb-6 block lg:mb-0">
        <div className="peca">
          <Image
            src={project.showcase.src}
            alt=""
            width={project.showcase.width}
            height={project.showcase.height}
            sizes="(min-width: 1024px) 600px, 92vw"
            className="h-auto w-full"
          />
        </div>
        {project.sticker ? (
          <Image
            src={project.sticker.src}
            alt=""
            width={project.sticker.width}
            height={project.sticker.height}
            sizes="(min-width: 1024px) 260px, 50vw"
            className="pointer-events-none absolute -bottom-6 left-1/2 w-[44%] max-w-[17rem] -translate-x-1/2 sm:w-[52%] drop-shadow-[0_6px_8px_rgb(87_45_43/0.3)]"
          />
        ) : null}
      </Link>
      <div className="flex flex-col justify-center pt-4 lg:pt-0">
        <p className="text-[0.95rem] font-medium" style={{ color: project.theme.accentText }}>
          {project.type}, {project.year}
        </p>
        <h3 className="t-titulo mt-2">
          <Link href={href} className="inline-flex min-h-11 items-center hover:underline hover:decoration-2 hover:underline-offset-4">
            {project.name}
          </Link>
        </h3>
        <p className="mt-5 max-w-[48ch] text-[1.05rem] leading-relaxed opacity-90">{project.cardText}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.deliverables.map((t) => (
            <li
              key={t}
              className="rounded-full border px-3 py-1 text-[0.85rem]"
              style={{ borderColor: `color-mix(in srgb, ${project.theme.ink} 30%, transparent)` }}
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={href}
            className="btn"
            style={{ background: project.theme.ink, color: project.theme.bg }}
          >
            Ver a criação completa
          </Link>
          {project.links.site ? (
            <a
              href={project.links.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center font-semibold underline decoration-[1.5px] underline-offset-4"
            >
              Abrir o site
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="shell py-20 lg:py-28">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="t-titulo">Projetos</h2>
        <p className="muted max-w-[40ch] sm:text-right">
          Os que têm página própria mostram a criação do começo ao fim.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {caseStudies.map((c) => (
          <Featured key={c.slug} project={c} />
        ))}
      </div>

      {upcomingProjects.length > 0 && (
      <div className="mt-16">
        <h3 className="t-sub">Na bancada agora</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {upcomingProjects.map((p) => (
            <li key={p.name} className="relative rounded-[var(--raio-bloco)] border-[1.5px] border-dashed border-grafite/50 p-6 pr-20">
              <Marca contorno className="absolute top-5 right-5 size-9 text-cobalto opacity-40" />
              <p className="font-display text-xl font-semibold">{p.name}</p>
              <p className="muted mt-1 text-[0.95rem]">{p.type}, em produção</p>
              <p className="mt-3">{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
      )}
    </section>
  );
}
