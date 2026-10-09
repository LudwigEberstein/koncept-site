'use client'

import { motion } from "motion/react"
import { EXPERTISES } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

// Technologies issues des familles techniques (la famille « accompagnement » ne contient pas de technologies) :
// une seule source de vérité, donc toujours cohérent avec la page Expertises.
const TECHNOLOGIES = Array.from(new Set(EXPERTISES.filter(e => e.slug !== "accompagnement").flatMap(e => e.stack)))

export default function HomeTechStack() {
  const fadeUp = useFadeUp()
  return (
    <section style={{ padding: "0 0 88px", background: "var(--color-bg)" }}>
      <Container>
        <motion.div {...fadeUp()} style={{ textAlign: "center", marginBottom: 28 }}>
          <Eyebrow>Technologies de nos missions</Eyebrow>
        </motion.div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, maxWidth: 980, margin: "0 auto" }}>
          {TECHNOLOGIES.map((name, i) => (
            <motion.span key={name} {...fadeUp(Math.min(i, 12) * 0.03)}
              style={{ padding: "8px 16px", borderRadius: 9999, border: "1px solid var(--color-border-2)", background: "var(--color-bg-2)", fontSize: 13, fontWeight: 600, color: "var(--color-ink-2)" }}
              whileHover={{ borderColor: "rgba(var(--color-accent-rgb), 0.7)", color: "#F0EDE8" }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  )
}
