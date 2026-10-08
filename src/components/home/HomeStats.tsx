'use client'

import { motion, useReducedMotion } from "motion/react"
import { STATS } from "@/lib/content"

export default function HomeStats() {
  const reduce = useReducedMotion()
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "36px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="stats-grid">
        {STATS.map(({ value, label }, i) => (
          <motion.div key={label} className="glass-card"
            style={{ padding: "24px 24px", borderRadius: 14, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 6 }}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--side2)" }}>{value}</span>
            <span style={{ fontSize: 13, color: "var(--color-ink-2)", fontWeight: 500 }}>{label}</span>
          </motion.div>
        ))}
      </div>
      <style>{`@media(max-width:767px){.stats-grid{grid-template-columns:1fr 1fr !important}}`}</style>
    </div>
  )
}
