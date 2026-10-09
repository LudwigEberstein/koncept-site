'use client'

import { motion } from "motion/react"
import { DIFFERENTIATORS } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

export default function HomeWhy() {
  const fadeUp = useFadeUp()
  return (
    <section style={{ padding: "88px 0", background: "var(--color-bg-2)", borderBottom: "1px solid var(--color-border)" }}>
      <Container>
        <motion.div {...fadeUp()} style={{ marginBottom: 44, maxWidth: "52ch" }}>
          <Eyebrow>Pourquoi Koncept</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Une ESN à taille humaine.
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14 }}>
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div key={d.title} className="glass-card" {...fadeUp(i * 0.06)}
              style={{ padding: "26px 22px", borderRadius: 14, border: "1px solid var(--color-border)" }}
            >
              <div style={{ width: 28, height: 3, background: "var(--color-accent)", borderRadius: 2, marginBottom: 16 }} />
              <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{d.title}</h3>
              <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.6 }}>{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
