import type { CSSProperties, ReactNode } from "react"

export type Side = "pro" | "career"
export type NextBg = "bg" | "bg2"

/** Hauteur de la diagonale en bas des héros. */
export const EDGE_H = "clamp(36px, 4.5vw, 64px)"

/** Réseau décoratif (Solutions) : positions pseudo-aléatoires mais déterministes (SSR = client). */
function buildNetwork() {
  let seed = 11
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  const nodes = Array.from({ length: 22 }, () => ({ x: Math.round(760 + rnd() * 420), y: Math.round(30 + rnd() * 640) }))
  const edges: [number, number][] = []
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter(o => o.j > i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach(o => edges.push([i, o.j]))
  })
  return { nodes, edges }
}
const NET = buildNetwork()

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
 * Solutions : grille « plan technique » + réseau. Carrières : halo rouge + points + code qui défile.
 * Se place dans un parent `position: relative; isolation: isolate` (calque en z-index: -1).
 */
export function HeroDecor({ side }: { side: Side }) {
  return (
    <div className={`hd hd-${side}`} aria-hidden="true">
      <div className="hd-glow" />
      {side === "pro" ? (
        <>
          <div className="hd-grid" />
          <svg className="hd-net" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
            {NET.edges.map(([i, j]) => (
              <line key={`l${i}-${j}`} x1={NET.nodes[i].x} y1={NET.nodes[i].y} x2={NET.nodes[j].x} y2={NET.nodes[j].y} stroke="rgba(96,165,250,.3)" strokeWidth="1" />
            ))}
            {NET.nodes.map((n, i) => (
              <circle key={`n${i}`} cx={n.x} cy={n.y} r={i % 5 ? 3.2 : 6.5} fill={i % 5 ? "#60a5fa" : "#0a1830"} stroke="#60a5fa" strokeWidth={i % 5 ? 0 : 1.5} />
            ))}
            <g className="hd-packets">
              {NET.edges.filter((_, k) => k % 3 === 0).map(([i, j], k) => (
                <circle key={`p${i}-${j}`} r="2.5" fill="#9cc5ff">
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

/** Bord en diagonale vers la section suivante (rempli de sa couleur) + liseré lumineux. */
export function HeroEdge({ next, side }: { next: NextBg; side: Side }) {
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
      <polygon points="0,100 100,0 100,100" fill={`var(--color-${next === "bg" ? "bg" : "bg-2"})`} />
      <line x1="0" y1="98" x2="100" y2="-2" stroke={`url(#hd-edge-${side})`} strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

interface HeroSectionProps {
  side: Side
  /** Fond de la section qui suit le héros (pour que la diagonale se fonde dedans). */
  next: NextBg
  paddingTop?: number
  paddingBottom?: number
  children: ReactNode
  style?: CSSProperties
}

/** Section héros d'une page : fond + halo/texture + diagonale. Remplace le <section> d'ouverture des pages. */
export default function HeroSection({ side, next, paddingTop = 140, paddingBottom = 80, children, style }: HeroSectionProps) {
  return (
    <section
      className={`hd-${side}`}
      style={{
        position: "relative", zIndex: 2, isolation: "isolate", overflow: "hidden", marginBottom: -1,
        background: "var(--color-bg)", paddingTop, paddingBottom: `calc(${paddingBottom}px + ${EDGE_H})`,
        ...style,
      }}
    >
      <HeroDecor side={side} />
      {children}
      <HeroEdge next={next} side={side} />
    </section>
  )
}
