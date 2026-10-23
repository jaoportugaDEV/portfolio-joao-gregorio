"use client";

// Vitrine do hero: o cliente escolhe um projeto e vê como o site ficou no celular, em linguagem simples.
// Tudo fica no fluxo normal da página (sem posição absoluta fora da caixa), então nada passa da tela.
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "@/data/projects";

const nomeCurto = (p: CaseStudy) => p.name.split(",")[0].replace(" Sorveteria", "").replace(" Hot Dog", " Hotdog");

export function Vitrine({ projetos }: { projetos: CaseStudy[] }) {
  const [ativo, setAtivo] = useState(0);
  const p = projetos[ativo];

  return (
    <div className="mx-auto w-full max-w-[34rem]">
      {/* escolha do projeto: quebra em linhas, nunca passa da largura */}
      <div role="tablist" aria-label="Projetos" className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {projetos.map((proj, i) => (
          <button
            key={proj.slug}
            role="tab"
            aria-selected={i === ativo}
            onClick={() => setAtivo(i)}
            className={`min-h-11 rounded-full border px-3 text-[0.9rem] font-semibold transition-colors ${
              i === ativo ? "border-transparent bg-cobalto text-white" : "border-linha text-grafite [@media(hover:hover)]:hover:text-nanquim"
            }`}
          >
            {nomeCurto(proj)}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-[var(--raio-bloco)] border border-linha bg-folha/90 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)]">
        {/* palco: o site no celular, na cor da marca do cliente */}
        <div
          key={p.slug}
          className="previa-sobe relative grid place-items-center px-4 pt-7 pb-0"
          style={{ background: `linear-gradient(160deg, ${p.theme.soft}, ${p.theme.bg})` }}
        >
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-linha bg-giz px-2.5 py-1 text-[0.75rem] font-medium text-nanquim">
            <span aria-hidden className="size-1.5 rounded-full bg-sinal shadow-[0_0_8px_var(--sinal)]" />
            No ar agora
          </span>
          <div className="w-[min(52vw,13.5rem)] rounded-t-[1.6rem] border-x-[5px] border-t-[5px] border-[#10141f] bg-[#10141f] shadow-[0_18px_40px_-16px_rgb(0_0_0/0.6)]">
            <Image
              src={p.coverPhone.src}
              alt={p.coverPhone.alt}
              width={p.coverPhone.width}
              height={p.coverPhone.height}
              sizes="216px"
              priority={ativo === 0}
              className="h-auto w-full rounded-t-[1.2rem]"
            />
          </div>
        </div>

        {/* explicação em palavras simples */}
        <div className="p-5">
          <p className="text-[0.85rem] text-grafite">
            {p.type} · {p.place.split(",").pop()?.trim()}
          </p>
          <h2 className="mt-1 text-[1.25rem] leading-tight font-semibold text-nanquim">{p.name}</h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-grafite">{p.cardText}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="O que foi entregue">
            {p.deliverables.map((d) => (
              <li key={d} className="rounded-full border border-linha px-3 py-1 text-[0.82rem] text-nanquim">
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
