// Todos os projetos do portfólio. Um projeto com página de detalhes é um CaseStudy
// e mora no próprio arquivo em src/data/projects/. Para criar um novo, copie jane-bolos.ts.

import { janeBolos } from "./projects/jane-bolos";

export type Img = { src: string; alt: string; width: number; height: number };

// Cores da marca do cliente. Viram variáveis CSS na página do projeto.
export type CaseTheme = {
  bg: string; // fundo da página
  ink: string; // texto e títulos
  accent: string; // cor forte da marca, para áreas grandes
  accentText: string; // versão da cor forte que passa no contraste como texto
  soft: string; // fundo de apoio
  onAccent: string; // texto sobre a cor forte
};

export type Block =
  | { kind: "text"; paragraphs: string[] }
  | { kind: "image"; image: Img; caption?: string; size?: "column" | "wide" }
  | { kind: "gallery"; images: Img[]; caption?: string; layout: "duo" | "screens" | "pages" }
  | { kind: "palette"; colors: { name: string; hex: string; use: string }[]; note?: string }
  | { kind: "type"; fonts: { name: string; font: "display" | "script" | "text"; role: string; sample: string }[] }
  | { kind: "voice"; yes: string[]; no: string[] }
  | { kind: "cast"; characters: { name: string; what: string; text: string; image: Img }[] }
  | { kind: "features"; items: { title: string; text: string }[] }
  | { kind: "video"; src: string; poster: Img; caption?: string };

export type Chapter = { id: string; title: string; blocks: Block[] };

export type CaseStudy = {
  kind: "case";
  slug: string;
  name: string;
  type: string;
  place: string;
  year: string;
  summary: string;
  cardText: string;
  facts: { label: string; value: string }[];
  links: { site?: string };
  cover: Img;
  coverPhone: Img;
  showcase: Img; // imagem do card na home
  sticker?: Img; // mascote ou selo por cima do card
  deliverables: string[];
  theme: CaseTheme;
  chapters: Chapter[];
  note: { title: string; paragraphs: string[] };
};

export type SimpleProject = {
  kind: "simple";
  name: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  confidential?: boolean;
};

export type UpcomingProject = {
  kind: "upcoming";
  name: string;
  type: string;
  description: string;
};

export const caseStudies: CaseStudy[] = [janeBolos];

export const otherProjects: SimpleProject[] = [
  {
    kind: "simple",
    name: "Buffet Fácil",
    status: "Em validação com clientes reais",
    description:
      "Sistema de gestão para buffets: clientes, freelancers, festas, contratos, orçamento automático, pagamentos e financeiro num lugar só.",
    highlights: [
      "Login, regras de negócio e permissões por tipo de usuário.",
      "Orçamentos automáticos e controle de pagamentos.",
      "Relatórios de lucro e despesas para decidir com números.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Zustand", "React Hook Form", "Zod", "Tailwind CSS"],
  },
  {
    kind: "simple",
    name: "App de suporte da E-coordina",
    status: "Trabalho em empresa, Portugal",
    description:
      "Participei do desenvolvimento do aplicativo de suporte aos produtos da empresa e da organização dos fluxos de atendimento.",
    highlights: [
      "Melhoria dos fluxos de resolução de problemas.",
      "Trabalho junto das equipes de programação e de marketing.",
    ],
    stack: ["Aplicativo de suporte", "Fluxos de atendimento"],
    confidential: true,
  },
  {
    kind: "simple",
    name: "Laboratório de IA aplicada",
    status: "Estudo em andamento",
    description:
      "Protótipos de automação com n8n, integrações com modelos de linguagem e primeiros testes de RAG.",
    highlights: [
      "Fluxos no n8n ligando dados, APIs e etapas com IA.",
      "Estudos de agentes e assistentes que respondem guiados por documentos.",
    ],
    stack: ["n8n", "LLMs", "RAG", "Python", "TypeScript"],
  },
];

export const upcomingProjects: UpcomingProject[] = [
  {
    kind: "upcoming",
    name: "Zero18 Burger",
    type: "Site conceito",
    description: "Hamburgueria de Presidente Prudente, o segundo da série de sites para negócios da cidade.",
  },
  {
    kind: "upcoming",
    name: "Contec Contabilidade",
    type: "Site conceito",
    description: "Escritório de contabilidade de Presidente Prudente. O terceiro da série.",
  },
];

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
