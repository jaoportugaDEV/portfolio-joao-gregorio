import { mensagemPadrao, profile, whatsappLink } from "@/data/profile";

export function Contact({ titulo = "Tem um negócio que precisa aparecer melhor na internet?" }: { titulo?: string }) {
  const { contacts } = profile;
  return (
    <section id="contato" className="bg-nanquim text-giz">
      <div className="shell py-20 lg:py-28">
        <h2 className="t-titulo max-w-[20ch]">{titulo}</h2>
        <p className="mt-6 max-w-[52ch] text-[1.1rem] text-giz/80">
          Me conta como ele funciona hoje. A primeira conversa serve para eu entender o seu caso e te dizer o que faria
          diferença.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappLink(mensagemPadrao)}
            target="_blank"
            rel="noreferrer"
            className="btn bg-giz text-nanquim hover:bg-cobalto-claro"
          >
            Chamar no WhatsApp
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="btn border-[1.5px] border-giz/60 text-giz hover:border-giz hover:bg-giz/10"
          >
            Mandar um e-mail
          </a>
        </div>
        <dl className="mt-12 grid gap-6 border-t border-giz/20 pt-8 text-[0.95rem] sm:grid-cols-3">
          <div>
            <dt className="text-giz/60">WhatsApp</dt>
            <dd className="mt-1">{contacts.whatsappLabel}</dd>
          </div>
          <div>
            <dt className="text-giz/60">E-mail</dt>
            <dd className="mt-1 break-all">{contacts.email}</dd>
          </div>
          <div>
            <dt className="text-giz/60">Onde estou</dt>
            <dd className="mt-1">{profile.city}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
