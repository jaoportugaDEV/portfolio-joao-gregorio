import type { CaseStudy, Img } from "../projects";

const base = "/projetos/arca-de-noe";
const img = (file: string, alt: string, width: number, height: number): Img => ({
  src: `${base}/${file}`,
  alt,
  width,
  height,
});
const tela = (file: string, alt: string) => img(file, alt, 2160, 1350);
const bicho = (file: string, alt: string) => img(file, alt, 780, 900);

export const arcaDeNoe: CaseStudy = {
  kind: "case",
  slug: "arca-de-noe",
  name: "Arca de Noé Sorveteria",
  type: "Site conceito e guia de marca",
  place: "Pirapozinho, Narandiba e Presidente Prudente/SP",
  year: "2026",
  summary:
    "A Arca de Noé começou em 2021 num contêiner azul em Pirapozinho e hoje tem quatro unidades, com soft artesanal de receita própria. Fiz por conta própria um site e um guia de marca que tratam a sorveteria como uma arca que leva a família inteira para um lugar de alegria: um letreiro de arco-íris sobre o céu, uma turma de oito bichos e um cartão fidelidade que dá vontade de carimbar.",
  cardText:
    "Letreiro arco-íris nas nuvens, uma turma de bichos escorregando no arco-íris e um montador de sundae para a sorveteria de soft artesanal com quatro unidades na região.",
  facts: [
    { label: "Cliente", value: "Arca de Noé Sorveteria (projeto conceito, sem vínculo oficial)" },
    { label: "Meu papel", value: "Conceito, direção de arte, personagens, texto e código" },
    { label: "Entregas", value: "Site, guia de marca em PDF, logo em SVG, a Turma da Arca (8 bichos em 4 poses)" },
    { label: "Ferramentas", value: "Next.js, TypeScript, Tailwind, GSAP, Motion e Lenis, mais ChatGPT para a imagem do hero" },
  ],
  links: { site: "https://arca-de-noe-alpha.vercel.app" },
  cover: tela("site-desktop.jpg", "Primeira tela do site da Arca de Noé, com o letreiro ARCA DE NOÉ em listras de arco-íris sobre o céu e a mão levantando um milkshake de açaí"),
  coverPhone: img("site-celular.jpg", "Site da Arca de Noé aberto no celular", 780, 1688),
  showcase: img("site-desktop-capa.jpg", "O site da Arca de Noé num notebook e num celular, sobre o azul e o turquesa da marca", 2160, 1350),
  sticker: bicho("turma-elefante.png", "Elefante da Turma da Arca com um sorvete na mão"),
  deliverables: ["Site", "Guia de marca", "Logo", "Personagens"],
  theme: {
    bg: "#FFF7E8",
    ink: "#0B2E40",
    accent: "#22BFC6",
    accentText: "#0B6E84",
    soft: "#FBEBCF",
    onAccent: "#0B2E40",
  },
  chapters: [
    {
      id: "ponto-de-partida",
      title: "O ponto de partida",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A Arca abriu em novembro de 2021, em Pirapozinho, dentro de um contêiner azul com colunas de balões na porta. Hoje faz sorvete soft artesanal com massa de receita própria e tem lojas em Pirapozinho, Narandiba e Presidente Prudente, no Prudenshopping e no Shopping Villa Romana. O Instagram tem mais de seis mil seguidores e é onde a marca fala.",
            "O que o Instagram já mostra é uma marca com voz própria: \"Vem pra Arca!\" fecha quase toda legenda, o vocabulário é de barco (a bordo, tripulação, desembarcar) e o humor é de família. O desafio era levar isso para um site sem perder o jeito.",
          ],
        },
        {
          kind: "features",
          items: [
            { title: "Quem visita", text: "Famílias da região, de celular na mão, procurando horário, endereço e o que pedir." },
            { title: "O que destaca", text: "A massa de receita própria, o sundae montado do seu jeito e as quatro lojas." },
            { title: "O que não pode faltar", text: "Horário de cada unidade com o aviso de aberto agora, como chegar e o cardápio." },
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
            "O logo original ficou como referência. Recriei em curvas, com as letras que pulam e o arco de três traços, para ele funcionar em qualquer tamanho. O arco virou o único motivo gráfico: máscara de foto, topo de botão, escorregador e fundo da arca final.",
            "O conceito é \"Vem pra Arca!\": a Arca leva a família inteira para um lugar de alegria, e o arco-íris é a promessa de depois da chuva.",
          ],
        },
        {
          kind: "palette",
          colors: [
            { name: "Turquesa", hex: "#22BFC6", use: "Cor principal, medida no avatar da marca" },
            { name: "Sol", hex: "#FFC629", use: "O \"NOÉ\" do logo e os botões de destaque" },
            { name: "Laranja", hex: "#F39A1E", use: "Arco e detalhes" },
            { name: "Oceano", hex: "#0B6E84", use: "Títulos e painéis escuros" },
            { name: "Açaí", hex: "#5B2A6E", use: "A linha do açaí" },
            { name: "Marinho", hex: "#0B2E40", use: "Texto e contornos" },
          ],
          note: "Texto sobre turquesa é sempre marinho: baunilha sobre turquesa dá só 2,1:1 de contraste.",
        },
        {
          kind: "type",
          fonts: [
            { name: "Lilita One", font: "display", role: "Títulos e números", sample: "Vem pra Arca!" },
            { name: "Nunito", font: "text", role: "Texto corrido e botões", sample: "Soft artesanal de receita própria." },
          ],
        },
        {
          kind: "voice",
          yes: [
            "Convidar: \"Vem pra Arca!\" fecha o texto",
            "Brincar com o dia a dia, como a marca já faz",
            "Usar o vocabulário da arca: a bordo, tripulação, mar de sabores",
            "Dizer o sabor com palavra concreta: cremoso, geladinho, croc croc",
          ],
          no: [
            "Linguagem corporativa",
            "Prometer o que a loja não tem, como preço fixo ou entrega",
            "Tom de pregação",
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
            "A primeira tela é um céu de verdade, com o letreiro ARCA DE NOÉ recheado com as três cores do arco: as listras correm devagar, as letras sobem uma a uma, balançam fora de fase e dão um pulinho ao toque. Na frente, nuvens e uma mão levantando o milkshake de açaí da Arca. A imagem da mão foi feita no ChatGPT a partir de uma foto livre, e eu montei as camadas para as letras ficarem entre o céu e a mão.",
            "Mais abaixo, a litografia antiga da arca de Noé fica no vão de um arco-íris gigante e a Turma da Arca escorrega por ele conforme a pessoa rola a página.",
          ],
        },
        {
          kind: "image",
          image: tela("site-desktop-escorregador.jpg", "A turma subindo e descendo o arco-íris, com a litografia da arca de Noé no vão"),
          caption: "A turma escorregando pelo arco-íris enquanto a página rola.",
          size: "wide",
        },
        {
          kind: "text",
          paragraphs: [
            "O Arca Sundae vira brinquedo: a pessoa escolhe base, recheio, cobertura e o que vai por cima, o copo se enche camada por camada e o site dá um nome ao sundae, como \"Tempestade de Ovomaltine\". Um botão manda a mensagem pronta no WhatsApp para quem está devendo um sundae.",
          ],
        },
        {
          kind: "gallery",
          layout: "screens",
          images: [
            tela("site-desktop-montador.jpg", "Montador de Arca Sundae com o copo se enchendo de camadas"),
            tela("site-desktop-cartao.jpg", "Cartão fidelidade completo, com a turma desfilando e a escolha entre uma casquinha e R$ 5 de desconto"),
          ],
          caption: "O montador de sundae e o cartão fidelidade: cada carimbo é a carinha de um bicho e o décimo faz a turma desfilar.",
        },
        {
          kind: "image",
          image: tela("site-desktop-arca-final.jpg", "A arca navegando com os oito bichos a bordo, o arco-íris atrás e ondas na frente"),
          caption: "O fim do site: a arca com os oito bichos, o arco-íris da promessa e ondas que correm.",
          size: "wide",
        },
        {
          kind: "features",
          items: [
            { title: "Quatro portas", text: "Cada unidade tem endereço, horário e um selo de aberto agora calculado no fuso de São Paulo. Um bicho dorme quando a loja fecha." },
            { title: "Cardápio em abas", text: "Casquinhas, sundaes, milkshakes e açaí, com os nomes e descrições que a própria marca usa." },
            { title: "Montador de sundae", text: "Escolhe as camadas, vê o copo se montar e manda o pedido do jeito para o WhatsApp." },
            { title: "Cartão fidelidade", text: "Dez carimbos de bicho, desfile e confete, e o prêmio: casquinha grátis ou R$ 5 de desconto." },
          ],
        },
      ],
    },
    {
      id: "turma",
      title: "A Turma da Arca",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Como na arca de Noé, são quatro casais: elefante e girafa, leão e zebra, macaco e tartaruga, pinguim e ovelha. Todos desenhados com círculos, contorno marinho de 4 px e só as cores da marca, cada um com um sorvete na mão. Têm quatro poses (feliz, escorregando, comemorando e dormindo) e viram as carinhas dos carimbos.",
          ],
        },
        {
          kind: "cast",
          characters: [
            { name: "Elefante", what: "Casal 1", text: "Turquesa e sempre com a tromba encolhida de tanto rir. Abre a fila do escorregador.", image: bicho("turma-elefante.png", "Elefante da Turma da Arca") },
            { name: "Leão", what: "Casal 2", text: "Juba laranja de verdade, cauda com pompom e um sundae de morango na mão.", image: bicho("turma-leao.png", "Leão da Turma da Arca") },
            { name: "Macaco", what: "Casal 3", text: "Roxo açaí. Comemora com os dois braços sempre que o montador dá um nome novo ao sundae.", image: bicho("turma-macaco.png", "Macaco da Turma da Arca") },
            { name: "Ovelha", what: "Casal 4", text: "Lã de nuvem, rosto de oceano. Mora na arca final e dorme quando a loja de Narandiba fecha.", image: bicho("turma-ovelha.png", "Ovelha da Turma da Arca") },
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
            { title: "Letreiro leve", text: "As listras de todas as letras vêm de um único padrão SVG. As animações que nunca acabam só começam depois que a página assentou." },
            { title: "JavaScript sob demanda", text: "GSAP e Lenis só carregam depois da primeira pintura, e o montador, o cartão, o escorregador e a arca final só chegam quando estão perto da tela." },
            { title: "Cuidado com o movimento", text: "Só transform e opacity. Com \"reduzir movimento\" ligado, o letreiro fica parado e a turma fica em fila no arco." },
            { title: "Nota no Lighthouse", text: "No celular, mediana de 92 em desempenho e 100 em acessibilidade e boas práticas." },
          ],
        },
      ],
    },
  ],
  note: {
    title: "Por que eu fiz",
    paragraphs: [
      "A Arca já tem uma marca cheia de simpatia no Instagram, mas na internet ela cabe só num perfil. Fiz este projeto sem ela pedir, para mostrar como o mesmo humor e as mesmas cores podem virar um site que dá vontade de explorar e de chamar a família para tomar um milkshake.",
    ],
  },
};
