import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servicos", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Academico", href: "#academico" },
  { label: "Contato", href: "#contato" },
];

export function TopNav() {
  const { hero } = portfolioData;

  return (
    <header className="top-nav fixed inset-x-0 top-0 z-50">
      <div className="section-shell flex h-16 items-center justify-between gap-6">
        <a
          href="#topo"
          className="text-sm font-black tracking-widest text-[#b5adff] transition hover:text-[#d0cbff]"
        >
          JG
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={hero.cvUrl}
          download="Curriculo_Joao_Desenvolvedor.pdf"
          className="ui-btn ui-btn-primary !px-4 !py-2 !text-xs"
        >
          Baixar CV
        </a>
      </div>
    </header>
  );
}
