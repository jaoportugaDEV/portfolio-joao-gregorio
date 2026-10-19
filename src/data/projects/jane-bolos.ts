import type { CaseStudy, Img } from "../projects";

const base = "/projetos/jane-bolos";
const img = (file: string, alt: string, width: number, height: number): Img => ({
  src: `${base}/${file}`,
  alt,
  width,
  height,
});

const guia = (n: string, alt: string) => img(`guia-${n}.jpg`, alt, 1600, 1130);

export const janeBolos: CaseStudy = {
  kind: "case",
  slug: "jane-bolos",
  name: "Jane Bolos, Doces e Salgados",
  type: "Site conceito e identidade",
  place: "Cohab, Presidente Prudente/SP",
  year: "2026",
  summary:
    "A Jane faz bolo, docinho e salgado de festa por encomenda há mais de 25 anos, na mesma rua da Cohab. Ela nunca teve site: os pedidos chegam pelo WhatsApp e pela indicação dos vizinhos. Fiz por conta própria um site, uma turma de mascotes e um guia de marca para mostrar a ela como a confeitaria pode aparecer na internet sem perder o jeito de bairro.",
  cardText:
    "Site, mascotes, vídeo e guia de marca para uma confeitaria de bairro com 25 anos de história. O visitante monta a festa e o pedido chega pronto no WhatsApp.",
  facts: [
    { label: "Cliente", value: "Jane Bolos, Doces e Salgados (projeto conceito, sem vínculo oficial)" },
    { label: "Meu papel", value: "Conceito, identidade, ilustração dos mascotes, texto, código e vídeo" },
    { label: "Entregas", value: "Site, 3 mascotes com 6 expressões, vídeo de 15 s, post, story e guia de 20 páginas" },
    { label: "Ferramentas", value: "Next.js, TypeScript, Tailwind, GSAP, Lenis, Motion e Remotion" },
  ],
  links: { site: "https://jane-bolos.vercel.app" },
  cover: img("site-desktop.jpg", "Página inicial do site da Jane Bolos, com o bolo de chocolate e morangos", 2160, 1350),
  coverPhone: img("site-celular.jpg", "Site da Jane Bolos aberto no celular", 780, 1688),
  showcase: img("site-desktop-montador.jpg", "Montador de encomenda do site da Jane Bolos", 2160, 1350),
  sticker: img("turma.webp", "Fatinha, Granulado e Coxita, os mascotes da Jane", 791, 316),
  deliverables: ["Site", "Mascotes", "Vídeo", "Kit de redes", "Guia de marca"],
  theme: {
    bg: "#FCF9FC",
    ink: "#572D2B",
    accent: "#EC3237",
    accentText: "#C4262B",
    soft: "#F9CEA2",
    onAccent: "#FCF9FC",
  },
  chapters: [
    {
      id: "ponto-de-partida",
      title: "O ponto de partida",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A cozinha da Jane fica na Rua das Paineiras, 120, na Cohab. O pedido chega quase sempre pelo WhatsApp: um aniversário, um chá de bebê, a festa da firma. Tem nota 5,0 na Lista Mais e uns 3 mil seguidores no Facebook, tudo sem um site para mostrar o que ela faz.",
            "O panfleto dela já tinha tudo o que eu precisava: o nome escrito à mão dentro de um oval, um saco de confeitar no canto e um vermelho forte de fundo. Decidi não inventar uma marca nova. O trabalho era arrumar o que já existia e levar para o celular de quem vai encomendar.",
          ],
        },
        {
          kind: "features",
          items: [
            { title: "Quem compra", text: "Quem está organizando um aniversário, um chá de bebê ou a festa da firma, quase sempre pelo celular." },
            { title: "O que trava", text: "Saber quanto pedir. Quantos salgados para 40 pessoas? Quantos docinhos? A conversa vai e volta até fechar." },
            { title: "O que não pode perder", text: "O jeito de vizinha. A Jane é conhecida no bairro e o site não pode ter cara de franquia." },
          ],
        },
      ],
    },
    {
      id: "conceito",
      title: "O conceito",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A frase que guiou tudo foi \"festa de bairro, feito com carinho há 25 anos\". Dela saíram os enfeites que todo mundo já viu numa mesa de festa: o barrado de toldo de quermesse no topo das seções, a toalhinha rendada atrás dos doces e o granulado caindo ao fundo.",
            "Escrevi também como a Jane fala. Uma vizinha que cozinha muito bem: carinhosa, direta e animada. Isso vale para o site, para os posts e para a resposta no WhatsApp.",
          ],
        },
        {
          kind: "voice",
          yes: [
            "Bolo do jeitinho que sua festa merece.",
            "Manda sua lista que a gente monta tudo.",
            "Quanto antes encomendar, melhor: a agenda enche.",
          ],
          no: [
            "Soluções completas em confeitaria para eventos.",
            "Prezado cliente, informamos que...",
            "O MELHOR BOLO DA CIDADE!!!",
          ],
        },
        {
          kind: "image",
          image: guia("04", "Página do guia que mostra como a identidade nasceu do logo e do panfleto da Jane"),
          caption: "Do panfleto à marca: o que já existia, as cores, o conceito e a turma.",
          size: "wide",
        },
      ],
    },
    {
      id: "identidade",
      title: "Identidade",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Redesenhei o logo em vetor, letra por letra, para ele aguentar do favicon à fachada. O \"Jane\" continua cursivo, o oval virou um rótulo de bolo com pontinhos rosa e o saco de confeitar ficou inclinado, saindo do oval. Fiz quatro versões: colorida, negativa, de uma cor só para carimbo e só o oval para avatar.",
            "As cores saíram do panfleto. A única nova é o rosa-glacê, que lembra recheio de morango e deixa o conjunto mais doce.",
          ],
        },
        {
          kind: "palette",
          colors: [
            { name: "Vermelho Jane", hex: "#EC3237", use: "Fundos, botões e destaque" },
            { name: "Chocolate", hex: "#572D2B", use: "Logo, títulos e contornos" },
            { name: "Pêssego", hex: "#F9CEA2", use: "Pílulas, selos e fundos de apoio" },
            { name: "Creme", hex: "#FCF9FC", use: "Fundo claro e oval do logo" },
            { name: "Rosa-glacê", hex: "#F7B6C2", use: "Recheio, bochechas e detalhes" },
          ],
          note: "O vermelho manda, o creme respira, o chocolate escreve, pêssego e rosa enfeitam.",
        },
        {
          kind: "type",
          fonts: [
            { name: "Fraunces Black", font: "display", role: "Títulos. Letra gordinha, com cara de doceria.", sample: "Sua festa começa aqui" },
            { name: "Pacifico", font: "script", role: "Só para toques à mão, como o nome dos mascotes.", sample: "feito com carinho" },
            { name: "Nunito", font: "text", role: "Texto, preço, endereço e botão.", sample: "Terça a sábado, das 8h às 18h30." },
          ],
        },
        {
          kind: "gallery",
          layout: "pages",
          images: [
            guia("09", "Página do guia com as quatro versões do logo da Jane"),
            guia("11", "Página do guia com as cinco cores da marca e seus códigos"),
          ],
          caption: "Versões do logo e paleta, do guia de marca.",
        },
      ],
    },
    {
      id: "turma",
      title: "A turma da Jane",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Os três doces mais pedidos viraram personagens. Comecei pela silhueta, que precisava ser reconhecida de longe, depois vieram as cores e por último o rostinho, igual nos três para parecerem da mesma família. Cada um tem seis expressões: feliz, piscando, surpreso, dormindo, comemorando e acenando.",
          ],
        },
        {
          kind: "cast",
          characters: [
            {
              name: "Fatinha",
              what: "fatia de bolo",
              text: "Vaidosa e festeira, sempre com o morango na cabeça. Puxa o parabéns e apresenta os bolos.",
              image: img("fatinha.webp", "Fatinha, a fatia de bolo com morango, acenando", 670, 852),
            },
            {
              name: "Granulado",
              what: "brigadeiro",
              text: "O anfitrião da turma. Acena quando a loja está aberta e cochila quando fecha.",
              image: img("granulado.webp", "Granulado, o brigadeiro, sorrindo", 666, 656),
            },
            {
              name: "Coxita",
              what: "coxinha",
              text: "Esperta e sempre quentinha. Anota a encomenda, se espanta com festa grande e comemora o pedido.",
              image: img("coxita.webp", "Coxita, a coxinha, comemorando", 624, 749),
            },
          ],
        },
        {
          kind: "image",
          image: guia("15", "Página do guia com o jeito de cada mascote e as expressões de cada um"),
          caption: "No site, os mascotes reagem ao que a pessoa faz. A Coxita se espanta quando a festa passa de 100 convidados.",
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
            "Pensei o site para o celular primeiro, porque é por lá que o link vai chegar, mandado no WhatsApp. Logo no topo, um bolo se monta enquanto a pessoa rola a tela: massa, recheio, cobertura escorrendo e morangos caindo. Quando fica pronto, a turma comemora.",
            "A parte de que mais gosto é o montador de encomenda. A pessoa diz quantos convidados vêm e o tamanho da fome, escolhe os sabores e o site calcula quantos salgados, docinhos e quilos de bolo pedir. No fim, um botão abre o WhatsApp da Jane com a lista pronta. A conversa que antes ia e voltava começa já com o pedido inteiro.",
          ],
        },
        {
          kind: "gallery",
          layout: "screens",
          images: [
            img("site-desktop-montador.jpg", "Montador de encomenda do site da Jane no computador", 2160, 1350),
            img("site-celular-montador.jpg", "Montador de encomenda do site da Jane no celular", 780, 1688),
          ],
          caption: "No montador, uma festa de 40 convidados na medida dá 525 salgados, 200 docinhos e 4 kg de bolo.",
        },
        {
          kind: "features",
          items: [
            { title: "Vitrine em abas", text: "Bolos, docinhos e salgados, cada aba apresentada pelo seu mascote." },
            { title: "Aberto agora", text: "Um selo que confere o horário de São Paulo e diz se a cozinha está aberta ou quando abre de novo." },
            { title: "Galeria com arraste", text: "Os bolos personalizados num carrossel que dá para puxar com o dedo." },
            { title: "WhatsApp sempre à mão", text: "Um botão flutuante, com o Granulado atrás, em todas as telas." },
          ],
        },
      ],
    },
    {
      id: "video-e-redes",
      title: "Vídeo e redes",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Fiz um vídeo de 15 segundos com os doces surgindo em ritmo de festa e a turma pulando no final, todo animado em código com Remotion. Ele sai em dois formatos: deitado para o site e em pé para o reel do Instagram. Junto vieram um post e um story prontos para a Jane publicar.",
          ],
        },
        {
          kind: "video",
          src: `${base}/video-16x9.mp4`,
          poster: img("video-poster.jpg", "Quadro do vídeo da Jane Bolos", 1024, 576),
          caption: "O vídeo de 15 segundos, na versão do site.",
        },
        {
          kind: "gallery",
          layout: "duo",
          images: [
            img("post.jpg", "Post quadrado para o Instagram da Jane", 1080, 1080),
            img("story.jpg", "Story vertical para o Instagram da Jane", 1080, 1920),
          ],
          caption: "Post e story do kit de redes.",
        },
      ],
    },
    {
      id: "guia-e-embalagens",
      title: "Guia de marca e embalagens",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Para tudo continuar com a mesma cara depois que eu sair de cena, montei um guia de 20 páginas: do logo ao tom de voz, das cores ao que não fazer com os mascotes. Ele vai numa pasta junto com os arquivos de logo para gráfica, os mascotes sem fundo e o vídeo.",
            "Também desenhei um adesivo de lacre com o Granulado e mostrei como a marca fica na caixa de bolo, na caixinha de doces e na sacola.",
          ],
        },
        {
          kind: "gallery",
          layout: "pages",
          images: [
            guia("01", "Capa do guia de marca da Jane"),
            guia("14", "Página do guia que apresenta a turma da Jane"),
          ],
        },
        {
          kind: "image",
          image: img("embalagens.jpg", "Caixa de bolo, caixinha de doces, adesivo e sacola com a marca da Jane", 1600, 1132),
          caption: "Embalagens e adesivo de lacre.",
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
            { title: "Animação que não pesa", text: "O bolo do topo usa GSAP com rolagem suave do Lenis. Tudo pausa fora da tela e desliga para quem prefere menos movimento." },
            { title: "Vídeo só quando aparece", text: "Percebi que o vídeo baixava inteiro mesmo escondido. Agora ele só carrega quando chega na tela." },
            { title: "Vermelho que dá para ler", text: "Texto creme sobre o vermelho da Jane não passava no contraste. Texto pequeno ganhou um vermelho mais escuro." },
            { title: "Nota no Lighthouse", text: "100 em desempenho, acessibilidade e boas práticas no computador. No celular, acessibilidade e boas práticas também ficaram em 100." },
          ],
        },
      ],
    },
  ],
  note: {
    title: "Por que eu fiz",
    paragraphs: [
      "A Jane é o tipo de negócio que eu gosto de ver crescendo: gente que faz bem feito há muito tempo e que quase não aparece na internet. Fiz este projeto sem ela pedir, para mostrar o que dá para fazer quando alguém olha com cuidado para o que já existe.",
      "Cada detalhe aqui saiu de algo real dela: o vermelho do panfleto, a coxinha que todo mundo pede, a conversa no WhatsApp. É esse o jeito que eu quero trabalhar com cada cliente.",
    ],
  },
};
