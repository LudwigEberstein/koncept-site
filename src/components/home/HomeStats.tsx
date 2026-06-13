'use client'

import { motion, useReducedMotion } from "motion/react"
import { STATS } from "@/lib/content"

export default function HomeStats() {
  const reduce = useReducedMotion()
  return (
    <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
        {STATS.map(({ value, label }, i) => (
          <motion.div key={label}
            style={{ padding: "36px 24px", borderRight: i < 3 ? "1px solid var(--color-border)" : "none", display: "flex", flexDirection: "column", gap: 6 }}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-accent)" }}>{value}</span>
            <span style={{ fontSize: 13, color: "var(--color-ink-2)", fontWeight: 500 }}>{label}</span>
          </motion.div>
        ))}
      </div>
      <style>{`@media(max-width:767px){.stats-grid{grid-template-columns:1fr 1fr !important}.stats-grid>div{border-right:none !important;border-bottom:1px solid var(--color-border) !important}}`}</style>
    </div>
  )
}
