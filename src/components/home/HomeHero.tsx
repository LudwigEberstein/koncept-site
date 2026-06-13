'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { SITE, IMAGES } from "@/lib/content"

export default function HomeHero() {
  const reduce = useReducedMotion()
  return (
    <section id="accueil" style={{ minHeight: "100dvh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 40 }}>
      <div style={{ position: "absolute", top: "10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,32,32,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
        <div>
          <motion.p style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}
            initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >ESN Toulousaine</motion.p>

          <motion.h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(44px, 5.5vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 28px" }}
            initial={reduce ? false : { opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            On transforme<br /><span style={{ color: "var(--color-accent)" }}>votre IT.</span>
          </motion.h1>

          <motion.p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: "var(--color-ink-2)", maxWidth: "52ch", margin: "0 0 40px" }}
            initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            50 experts Java, .NET et DevOps basés à Toulouse, engagés dans votre transformation digitale depuis 2014.
          </motion.p>

          <motion.div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/contact" style={{ background: "var(--color-accent)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s, transform 0.1s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#E53535" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-accent)" }}
              onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = "scale(0.98)" }}
              onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
            >
              Nous contacter <ArrowRight size={16} />
            </Link>
            <Link href="/notre-offre" style={{ background: "transparent", color: "var(--color-ink)", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: "none", border: "1px solid var(--color-border-2)", transition: "border-color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.35)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-2)" }}
            >
              Notre offre
            </Link>
          </motion.div>
        </div>

        <motion.div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }} className="hero-img"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={IMAGES.hero} alt="Koncept - solutions IT pour l'aéronautique et l'industrie toulousaine" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(212,32,32,0.18) 0%, transparent 50%)", pointerEvents: "none" }} />
        </motion.div>
      </div>

      <style>{`
        .hero-grid { }
        @media (max-width: 767px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 32px !important; } .hero-img { aspect-ratio: 16/9 !important; } }
      `}</style>
    </section>
  )
}
