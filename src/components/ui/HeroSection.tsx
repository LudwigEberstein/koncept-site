import type { CSSProperties, ReactNode } from "react"
import { HeroDecor, HeroEdge, EDGE_H, type Decor, type NextBg, type Side } from "./HeroDecor"

interface HeroSectionProps {
  /** Couleur du côté : pro = bleu (Solutions), career = rouge (Carrières). */
  side: Side
  /** Fond de la section qui suit le héros (la diagonale se fond dedans). */
  next: NextBg
  /** Couleur exacte de l'élément qui suit, si ce n'est pas --color-bg / --color-bg-2. */
  nextColor?: string
  /** Motif du fond : réseau (défaut côté Solutions) ou code (défaut côté Carrières). */
  decor?: Decor
  paddingTop?: number
  paddingBottom?: number
  id?: string
  children: ReactNode
  style?: CSSProperties
}

/**
 * Section héros d'une page : fond + halo/texture + diagonale. Remplace le <section> d'ouverture.
 * Elle porte seule le contexte d'empilement (isolation) nécessaire au calque décoratif.
 */
export default function HeroSection({ side, next, nextColor, decor, paddingTop = 140, paddingBottom = 80, id, children, style }: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`hd-${side}`}
      style={{
        position: "relative", zIndex: 2, isolation: "isolate", overflow: "hidden", marginBottom: -1,
        background: "var(--color-bg)", paddingTop, paddingBottom: `calc(${paddingBottom}px + ${EDGE_H})`,
        ...style,
      }}
    >
      <HeroDecor side={side} decor={decor ?? (side === "pro" ? "net" : "code")} />
      {children}
      <HeroEdge next={next} nextColor={nextColor} side={side} />
    </section>
  )
}
