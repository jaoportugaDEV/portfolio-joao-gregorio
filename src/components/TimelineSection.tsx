import { TimelineItem } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

type TimelineSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: TimelineItem[];
  variant?: "default" | "alt";
};

export function TimelineSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  variant = "default",
}: TimelineSectionProps) {
  const sectionClass = variant === "alt" ? "section-alt" : "";

  return (
    <section id={id} className={sectionClass}>
      <div className="section-shell section-space space-y-10">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="space-y-5">
          {items.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="ui-card reveal reveal-delay-1 rounded-[var(--radius-xl)] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#b8b2ff]">
                {item.year} - {item.type}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 leading-relaxed content-muted">{item.description}</p>
              <p className="mt-3 text-sm text-slate-400">{item.place}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
