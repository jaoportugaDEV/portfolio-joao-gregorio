import { profile } from "@/data/profile";
import type { CaseStudy } from "@/data/projects";

// O bilhete do João: por que esse projeto existe.
export function PersonalNote({ note }: { note: CaseStudy["note"] }) {
  return (
    <section aria-labelledby="bilhete" className="shell pb-20 lg:pb-28">
      <div
        className="mx-auto max-w-[44rem] rotate-[-0.6deg] rounded-[var(--raio-peca)] p-8 shadow-[var(--sombra-peca)] sm:p-12"
        style={{ background: "var(--case-soft)" }}
      >
        <h2 id="bilhete" className="t-sub">
          {note.title}
        </h2>
        <div className="mt-5 space-y-4 text-[1.1rem] leading-[1.7]">
          {note.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="font-display mt-8 text-2xl font-semibold">{profile.firstName}</p>
      </div>
    </section>
  );
}
