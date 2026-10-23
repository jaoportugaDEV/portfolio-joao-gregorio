import type { CaseStudy, Img } from "../projects";

const base = "/projetos/zero18-burger";
const img = (file: string, alt: string, width: number, height: number): Img => ({
  src: `${base}/${file}`,
  alt,
  width,
  height,
});
const tela = (file: string, alt: string) => img(file, alt, 2160, 1350);

export const zero18Burger: CaseStudy = {
  kind: "case",
  slug: "zero18-burger",
  name: "Zero18 Burger",
  type: "Site conceito",
  place: "Jardim Bongiovani, Presidente Prudente/SP",
  year: "2026",
  summary:
    "A Zero18 foi eleita três vezes a melhor hamburgueria de Prudente, tem 4,7 no Google e quase 19 mil seguidores no Instagram, mas não tem site: o cardápio mora no MenuDino. Fiz por conta própria um site escuro, gráfico e cheio de movimento, com cara de parrilla, para mostrar como a marca pode aparecer na internet com a mesma fome que ela tem no balcão.",
  cardText:
    "Site escuro e cheio de animação para a hamburgueria três vezes campeã de Prudente: o Gladiador montado ingrediente por ingrediente, o Me Gusta Chicken pegando fogo e um quiz que escolhe o seu burger.",
  facts: [
    { label: "Cliente", value: "Zero18 Burger (projeto conceito, sem vínculo oficial)" },
    { label: "Meu papel", value: "Conceito, direção de arte, texto, código e vídeo" },
    { label: "Entregas", value: "Site, cardápio completo com filtros, quiz, vídeo de 16:9 para o site e reel 9:16" },
    { label: "Ferramentas", value: "Next.js, TypeScript, Tailwind, GSAP, Lenis, animações em CSS e Remotion" },
  ],
  links: { site: "https://zero18-burger.vercel.app" },
  cover: tela("site-desktop.jpg", "Página inicial do site da Zero18 Burger, com o título Hambúrguer de Parrilla e o selo 3x campeã"),
  coverPhone: img("site-celular.jpg", "Site da Zero18 Burger aberto no celular", 780, 1688),
  showcase: img("site-desktop-capa.jpg", "O site da Zero18 Burger num notebook e num celular, sobre o preto e o vermelho da marca", 2160, 1350),
  deliverables: ["Site", "Cardápio", "Quiz", "Vídeo", "Reel"],
  theme: {
    bg: "#111111",
    ink: "#F2F2F2",
    accent: "#C92828",
    accentText: "#FF5A1F",
    soft: "#1B1918",
    onAccent: "#FFFFFF",
  },
  chapters: [
    {
      id: "ponto-de-partida",
      title: "O ponto de partida",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A Zero18 abriu em 2019 no Jardim Bongiovani e faz burger de 160g de costela com acém selado na parrilla, todos os dias das 18h às 22h30. O Instagram é forte e os pedidos chegam pelo MenuDino, pelo iFood e pelo WhatsApp. O que falta é um lugar que mostre a marca inteira de uma vez.",
            "O desafio era o oposto da Jane: em vez de delicadeza, fome. Um site escuro, com fogo, letra grande e movimento, que desse vontade de pedir antes mesmo de chegar no cardápio.",
          ],
        },
        {
          kind: "features",
          items: [
            { title: "Quem pede", text: "Gente com fome, no celular, à noite. Decide rápido e quer o botão de pedir sempre por perto." },
            { title: "O que destaca", text: "O selo de três vezes campeã, a parrilla e os burgers que viraram assunto, como o Gladiador." },
            { title: "O que não pode faltar", text: "Horário, endereço e o caminho mais curto até o MenuDino ou o WhatsApp." },
          ],
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
            "No celular, a primeira tela é só tipografia: \"Hambúrguer de Parrilla\" entra letra por letra, com brasas subindo do pé da tela e um selo de horário que confere se a casa está aberta agora. A foto vem logo abaixo.",
            "O Gladiador, o chefão do cardápio, ganhou uma cena própria. A tela fica parada enquanto a pessoa rola, e a câmera desce pelos ingredientes um a um, do brioche à base, com um contador que sobe até 320g de carne e um medidor de fome que enche.",
          ],
        },
        {
          kind: "image",
          image: tela("site-desktop-gladiador.jpg", "Cena do Gladiador: a câmera passa pelos ingredientes no ar enquanto o contador de carne sobe"),
          caption: "A cena do Gladiador no meio do caminho: alface crocante, 211 de 320g.",
          size: "wide",
        },
        {
          kind: "text",
          paragraphs: [
            "Na linha de frango, o site inteiro muda de clima. O fundo fica preto de estúdio, o cabeçalho ganha borda de brasa, um letreiro gigante corre em sentidos opostos e o fogo sobe com a rolagem enquanto a foto do burger se revela num círculo. Tudo isso é CSS guiado pelo scroll, sem JavaScript.",
          ],
        },
        {
          kind: "gallery",
          layout: "screens",
          images: [
            tela("site-desktop-quiz.jpg", "Quiz Qual é a sua fome, com as opções carne ou frango"),
            img("site-celular.jpg", "Primeira tela do site da Zero18 no celular", 780, 1688),
          ],
          caption: "O quiz \"Qual é a sua fome?\": três toques e o site diz qual burger pedir.",
        },
        {
          kind: "features",
          items: [
            { title: "Cardápio inteiro", text: "Os preços do MenuDino em abas, com filtros como \"bacon\" e \"até R$ 35\" que buscam no cardápio todo." },
            { title: "Quiz da fome", text: "Carne ou frango, queijo ou bacon, brioche ou australiano. O resultado já vem com o botão de pedir." },
            { title: "Combos na bandeja", text: "As peças de cada combo caem na bandeja de papel kraft conforme a pessoa rola." },
            { title: "Pedir sempre à mão", text: "MenuDino e WhatsApp em todos os cards e um botão flutuante em todas as telas." },
          ],
        },
      ],
    },
    {
      id: "video",
      title: "Vídeo",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Fiz em Remotion um vídeo curto de rua, com o burger saindo da parrilla, em dois formatos: deitado para o site e em pé para o reel do Instagram.",
          ],
        },
        {
          kind: "video",
          src: `${base}/zero18-16x9.mp4`,
          poster: img("zero18-poster.jpg", "Quadro do vídeo da Zero18 Burger", 1920, 1080),
          caption: "O vídeo, na versão do site.",
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
            { title: "Animação sem peso", text: "O GSAP só é baixado quando a pessoa começa a rolar e a cena está perto. As seções abaixo da dobra só são calculadas quando chegam na tela." },
            { title: "Menos JavaScript", text: "Troquei a biblioteca de animação das trocas de conteúdo por CSS puro, com as mesmas entradas e saídas. Saíram uns 45 KB do carregamento inicial." },
            { title: "Fogo de verdade, leve", text: "As chamas são fotos em fundo preto misturadas à tela, no lugar de efeitos pesados de pintar." },
            { title: "Nota no Lighthouse", text: "No celular, mediana de 94 em desempenho e 100 em acessibilidade, com todas as animações ligadas." },
          ],
        },
      ],
    },
  ],
  note: {
    title: "Por que eu fiz",
    paragraphs: [
      "A Zero18 já é grande em Prudente, mas quem procura por ela na internet cai num cardápio genérico. Fiz este projeto sem ela pedir, para mostrar que um site pode ter a mesma personalidade do balcão e ainda levar a pessoa até o pedido em poucos toques.",
    ],
  },
};
