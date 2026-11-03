import type { CaseStudy, Img } from "../projects";

const base = "/projetos/starttravel";
const img = (file: string, alt: string, width: number, height: number): Img => ({
  src: `${base}/${file}`,
  alt,
  width,
  height,
});
const tela = (file: string, alt: string) => img(file, alt, 2160, 1350);

export const starttravel: CaseStudy = {
  kind: "case",
  slug: "starttravel",
  name: "StartTravel",
  type: "Site para agência de viagens",
  place: "Bragança, Portugal",
  year: "2026",
  summary:
    "A StartTravel é uma agência nova de Bragança, em Portugal, criada pela Xana Pereira, com 20 anos de experiência no turismo. Ela ainda não tinha site, então montei um onde a viagem começa enquanto a pessoa rola a página: o visitante embarca numa vista de asa de avião, vê um avião riscar o mapa de Bragança até doze destinos e termina falando com a Xana no WhatsApp. Foi pensado primeiro para o celular, que é por onde a maioria vai abrir.",
  cardText:
    "Um site que dá vontade de viajar: vista de janela de avião, um mapa onde o avião voa de Bragança até doze destinos e um clique para falar com a Xana no WhatsApp.",
  facts: [
    { label: "Cliente", value: "StartTravel, agência de viagens de Bragança (Portugal)" },
    { label: "Meu papel", value: "Conceito, direção de arte, textos, animações e código" },
    { label: "Entregas", value: "Site com mapa animado, 12 destinos, vídeos de fundo, botão de WhatsApp e ícone da marca" },
    { label: "Ferramentas", value: "Next.js, TypeScript, Tailwind e GSAP, mais Google Flow para os vídeos de fundo" },
  ],
  links: { site: "https://starttravel-pt.vercel.app" },
  cover: tela("site-desktop.jpg", "Primeira tela do site da StartTravel, com o título Do sonho ao destino sobre a asa de um avião acima das nuvens"),
  coverPhone: img("site-celular.jpg", "Site da StartTravel aberto no celular, com a vista da asa do avião e o título Do sonho ao destino", 780, 1688),
  showcase: tela("site-desktop-capa.jpg", "O site da StartTravel num notebook e num celular, sobre o azul e o amarelo da marca"),
  deliverables: ["Site", "Mapa animado", "Vídeos de fundo"],
  theme: {
    bg: "#FBFDFF",
    ink: "#0E2A5C",
    accent: "#1B4689",
    accentText: "#1B4689",
    soft: "#EAF4FC",
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
            "A StartTravel tinha poucas semanas de vida, um Instagram com cinco posts e nenhum site. Li as legendas e vi os reels da Xana para entender a voz: próxima, calorosa e sempre no português de Portugal, com \"connosco\", \"consigo\" e \"pequeno-almoço\".",
            "A marca já dizia tudo em quatro palavras: \"Do sonho ao destino\". O site precisava fazer a pessoa sentir isso e confiar numa agência que ainda não tem muitos clientes para mostrar.",
          ],
        },
        {
          kind: "features",
          items: [
            { title: "Quem visita", text: "Gente de Bragança e região que veio do Instagram, quase sempre pelo celular, ainda decidindo se vale a pena falar com a agência." },
            { title: "O que destaca", text: "A Xana e seus 20 anos de experiência, os 12 destinos do perfil e viagens feitas sob medida." },
            { title: "O que não pode faltar", text: "O WhatsApp sempre à mão, o contato e o Instagram. Nenhum depoimento inventado: só aparece o que a cliente de fato disse." },
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
            "A logo é uma fita azul e amarela em forma de S, e a ponta amarela da asa do avião repete a mesma cor. Peguei o azul de céu e o amarelo da mala e do avião para tudo o mais, e deixei muito branco de nuvem para o site respirar.",
            "As frases-sonho, como \"Do sonho ao destino\", saem numa serifa itálica, igual aos posts. O resto fica numa letra limpa, fácil de ler no celular.",
          ],
        },
        {
          kind: "palette",
          colors: [
            { name: "Azul StartTravel", hex: "#1B4689", use: "Cor da marca, títulos e botões secundários" },
            { name: "Azul-noite", hex: "#0E2A5C", use: "Fundos escuros e o texto principal" },
            { name: "Amarelo", hex: "#F6B82E", use: "Botões de ação, faixa de destinos e destaques" },
            { name: "Céu", hex: "#EAF4FC", use: "Fundo de apoio e cartões" },
          ],
          note: "O botão de falar com a Xana é sempre amarelo, para ser o ponto mais forte de cada tela.",
        },
        {
          kind: "type",
          fonts: [
            { name: "Fraunces itálica", font: "script", role: "Frases-sonho e nomes dos destinos", sample: "Do sonho ao destino." },
            { name: "Plus Jakarta Sans negrito", font: "display", role: "Títulos e botões", sample: "Escolha o destino." },
            { name: "Plus Jakarta Sans", font: "text", role: "Texto corrido", sample: "Criamos viagens à sua medida, do primeiro plano ao regresso a casa." },
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
            "A primeira tela é a vista da janela do avião: uma asa sobre um mar de nuvens, num vídeo de fundo feito no Google Flow que roda em loop. Embaixo, uma faixa amarela passa as bandeiras dos 12 destinos.",
            "Logo depois vem a peça principal: \"Tudo começa em Bragança\". A página fica fixa e, a cada rolada, um avião voa por uma rota pontilhada de Bragança até o destino seguinte, acendendo um pin e mostrando uma frase sobre o lugar.",
          ],
        },
        {
          kind: "image",
          image: tela("site-desktop-rota.jpg", "Seção Tudo começa em Bragança, com o mapa-múndi pontilhado, uma rota até o Rio de Janeiro e o cartão do Brasil"),
          caption: "A rota: o avião sai de Bragança e passa por cada destino enquanto a página rola.",
          size: "wide",
        },
        {
          kind: "text",
          paragraphs: [
            "No celular o mapa fica pequeno demais, então ele ganhou outro jeito: o avião voa no alto e embaixo uma pilha de cartões de embarque vai virando, cada um com a foto do destino, o código do aeroporto e uma frase.",
          ],
        },
        {
          kind: "gallery",
          layout: "screens",
          images: [
            tela("site-desktop-destinos.jpg", "Galeria de destinos com Sevilha, Cartagena e Rio de Janeiro em cartões, cada um com um botão Quero ir"),
            tela("site-desktop-sobre.jpg", "Seção Quem está consigo, com a foto da Xana, o texto de apresentação e o cartão da loja em Bragança"),
          ],
          caption: "A galeria de destinos, que leva ao WhatsApp, e a apresentação da Xana.",
        },
        {
          kind: "features",
          items: [
            { title: "Doze destinos", text: "Fotos reais de uso livre para cada lugar do perfil, com uma frase curta e um botão que abre o WhatsApp já falando daquele destino." },
            { title: "Quatro jeitos de viajar", text: "Escapadinhas, férias em família, viagem de sonho e viagem sob medida, em cartões que inclinam com o mouse." },
            { title: "Passatempo de Roma", text: "O sorteio do Instagram aparece com contagem regressiva e some sozinho quando termina." },
            { title: "Loja em breve", text: "Um cartão com um vídeo de Bragança avisa que a loja física está chegando." },
          ],
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
            { title: "Mapa feito de pontos", text: "O mapa-múndi é gerado por um script que marca um ponto onde há terra. As posições dos destinos vêm da latitude e da longitude de verdade." },
            { title: "Vídeo no iPhone", text: "O vídeo de fundo foi escrito direto no HTML para o Safari deixar tocar sozinho. Com o modo de pouca energia ligado, o iPhone bloqueia todo vídeo; aí fica a foto com um zoom lento e o vídeo começa no primeiro toque." },
            { title: "Rota leve", text: "No celular só os cartões perto do atual são desenhados, e a rolagem para sempre num destino, para a animação não pesar nem passar rápido demais." },
            { title: "Cuidado com o movimento", text: "Com \"reduzir movimento\" ligado, os vídeos e as animações ficam parados e todo o conteúdo continua lá." },
          ],
        },
      ],
    },
  ],
  note: {
    title: "Por que eu fiz",
    paragraphs: [
      "A StartTravel é uma agência que está começando, e eu quis dar a ela um site à altura dos 20 anos de experiência da Xana. Montei a proposta a partir do perfil dela no Instagram, para mostrar como a marca pode ficar na internet.",
      "Os depoimentos e os dados da empresa só entram quando ela confirmar. Desejo muito sucesso à Xana e que muita gente comece suas viagens por ali.",
    ],
  },
};
