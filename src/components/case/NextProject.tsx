import Link from "next/link";
import { caseStudies, upcomingProjects } from "@/data/projects";

export function NextProject({ current }: { current: string }) {
  const i = caseStudies.findIndex((c) => c.slug === current);
  const next = caseStudies.length > 1 ? caseStudies[(i + 1) % caseStudies.length] : undefined;

  return (
    <nav aria-label="Próximo projeto" className="border-t" style={{ borderColor: "color-mix(in srgb, var(--case-ink) 18%, transparent)" }}>
      <div className="shell flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between">
        {next ? (
          <Link href={`/projetos/${next.slug}`} className="group">
            <span className="muted block text-[0.95rem]">Próximo projeto</span>
            <span className="t-sub group-hover:underline group-hover:underline-offset-4">{next.name}</span>
          </Link>
        ) : (
          <p className="max-w-[48ch]">
            <span className="muted block text-[0.95rem]">Próximos da série</span>
            {upcomingProjects.map((p) => p.name).join(" e ")} estão em produção.
          </p>
        )}
        <Link href="/#projetos" className="link">
          Ver todos os projetos
        </Link>
      </div>
    </nav>
  );
}
