"use client";

// Janela de editor: o projeto vira código e o código vira o site publicado.
// Na primeira visita as linhas se digitam uma vez; depois, as abas trocam de projeto na hora.
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { CaseStudy } from "@/data/projects";
import { Marca } from "@/components/site/Marca";

type Token = { t: string; c?: "chave" | "texto" | "fn" | "nota" };

function linhasDo(p: CaseStudy): Token[][] {
  const cidade = p.place.split(",").pop()?.trim() ?? p.place;
  const dominio = p.links.site?.replace("https://", "") ?? "";
  return [
    [{ t: "const ", c: "fn" }, { t: "projeto = {" }],
    [{ t: "  cliente", c: "chave" }, { t: ": " }, { t: `"${p.name}"`, c: "texto" }, { t: "," }],
    [{ t: "  cidade", c: "chave" }, { t: ": " }, { t: `"${cidade}"`, c: "texto" }, { t: "," }],
    [{ t: "  entregas", c: "chave" }, { t: ": [" }, { t: p.deliverables.map((d) => `"${d}"`).join(", "), c: "texto" }, { t: "]," }],
    [{ t: "};" }],
    [],
    [{ t: "publicar", c: "fn" }, { t: "(projeto); " }, { t: `// ${dominio}`, c: "nota" }],
  ];
}

const cor: Record<NonNullable<Token["c"]>, string> = {
  chave: "text-[#9aa5ff]",
  texto: "text-sinal",
  fn: "text-[#c4a7ff]",
  nota: "text-grafite",
};

export function Editor({ projetos }: { projetos: CaseStudy[] }) {
  // começa pelo mais recente
  const [ativo, setAtivo] = useState(projetos.length - 1);
  const [primeira, setPrimeira] = useState(true);
  const p = projetos[ativo];
  const linhas = linhasDo(p);

  // no celular as abas não cabem: rola a barra (só ela) até a aba ativa
  const abas = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const barra = abas.current;
    const aba = barra?.children[ativo] as HTMLElement | undefined;
    if (barra && aba) barra.scrollLeft = aba.offsetLeft - barra.offsetLeft - 8;
  }, [ativo]);

  // tamanho de cada linha e quando ela começa a ser digitada
  const tamanhos = linhas.map((tokens) => Math.max(tokens.map((k) => k.t).join("").length, 1));
  const inicios = tamanhos.map((_, i) => 350 + tamanhos.slice(0, i).reduce((s, ch) => s + ch * 28 + 90, 0));
  const fim = inicios[inicios.length - 1] + tamanhos[tamanhos.length - 1] * 28;

  const render: ReactNode[] = linhas.map((tokens, i) => {
    const style = { "--ch": tamanhos[i], "--atraso": `${inicios[i]}ms` } as CSSProperties;
    return (
      <span key={i} className="codigo-linha" style={style}>
        {tokens.length ? tokens.map((k, j) => (
          <span key={j} className={k.c ? cor[k.c] : undefined}>
            {k.t}
          </span>
        )) : " "}
      </span>
    );
  });
  const fimDigitacao = primeira ? fim : 0;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--raio-bloco)] border border-linha bg-folha/90 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] backdrop-blur">
        {/* barra da janela com abas */}
        <div className="flex items-center gap-3 border-b border-linha px-4 py-2.5">
          <Marca pisca title="Marca jg" className="size-6 shrink-0 text-cobalto" />
          <div ref={abas} role="tablist" aria-label="Projetos no editor" className="flex min-w-0 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projetos.map((proj, i) => (
              <button
                key={proj.slug}
                role="tab"
                aria-selected={i === ativo}
                onClick={() => {
                  setAtivo(i);
                  setPrimeira(false);
                }}
                className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-[0.78rem] transition-colors ${
                  i === ativo ? "bg-cobalto-claro text-nanquim" : "text-grafite hover:text-nanquim"
                }`}
              >
                {proj.slug}.ts
              </button>
            ))}
          </div>
        </div>

        {/* código */}
        <pre
          key={`${p.slug}-${primeira}`}
          className={`min-h-[13.5rem] overflow-hidden px-5 pt-5 pb-36 font-mono text-[0.68rem] leading-[1.75] text-nanquim sm:text-[0.86rem] ${
            primeira ? "" : "codigo-pronto"
          }`}
          aria-label={`Código do projeto ${p.name}`}
        >
          <code>{render}</code>
          <span aria-hidden className="cursor" />
        </pre>
      </div>

      {/* prévia do site publicado */}
      <Link
        key={p.slug}
        href={`/projetos/${p.slug}`}
        aria-label={`Ver a criação completa do projeto ${p.name}`}
        className="previa-sobe group absolute -bottom-16 right-[-4%] w-[58%] sm:right-[-6%]"
        style={{ "--atraso": `${fimDigitacao}ms` } as CSSProperties}
      >
        <div className="peca transition-transform duration-300 group-hover:-translate-y-1">
          <Image
            src={p.cover.src}
            alt=""
            width={p.cover.width}
            height={p.cover.height}
            sizes="(min-width: 1024px) 420px, 70vw"
            priority
            className="h-auto w-full"
          />
        </div>
        <span className="absolute -top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-linha bg-giz px-2.5 py-1 text-[0.75rem] font-medium text-nanquim">
          <span aria-hidden className="size-1.5 rounded-full bg-sinal shadow-[0_0_8px_var(--sinal)]" />
          Publicado
        </span>
      </Link>
    </div>
  );
}
