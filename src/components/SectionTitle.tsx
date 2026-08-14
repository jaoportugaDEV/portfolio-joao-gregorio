type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="reveal space-y-4">
      {eyebrow ? (
        <p className="eyebrow w-fit">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-3xl text-base leading-relaxed content-muted">{subtitle}</p> : null}
    </header>
  );
}
