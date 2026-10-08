import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
  /** Mot géant en contour (par défaut : ON PARLE côté Solutions, ON RECRUTE côté Carrières). */
  word?: string
}

/** Bande finale pleine largeur : dégradé du côté, haut en diagonale, trame de points, mot géant en contour. */
export default function CtaBand({ side, prev, title, text, primary, secondary, word: wordProp }: CtaBandProps) {
  const word = wordProp ?? (side === "pro" ? "ON PARLE" : "ON RECRUTE")
  return (
    <section className={`cta-band hd-${side}`} style={{ background: `var(--color-${prev === "bg" ? "bg" : "bg-2"})` }}>
      <div className="cta-band-box">
        <div className="cta-band-big" aria-hidden="true"><span>{`${word} ★ `.repeat(8)}</span></div>
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
