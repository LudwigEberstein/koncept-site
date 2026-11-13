import Link from "next/link"
import { ArrowRight } from "lucide-react"
import KBolt from "./KBolt"
import type { NextBg, Side } from "./HeroDecor"

interface CtaLink { label: string; href: string }

interface CtaBandProps {
  side: Side
  /** Fond de la section qui précède la bande (la diagonale du haut se fond dedans). */
  prev: NextBg
  /** Sans titre, texte ni bouton, la bande ne garde que le mot géant, centré verticalement (variante « mot seul »). */
  title?: string
  text?: string
  primary?: CtaLink
  /** Mot géant en contour (par défaut : PARLONS-EN côté Solutions, ON RECRUTE côté Carrières). */
  word?: string
  /** Sépare les répétitions du mot par le K-éclair du logo (par défaut) ; `false` = simple espace. */
  bolt?: boolean
}

/** Bande finale pleine largeur : dégradé du côté, haut en diagonale, trame de points, mot géant en contour séparé par le K-éclair du logo. */
export default function CtaBand({ side, prev, title, text, primary, word: wordProp, bolt = true }: CtaBandProps) {
  const word = wordProp ?? (side === "pro" ? "PARLONS-EN" : "ON RECRUTE")
  const hasContent = Boolean(title || text || primary)
  return (
    <section className={`cta-band hd-${side}${hasContent ? "" : " cta-band--word"}`} aria-hidden={hasContent ? undefined : true}
      style={{ background: `var(--color-${prev === "bg" ? "bg" : "bg-2"})` }}
    >
      <div className="cta-band-box">
        <div className={`cta-band-big${bolt ? "" : " no-bolt"}`} aria-hidden="true">
          <span>{Array.from({ length: 8 }, (_, i) => <span key={i} className="unit">{word}{bolt && <KBolt />}</span>)}</span>
        </div>
        {hasContent && (
          <div className="cta-band-inner">
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
            {primary && (
              <div className="cta-band-btns">
                <Link href={primary.href} className="cta-band-btn primary">{primary.label} <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
