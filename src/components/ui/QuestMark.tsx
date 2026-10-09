/**
 * Point d'exclamation « quête disponible » (clin d'œil aux marqueurs de quêtes des jeux de rôle),
 * dessiné en rouge Koncept avec un léger flottement. Hauteur ≈ 1em : se place juste avant un titre.
 */
export default function QuestMark({ className }: { className?: string }) {
  return (
    <svg className={`quest-mark${className ? ` ${className}` : ""}`} viewBox="0 0 48 96" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="quest-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a7a" />
          <stop offset=".45" stopColor="#e32b2b" />
          <stop offset="1" stopColor="#8f1010" />
        </linearGradient>
      </defs>
      {/* barre effilée */}
      <path d="M8 6 Q8 2 12 2 H36 Q40 2 40 6 L33 62 Q32.4 67 27.5 67 H20.5 Q15.6 67 15 62 Z" fill="url(#quest-grad)" stroke="#2a0606" strokeWidth="3" strokeLinejoin="round" />
      {/* point */}
      <circle cx="24" cy="82.5" r="10" fill="url(#quest-grad)" stroke="#2a0606" strokeWidth="3" />
      {/* reflets */}
      <path d="M14 10 H20 L17.5 44 Z" fill="#fff" opacity=".28" />
      <circle cx="20.5" cy="79" r="3" fill="#fff" opacity=".35" />
    </svg>
  )
}
