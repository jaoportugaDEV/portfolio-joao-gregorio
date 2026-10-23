import { Anton, Barlow, Figtree, Fraunces, Lilita_One, Nunito, Pacifico, Poppins, Shrikhand, Yellowtail } from "next/font/google";

// Fontes da marca de cada cliente, usadas no espécime de tipografia e nos nomes dos mascotes.
// O next/font só carrega estas fontes na página do projeto.
const fraunces = Fraunces({ subsets: ["latin"], weight: "900", display: "swap", preload: false });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const nunito = Nunito({ subsets: ["latin"], weight: ["400"], display: "swap", preload: false });
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const yellowtail = Yellowtail({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const barlow = Barlow({ subsets: ["latin"], weight: ["400"], display: "swap", preload: false });
const lilita = Lilita_One({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"], display: "swap", preload: false });
const figtree = Figtree({ subsets: ["latin"], weight: ["400"], display: "swap", preload: false });

export type BrandFonts = { display: string; script: string; text: string };

export const brandFonts: Record<string, BrandFonts> = {
  "jane-bolos": {
    display: fraunces.className,
    script: pacifico.className,
    text: nunito.className,
  },
  "zero18-burger": {
    display: anton.className,
    script: yellowtail.className,
    text: barlow.className,
  },
  "arca-de-noe": {
    display: lilita.className,
    script: lilita.className,
    text: nunito.className,
  },
  "oh-my-dog-hotdog": {
    display: lilita.className,
    script: shrikhand.className,
    text: figtree.className,
  },
  "grandizolis-pizzaria": {
    display: poppins.className,
    script: pacifico.className,
    text: poppins.className,
  },
};
