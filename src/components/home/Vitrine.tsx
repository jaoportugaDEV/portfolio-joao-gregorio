"use client";

// Vitrine do hero: o cliente escolhe um projeto e vê como o site ficou no celular, em linguagem simples.
// Tudo fica no fluxo normal da página (sem posição absoluta fora da caixa), então nada passa da tela.
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import type { CaseStudy } from "@/data/projects";

const nomeCurto = (p: CaseStudy) =>
  p.name
    .split(",")[0]
    .replace(/\s(Pizzaria|Burger|Hotdog|Hot Dog|Sorveteria)\b.*$/, "")
    .trim();

export function Vitrine({ projetos }: { projetos: CaseStudy[] }) {
  const [ativo, setAtivo] = useState(0);
  const abas = useRef<(HTMLButtonElement | null)[]>([]);
  const p = projetos[ativo];

  // setas do teclado trocam de projeto, como em qualquer aba
  const navegar = (e: KeyboardEvent, i: number) => {
    const passo = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!passo) return;
    e.preventDefault();
    const prox = (i + passo + projetos.length) % projetos.length;
    setAtivo(prox);
    abas.current[prox]?.focus();
  };

  return (
    <div className="mx-auto w-full max-w-[34rem]">
      {/* escolha do projeto: miniaturas do site, uma linha só (rola de lado no celular) */}
      <div
        role="tablist"
        aria-label="Projetos"
        className="-mx-4 mb-4 flex snap-x gap-2.5 overflow-x-auto px-4 pt-1 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {projetos.map((proj, i) => {
          const on = i === ativo;
          return (
            <button
              key={proj.slug}
              ref={(el) => {
                abas.current[i] = el;
              }}
              role="tab"
              aria-selected={on}
              tabIndex={on ? 0 : -1}
              onClick={() => setAtivo(i)}
              onKeyDown={(e) => navegar(e, i)}
              className={`group relative w-[6.2rem] shrink-0 snap-start rounded-xl border p-1.5 text-left transition-[border-color,background-color,transform] duration-200 sm:w-auto ${
                on
                  ? "border-cobalto bg-cobalto-claro"
                  : "border-linha bg-folha/60 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-grafite/60"
              }`}
            >
              <span
                className="relative block aspect-[4/5] overflow-hidden rounded-lg"
                style={{ background: `linear-gradient(160deg, ${proj.theme.soft}, ${proj.theme.bg})` }}
              >
                <Image
                  src={proj.coverPhone.src}
                  alt=""
                  fill
                  sizes="96px"
                  loading="eager"
                  className={`object-cover object-top transition-opacity duration-200 ${on ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}
                />
                {i === 0 ? (
                  <span className="absolute top-1 left-1 rounded-full bg-sinal px-1.5 py-px text-[0.6rem] leading-tight font-bold text-[#06101c] uppercase">
                    Novo
                  </span>
                ) : null}
              </span>
              <span className={`mt-1.5 block truncate px-0.5 text-[0.76rem] font-semibold ${on ? "text-nanquim" : "text-grafite"}`}>
                {nomeCurto(proj)}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="overflow-hidden rounded-[var(--raio-bloco)] border border-linha bg-folha/90 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)]"
      >
        {/* palco: o site no celular, na cor da marca do cliente */}
        <div
          key={p.slug}
          className="previa-sobe relative grid place-items-center px-4 pt-12 pb-0"
          style={{ background: `radial-gradient(120% 80% at 50% 100%, ${p.theme.soft}, ${p.theme.bg})` }}
        >
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-linha bg-giz px-2.5 py-1 text-[0.75rem] font-medium text-nanquim">
              <span aria-hidden className="size-1.5 rounded-full bg-sinal shadow-[0_0_8px_var(--sinal)]" />
              No ar agora
            </span>
            {ativo === 0 ? (
              <span className="inline-flex items-center rounded-full bg-sinal px-2.5 py-1 text-[0.75rem] font-bold text-[#06101c]">
                Mais recente
              </span>
            ) : null}
          </div>
          <span className="absolute top-3 right-3 rounded-full bg-giz/80 px-2.5 py-1 text-[0.75rem] font-medium text-grafite tabular-nums">
            {ativo + 1} de {projetos.length}
          </span>
          <div className="w-[min(56vw,14.5rem)] rounded-t-[1.7rem] border-x-[5px] border-t-[5px] border-[#10141f] bg-[#10141f] shadow-[0_18px_40px_-16px_rgb(0_0_0/0.6)]">
            <Image
              src={p.coverPhone.src}
              alt={p.coverPhone.alt}
              width={p.coverPhone.width}
              height={p.coverPhone.height}
              sizes="232px"
              priority={ativo === 0}
              className="h-auto w-full rounded-t-[1.3rem]"
            />
          </div>
        </div>

        {/* explicação em palavras simples */}
        <div className="p-5 sm:p-6">
          <p className="text-[0.85rem] text-grafite">
            {p.type} · {p.place.split(",").pop()?.trim()}
          </p>
          <h2 className="mt-1 font-display text-[1.5rem] leading-tight font-semibold text-nanquim">{p.name}</h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-grafite">{p.cardText}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5" aria-label="O que foi entregue">
            {p.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-1.5 text-[0.85rem] text-nanquim">
                <svg aria-hidden viewBox="0 0 16 16" className="size-3.5 text-sinal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8.5l3.2 3.2L13 4.8" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 [&>a]:min-h-11">
            {p.links.site ? (
              <a href={p.links.site} target="_blank" rel="noreferrer" className="btn btn-cheio">
                Abrir o site no ar
              </a>
            ) : null}
            <Link href={`/projetos/${p.slug}`} className="btn btn-linha">
              Ver como foi feito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
