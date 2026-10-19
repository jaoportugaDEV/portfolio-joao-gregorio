import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell py-28">
      <h1 className="t-titulo">Essa página não existe</h1>
      <p className="muted mt-4 max-w-[46ch]">O endereço pode ter mudado. Os projetos estão todos na página inicial.</p>
      <Link href="/#projetos" className="btn btn-cheio mt-8">
        Ver os projetos
      </Link>
    </main>
  );
}
