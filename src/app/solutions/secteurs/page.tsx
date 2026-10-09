'use client'

import { motion } from "motion/react"
import { SECTORS } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

export default function Secteurs() {
  const fadeUp = useFadeUp()

  return (
    <>
      <HeroSection side="pro" next="bg" paddingTop={140} paddingBottom={72}>
        <Container>
          <motion.div style={{ maxWidth: "64ch" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow mb={20}>Secteurs</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
              Les environnements<br /><span style={{ color: "var(--color-accent-text)" }}>où nous intervenons.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch" }}>
              Nos consultants accompagnent des entreprises et organisations de différents secteurs, en s&apos;adaptant aux enjeux techniques et métiers de leurs projets.
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <section style={{ padding: "72px 0 88px", background: "var(--color-bg)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 14 }}>
            {SECTORS.map((s, i) => (
              <motion.div key={s.slug} className="glass-card" {...fadeUp(i * 0.05)}
                style={{ padding: "26px 24px", borderRadius: 14, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div style={{ width: 28, height: 3, background: "var(--color-accent)", borderRadius: 2 }} />
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 19, fontWeight: 700 }}>{s.name}</h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.6 }}>{s.enjeu}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand side="pro" prev="bg" title="Votre secteur n'est pas listé ?"
        text="Parlez-nous de votre contexte : nous vous dirons honnêtement si nous pouvons vous aider."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
      />
    </>
  )
}
