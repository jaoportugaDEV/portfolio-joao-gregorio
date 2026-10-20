import { process, services } from "@/data/profile";

export function Process() {
  return (
    <section id="como-trabalho" className="border-y border-linha bg-folha">
      <div className="shell py-20 lg:py-28">
        <h2 className="t-titulo max-w-[18ch]">Como eu trabalho</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((step, i) => (
            <li key={step.title} className="relative pt-5">
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-linha" />
              <span
                aria-hidden
                className="trilha absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cobalto to-sinal"
                style={{ animationRangeStart: `entry ${10 + i * 8}%` } as React.CSSProperties}
              />
              <span className="font-display text-4xl font-bold text-cobalto" aria-hidden>
                {i + 1}
              </span>
              <h3 className="t-sub mt-3">{step.title}</h3>
              <p className="muted mt-2">{step.text}</p>
            </li>
          ))}
        </ol>

        <h2 className="t-sub mt-20">O que eu faço</h2>
        <ul className="mt-6 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="muted mt-2">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
