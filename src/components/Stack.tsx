import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Stack() {
  return (
    <section id="stack" className="section-alt">
      <div className="section-shell section-space space-y-10">
        <SectionTitle
          eyebrow="Stack tecnologica"
          title="Tecnologias usadas no dia a dia"
          subtitle="Com destaque para automacoes, integracoes e base para IA aplicada."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.stackGroups.map((group) => (
            <article
              key={group.title}
              className="ui-card group reveal reveal-delay-1 rounded-[var(--radius-xl)] p-6"
            >
              <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-200 group-hover:text-[#c3beff]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={`${group.title}-${item}`}
                    className="ui-chip"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
