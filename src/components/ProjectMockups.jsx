// Clean placeholder mockups shown until a real screenshot is added to /public/images.

function Frame({ children }) {
  return (
    <svg
      viewBox="0 0 480 300"
      className="h-full w-full"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="480" height="300" className="fill-bg-soft" />
      <rect x="6" y="6" width="468" height="288" rx="16" className="fill-bg stroke-line" strokeWidth="1.5" />
      {/* title bar */}
      <circle cx="26" cy="26" r="5" className="fill-faint/50" />
      <circle cx="42" cy="26" r="5" className="fill-faint/50" />
      <circle cx="58" cy="26" r="5" className="fill-faint/50" />
      <rect x="82" y="18" width="230" height="16" rx="8" className="fill-surface-strong" />
      <line x1="6" y1="44" x2="474" y2="44" className="stroke-line" />
      {children}
    </svg>
  )
}

/** Multi-agent OS assistant: agent sidebar + conversation + mic. */
export function OsAgentMockup() {
  const agents = ['Browser', 'File', 'System', 'Vision']
  return (
    <Frame>
      <rect x="18" y="56" width="120" height="226" rx="12" className="fill-surface" />
      {agents.map((name, i) => (
        <g key={name}>
          <rect
            x="30" y={70 + i * 46} width="96" height="34" rx="10"
            className="fill-brand/15 stroke-brand/40" strokeWidth="1"
          />
          <circle cx="46" cy={87 + i * 46} r="5" className="fill-accent" />
          <text x="60" y={91 + i * 46} className="fill-ink text-[11px] font-semibold">
            {name}
          </text>
        </g>
      ))}

      {/* conversation */}
      <rect x="262" y="62" width="198" height="34" rx="12" className="fill-brand/25" />
      <rect x="278" y="74" width="120" height="7" rx="3.5" className="fill-ink/60" />
      <rect x="278" y="85" width="76" height="6" rx="3" className="fill-ink/35" />

      <rect x="152" y="108" width="246" height="76" rx="12" className="fill-surface-strong" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="172" cy={126 + i * 21} r="6" className="fill-accent/80" />
          <rect x="186" y={122 + i * 21} width={150 - i * 22} height="7" rx="3.5" className="fill-ink/45" />
        </g>
      ))}

      <rect x="152" y="196" width="170" height="30" rx="12" className="fill-surface-strong" />
      <rect x="168" y="208" width="110" height="7" rx="3.5" className="fill-ink/40" />

      {/* mic */}
      <circle cx="306" cy="254" r="18" className="fill-brand" />
      <rect x="301" y="244" width="10" height="16" rx="5" className="fill-on-brand" />
      <path d="M296 255 Q306 268 316 255" fill="none" className="stroke-on-brand" strokeWidth="2" strokeLinecap="round" />
    </Frame>
  )
}

/** UPI-Shield: stream pipeline + risk chart + risk gauge. */
export function UpiShieldMockup() {
  const nodes = ['Kafka', 'Flink', 'PySpark', 'Model']
  const bars = [58, 84, 46, 112, 70, 96, 40, 128]
  return (
    <Frame>
      {nodes.map((name, i) => (
        <g key={name}>
          <rect
            x={20 + i * 112} y="56" width="88" height="30" rx="10"
            className="fill-surface-strong stroke-line" strokeWidth="1"
          />
          <text
            x={64 + i * 112} y="75" textAnchor="middle"
            className="fill-ink text-[11px] font-semibold"
          >
            {name}
          </text>
          {i < nodes.length - 1 && (
            <path
              d={`M${110 + i * 112} 71 L${130 + i * 112} 71`}
              className="stroke-brand" strokeWidth="2" strokeLinecap="round"
            />
          )}
        </g>
      ))}

      {/* risk chart */}
      <rect x="18" y="100" width="290" height="184" rx="12" className="fill-surface" />
      <line x1="32" y1="262" x2="294" y2="262" className="stroke-line" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={38 + i * 32} y={262 - h} width="18" height={h} rx="5"
          className={h > 100 ? 'fill-accent' : 'fill-brand/45'}
        />
      ))}

      {/* gauge */}
      <rect x="320" y="100" width="142" height="184" rx="12" className="fill-surface" />
      <circle cx="391" cy="172" r="42" fill="none" className="stroke-line" strokeWidth="12" />
      <circle
        cx="391" cy="172" r="42" fill="none" className="stroke-brand" strokeWidth="12"
        strokeLinecap="round" strokeDasharray="150 264" transform="rotate(-90 391 172)"
      />
      <text x="391" y="177" textAnchor="middle" className="fill-ink text-[13px] font-bold">
        Risk
      </text>
      <rect x="338" y="238" width="106" height="7" rx="3.5" className="fill-ink/40" />
      <rect x="338" y="252" width="70" height="7" rx="3.5" className="fill-ink/25" />
    </Frame>
  )
}

/** Head-and-shoulders placeholder for the profile photo slot. */
export function AvatarPlaceholder() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-brand/25 via-bg-soft to-accent/20">
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <circle cx="200" cy="200" r="150" className="fill-brand/15" />
        <circle cx="200" cy="190" r="62" className="fill-brand/55" />
        <path d="M70 500 Q70 322 200 322 Q330 322 330 500Z" className="fill-brand/55" />
        <text
          x="200" y="214" textAnchor="middle"
          className="fill-on-brand text-[44px] font-extrabold"
        >
          AS
        </text>
      </svg>
    </div>
  )
}
