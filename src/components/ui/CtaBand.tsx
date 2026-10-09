import Link from "next/link"
import { ArrowRight } from "lucide-react"
import KBolt from "./KBolt"
import type { NextBg, Side } from "./HeroDecor"

interface CtaLink { label: string; href: string }

interface CtaBandProps {
  side: Side
  /** Fond de la section qui précède la bande (la diagonale du haut se fond dedans). */
  prev: NextBg
  title: string
  text: string
  primary: CtaLink
  secondary?: CtaLink
  /** Mot géant en contour (par défaut : PARLONS-EN côté Solutions, ON RECRUTE côté Carrières). */
  word?: string
}

/** Bande finale pleine largeur : dégradé du côté, haut en diagonale, trame de points, mot géant en contour séparé par le K-éclair du logo. */
export default function CtaBand({ side, prev, title, text, primary, secondary, word: wordProp }: CtaBandProps) {
  const word = wordProp ?? (side === "pro" ? "PARLONS-EN" : "ON RECRUTE")
  return (
    <section className={`cta-band hd-${side}`} style={{ background: `var(--color-${prev === "bg" ? "bg" : "bg-2"})` }}>
      <div className="cta-band-box">
        <div className="cta-band-big" aria-hidden="true">
          <span>{Array.from({ length: 8 }, (_, i) => <span key={i} className="unit">{word}<KBolt /></span>)}</span>
        </div>
        <div className="cta-band-inner">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-band-btns">
            <Link href={primary.href} className="cta-band-btn primary">{primary.label} <ArrowRight size={15} aria-hidden="true" /></Link>
            {secondary && <Link href={secondary.href} className="cta-band-btn secondary">{secondary.label}</Link>}
          </div>
        </div>
      </div>
    </section>
  )
}
