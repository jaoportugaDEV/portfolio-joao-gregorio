import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const { hero, languages } = portfolioData;

  return (
    <section id="contato" className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="section-shell section-space relative grid gap-10 lg:grid-cols-2">
        <div className="reveal space-y-5">
          <p className="inline-flex rounded-full bg-blue-400/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            Disponivel
          </p>
          <h2 className="max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="max-w-2xl text-slate-300">
            Aberto a freelas e colaboracoes com foco em automacoes, APIs e IA aplicada.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${hero.contacts.email}`}
              className="ui-btn ui-btn-primary"
            >
              Enviar e-mail
            </a>
            <a
              href={hero.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ui-btn rounded-full border border-slate-500 bg-transparent text-sm font-semibold text-slate-100 hover:border-slate-300 hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="reveal reveal-delay-1 rounded-[var(--radius-2xl)] border border-slate-800 bg-slate-900/90 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Idiomas</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-400">
            Contato: {hero.contacts.email} | (18) 99755-7925
          </p>
        </aside>
      </div>
    </section>
  );
}
