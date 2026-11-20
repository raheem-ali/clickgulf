type SceneKind = "weld" | "skid" | "process" | "tank" | "steel" | "plant";

const ink = "rgba(6,18,66,0.62)";
const line = "rgba(255,255,255,0.38)";
const sw = 3;

function Shapes({ kind }: { kind: SceneKind }) {
  switch (kind) {
    case "weld": {
      const bolts = Array.from({ length: 10 }, (_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return [1180 + Math.cos(a) * 215, 450 + Math.sin(a) * 215] as const;
      });
      return (
        <g fill={ink} stroke={line} strokeWidth={sw}>
          <circle cx="1180" cy="450" r="285" />
          <circle cx="1180" cy="450" r="150" />
          <circle cx="1180" cy="450" r="70" fill="rgba(255,255,255,0.08)" />
          {bolts.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="22" fill="rgba(255,255,255,0.1)" />
          ))}
          <g stroke="#FFB320" strokeWidth="4" strokeLinecap="round" fill="none">
            <path d="M960 330 l-70 -50 M965 345 l-95 -10 M970 312 l-40 -80 M985 300 l10 -90 M1000 296 l55 -75" />
          </g>
          <circle cx="968" cy="336" r="16" fill="#FFB320" stroke="none" />
        </g>
      );
    }
    case "skid":
      return (
        <g fill={ink} stroke={line} strokeWidth={sw}>
          <rect x="760" y="640" width="720" height="38" />
          <rect x="780" y="300" width="14" height="340" />
          <rect x="1446" y="300" width="14" height="340" />
          <rect x="780" y="300" width="680" height="14" />
          <rect x="1090" y="330" width="320" height="170" rx="85" />
          <g fill="none" strokeWidth="14" strokeLinecap="round">
            <path d="M850 600 V440 H1090" />
            <path d="M850 520 H1000 V380 H1090" />
            <path d="M1250 500 V600 H1400" />
          </g>
          <circle cx="850" cy="520" r="26" />
          <circle cx="1000" cy="440" r="26" />
          <circle cx="1250" cy="580" r="26" />
          <rect x="880" y="560" width="120" height="60" />
        </g>
      );
    case "process":
      return (
        <g fill={ink} stroke={line} strokeWidth={sw}>
          <rect x="740" y="390" width="760" height="230" rx="115" />
          <path d="M870 390 V620 M1000 390 V620 M1130 390 V620 M1260 390 V620 M1390 390 V620" fill="none" strokeOpacity="0.5" />
          <path d="M830 618 l-30 80 h150 l-30 -80 M1290 618 l-30 80 h150 l-30 -80" />
          <rect x="1020" y="320" width="70" height="72" />
          <rect x="1180" y="330" width="50" height="62" />
          <path d="M1580 330 v290" strokeDasharray="10 12" />
        </g>
      );
    case "tank":
      return (
        <g fill={ink} stroke={line} strokeWidth={sw}>
          <rect x="820" y="400" width="600" height="290" />
          <path d="M820 400 Q1120 270 1420 400" />
          <path d="M820 470 H1420 M820 540 H1420 M820 610 H1420" fill="none" strokeOpacity="0.45" />
          <path d="M1420 690 L1500 400 M1500 400 H1420 M1420 650 l70 -10 M1428 600 l66 -10 M1438 550 l66 -10 M1448 500 l62 -10" fill="none" />
          <rect x="1090" y="318" width="60" height="30" />
          <path d="M740 690 H1520" strokeWidth="6" />
        </g>
      );
    case "steel":
      return (
        <g fill="none" stroke={line} strokeWidth={sw}>
          {[800, 1040, 1280, 1520].map((x) => (
            <rect key={x} x={x - 9} y="260" width="18" height="430" fill={ink} />
          ))}
          {[330, 480, 630].map((y) => (
            <rect key={y} x="791" y={y - 9} width="738" height="18" fill={ink} />
          ))}
          <path d="M809 339 L1031 471 M1049 339 L1271 471 M1289 339 L1511 471 M1031 489 L809 621 M1271 489 L1049 621 M1511 489 L1289 621" />
          <path d="M740 700 H1580" strokeWidth="6" />
        </g>
      );
    case "plant":
      return (
        <g fill={ink} stroke={line} strokeWidth={sw}>
          <rect x="780" y="520" width="12" height="170" />
          <rect x="1100" y="520" width="12" height="170" />
          <rect x="780" y="520" width="340" height="12" />
          <g fill="none" strokeWidth="16" strokeLinecap="round">
            <path d="M800 500 H1000 q40 0 40 40" />
            <path d="M840 470 H1060 q40 0 40 -40 V400" />
          </g>
          <path d="M1250 690 V300 H1520 M1480 300 V420" fill="none" strokeWidth="8" />
          <path d="M1250 300 L1140 420 M1250 380 L1330 300 M1250 460 L1370 300" fill="none" />
          <rect x="1450" y="420" width="60" height="40" />
          <path d="M740 690 H1580" strokeWidth="6" />
        </g>
      );
  }
}

export default function Scene({ kind, className }: { kind: SceneKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0B1B52" />
          <stop offset="0.6" stopColor="#1B3C9C" />
          <stop offset="1" stopColor="#2F57C9" />
        </linearGradient>
        <pattern id={`grid-${kind}`} width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M80 0H0V80" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1600" height="900" fill={`url(#bg-${kind})`} />
      <rect width="1600" height="900" fill={`url(#grid-${kind})`} />
      <Shapes kind={kind} />
    </svg>
  );
}
