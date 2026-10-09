'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useFadeUp } from "@/lib/motion"
import Container from "@/components/ui/Container"

const ENTRIES = [
  { title: "Secteurs", desc: "Les environnements dans lesquels nos consultants interviennent.", href: "/solutions/secteurs" },
  { title: "Méthodologie", desc: "Notre façon de travailler avec vous et avec nos consultants.", href: "/solutions/methodologie" },
  { title: "Réalisations", desc: "Des exemples concrets de nos interventions.", href: "/solutions/realisations" },
] as const

export default function HomeExplore() {
  const fadeUp = useFadeUp()
  return (
    <section style={{ padding: "0 0 88px", background: "var(--color-bg)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {ENTRIES.map((e, i) => (
            <motion.div key={e.href} {...fadeUp(i * 0.06)}>
              <Link href={e.href} className="glass-card"
                style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%", padding: "26px 26px", borderRadius: 14, border: "1px solid var(--color-border)", textDecoration: "none", color: "inherit" }}
              >
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 19, fontWeight: 700 }}>{e.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.6, flex: 1 }}>{e.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--side2)", fontSize: 13, fontWeight: 700 }}>Découvrir <ArrowRight size={14} aria-hidden="true" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
