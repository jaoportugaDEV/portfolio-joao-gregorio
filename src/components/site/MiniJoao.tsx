// O João em versão de bolso, desenhado a partir da foto do perfil:
// franja escura caindo na testa, sobrancelhas grossas, sorriso aberto e moletom preto.
const O = "#0B1022"; // contorno
const PELE = "#EDBE98";
const PELE_SOMBRA = "#D59F7C";
const CABELO = "#17110F";
const MOLETOM = "#1C2133";

export function MiniJoao({ boca = "sorriso", className = "" }: { boca?: "sorriso" | "aberta"; className?: string }) {
  return (
    <svg viewBox="0 0 120 150" className={className} aria-hidden overflow="visible">
      {/* corpo */}
      <path d="M16 150 C16 112 36 96 60 96 C84 96 104 112 104 150 Z" fill={MOLETOM} stroke={O} strokeWidth={3} />
      <path d="M30 118 L33 150 M90 118 L87 150" stroke="#3A4260" strokeWidth={2} />
      <path d="M44 100 Q60 122 76 100 Z" fill="#0F121C" stroke={O} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M45 106 l5 9 M75 106 l-5 9" stroke="#E7EBF7" strokeWidth={3} strokeLinecap="round" />
      <path d="M38 101 C44 116 76 116 82 101" stroke="#2B3248" strokeWidth={7} fill="none" strokeLinecap="round" />

      {/* braço que acena */}
      <g className="guia-braco">
        <path d="M94 124 C106 114 110 100 106 90" stroke={O} strokeWidth={17} strokeLinecap="round" fill="none" />
        <path d="M94 124 C106 114 110 100 106 90" stroke={MOLETOM} strokeWidth={11} strokeLinecap="round" fill="none" />
        <circle cx={106} cy={86} r={7.5} fill={PELE} stroke={O} strokeWidth={2.5} />
      </g>

      {/* pescoço, orelhas e cabeça */}
      <rect x={52} y={84} width={16} height={18} fill={PELE_SOMBRA} />
      <ellipse cx={30} cy={62} rx={6} ry={9} fill={PELE} stroke={O} strokeWidth={2.5} />
      <ellipse cx={90} cy={62} rx={6} ry={9} fill={PELE} stroke={O} strokeWidth={2.5} />
      <ellipse cx={60} cy={58} rx={30} ry={33} fill={PELE} stroke={O} strokeWidth={3} />

      {/* cabelo com a franja na testa */}
      <path
        d="M27 60 C21 30 42 14 62 16 C86 17 98 34 93 58 C89 51 85 49 81 52 C80 45 74 41 69 46 C65 38 57 40 55 48 C51 40 43 42 43 51 C38 47 32 51 33 58 Z"
        fill={CABELO}
        stroke={O}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      <path d="M52 30 C48 38 46 44 45 50 M70 28 C72 36 74 40 76 46" stroke="#2E2420" strokeWidth={2} fill="none" strokeLinecap="round" />

      {/* sobrancelhas e olhos */}
      <path d="M42 55 Q49 50 56 54 M64 54 Q71 50 78 55" stroke={CABELO} strokeWidth={3.6} strokeLinecap="round" fill="none" />
      <g className="guia-olhos">
        <ellipse cx={50} cy={64} rx={3.8} ry={4.6} fill="#2A1A14" />
        <ellipse cx={70} cy={64} rx={3.8} ry={4.6} fill="#2A1A14" />
        <circle cx={48.8} cy={62.4} r={1.3} fill="#fff" />
        <circle cx={68.8} cy={62.4} r={1.3} fill="#fff" />
      </g>

      {/* nariz, bochechas e boca */}
      <path d="M60 67 Q63 73 58 74" stroke={PELE_SOMBRA} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <ellipse cx={43} cy={75} rx={5} ry={3} fill="#F29C8C" opacity={0.45} />
      <ellipse cx={77} cy={75} rx={5} ry={3} fill="#F29C8C" opacity={0.45} />
      {boca === "sorriso" ? (
        <>
          <path d="M49 78 Q60 90 71 78 Q60 82 49 78 Z" fill="#7A2E2A" stroke={O} strokeWidth={2} strokeLinejoin="round" />
          <path d="M52 79.2 Q60 82.6 68 79.2 L67 81.4 Q60 84 53 81.4 Z" fill="#fff" />
        </>
      ) : (
        <>
          <ellipse cx={60} cy={81} rx={6.5} ry={5.5} fill="#7A2E2A" stroke={O} strokeWidth={2} />
          <ellipse cx={60} cy={84} rx={3.6} ry={2} fill="#E8737A" />
        </>
      )}
    </svg>
  );
}
