"use client";

import { useEffect, useRef, useState } from "react";
import type { Img } from "@/data/projects";

// O vídeo só começa a baixar quando chega perto da tela.
export function LazyVideo({ src, poster }: { src: string; poster: Img }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisivel(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={visivel ? src : undefined}
      poster={poster.src}
      width={poster.width}
      height={poster.height}
      controls
      muted
      loop
      playsInline
      preload="none"
      aria-label={poster.alt}
      className="block h-auto w-full"
    />
  );
}
