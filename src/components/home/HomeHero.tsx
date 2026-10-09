'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import HeroSection from "@/components/ui/HeroSection"

export default function HomeHero() {
  const reduce = useReducedMotion()
  return (
    <HeroSection id="accueil" side="pro" next="bg2" paddingTop={140} paddingBottom={80}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", width: "100%", display: "grid", gridTemplateColumns: "minmax(0, 720px)", gap: 64, alignItems: "center" }} className="hero-grid">
        <div>
          <motion.p style={{ color: "var(--color-accent-text)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}
            initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >ESN à taille humaine · Toulouse</motion.p>

          <motion.h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(44px, 5.5vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 28px" }}
            initial={reduce ? false : { opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Les bonnes compétences,<br /><span style={{ color: "var(--color-accent)" }}>au bon moment.</span>
          </motion.h1>

          <motion.p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: "var(--color-ink-2)", maxWidth: "52ch", margin: "0 0 40px" }}
            initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Koncept met à votre service des consultants en développement logiciel et en accompagnement technique et fonctionnel, avec un interlocuteur proche et réactif.
          </motion.p>

          <motion.div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/solutions/contact" style={{ background: "var(--color-accent)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s, transform 0.1s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.12)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "none" }}
              onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = "scale(0.98)" }}
              onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
            <Link href="/solutions/expertises" style={{ background: "transparent", color: "var(--color-ink)", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: "none", border: "1px solid var(--color-border-2)", transition: "border-color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.35)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-2)" }}
            >
              Nos expertises
            </Link>
          </motion.div>
        </div>

      </div>

      <style>{`
        .hero-grid { }
        @media (max-width: 767px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 32px !important; } }
      `}</style>
    </HeroSection>
  )
}
