import type { CaseStudy, Img } from "../projects";

const base = "/projetos/grandizolis-pizzaria";
const img = (file: string, alt: string, width: number, height: number): Img => ({
  src: `${base}/${file}`,
  alt,
  width,
  height,
});
const tela = (file: string, alt: string) => img(file, alt, 2160, 1350);

export const grandizolisPizzaria: CaseStudy = {
  kind: "case",
  slug: "grandizolis-pizzaria",
  name: "Grandizoli's Pizzaria & Esfiharia",
  type: "Site conceito de vitrine",
  place: "Pirapozinho/SP",
  year: "2026",
  summary:
    "A Grandizoli's é uma pizzaria e esfiharia de Pirapozinho que já recebe os pedidos por um site próprio. Comecei por conta própria uma vitrine que não vende nada: ela existe para dar fome e levar a pessoa ao pedido. Tem uma cena animada de pizza na primeira tela, uma roda que gira entre doze sabores, uma bandeja de esfihas, o preparo em vídeo e um ingresso de rodízio que sabe em que dia da semana a pessoa está. Além do site, desenhei a placa de mesa com QR code, o cartão de avaliação do delivery e um ímã de geladeira.",
  cardText:
    "Uma vitrine que dá fome: a fatia puxando queijo na primeira tela, uma roda de sabores que gira, bandejas de esfiha e um ingresso de rodízio que reconhece o dia de hoje.",
  facts: [
    { label: "Cliente", value: "Grandizoli's Pizzaria & Esfiharia, de um amigo (feito de graça, com as ideias aprovadas pelo dono)" },
    { label: "Meu papel", value: "Conceito, direção de arte, imagens, animações e código" },
    { label: "Entregas", value: "Site, 12 pizzas e 11 bandejas de esfiha em arte própria, fundos animados, a logo preenchida e três peças impressas (placa de mesa, cartão de delivery e ímã)" },
    { label: "Ferramentas", value: "Next.js, TypeScript, Tailwind e GSAP, mais ChatGPT para as imagens e Google Flow para os vídeos" },
  ],
  links: { site: "https://grandizolis-pizzaria.vercel.app" },
  cover: tela("site-desktop.jpg", "Primeira tela do site da Grandizoli's, com a logo à esquerda e uma pizza de calabresa com a fatia levantada e o queijo esticando"),
  coverPhone: img("site-celular.jpg", "Site da Grandizoli's aberto no celular, com a logo no alto e a pizza ao centro", 780, 1688),
  showcase: tela("site-desktop-capa.jpg", "O site da Grandizoli's num notebook e num celular, sobre o verde e o vermelho da marca"),
  sticker: img("mascote.png", "Selo com a logo da Grandizoli's: um chef de bigode segurando duas fatias de pizza", 780, 780),
  deliverables: ["Site", "Pizzas e esfihas", "Materiais impressos"],
  theme: {
    bg: "#F7F3EA",
    ink: "#03402A",
    accent: "#EE1121",
    accentText: "#C10E1B",
    soft: "#EDE3CD",
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
            "A Grandizoli's faz pizza e esfiha em Pirapozinho, com rodízio de quinta a sábado e um Instagram de humor leve: \"Tem dias que pedem pizza… e outros que imploram\". Os pedidos já acontecem num site próprio da casa, então eu não precisava refazer o cardápio nem o carrinho.",
            "O que faltava era um lugar que mostrasse a casa e deixasse a pessoa com fome antes de clicar. Por isso este site não vende: cada tela termina num botão que leva ao pedido.",
          ],
        },
        {
          kind: "features",
          items: [
            { title: "Quem visita", text: "Gente da região que veio do Instagram, de celular na mão, decidindo o que pedir no jantar." },
            { title: "O que destaca", text: "Pizza com queijo esticando, esfiha quente, o preparo na mão e o rodízio." },
            { title: "O que não pode faltar", text: "Um botão de pedir sempre à vista, endereço, horário e o link do Instagram." },
          ],
        },
      ],
    },
    {
      id: "marca",
      title: "A marca",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A marca já existia: um chef de bigode com uma fatia em cada mão e o nome em letra cursiva vermelha. Recortei o fundo, fiz versões coloridas e creme e preenchi o mascote só por dentro da roupa e das pizzas, para ele funcionar sobre fundo escuro.",
            "O verde e o vermelho vêm da caixa de pizza da casa. O xadrez verde e creme virou o motivo gráfico: faixa de base, bandeja de esfihas, toalha e fundo da caixa do combo.",
          ],
        },
        {
          kind: "palette",
          colors: [
            { name: "Verde Grandizoli's", hex: "#02633A", use: "Cor principal, medida na caixa de pizza" },
            { name: "Verde fundo", hex: "#03402A", use: "Painéis escuros e rodapé" },
            { name: "Vermelho", hex: "#EE1121", use: "Botões de pedir, selos e a seção de sabores" },
            { name: "Creme", hex: "#F7F3EA", use: "Texto sobre verde e o xadrez" },
          ],
          note: "O botão de pedir é sempre vermelho com texto branco, para ser o ponto mais forte de cada tela.",
        },
        {
          kind: "type",
          fonts: [
            { name: "Poppins", font: "display", role: "Títulos e botões", sample: "Escolha o seu sabor" },
            { name: "Pacifico", font: "script", role: "Chamadas curtas, como o nome da logo", sample: "nossas mais pedidas" },
            { name: "Poppins", font: "text", role: "Texto corrido", sample: "Mussarela derretida, calabresa e bacon crocante." },
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
            "A primeira tela é uma cena de pizzaria animada: uma fatia sobe com o queijo esticando, a luz vermelha respira e a fumaça sobe devagar. A logo entra pulando, flutua e o nome pulsa com faíscas. O vídeo é de fundo, mudo, e o texto fica sempre sobre a parte escura da imagem.",
            "Logo abaixo, a pessoa escolhe o sabor: a pizza aparece grande, cercada de ingredientes que explodem e depois flutuam, e uma meia pizza vista de cima serve de roda. Dá para girar com as setas, tocar no nome ou arrastar com o dedo.",
          ],
        },
        {
          kind: "image",
          image: tela("site-desktop-sabores.jpg", "Seção Escolha o seu sabor, com a pizza de costela cercada de ingredientes e a roda de sabores embaixo"),
          caption: "A roda de sabores: salgadas, doces e esfihas, com a pizza no centro.",
          size: "wide",
        },
        {
          kind: "text",
          paragraphs: [
            "As esfihas têm um modo próprio: uma bandeja verde sempre igual, com o xadrez e o friso vermelho, e as esfihas do sabor chegam nela. O vapor das salgadas é feito em código.",
          ],
        },
        {
          kind: "gallery",
          layout: "screens",
          images: [
            tela("site-desktop-esfihas.jpg", "Bandeja de esfihas de carne, com os botões dos outros sabores embaixo"),
            tela("site-desktop-combos.jpg", "Ingresso do rodízio completo ao lado da caixa do combo casal"),
          ],
          caption: "A bandeja de esfihas e o ingresso do rodízio, que acende o dia de hoje.",
        },
        {
          kind: "image",
          image: tela("site-desktop-preparo.jpg", "Seção Nosso preparo, com dois vídeos verticais do preparo, ilustrações de traço nas laterais e um carimbo vermelho"),
          caption: "Nosso preparo: dois vídeos da cozinha, ilustrações de traço e farinha caindo ao fundo.",
          size: "wide",
        },
        {
          kind: "features",
          items: [
            { title: "Doze pizzas em arte própria", text: "Cada sabor tem a pizza com a fatia puxada e uma vista de cima, recortadas do fundo e separadas em camadas para os ingredientes flutuarem." },
            { title: "Bandejas de esfiha", text: "Onze sabores reais do cardápio da casa, numa bandeja única que muda por dentro." },
            { title: "Ingresso do rodízio", text: "Mostra os valores e acende a ficha do dia. Se hoje não tem rodízio, avisa quando volta." },
            { title: "Combo casal", text: "A caixa abre, a pizza sobe e o preço conta até R$ 92,90." },
          ],
        },
      ],
    },
    {
      id: "materiais",
      title: "Para as mesas, o delivery e a geladeira",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Depois do site, fui além da tela e desenhei três peças impressas, as ideias que o dono gostou e que estou fazendo para ele de graça. Todas usam o xadrez, as cores e o mascote da casa, e foram preparadas com sangria e xadrez em vetor para a gráfica imprimir sem borrar.",
            "A primeira é a placa de mesa, de 10 × 15 cm, com uma tag NFC e um QR code. A pessoa encosta o celular, ou lê o código, e cai direto na avaliação da casa no Google. O texto convida a contar como foi, sem oferecer brinde nem desconto em troca de nota, porque o Google proíbe avaliação incentivada.",
          ],
        },
        {
          kind: "image",
          image: img("placa-mesa.jpg", "Placa de mesa da Grandizoli's, em creme com borda de xadrez verde e moldura vermelha, com o mascote, a frase Gostou? Conta pra gente!, cinco estrelas e um QR code", 1100, 1650),
          caption: "A placa de mesa, 10 × 15 cm, com NFC e QR code para avaliar no Google.",
          size: "column",
        },
        {
          kind: "text",
          paragraphs: [
            "A segunda peça é um cartão pequeno de 9 × 5,5 cm para colocar dentro dos pedidos de delivery. A frente pergunta \"Gostou do seu pedido?\" e leva ao mesmo QR de avaliação. O verso fixa a marca: logo, Instagram e endereço.",
          ],
        },
        {
          kind: "gallery",
          layout: "pages",
          images: [
            img("cartao-frente.jpg", "Frente do cartão de avaliação do delivery, com o mascote, a pergunta Gostou do seu pedido?, cinco estrelas e um QR code", 1064, 652),
            img("cartao-verso.jpg", "Verso do cartão, em vermelho com a logo creme, o Instagram e o endereço da Grandizoli's", 1064, 652),
          ],
          caption: "O cartão do delivery, 9 × 5,5 cm: frente com o QR e verso com a marca.",
        },
        {
          kind: "text",
          paragraphs: [
            "A terceira peça é um ímã de geladeira de 9 × 6 cm, só com a logo e o telefone grande, para a casa ficar à vista justamente na hora em que bate a fome. O número ocupa a largura toda do painel para dar para ler de longe.",
          ],
        },
        {
          kind: "image",
          image: img("ima-geladeira.jpg", "Ímã de geladeira da Grandizoli's, com a logo colorida em cima e o telefone em letras grandes numa faixa verde, sobre painel creme com borda de xadrez", 1064, 708),
          caption: "O ímã de geladeira, 9 × 6 cm: a logo e o telefone em destaque.",
          size: "column",
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
            { title: "Imagem em camadas", text: "Escrevi scripts que recortam o fundo preto das artes geradas, tapam furos na borda e separam a pizza, as peças soltas e os flocos para animar cada um em separado." },
            { title: "Vídeo só do aparelho certo", text: "O site baixa o vídeo de fundo do computador ou o do celular, nunca os dois, e os vídeos do preparo só tocam enquanto estão na tela." },
            { title: "Cuidado com o movimento", text: "Só transform e opacity. Com \"reduzir movimento\" ligado, a roda e os fundos ficam parados e a informação continua toda lá." },
            { title: "Informação da casa", text: "Sabores de pizza, descrições e o que vem no combo são exemplos meus. Só os preços e as regras do rodízio, o endereço e as esfihas vêm de material público da casa." },
          ],
        },
      ],
    },
  ],
  note: {
    title: "Por que eu fiz",
    paragraphs: [
      "A Grandizoli's é a pizzaria de um amigo meu, que estudou comigo. Comecei este projeto por conta própria, sem ele pedir, porque queria ver o negócio dele com uma vitrine à altura da comida que ele faz. Quando mostrei as ideias, ele gostou, e agora estou fazendo tudo para ele de graça, por ser meu amigo.",
      "A casa já tinha uma marca simpática e um site de pedidos que funciona, mas nada que desse vontade antes de pedir. Desejo muito sucesso para ele e para a Grandizoli's, e que este trabalho ajude a encher a casa de gente com fome.",
    ],
  },
};
