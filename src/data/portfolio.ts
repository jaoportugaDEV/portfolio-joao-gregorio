export type ServiceItem = {
  title: string;
  description: string;
};

export type ProjectItem = {
  name: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  confidential?: boolean;
};

export type TimelineItem = {
  year: string;
  type: string;
  title: string;
  description: string;
  place: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export const portfolioData = {
  hero: {
    firstName: "Joao",
    fullName: "Joao Gregorio",
    role: "Desenvolvedor Full Stack Junior focado em IA aplicada",
    company: "Projeto principal: Buffet Facil",
    intro:
      "Crio sistemas web com automacoes, APIs e integracoes inteligentes para transformar processos manuais em fluxos eficientes.",
    availability:
      "Disponivel para projetos freelancer envolvendo IA aplicada, automacoes, APIs e desenvolvimento web.",
    contacts: {
      phone: "5518997557925",
      email: "joao.portuga2001@gmail.com",
      linkedin: "https://linkedin.com/in/joao-gregorio123",
      github: "https://github.com/jaoportugaDEV",
    },
  },
  about: [
    "Sou Desenvolvedor Full Stack Junior com experiencia pratica no Brasil e em Portugal, atuando na criacao de aplicacoes web e sistemas de gestao com foco em entrega real e evolucao continua.",
    "Fui formado em Desenvolvimento de Software pela UPB, Universidade Politecnica de Braganca, com base em front-end, back-end, modelagem de dados e integracao de sistemas.",
    "Meus interesses profissionais estao tanto em front-end quanto em back-end: gosto de construir interfaces modernas e, ao mesmo tempo, estruturar APIs, regras de negocio e processos robustos.",
    "Tenho interesse especial em IA aplicada ao negocio, automacoes com n8n e integracoes com APIs para transformar tarefas manuais em fluxos inteligentes e escalaveis.",
    "No Buffet Facil, foco em resolver problemas reais com usabilidade, produtividade e suporte a tomada de decisao para o cliente.",
  ],
  services: [
    {
      title: "IA aplicada e automacoes",
      description:
        "Automacoes com n8n, integracoes entre sistemas e organizacao de fluxos preparados para recursos de IA no dia a dia do negocio.",
    },
    {
      title: "Back-end e integracoes",
      description:
        "APIs REST, autenticacao, modelagem de dados e regras de negocio para sistemas confiaveis e escalaveis.",
    },
    {
      title: "Front-end e produto",
      description:
        "Interfaces com React e Next.js orientadas a produtividade, usabilidade e conexao direta com o back-end.",
    },
  ] as ServiceItem[],
  projects: [
    {
      name: "Buffet Facil",
      status: "SaaS em validacao com clientes reais",
      description:
        "Sistema de gestao para buffets com modulos de clientes, freelancers, festas, contratos, orcamentos automaticos, pagamentos e financeiro.",
      highlights: [
        "Implementacao de autenticacao, regras de negocio e autorizacao por contexto.",
        "Automacoes para reduzir tarefas manuais e acelerar operacoes internas.",
        "Relatorios de lucro e despesas para suporte a decisao.",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Zustand",
        "React Hook Form",
        "Zod",
        "Tailwind CSS",
      ],
    },
    {
      name: "App de suporte E-coordina",
      status: "Experiencia empresarial",
      description:
        "Participacao no desenvolvimento de aplicativo de suporte aos produtos da empresa e na estruturacao de fluxos para acelerar atendimento.",
      highlights: [
        "Apoio na melhoria de fluxos de resolucao de problemas.",
        "Colaboracao com equipe de programacao e marketing.",
        "Foco em eficiencia operacional e experiencia do usuario final.",
      ],
      stack: ["Aplicativo de suporte", "Fluxos operacionais", "Atendimento tecnico"],
      confidential: true,
    },
    {
      name: "Laboratorio de IA aplicada",
      status: "Em desenvolvimento",
      description:
        "Trilha pratica de evolucao em IA com prototipos de automacoes inteligentes, integracoes com LLMs e conceitos de RAG para uso em produtos reais.",
      highlights: [
        "Prototipos de fluxos com n8n conectando dados, APIs e etapas inteligentes.",
        "Estudos de arquitetura para agentes e assistentes contextuais.",
        "Experimentos de RAG basico para resposta guiada por documentos.",
      ],
      stack: ["n8n", "LLMs", "RAG", "APIs", "Python", "TypeScript"],
    },
  ] as ProjectItem[],
  stackGroups: [
    {
      title: "IA e Dados",
      items: ["LLMs", "RAG (em evolucao)", "Prompts", "Automacoes", "n8n", "APIs"],
    },
    {
      title: "Back-end",
      items: [
        "Node.js",
        "Supabase",
        "Python",
        "PHP",
        ".NET",
        "C#",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Front-end",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Infra e automacao",
      items: ["Docker", "AWS", "Git", "GitHub", "Jest", "Figma", "Excel avancado"],
    },
  ] as StackGroup[],
  academic: [
    {
      year: "2022-2026",
      type: "Graduacao",
      title: "Desenvolvimento de Software",
      description:
        "Formacao voltada ao ciclo completo de desenvolvimento, arquitetura de software e entregas praticas.",
      place: "UPB - Universidade Politecnica de Braganca (Portugal)",
    },
    {
      year: "2018-2022",
      type: "Formacao tecnica",
      title: "Administracao e Gestao",
      description:
        "Base em processos, organizacao e visao de negocio para aplicacao em produtos digitais.",
      place: "ETEC",
    },
    {
      year: "2020-2022",
      type: "Formacao complementar",
      title: "Hardware e Robotica",
      description:
        "Conhecimentos tecnicos de hardware, diagnostico e raciocinio pratico para suporte e desenvolvimento.",
      place: "Microcamp",
    },
  ] as TimelineItem[],
  events: [
    {
      year: "2023-2025",
      type: "Experiencia internacional",
      title: "Atuacao tecnica em Portugal",
      description:
        "Experiencia de trabalho em equipe internacional, com comunicacao em ingles avancado e espanhol basico junto a outros programadores, e construcao de aplicacoes com foco na evolucao da empresa.",
      place: "Braganca, Portugal",
    },
    {
      year: "2023-atual",
      type: "Produto em evolucao",
      title: "Validacao continua do Buffet Facil",
      description:
        "Acompanhamento de feedback de clientes reais para evoluir funcionalidades e processos com visao de produto.",
      place: "Brasil",
    },
  ] as TimelineItem[],
  languages: [
    "Ingles: B2 avancado",
    "Espanhol: A2 intermediario",
    "Frances: A1 basico",
  ],
};
