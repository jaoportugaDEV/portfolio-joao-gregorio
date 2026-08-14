import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projetos" className="section-shell section-space space-y-10">
      <SectionTitle
        eyebrow="Projetos"
        title="Sistemas com automacao e evolucao para IA, do problema a entrega"
        subtitle="Estrutura semelhante ao portfolio de referencia, com foco no seu contexto profissional."
      />
      <div className="grid gap-6">
        {portfolioData.projects.map((project) => (
          <article
            key={project.name}
            className="ui-card group reveal reveal-delay-1 rounded-[var(--radius-2xl)] p-7 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-slate-100 transition-colors duration-200 group-hover:text-[#c3beff] sm:text-[1.75rem]">
                {project.name}
              </h3>
              <span className="eyebrow transition-colors duration-200 group-hover:bg-[#302a57]">
                {project.status}
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{project.description}</p>
            <ul className="mt-5 space-y-2 text-slate-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.45rem] inline-block h-1.5 w-1.5 rounded-full bg-[#9d93ff] transition-transform duration-200 group-hover:scale-110" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <span
                  key={`${project.name}-${tech}`}
                  className="ui-chip"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.confidential ? (
              <p className="mt-5 text-sm text-slate-400">
                Projeto com parte do contexto sob confidencialidade.
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
