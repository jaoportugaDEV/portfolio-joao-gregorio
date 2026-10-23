// Dados pessoais do João: contato, sobre e serviços. Projetos ficam em projects.ts.

export const profile = {
  name: "João Gregório",
  firstName: "João",
  role: "Desenvolvedor web",
  city: "Presidente Prudente/SP",
  siteUrl: "https://joaogregorio.vercel.app",
  contacts: {
    whatsapp: "5518997557925",
    whatsappLabel: "(18) 99755-7925",
    email: "joao.portuga2001@gmail.com",
    linkedin: "https://linkedin.com/in/joao-gregorio123",
    github: "https://github.com/jaoportugaDEV",
    instagram: "https://www.instagram.com/j.victorszz/",
    instagramLabel: "@j.victorszz",
  },
  cvUrl: "/Curriculo_Joao_Desenvolvedor.pdf",
  photo: "/joao-profile.png",
};

export const whatsappLink = (texto?: string) =>
  `https://wa.me/${profile.contacts.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ""}`;

export const mensagemPadrao = "Oi, João! Vi seu portfólio e queria conversar sobre um projeto.";

export const about = {
  paragraphs: [
    "Sou desenvolvedor full stack e moro em Presidente Prudente. Me formei em Engenharia Informática na Universidade Politécnica de Bragança, em Portugal, e trabalhei lá de 2023 a 2025 numa equipe internacional de programadores, em inglês.",
    "Hoje divido o tempo entre o Buffet Fácil, um sistema de gestão para buffets que já roda com clientes reais, e sites para negócios da cidade. Gosto dos dois lados do trabalho: a tela que o cliente vê e a regra de negócio que faz tudo funcionar por trás.",
  ],
  facts: [
    { label: "Formação", value: "Engenharia Informática, UPB (Portugal), 2022 a 2026" },
    { label: "Experiência", value: "Equipe de desenvolvimento em Bragança, Portugal, 2023 a 2025" },
    { label: "Idiomas", value: "Inglês avançado (B2), espanhol básico (A2)" },
    { label: "Ferramentas", value: "Next.js, React, TypeScript, Node.js, Supabase, PostgreSQL, n8n" },
  ],
};

export const services = [
  {
    title: "Site para o seu negócio",
    text: "Do logo arrumado ao botão de pedido no WhatsApp. Um site que abre rápido no celular e tem a cara da sua marca.",
  },
  {
    title: "Sistema sob medida",
    text: "Cadastro de clientes, agenda, orçamento, financeiro. Tiro da planilha e do caderno o que hoje toma o seu dia.",
  },
  {
    title: "Automações e IA",
    text: "Fluxos com n8n e integrações com APIs e modelos de IA para responder, organizar e avisar sem ninguém precisar fazer na mão.",
  },
];

export const process = [
  {
    title: "Conversa",
    text: "Entendo como o seu negócio funciona hoje, quem compra de você e onde as coisas travam.",
  },
  {
    title: "Conceito",
    text: "Defino a ideia central, o tom de voz e o visual antes de escrever uma linha de código.",
  },
  {
    title: "Construção",
    text: "Monto o site ou o sistema e te mostro cada etapa funcionando, no seu celular.",
  },
  {
    title: "Entrega",
    text: "Coloco no ar, te ensino a usar e entrego os arquivos da marca organizados numa pasta.",
  },
];
