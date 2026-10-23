import type { BrandFonts } from "@/app/projetos/[slug]/fonts";
import type { CaseStudy } from "@/data/projects";
import { BlockView } from "./Blocks";

export function CaseChapters({ project, fonts }: { project: CaseStudy; fonts?: BrandFonts }) {
  return (
    <div>
      {/* índice para telas pequenas: chips que rolam na horizontal e ficam colados abaixo do cabeçalho */}
      <nav
        aria-label="Capítulos do projeto"
        className="sticky top-16 z-30 border-b lg:hidden"
        style={{
          background: "var(--case-bg)",
          borderColor: "color-mix(in srgb, var(--case-ink) 18%, transparent)",
        }}
      >
        <ol className="shell flex gap-2 overflow-x-auto py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {project.chapters.map((c, i) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="tag !flex min-h-11 items-center gap-1.5 !px-3.5 text-[0.9rem] whitespace-nowrap"
              >
                <span className="tabular-nums" style={{ color: "var(--case-accent-text)" }}>
                  {i + 1}
                </span>
                {c.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    <div className="shell grid gap-12 py-12 sm:py-20 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:py-28">
      <nav aria-label="Capítulos do projeto (lateral)" className="hidden lg:block">
        <ol className="sticky top-24 space-y-2.5 text-[0.95rem]">
          {project.chapters.map((c, i) => (
            <li key={c.id} className="flex gap-3">
              <span className="w-4 shrink-0 text-right tabular-nums" style={{ color: "var(--case-accent-text)" }}>
                {i + 1}
              </span>
              <a href={`#${c.id}`} className="hover:underline hover:underline-offset-4">
                {c.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="min-w-0 space-y-24 lg:space-y-32">
        {project.chapters.map((c, i) => (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-titulo`} className="capitulo scroll-mt-32 lg:scroll-mt-24">
            <header className="flex items-baseline gap-4">
              <span
                className="font-display text-2xl font-bold tabular-nums"
                style={{ color: "var(--case-accent-text)" }}
                aria-hidden
              >
                {i + 1}
              </span>
              <h2 id={`${c.id}-titulo`} className="t-titulo">
                {c.title}
              </h2>
            </header>
            <div className="mt-8 space-y-10">
              {c.blocks.map((b, j) => (
                <BlockView key={j} block={b} fonts={fonts} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
    </div>
  );
}
