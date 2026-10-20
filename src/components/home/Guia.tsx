"use client";

// Guia do site: o mini-João no canto, com um balão que muda conforme a seção na tela.
// Dá para esconder o balão; a escolha fica guardada neste navegador.
import { useEffect, useState } from "react";
import { mensagemPadrao, whatsappLink } from "@/data/profile";
import { MiniJoao } from "@/components/site/MiniJoao";

type Fala = { id: string; texto: string; acao?: { rotulo: string; href: string } };

const FALAS: Fala[] = [
  { id: "inicio", texto: "Oi! Eu sou o João, em versão de bolso. Vou te acompanhando pelo site." },
  {
    id: "projetos",
    texto: "Esses sites eu fiz por conta própria, para negócios reais aqui da região. Clica num deles para ver a criação por dentro.",
  },
  { id: "como-trabalho", texto: "Antes de programar, eu entendo como o seu negócio funciona. O código vem depois." },
  {
    id: "sobre",
    texto: "Me formei em Portugal e trabalhei lá de 2023 a 2025, numa equipe internacional. Hoje estou de volta a Prudente.",
  },
  {
    id: "contato",
    texto: "Gostou de algum? Me chama no WhatsApp e a gente conversa sobre o seu negócio.",
    acao: { rotulo: "Chamar no WhatsApp", href: whatsappLink(mensagemPadrao) },
  },
];

const CHAVE = "guia-escondido";

export function Guia() {
  const [fala, setFala] = useState<Fala>(FALAS[0]);
  const [mostrados, setMostrados] = useState(0); // letras já "faladas"
  const [aberto, setAberto] = useState(false);
  const [acenando, setAcenando] = useState(false);
  // sem animação, o balão mostra o texto inteiro de uma vez (o balão só aparece no navegador)
  const [reduz] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // primeira aparição: acena e abre o balão, a menos que a pessoa já tenha escondido
  useEffect(() => {
    let escondido = false;
    try {
      escondido = window.localStorage.getItem(CHAVE) === "1";
    } catch {}
    const t = window.setTimeout(() => {
      if (!escondido) {
        setMostrados(0);
        setAberto(true);
      }
      setAcenando(true);
      window.setTimeout(() => setAcenando(false), 1900);
    }, 1200);
    return () => window.clearTimeout(t);
  }, []);

  // qual seção está no meio da tela
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        const vista = entradas.find((e) => e.isIntersecting);
        const nova = vista && FALAS.find((f) => f.id === vista.target.id);
        if (nova) {
          setFala((atual) => {
            if (atual.id === nova.id) return atual;
            setMostrados(0);
            return nova;
          });
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    FALAS.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // efeito de fala: as letras aparecem em sequência (sem animação, o texto vem inteiro)
  const total = fala.texto.length;
  const visiveis = reduz ? total : Math.min(mostrados, total);
  const falando = aberto && visiveis < total;

  useEffect(() => {
    if (!falando) return;
    const id = window.setInterval(() => setMostrados((n) => n + 2), 24);
    return () => window.clearInterval(id);
  }, [falando]);

  // boca mexe enquanto fala
  const [mexe, setMexe] = useState(false);
  useEffect(() => {
    if (!falando) return;
    const id = window.setInterval(() => setMexe((b) => !b), 130);
    return () => window.clearInterval(id);
  }, [falando]);
  const bocaAberta = falando && mexe;

  const alterna = () => {
    const proximo = !aberto;
    if (proximo) setMostrados(0);
    setAberto(proximo);
    try {
      window.localStorage.setItem(CHAVE, proximo ? "0" : "1");
    } catch {}
  };

  return (
    <aside aria-label="Guia do site" className="fixed right-3 bottom-3 z-40 flex items-end gap-2 sm:right-6 sm:bottom-6">
      {aberto ? (
        <div
          key={fala.id}
          className="balao-entra relative mb-10 w-[min(19rem,calc(100vw-7.5rem))] rounded-2xl rounded-br-md border border-cobalto/40 bg-[#f3f5ff] px-4 py-3 text-[0.92rem] leading-snug text-[#0b1022] shadow-[0_18px_40px_-14px_rgb(0_0_0/0.8)]"
        >
          <p>
            {fala.texto.slice(0, visiveis)}
            <span className="invisible">{fala.texto.slice(visiveis)}</span>
          </p>
          {fala.acao && !falando ? (
            <a
              href={fala.acao.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 inline-flex rounded-lg bg-[#4f5dff] px-3 py-1.5 text-[0.85rem] font-semibold text-white hover:bg-[#3b49f0]"
            >
              {fala.acao.rotulo}
            </a>
          ) : null}
          <button
            type="button"
            onClick={alterna}
            aria-label="Esconder o balão do guia"
            className="absolute -top-2.5 -left-2.5 grid size-7 place-items-center rounded-full border border-linha bg-giz text-[0.9rem] leading-none text-nanquim hover:bg-folha"
          >
            ×
          </button>
          <span aria-hidden className="absolute -right-[7px] bottom-3 size-3.5 rotate-45 border-t border-r border-cobalto/40 bg-[#f3f5ff]" />
        </div>
      ) : null}
      <button
        type="button"
        onClick={alterna}
        aria-label={aberto ? "Esconder o balão do guia" : "Mostrar o que o guia tem a dizer"}
        aria-expanded={aberto}
        className="group relative grid size-20 shrink-0 place-items-end overflow-visible rounded-full border border-linha bg-folha shadow-[0_12px_30px_-10px_rgb(0_0_0/0.8)] transition-colors hover:border-cobalto sm:size-24"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgb(107_120_255/0.35),transparent_65%)]" />
        </span>
        <span className={`guia-boneco relative block w-[86%] translate-x-[7%] ${acenando ? "guia-acenando" : ""}`}>
          <MiniJoao boca={bocaAberta ? "aberta" : "sorriso"} className="h-auto w-full" />
        </span>
        {!aberto ? (
          <span aria-hidden className="absolute -top-1 -right-1 size-3.5 rounded-full border-2 border-giz bg-sinal" />
        ) : null}
      </button>
    </aside>
  );
}
