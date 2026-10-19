// Seta desenhada à mão para as anotações da mesa.
export function Seta({ d, className, atraso }: { d: string; className?: string; atraso?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      aria-hidden
      className={`mesa-seta text-cobalto ${className ?? ""}`}
      style={atraso ? ({ "--atraso": atraso } as React.CSSProperties) : undefined}
    >
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d={ponta(d)}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Ponta da seta no último ponto da curva, apontando na direção do último trecho.
function ponta(d: string) {
  const n = d.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  const [x, y] = n.slice(-2);
  const [cx, cy] = n.slice(-4, -2);
  const a = Math.atan2(y - cy, x - cx);
  const p = (ang: number) => `${(x - 9 * Math.cos(a + ang)).toFixed(1)} ${(y - 9 * Math.sin(a + ang)).toFixed(1)}`;
  return `M${p(0.5)} L${x} ${y} L${p(-0.5)}`;
}
