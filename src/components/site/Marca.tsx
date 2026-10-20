// A marca do João: o monograma jg seguido de um cursor de terminal, num ícone de cantos arredondados.
// pisca liga o cursor piscando (só onde a marca é o destaque); contorno troca o fundo cheio por linha.
// A cor segue currentColor; as letras usam --marca-tinta (padrão: a folha branca).

export function Marca({
  className,
  style,
  title,
  pisca = false,
  contorno = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  pisca?: boolean;
  contorno?: boolean;
}) {
  const tinta = contorno ? "currentColor" : "var(--marca-tinta, var(--folha))";
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {contorno ? (
        <rect x="1.5" y="1.5" width="61" height="61" rx="15" fill="none" stroke="currentColor" strokeWidth="3" />
      ) : (
        <rect width="64" height="64" rx="16" fill="currentColor" />
      )}
      <g transform="translate(-2.5 0)" fill="none" stroke={tinta} strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 19 V37 a6 6 0 0 1 -12 0" />
        <path d="M44.66 24.57 A10 10 0 1 0 47 31 H38" />
      </g>
      <rect x="48" y="38.5" width="8" height="4" rx="1.2" fill={tinta} className={pisca ? "cursor-pisca" : undefined} />
    </svg>
  );
}
