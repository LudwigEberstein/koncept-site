import { buildNetwork } from "@/lib/network"

export type Side = "pro" | "career"
export type NextBg = "bg" | "bg2"
/** Motif du héros : réseau « plan technique » ou code qui défile. */
export type Decor = "net" | "code"

/** Hauteur de la diagonale en bas des héros. */
export const EDGE_H = "clamp(36px, 4.5vw, 64px)"

const NET = buildNetwork({ seed: 11, count: 22, x: [760, 420], y: [30, 640] })

const CODE = `const koncept = {
  ambiance: "top",
  cafe: "illimité",
  remote: 2, // jours / semaine
};

if (tu.aimes(coder)) {
  rejoins(koncept);
}

$ git checkout -b ma-nouvelle-carriere
$ npm run bonheur
$ git push origin main --force-with-love

// 1 500 € / an de formation
await certification.passer("AWS");
`

/**
 * Halo + texture du héros, cantonnés à droite avec un fondu vers la gauche.
 * Les couleurs suivent `side` (bleu Solutions / rouge Carrières) ; le motif suit `decor`.
 * Utilisé uniquement par <HeroSection>, qui fournit le contexte d'empilement (calque en z-index: -1).
 */
export function HeroDecor({ side, decor }: { side: Side; decor: Decor }) {
  return (
    <div className={`hd hd-${side} hd-v-${decor}`} aria-hidden="true">
      <div className="hd-glow" />
      {decor === "net" ? (
        <>
          <div className="hd-grid" />
          <svg className="hd-net" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
            {NET.edges.map(([i, j]) => (
              <line key={`l${i}-${j}`} x1={NET.nodes[i].x} y1={NET.nodes[i].y} x2={NET.nodes[j].x} y2={NET.nodes[j].y} />
            ))}
            {NET.nodes.map((n, i) => (
              <circle key={`n${i}`} className={i % 5 ? "n" : "hub"} cx={n.x} cy={n.y} r={i % 5 ? 3.2 : 6.5} />
            ))}
            <g className="hd-packets">
              {NET.edges.filter((_, k) => k % 3 === 0).map(([i, j], k) => (
                <circle key={`p${i}-${j}`} className="pk" r="2.5">
                  <animateMotion dur={`${3 + (k % 4)}s`} repeatCount="indefinite" begin={`${(-k * 0.7).toFixed(1)}s`} path={`M${NET.nodes[i].x},${NET.nodes[i].y} L${NET.nodes[j].x},${NET.nodes[j].y}`} />
                </circle>
              ))}
            </g>
          </svg>
        </>
      ) : (
        <>
          <div className="hd-dots" />
          <div className="hd-code"><pre>{CODE + "\n" + CODE}</pre></div>
        </>
      )}
    </div>
  )
}

/**
 * Bord en diagonale vers la section suivante, rempli de sa couleur (`next`, ou `nextColor` si la
 * section suivante a un fond particulier, ex. une barre translucide), + liseré lumineux.
 */
export function HeroEdge({ next, nextColor, side }: { next: NextBg; nextColor?: string; side: Side }) {
  return (
    <svg className={`hd-edge hd-${side}`} viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height: EDGE_H }} aria-hidden="true">
      <defs>
        <linearGradient id={`hd-edge-${side}`} x1="0" x2="1">
          <stop offset="0" stopColor="transparent" />
          <stop offset=".25" stopColor="var(--side2)" />
          <stop offset=".75" stopColor="var(--side2)" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon points="0,100 100,0 100,100" fill={nextColor ?? `var(--color-${next === "bg" ? "bg" : "bg-2"})`} />
      <line x1="0" y1="98" x2="100" y2="-2" stroke={`url(#hd-edge-${side})`} strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
