import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { hero } = portfolioData;
  const hasGithub = hero.contacts.github.trim().length > 0;

  return (
    <section id="topo" className="relative overflow-hidden border-b border-[var(--border)] bg-transparent pt-20">
      <div className="pointer-events-none absolute -top-24 -left-8 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="section-shell section-space relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="reveal space-y-7">
            <p className="eyebrow w-fit">{hero.company}</p>
            <div className="reveal reveal-delay-1 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                Full Stack Junior
              </p>
              <h1 className="text-5xl font-black tracking-tight text-slate-100 sm:text-6xl md:text-7xl">
                {hero.fullName}
              </h1>
              <p className="max-w-3xl text-xl font-semibold leading-tight text-slate-200 sm:text-2xl">
                {hero.role}
              </p>
              <p className="max-w-3xl text-lg leading-relaxed content-muted">{hero.intro}</p>
            </div>
            <p className="reveal reveal-delay-2 max-w-3xl text-base content-muted">{hero.availability}</p>
            <div className="reveal reveal-delay-2 flex flex-wrap gap-3">
              <a
                href={`mailto:${hero.contacts.email}`}
                className="ui-btn ui-btn-primary"
              >
                Falar comigo
              </a>
              <a
                href={hero.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="ui-btn ui-btn-outline"
              >
                LinkedIn
              </a>
              <a
                href={`https://wa.me/${hero.contacts.phone}`}
                target="_blank"
                rel="noreferrer"
                className="ui-btn ui-btn-outline"
              >
                WhatsApp
              </a>
              {hasGithub ? (
                <a
                  href={hero.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-btn ui-btn-outline"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
          <aside className="ui-card reveal reveal-delay-2 rounded-[var(--radius-2xl)] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Perfil
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-100">{hero.fullName}</h2>
            <p className="mt-3 text-sm leading-relaxed content-muted">
              Full Stack Junior com foco em automacoes, APIs e evolucao continua em IA aplicada.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <p className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2">
                {hero.contacts.email}
              </p>
              <p className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2">
                (18) 99755-7925
              </p>
              <p className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2">Brasil</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
