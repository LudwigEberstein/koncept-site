'use client'

import Link from "next/link"
import { Users } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

export default function HomeJoinCTA() {
  const reduce = useReducedMotion()
  return (
    <section style={{ padding: "100px 24px", background: "var(--color-accent)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.05, marginBottom: 20 }}>
            Rejoignez les 50.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.65, maxWidth: "44ch", margin: "0 auto 36px" }}>
            Développeurs Java, .NET, Angular ou profils DevOps : si vous aimez les projets qui ont du sens, on a peut-être une place pour vous à Toulouse.
          </p>
          <Link href="/recrutement" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "var(--color-accent)", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "transform 0.15s, box-shadow 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.25)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none" }}
          >
            <Users size={16} /> Voir les postes ouverts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
