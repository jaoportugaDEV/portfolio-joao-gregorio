import Link from "next/link";
import { profile } from "@/data/profile";
import { Marca } from "./Marca";
import { MenuMobile } from "./MenuMobile";

const links = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Como trabalho", href: "/#como-trabalho" },
  { label: "Sobre", href: "/#sobre" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-giz/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2 font-display text-base max-[359px]:text-[0.95rem] font-bold tracking-tight sm:gap-2.5 sm:text-lg">
          <Marca className="size-8 shrink-0 text-cobalto" />
          <span className="truncate">{profile.name}</span>
        </Link>
        <nav aria-label="Principal" className="flex shrink-0 items-center gap-0.5 sm:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center text-[0.95rem] text-grafite transition-colors hover:text-nanquim">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <MenuMobile links={links} />
          <Link href="/#contato" className="btn btn-cheio !min-h-11 !px-3 max-[359px]:!px-2.5 !py-2 sm:!px-4">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
