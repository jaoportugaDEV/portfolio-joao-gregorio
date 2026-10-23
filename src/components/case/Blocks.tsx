import Image from "next/image";
import type { BrandFonts } from "@/app/projetos/[slug]/fonts";
import type { Block, Img } from "@/data/projects";
import { LazyVideo } from "./LazyVideo";

const linhaSuave = { borderColor: "color-mix(in srgb, var(--case-ink) 22%, transparent)" };

function Figura({ image, sizes, caption }: { image: Img; sizes: string; caption?: string }) {
  return (
    <figure>
      <div className="peca">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} className="h-auto w-full" />
      </div>
      {caption ? <figcaption className="muted mt-3 text-[0.9rem]">{caption}</figcaption> : null}
    </figure>
  );
}

// Em telas pequenas as galerias viram uma coluna só; prints estreitos (celular) não esticam a largura toda.
function mobileFino(layout: string, proporcao: number) {
  return layout !== "pages" && proporcao < 0.8 ? "mx-auto w-[62%] max-w-[16rem] sm:w-auto sm:max-w-none" : "";
}

function sizesGaleria(layout: string) {
  if (layout === "screens") return "(min-width: 1200px) 640px, (min-width: 640px) 55vw, 92vw";
  if (layout === "duo") return "(min-width: 1200px) 560px, (min-width: 640px) 50vw, 92vw";
  return "(min-width: 1200px) 440px, (min-width: 640px) 45vw, 92vw";
}

export function BlockView({ block, fonts }: { block: Block; fonts?: BrandFonts }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="texto space-y-5 text-[1.1rem] leading-[1.7]">
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      );

    case "features":
      return (
        <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {block.items.map((it) => (
            <li key={it.title} className="border-t-2 pt-4" style={linhaSuave}>
              <h3 className="text-[1.05rem] font-semibold">{it.title}</h3>
              <p className="muted mt-1.5">{it.text}</p>
            </li>
          ))}
        </ul>
      );

    case "voice":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--raio-bloco)] p-6" style={{ background: "var(--case-soft)" }}>
            <h3 className="font-semibold">Fala assim</h3>
            <ul className="mt-3 space-y-2.5">
              {block.yes.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span aria-hidden className="font-bold">✓</span>
                  <span>&ldquo;{t}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--raio-bloco)] border-[1.5px] border-dashed p-6" style={linhaSuave}>
            <h3 className="font-semibold">E não assim</h3>
            <ul className="mt-3 space-y-2.5">
              {block.no.map((t) => (
                <li key={t} className="muted flex gap-2.5">
                  <span aria-hidden className="font-bold">✕</span>
                  <span className="line-through decoration-1">&ldquo;{t}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "image":
      return (
        <div className={block.size === "column" ? "max-w-[44rem]" : ""}>
          <Figura image={block.image} caption={block.caption} sizes="(min-width: 1200px) 900px, 92vw" />
        </div>
      );

    case "gallery": {
      const grid =
        block.layout === "screens"
          ? "sm:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] items-end"
          : block.layout === "duo"
            ? "sm:grid-cols-[minmax(0,1fr)_minmax(0,0.56fr)] items-end"
            : "sm:grid-cols-2 items-start";
      return (
        <figure>
          <div className={`grid gap-4 sm:gap-6 ${grid}`}>
            {block.images.map((im) => (
              <div key={im.src} className={`peca ${mobileFino(block.layout, im.width / im.height)}`}>
                <Image
                  src={im.src}
                  alt={im.alt}
                  width={im.width}
                  height={im.height}
                  sizes={sizesGaleria(block.layout)}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
          {block.caption ? <figcaption className="muted mt-3 text-[0.9rem]">{block.caption}</figcaption> : null}
        </figure>
      );
    }

    case "palette":
      return (
        <figure>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {block.colors.map((c) => (
              <li key={c.hex}>
                <div
                  className="aspect-[4/3] rounded-[var(--raio-peca)] ring-1 ring-black/10 sm:aspect-[3/4]"
                  style={{ background: c.hex }}
                />
                <p className="mt-2.5 font-semibold">{c.name}</p>
                <p className="muted text-[0.9rem] tabular-nums">{c.hex}</p>
                <p className="muted mt-1 text-[0.9rem] leading-snug">{c.use}</p>
              </li>
            ))}
          </ul>
          {block.note ? <figcaption className="mt-5 text-[1.05rem] italic">{block.note}</figcaption> : null}
        </figure>
      );

    case "type":
      return (
        <ul className="divide-y border-y" style={linhaSuave}>
          {block.fonts.map((f) => (
            <li key={f.name} className="grid gap-3 py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8" style={linhaSuave}>
              <div>
                <p className="font-semibold">{f.name}</p>
                <p className="muted mt-1 text-[0.9rem] leading-snug">{f.role}</p>
              </div>
              <p
                className={`${fonts?.[f.font] ?? ""} break-words ${
                  f.font === "display"
                    ? "text-[clamp(2.2rem,5vw,3.6rem)] leading-none"
                    : f.font === "script"
                      ? "text-[clamp(2rem,4.4vw,3.2rem)] leading-tight"
                      : "text-[1.35rem]"
                }`}
                style={f.font === "script" ? { color: "var(--case-accent-text)" } : undefined}
              >
                {f.sample}
              </p>
            </li>
          ))}
        </ul>
      );

    case "cast":
      return (
        <ul className="grid gap-6 sm:grid-cols-3">
          {block.characters.map((c) => (
            <li key={c.name}>
              <div
                className="grid h-64 place-items-center rounded-[var(--raio-bloco)] p-6"
                style={{ background: "var(--case-soft)" }}
              >
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  width={c.image.width}
                  height={c.image.height}
                  sizes="(min-width: 640px) 240px, 70vw"
                  className="h-full max-h-52 w-auto object-contain"
                />
              </div>
              <p className={`${fonts?.script ?? "font-display"} mt-4 text-[1.75rem] leading-none`} style={{ color: "var(--case-accent-text)" }}>
                {c.name}
              </p>
              <p className="muted mt-1 text-[0.9rem]">{c.what}</p>
              <p className="mt-2">{c.text}</p>
            </li>
          ))}
        </ul>
      );

    case "video":
      return (
        <figure>
          <div className="peca">
            <LazyVideo src={block.src} poster={block.poster} />
          </div>
          {block.caption ? <figcaption className="muted mt-3 text-[0.9rem]">{block.caption}</figcaption> : null}
        </figure>
      );
  }
}
