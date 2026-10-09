'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { EXPERTISES } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

export default function HomeExpertises() {
  const fadeUp = useFadeUp()
  return (
    <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
      <Container>
        <motion.div {...fadeUp()} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
          <div>
            <Eyebrow>Nos expertises</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Ce que nous faisons.
            </h2>
          </div>
          <Link href="/solutions/expertises" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
            Voir les expertises <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {EXPERTISES.map((exp, i) => (
            <motion.div key={exp.slug} className="glass-card" {...fadeUp(i * 0.06)}
              style={{ padding: "28px 26px", borderRadius: 14, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 12 }}
            >
              <Eyebrow mb={0}>{exp.short}</Eyebrow>
              <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em" }}>{exp.title}</h3>
              <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.6, flex: 1 }}>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
