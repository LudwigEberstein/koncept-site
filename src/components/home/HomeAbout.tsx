'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { IMAGES, STATS } from "@/lib/content"

export default function HomeAbout() {
  const reduce = useReducedMotion()
  return (
    <section id="appropos" style={{ padding: "100px 0", background: "var(--color-bg-2)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
        <motion.div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative" }} className="about-img"
          initial={reduce ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={IMAGES.team} alt="L'équipe Koncept à Toulouse" fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 60%, rgba(212,32,32,0.15) 100%)" }} />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Pas une ESN anonyme.<br /><span style={{ color: "var(--color-accent)" }}>Une vraie équipe.</span>
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
            Depuis 2014, Koncept accompagne les entreprises toulousaines dans leurs projets de transformation digitale. Avec 50 collaborateurs spécialisés Java, .NET et DevOps, nous intervenons dans 7 secteurs d'activité.
          </p>
          <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
            Notre ambition : intégrer les technologies les plus pertinentes pour donner vie aux projets de nos clients, avec engagement, méthode et passion pour la technique.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 36 }}>
            {STATS.map(({ value, label }, i) => (
              <motion.div key={label}
                style={{ paddingTop: 16, borderTop: "1px solid var(--color-border)" }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-accent)", lineHeight: 1 }}>{value}</p>
                <p style={{ fontSize: 13, color: "var(--color-ink-2)", marginTop: 4 }}>{label}</p>
              </motion.div>
            ))}
          </div>

          <Link href="/a-propos" style={{ color: "var(--color-ink)", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "gap 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "10px" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px" }}
          >
            En savoir plus sur nous <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
      <style>{`@media(max-width:767px){.about-grid{grid-template-columns:1fr !important;gap:40px !important}.about-img{order:-1}}`}</style>
    </section>
  )
}
