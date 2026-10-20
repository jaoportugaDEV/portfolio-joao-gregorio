import Image from "next/image";
import Link from "next/link";
import { mensagemPadrao, profile, whatsappLink } from "@/data/profile";
import { janeBolos } from "@/data/projects/jane-bolos";
import { Marca } from "@/components/site/Marca";
import { Seta } from "./Seta";

// A mesa: as peças do projeto mais recente espalhadas, com anotações à mão.
function Mesa() {
  const cores = janeBolos.chapters
    .flatMap((c) => c.blocks)
    .find((b) => b.kind === "palette");

  return (
    <div className="relative aspect-[5/4] w-full">
      <div
        className="mesa-peca peca absolute top-[9%] left-[3%] w-[80%]"
        style={{ "--giro": "-2deg", "--giro-inicial": "-5deg", "--atraso": "80ms" } as React.CSSProperties}
      >
        <Image
          src={janeBolos.cover.src}
          alt={janeBolos.cover.alt}
          width={janeBolos.cover.width}
          height={janeBolos.cover.height}
          sizes="(min-width: 1024px) 460px, 80vw"
          priority
          className="h-auto w-full"
        />
      </div>

      <Marca
        pisca
        className="mesa-peca absolute top-0 -left-[2%] w-[14%] text-cobalto drop-shadow-[0_6px_8px_rgb(22_27_51/0.22)]"
        style={{ "--giro": "-9deg", "--giro-inicial": "-16deg", "--atraso": "640ms" } as React.CSSProperties}
      />

      {cores && cores.kind === "palette" ? (
        <div
          className="mesa-peca peca absolute top-0 right-[3%] flex gap-1.5 !p-2"
          style={{ "--giro": "4deg", "--giro-inicial": "9deg", "--atraso": "260ms" } as React.CSSProperties}
          aria-hidden
        >
          {cores.colors.map((c) => (
            <span
              key={c.hex}
              className="block size-6 rounded-full ring-1 ring-black/10 sm:size-8"
              style={{ background: c.hex }}
            />
          ))}
        </div>
      ) : null}

      <div
        className="mesa-peca peca absolute right-[2%] bottom-[2%] w-[25%]"
        style={{ "--giro": "3deg", "--giro-inicial": "8deg", "--atraso": "380ms" } as React.CSSProperties}
      >
        <Image
          src={janeBolos.coverPhone.src}
          alt={janeBolos.coverPhone.alt}
          width={janeBolos.coverPhone.width}
          height={janeBolos.coverPhone.height}
          sizes="(min-width: 1024px) 150px, 25vw"
          priority
          className="h-auto w-full"
        />
      </div>

      <Image
        src="/projetos/jane-bolos/fatinha.webp"
        alt=""
        width={670}
        height={852}
        sizes="(min-width: 1024px) 100px, 18vw"
        className="mesa-peca absolute bottom-[3%] left-[1%] w-[17%] drop-shadow-[0_8px_10px_rgb(22_27_51/0.25)]"
        style={{ "--giro": "-6deg", "--giro-inicial": "-14deg", "--atraso": "520ms" } as React.CSSProperties}
      />

      <span aria-hidden className="hidden sm:block">
        <span
          className="mesa-nota t-anotacao absolute top-[1%] left-[22%] w-44 text-right"
          style={{ "--atraso": "1100ms" } as React.CSSProperties}
        >
          cores tiradas do panfleto que ela já usava
        </span>
        <Seta
          className="absolute top-[3%] left-[57%] w-14"
          d="M4 18 C 22 6, 40 6, 56 14"
          atraso="950ms"
        />
        <span
          className="mesa-nota t-anotacao absolute bottom-[7%] left-[44%] w-36 text-right"
          style={{ "--atraso": "1300ms" } as React.CSSProperties}
        >
          o pedido sai pronto no WhatsApp
        </span>
        <Seta
          className="absolute bottom-[13%] left-[64%] w-12"
          d="M4 30 C 18 34, 34 26, 46 12"
          atraso="1150ms"
        />
        <span
          className="mesa-nota t-anotacao absolute -bottom-[9%] left-[24%] w-52"
          style={{ "--atraso": "1500ms" } as React.CSSProperties}
        >
          três mascotes, seis expressões cada
        </span>
        <Seta
          className="absolute -bottom-[6%] left-[15%] w-12"
          d="M56 26 C 42 30, 26 26, 12 12"
          atraso="1350ms"
        />
      </span>
      <Link
        href={`/projetos/${janeBolos.slug}`}
        aria-label={`Ver a criação completa do projeto ${janeBolos.name}`}
        className="absolute inset-0 z-10 rounded-[var(--raio-bloco)]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="shell relative isolate grid items-center gap-x-12 gap-y-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:pt-20 lg:pb-12">
      <div aria-hidden className="grade-pontos pointer-events-none absolute inset-0 -z-10 [--ponto:#b9c0d0]" />
      <div>
        <h1 className="t-display max-w-[12ch]">Sites e sistemas para pequenos negócios, feitos um de cada vez.</h1>
        <p className="t-lead muted mt-7 max-w-[46ch]">
          Sou o {profile.name}, desenvolvedor web em Presidente Prudente. Aqui cada projeto aparece por dentro: de onde
          veio a ideia, como a marca nasceu e o que tem no código.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/#projetos" className="btn btn-cheio">
            Ver os projetos
          </Link>
          <a href={whatsappLink(mensagemPadrao)} target="_blank" rel="noreferrer" className="btn btn-linha">
            Chamar no WhatsApp
          </a>
        </div>
      </div>
      <div className="pb-6 sm:pb-10">
        <Mesa />
      </div>
    </section>
  );
}
