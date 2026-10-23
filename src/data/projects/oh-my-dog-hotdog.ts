import type { CaseStudy, Img } from "../projects";

const base = "/projetos/oh-my-dog-hotdog";
const img = (file: string, alt: string, width: number, height: number): Img => ({
  src: `${base}/${file}`,
  alt,
  width,
  height,
});
const tela = (file: string, alt: string) => img(file, alt, 2160, 1350);
const celular = (file: string, alt: string) => img(file, alt, 780, 1688);

export const ohMyDog: CaseStudy = {
  kind: "case",
  slug: "oh-my-dog-hotdog",
  name: "Oh My Dog Hot Dog",
  type: "Site conceito",
  place: "Tiradentes, 672, Pirapozinho/SP",
  year: "2026",
  summary:
    "A Oh My Dog acabou de abrir em Pirapozinho e já tem uma mascote que todo mundo lembra: uma salsicha ruiva de pelo longo e boné verde. Ainda não tem site nem cardápio na internet, só o Instagram. Fiz por conta própria um site noturno e ilustrado, com a loja amarela na primeira tela, o dog montado camada por camada e a mascote reagindo a cada escolha.",
  cardText:
    "Site ilustrado para uma lanchonete recém-aberta: a fachada acende de noite, o dog se monta enquanto a página rola e a Mostarda, a mascote, comenta cada recheio.",
  facts: [
    { label: "Cliente", value: "Oh My Dog Hot Dog (projeto conceito, sem vínculo oficial)" },
    { label: "Meu papel", value: "Conceito, direção de arte, ilustração da mascote, texto e código" },
    { label: "Entregas", value: "Site com montador de pedido, cena de montagem no scroll, cardápio em lousa e mascote com 6 expressões" },
    { label: "Ferramentas", value: "Next.js, TypeScript, Tailwind, GSAP, Lenis e Motion" },
  ],
  links: { site: "https://oh-my-dog-hotdog.vercel.app" },
  cover: tela("site-desktop.jpg", "Primeira tela do site da Oh My Dog: o título Sua noite pede um dog ao lado da fachada amarela com toldo verde e a mascote na porta"),
  coverPhone: celular("site-celular.jpg", "Site da Oh My Dog aberto no celular"),
  showcase: img("site-desktop-capa.jpg", "O site da Oh My Dog num notebook e num celular, sobre o verde e o amarelo da marca", 2160, 1350),
  sticker: img("turma.webp", "A Mostarda piscando, comemorando e com fome", 704, 245),
  deliverables: ["Site", "Mascote", "Montador", "Cardápio"],
  theme: {
    bg: "#0F2E22",
    ink: "#FBF1DC",
    accent: "#FFC21A",
    accentText: "#FFC21A",
    soft: "#1B4332",
    onAccent: "#3A1C10",
  },
  chapters: [
    {
      id: "ponto-de-partida",
      title: "O ponto de partida",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A Oh My Dog abriu há pouco na Tiradentes, 672, em Pirapozinho, e funciona de quinta a terça, das 19h às 23h. O primeiro post do Instagram foi um aviso de \"novidade chegando\", e em poucas semanas a página passou de mil seguidores.",
            "O Instagram já tinha uma identidade forte: a cachorra salsicha ruiva de boné verde apoiada numa placa de madeira, o toldo listrado, a lousa e a toalha xadrez. A fachada da loja é amarela. Em vez de inventar uma marca nova, levei esse mundo inteiro para o site.",
          ],
        },
        {
          kind: "features",
          items: [
            { title: "Quem pede", text: "Gente da cidade decidindo o lanche da noite pelo celular, muitas vezes já com fome." },
            { title: "O que falta", text: "Um cardápio que dê para ver fora do Instagram e um jeito rápido de mandar o pedido." },
            { title: "O que não pode faltar", text: "Horário, endereço e o WhatsApp da loja sempre por perto." },
          ],
        },
      ],
    },
    {
      id: "marca",
      title: "A marca que já existia",
      blocks: [
        {
          kind: "palette",
          colors: [
            { name: "Boné", hex: "#4E7A3D", use: "Toldo, xadrez e o boné da mascote" },
            { name: "Madeira", hex: "#9A6232", use: "A placa onde a mascote apoia as patas e a moldura da lousa" },
            { name: "Creme", hex: "#FBF1DC", use: "Letreiros, crachá da marca e fundos claros" },
            { name: "Amarelo", hex: "#FFC21A", use: "Botões e a sombra dos letreiros" },
            { name: "Ruivo", hex: "#C2602A", use: "Pelagem da mascote e detalhes quentes" },
          ],
          note: "As cores saíram dos posts e da foto da fachada. O fundo é o verde-noite desta página, porque a loja só abre às 19h, e o amarelo da parede virou a seção de endereço.",
        },
        {
          kind: "type",
          fonts: [
            { name: "Lilita One", font: "display", role: "Letreiros, com contorno verde e sombra amarela como nas artes deles", sample: "Sua noite pede um dog." },
            { name: "Shrikhand", font: "script", role: "Assinatura da marca, redesenhada a partir do crachá", sample: "Oh, My Dog" },
            { name: "Figtree", font: "text", role: "Texto corrido e botões", sample: "Hot dog na Tiradentes, de quinta a terça, das 19h às 23h." },
          ],
        },
        {
          kind: "text",
          paragraphs: [
            "Redesenhei a mascote em vetor, no mesmo traço de adesivo com contorno grosso dos outros projetos da série, para ela poder mexer as orelhas, piscar e mudar de cara conforme o que acontece na página. Dei a ela o nome de Mostarda, que é só uma sugestão para a dona.",
          ],
        },
        {
          kind: "cast",
          characters: [
            {
              name: "Feliz",
              what: "Na porta da loja",
              text: "Aparece atrás da placa de madeira quando o site abre e dá uma piscadinha.",
              image: img("mostarda-feliz.webp", "Mostarda feliz, com as patas na placa Oh My Dog", 534, 496),
            },
            {
              name: "Com fome",
              what: "No montador",
              text: "Lambe o focinho a cada recheio que cai no pão e se assusta quando um sai.",
              image: img("mostarda-lambendo.webp", "Mostarda lambendo o focinho", 362, 496),
            },
            {
              name: "Cochilando",
              what: "Com a loja fechada",
              text: "No fim da página, ela dorme na placa fora do horário e comemora quando a loja está aberta.",
              image: img("mostarda-dormindo.webp", "Mostarda cochilando de olhos fechados", 363, 496),
            },
          ],
        },
        {
          kind: "image",
          image: img("site-desktop-mostarda.jpg", "Seção Conheça a Mostarda, com as seis expressões em fotos de polaroide", 2160, 860),
          caption: "As seis expressões no próprio site, como polaroides presas na parede.",
          size: "wide",
        },
      ],
    },
    {
      id: "site",
      title: "O site",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A primeira tela é a própria loja à noite. O toldo desce, as lâmpadas do varal acendem uma por uma e a Mostarda sobe atrás da placa. O letreiro de neon na vitrine lê o horário de verdade: mostra \"aberto\", \"abre 19h\" ou \"fechado\" conforme o dia e a hora.",
            "Logo abaixo, a página para enquanto a pessoa rola e o Dog da Casa é montado ali mesmo: pão, salsicha, purê, milho e ervilha, queijo derretendo, chuva de batata palha e os três molhos desenhados em zigue-zague. A Mostarda comenta cada etapa num balão.",
          ],
        },
        {
          kind: "image",
          image: tela("site-desktop-como-nasce.jpg", "Cena Como nasce um Oh My Dog no fim da montagem, com a lista de etapas e o dog completo"),
          caption: "Fim da cena: sete etapas, e a Mostarda comemorando o dog pronto.",
          size: "wide",
        },
        {
          kind: "gallery",
          layout: "screens",
          images: [
            tela("site-desktop-monte.jpg", "Montador de dog com os recheios em botões e o total somado"),
            celular("site-celular-monte.jpg", "Montador de dog no celular"),
          ],
          caption: "O montador: cada recheio cai no pão, o total soma na hora e o pedido sai escrito para o WhatsApp da loja.",
        },
        {
          kind: "image",
          image: tela("site-desktop-lousa.jpg", "Cardápio em lousa verde com moldura de madeira e preços a giz"),
          caption: "O cardápio virou lousa, com nomes como Au Au Simples e Vira-lata Caramelo. Itens e preços são exemplos.",
          size: "wide",
        },
        {
          kind: "features",
          items: [
            { title: "Pedido pronto", text: "O montador e cada item da lousa abrem o WhatsApp da loja com a mensagem já escrita." },
            { title: "Horário de verdade", text: "Neon, selo do topo, placa de horário e o fecho da página leem o relógio de Pirapozinho." },
            { title: "Onde fica", text: "A seção de endereço é a parede amarela da loja, com a placa de horário pendurada." },
            { title: "Celular primeiro", text: "A cena de montagem e o montador foram pensados para a tela pequena, com o balão da mascote fora do caminho." },
          ],
        },
        {
          kind: "image",
          image: tela("site-desktop-onde.jpg", "Seção Onde estamos na parede amarela, com a placa de horário de madeira"),
          size: "wide",
        },
      ],
    },
    {
      id: "bastidores",
      title: "Bastidores técnicos",
      blocks: [
        {
          kind: "features",
          items: [
            { title: "Tudo em vetor", text: "Mascote, fachada e hot dog são SVG feitos à mão. Não tem foto de banco nem imagem gerada por IA." },
            { title: "Um dog, dois usos", text: "O mesmo desenho em camadas serve para a cena do scroll, animada com GSAP, e para o montador, animado com Motion." },
            { title: "Movimento com respeito", text: "Com a redução de movimento ligada, a cena não prende a rolagem e já mostra o dog completo." },
            { title: "Sem bater cabeça com o servidor", text: "O horário é calculado no navegador depois de carregar, então a página do servidor e a do celular nunca discordam." },
          ],
        },
      ],
    },
  ],
  note: {
    title: "Por que eu fiz",
    paragraphs: [
      "A Oh My Dog nasceu com uma mascote e um visual que muita marca grande não tem. Fiz este site sem ela pedir, para mostrar que dá para levar esse jeito para a internet desde o começo, com o cardápio à mão e o pedido a dois toques do WhatsApp.",
    ],
  },
};
