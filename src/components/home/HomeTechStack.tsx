'use client'

import { motion, useReducedMotion } from "motion/react"
import { TECH } from "@/lib/content"
import RevealSection from "@/components/ui/RevealSection"

export default function HomeTechStack() {
  const reduce = useReducedMotion()
  return (
    <section style={{ padding: "72px 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
        <RevealSection>
          <p style={{ color: "var(--color-ink-2)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 36, textAlign: "center" }}>
            Technologies maitrisées
          </p>
        </RevealSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="tech-grid">
          {TECH.map(({ name, src }, i) => (
            <motion.div key={name}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 16px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ borderColor: "rgba(212,32,32,0.4)", scale: 1.04 }}
            >
              <img src={src} alt={name} style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1) opacity(0.7)" }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)", textAlign: "center" }}>{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:767px){.tech-grid{grid-template-columns:repeat(3,1fr) !important}}`}</style>
    </section>
  )
}
