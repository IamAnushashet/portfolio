// Self-contained illustration: a girl developer coding on a hill under a glowing moon.
// No external image needed. To use your own artwork instead, see README.md.

const stars = [
  [60, 60, 1.6], [130, 120, 1.2], [210, 40, 1.4], [470, 70, 1.8], [540, 150, 1.3],
  [90, 210, 1.1], [520, 250, 1.5], [40, 320, 1.2], [570, 330, 1.1], [180, 90, 1],
  [430, 35, 1.2], [350, 20, 1.5], [250, 150, 1], [500, 200, 1],
]

export default function HeroScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 600 560"
      role="img"
      aria-label="Illustration of a girl developer with headphones and glasses coding on a laptop, with a glowing moon behind her"
      className={className}
    >
      <defs>
        <radialGradient id="hs-moon" cx="0.5" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#fce7f3" />
          <stop offset="0.5" stopColor="#e879f9" />
          <stop offset="1" stopColor="#7c3aed" />
        </radialGradient>
        <radialGradient id="hs-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e879f9" stopOpacity="0.38" />
          <stop offset="1" stopColor="#e879f9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-m1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4c1d95" stopOpacity="0.9" />
          <stop offset="1" stopColor="#150a2e" />
        </linearGradient>
        <linearGradient id="hs-m2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e1065" />
          <stop offset="1" stopColor="#0f0724" />
        </linearGradient>
        <linearGradient id="hs-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e0f42" />
          <stop offset="1" stopColor="#0a0518" />
        </linearGradient>
        <clipPath id="hs-moon-clip">
          <circle cx="300" cy="230" r="150" />
        </clipPath>
        <filter id="hs-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Stars */}
      {stars.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="#fdf4ff"
          className="star"
          style={{ animationDelay: `${(i % 7) * 0.5}s` }}
        />
      ))}

      {/* Moon + halo */}
      <circle cx="300" cy="230" r="270" fill="url(#hs-halo)" className="moon-glow" />
      <circle cx="300" cy="230" r="150" fill="url(#hs-moon)" />
      <g clipPath="url(#hs-moon-clip)" fill="#0c0818" opacity="0.55">
        <rect x="140" y="268" width="320" height="5" />
        <rect x="140" y="291" width="320" height="7" />
        <rect x="140" y="318" width="320" height="10" />
      </g>

      {/* Mountains */}
      <path
        d="M0 410 L90 335 L170 385 L262 300 L342 372 L432 312 L520 376 L600 336 L600 560 L0 560Z"
        fill="url(#hs-m1)"
      />
      <path
        d="M0 452 L110 388 L200 434 L300 376 L400 436 L500 396 L600 444 L600 560 L0 560Z"
        fill="url(#hs-m2)"
      />

      {/* Pines */}
      <g fill="#0d0620">
        <path d="M48 480 L74 416 L60 416 L86 352 L73 352 L102 284 L131 352 L118 352 L144 416 L130 416 L156 480Z" />
        <path d="M468 486 L492 428 L480 428 L504 372 L493 372 L520 312 L547 372 L536 372 L560 428 L548 428 L572 486Z" />
      </g>

      {/* Front hill */}
      <path
        d="M0 506 Q150 458 300 466 Q450 458 600 506 L600 560 L0 560Z"
        fill="url(#hs-hill)"
      />

      {/* Laptop light on the ground */}
      <ellipse cx="300" cy="474" rx="150" ry="14" fill="#5eead4" opacity="0.2" filter="url(#hs-blur)" />

      {/* ---------- The developer ---------- */}
      <g transform="translate(100 62)">
        {/* back hair + bun */}
        <circle cx="200" cy="74" r="24" fill="#2a1650" />
        <path d="M176 70 Q200 60 224 70" fill="none" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="200" cy="142" rx="56" ry="62" fill="#2a1650" />

        {/* arms (hidden behind the laptop lid) */}
        <path d="M142 244 Q112 304 158 340" fill="none" stroke="#6d28d9" strokeWidth="30" strokeLinecap="round" />
        <path d="M258 244 Q288 304 242 340" fill="none" stroke="#6d28d9" strokeWidth="30" strokeLinecap="round" />

        {/* hoodie */}
        <path d="M128 340 Q124 236 166 214 L234 214 Q276 236 272 340Z" fill="#7c3aed" />
        <path d="M166 214 Q200 246 234 214 Q222 206 200 206 Q178 206 166 214Z" fill="#5b21b6" />
        <path d="M190 238 L188 272 M210 238 L212 272" stroke="#f5d0fe" strokeWidth="3" strokeLinecap="round" />

        {/* neck + face */}
        <rect x="187" y="184" width="26" height="30" rx="8" fill="#b87a5d" />
        <ellipse cx="200" cy="152" rx="42" ry="48" fill="#cf9275" />

        {/* fringe + side locks */}
        <path d="M157 146 Q158 100 200 98 Q244 100 243 146 Q226 120 200 120 Q174 122 157 146Z" fill="#2a1650" />
        <path d="M158 140 Q148 176 154 214 Q166 190 168 156Z" fill="#2a1650" />
        <path d="M242 140 Q252 176 246 214 Q234 190 232 156Z" fill="#2a1650" />

        {/* glasses */}
        <rect x="170" y="146" width="26" height="20" rx="9" fill="#5eead4" fillOpacity="0.14" stroke="#5eead4" strokeWidth="3" />
        <rect x="204" y="146" width="26" height="20" rx="9" fill="#5eead4" fillOpacity="0.14" stroke="#5eead4" strokeWidth="3" />
        <path d="M196 154 L204 154" stroke="#5eead4" strokeWidth="3" />
        <circle cx="183" cy="156" r="2.6" fill="#2a1650" />
        <circle cx="217" cy="156" r="2.6" fill="#2a1650" />

        {/* smile + blush */}
        <path d="M190 178 Q200 187 210 178" fill="none" stroke="#7a3b3b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="168" cy="172" r="6" fill="#f472b6" opacity="0.35" />
        <circle cx="232" cy="172" r="6" fill="#f472b6" opacity="0.35" />

        {/* headphones */}
        <path d="M154 144 Q150 84 200 84 Q250 84 246 144" fill="none" stroke="#f472b6" strokeWidth="8" strokeLinecap="round" />
        <rect x="143" y="136" width="17" height="42" rx="8" fill="#e879f9" />
        <rect x="240" y="136" width="17" height="42" rx="8" fill="#e879f9" />
        <rect x="147" y="146" width="5" height="22" rx="2.5" fill="#fdf4ff" opacity="0.55" />
        <rect x="248" y="146" width="5" height="22" rx="2.5" fill="#fdf4ff" opacity="0.55" />

        {/* laptop */}
        <rect x="104" y="298" width="192" height="100" rx="10" fill="#1f1537" stroke="#c084fc" strokeWidth="2.5" />
        <path d="M88 410 L312 410 L298 398 L102 398Z" fill="#2c1d4e" stroke="#c084fc" strokeWidth="2" strokeLinejoin="round" />
        <path
          d="M200 330 L206 343 L219 348 L206 353 L200 366 L194 353 L181 348 L194 343Z"
          fill="#f0abfc"
          filter="url(#hs-blur)"
          opacity="0.9"
        />
        <path
          d="M200 330 L206 343 L219 348 L206 353 L200 366 L194 353 L181 348 L194 343Z"
          fill="#fdf4ff"
        />
      </g>
    </svg>
  )
}
