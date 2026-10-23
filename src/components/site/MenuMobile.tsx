"use client";

// Menu do celular: um <details> que fecha ao tocar num link, tocar fora ou apertar Esc.
import Link from "next/link";
import { useEffect, useRef } from "react";

export function MenuMobile({ links }: { links: { label: string; href: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fecha = () => {
      el.open = false;
    };
    const fora = (e: Event) => {
      if (el.open && !el.contains(e.target as Node)) fecha();
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && el.open) {
        fecha();
        el.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", fora);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", fora);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-lg px-2.5 max-[359px]:px-2 text-[0.95rem] font-medium sm:px-3 [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <ul className="absolute right-0 mt-2 w-48 rounded-xl border border-linha bg-folha p-2 shadow-lg">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              onClick={() => {
                if (ref.current) ref.current.open = false;
              }}
              className="flex min-h-11 items-center rounded-lg px-3 hover:bg-giz"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
