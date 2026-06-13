'use client'

import { motion, useReducedMotion } from "motion/react"
import { SECTORS } from "@/lib/content"
import RevealSection from "@/components/ui/RevealSection"

export default function HomeSectors() {
  const reduce = useReducedMotion()
  return (
    <section id="secteurs" style={{ padding: "100px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
        <RevealSection>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            7 secteurs, une même exigence.
          </h2>
          <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "50ch", lineHeight: 1.6, marginBottom: 52 }}>
            Nos équipes ont développé une expertise reconnue dans des environnements métier exigeants et réglementés.
          </p>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="sectors-grid">
          {SECTORS.map((sector, i) => (
            <motion.div key={sector}
              style={{ padding: "24px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", transition: "border-color 0.2s" }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ borderColor: "rgba(212,32,32,0.4)" }}
            >
              <div style={{ width: 8, height: 8, borderRadius: 2, background: "var(--color-accent)", marginBottom: 16 }} />
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 600 }}>{sector}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:767px){.sectors-grid{grid-template-columns:repeat(2,1fr) !important}}`}</style>
    </section>
  )
}
