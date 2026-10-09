/**
 * Le « K en éclair » du logo Koncept (contour vectorisé depuis le logo), en trait seul.
 * Hauteur = 1em ; le fût du K tient dans ~0,72em, l'éclair descend sous la ligne de base.
 */
export default function KBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-4 -4 380 496" aria-hidden="true" focusable="false">
      <path
        d="M0 0L116 0L116 161L195 0L331 0L267 131L372 131L372 188L364 188L92 488L225 215L115 216L115 349L0 349Z"
        fill="none" stroke="currentColor" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinejoin="round"
      />
    </svg>
  )
}
