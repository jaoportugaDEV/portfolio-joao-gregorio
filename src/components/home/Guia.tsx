"use client";

// Guia do site: o mini-João no canto, com um balão que muda conforme a seção na tela.
// Dá para esconder o balão; a escolha fica guardada neste navegador.
import { useEffect, useRef, useState } from "react";
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
  // sem animação (ou em tela pequena), o balão mostra o texto inteiro de uma vez: nada de timers
  const [simples, setSimples] = useState(true);
  // em tela pequena o balão só abre quando a pessoa toca no guia
  const pequena = useRef(true);

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
    const estreita = window.matchMedia("(max-width: 1023px)");
    const le = () => {
      pequena.current = estreita.matches;
      setSimples(reduz.matches || estreita.matches);
    };
    le();
    reduz.addEventListener("change", le);
    estreita.addEventListener("change", le);
    return () => {
      reduz.removeEventListener("change", le);
      estreita.removeEventListener("change", le);
    };
  }, []);

  // primeira aparição: acena e, em telas maiores, abre o balão, a menos que a pessoa já tenha escondido
  useEffect(() => {
    let escondido = false;
    try {
      escondido = window.localStorage.getItem(CHAVE) === "1";
    } catch {}
    let t2 = 0;
    const t = window.setTimeout(() => {
      if (!escondido && !pequena.current) {
        setMostrados(0);
        setAberto(true);
      }
      setAcenando(true);
      t2 = window.setTimeout(() => setAcenando(false), 1900);
    }, 1200);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
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

  // efeito de fala: as letras aparecem em sequência (um único timer; a boca segue o ritmo das letras)
  const total = fala.texto.length;
  const visiveis = simples ? total : Math.min(mostrados, total);
  const falando = aberto && visiveis < total;

  useEffect(() => {
    if (!falando) return;
    const id = window.setInterval(() => setMostrados((n) => n + 2), 24);
    return () => window.clearInterval(id);
  }, [falando]);

  const bocaAberta = falando && Math.floor(mostrados / 6) % 2 === 1;

  const alterna = () => {
    const proximo = !aberto;
    if (proximo) setMostrados(0);
    setAberto(proximo);
    try {
      window.localStorage.setItem(CHAVE, proximo ? "0" : "1");
    } catch {}
  };

  return (
    <aside aria-label="Guia do site" className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex items-end gap-2 sm:right-6 sm:bottom-6">
      {aberto ? (
        <div
          key={fala.id}
          className="balao-entra relative mb-6 w-[min(19rem,calc(100vw-6.5rem))] sm:mb-10 sm:w-[min(19rem,calc(100vw-7.5rem))] rounded-2xl rounded-br-md border border-cobalto/40 bg-[#f3f5ff] py-3 pr-11 pl-4 text-[0.92rem] sm:px-4 leading-snug text-[#0b1022] shadow-[0_18px_40px_-14px_rgb(0_0_0/0.8)]"
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
              className="mt-2.5 inline-flex min-h-11 items-center rounded-lg bg-[#4f5dff] px-3 py-1.5 text-[0.85rem] font-semibold text-white hover:bg-[#3b49f0]"
            >
              {fala.acao.rotulo}
            </a>
          ) : null}
          <button
            type="button"
            onClick={alterna}
            aria-label="Esconder o balão do guia"
            className="absolute top-0 right-0 grid size-11 place-items-center text-[1.4rem] leading-none text-[#0b1022] sm:-top-2.5 sm:-left-2.5 sm:right-auto sm:size-7 sm:rounded-full sm:border sm:border-linha sm:bg-giz sm:text-[0.9rem] sm:text-nanquim sm:hover:bg-folha"
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
        className="group relative grid size-14 shrink-0 place-items-end overflow-visible rounded-full border border-linha bg-folha shadow-[0_12px_30px_-10px_rgb(0_0_0/0.8)] transition-colors sm:size-24 [@media(hover:hover)]:hover:border-cobalto"
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
