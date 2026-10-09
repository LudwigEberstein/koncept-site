'use client'

import { motion } from "motion/react"
import { EXPERTISES } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import ToValidate from "@/components/ui/ToValidate"

export default function Expertises() {
  const fadeUp = useFadeUp()

  return (
    <>
      <HeroSection side="pro" next="bg" paddingTop={140} paddingBottom={72}>
        <Container>
          <motion.div style={{ maxWidth: "64ch" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow mb={20}>Expertises</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
              Des compétences<br /><span style={{ color: "var(--color-accent)" }}>techniques et fonctionnelles.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch" }}>
              Quatre familles de compétences, au service de vos projets : du développement au pilotage.
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <section style={{ padding: "72px 0 88px", background: "var(--color-bg)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 16 }}>
            {EXPERTISES.map((exp, i) => (
              <motion.article key={exp.slug} className="glass-card" {...fadeUp(i * 0.06)}
                style={{ padding: "34px 32px", borderRadius: 16, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 12, fontWeight: 800, color: "var(--side2)", letterSpacing: "0.06em" }}>{String(i + 1).padStart(2, "0")}</span>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{exp.title}</h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65, flex: 1 }}>{exp.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.stack.map(t => (
                    <span key={t} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600, color: "var(--color-ink-2)" }}>{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <ToValidate>Périmètre technique à confirmer par l&apos;équipe (technologies, niveaux de maîtrise, autres compétences à ajouter ou à retirer). Seules les technologies déjà présentes sur l&apos;ancien site sont citées.</ToValidate>
          </div>
        </Container>
      </section>

      <CtaBand side="pro" prev="bg" title="Un besoin de compétences précis ?"
        text="Décrivez-nous votre contexte et le profil recherché : nous revenons vers vous."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
        secondary={{ label: "Notre façon de travailler", href: "/solutions/methodologie" }}
      />
    </>
  )
}
