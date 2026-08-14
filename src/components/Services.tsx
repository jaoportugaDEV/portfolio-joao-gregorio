import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Services() {
  return (
    <section id="servicos" className="section-alt">
      <div className="section-shell section-space space-y-10">
        <SectionTitle
          eyebrow="O que eu faco"
          title="Tres frentes principais, do processo ao produto"
          subtitle="Combinacao de automacao, back-end e front-end para entregar valor de negocio."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {portfolioData.services.map((service, index) => (
            <article
              key={service.title}
              className="ui-card group reveal reveal-delay-1 rounded-[var(--radius-xl)] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b8b2ff] transition-transform duration-200 group-hover:translate-x-0.5">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-100 transition-colors duration-200 group-hover:text-[#c3beff]">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed content-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
