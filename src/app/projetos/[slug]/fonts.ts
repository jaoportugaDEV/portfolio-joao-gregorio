import { Fraunces, Nunito, Pacifico } from "next/font/google";

// Fontes da marca de cada cliente, usadas no espécime de tipografia e nos nomes dos mascotes.
// O next/font só carrega estas fontes na página do projeto.
const fraunces = Fraunces({ subsets: ["latin"], weight: "900", display: "swap" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "800"], display: "swap" });

export type BrandFonts = { display: string; script: string; text: string };

export const brandFonts: Record<string, BrandFonts> = {
  "jane-bolos": {
    display: fraunces.className,
    script: pacifico.className,
    text: nunito.className,
  },
};
