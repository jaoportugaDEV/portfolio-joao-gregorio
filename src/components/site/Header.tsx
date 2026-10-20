import Link from "next/link";
import { profile } from "@/data/profile";
import { Marca } from "./Marca";

const links = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Como trabalho", href: "/#como-trabalho" },
  { label: "Sobre", href: "/#sobre" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-giz/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <Marca className="size-8 shrink-0 text-cobalto" />
          {profile.name}
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[0.95rem] text-grafite transition-colors hover:text-nanquim">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <details className="group relative md:hidden">
            <summary className="flex h-10 cursor-pointer list-none items-center rounded-lg px-3 text-[0.95rem] font-medium [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-48 rounded-xl border border-linha bg-folha p-2 shadow-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-lg px-3 py-2.5 hover:bg-giz">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link href="/#contato" className="btn btn-cheio !px-4 !py-2">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
