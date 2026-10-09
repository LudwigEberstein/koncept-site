'use client'

import { motion } from "motion/react"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import ToValidate from "@/components/ui/ToValidate"

/** Trame d'une réalisation : contexte, intervention, technologies, résultat. Les contenus restent à fournir. */
const FIELDS = ["Contexte", "Notre intervention", "Technologies", "Résultat"] as const

/** Références pressenties, en attente de validation (client autorisé à être cité, contenu de chaque fiche). */
const REFERENCES = ["oOLive", "Jade", "Édition Compagnon"] as const

export default function Realisations() {
  const fadeUp = useFadeUp()

  return (
    <>
      <HeroSection side="pro" next="bg" paddingTop={140} paddingBottom={72}>
        <Container>
          <motion.div style={{ maxWidth: "64ch" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow mb={20}>Réalisations</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
              Nos interventions,<br /><span style={{ color: "var(--color-accent-text)" }}>concrètement.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch" }}>
              Pour chaque référence : le contexte, ce que nous avons fait, les technologies et le résultat.
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <section style={{ padding: "72px 0 88px", background: "var(--color-bg)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
            {REFERENCES.map((client, i) => (
              <motion.article key={client} className="glass-card" {...fadeUp(i * 0.08)}
                style={{ padding: "30px 28px", borderRadius: 16, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 18 }}
              >
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{client}</h2>
                <dl style={{ display: "flex", flexDirection: "column", gap: 12, margin: 0 }}>
                  {FIELDS.map(label => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
                      <dt style={{ color: "var(--color-ink-2)", fontSize: 13, fontWeight: 600 }}>{label}</dt>
                      <dd style={{ margin: 0 }}><ToValidate variant="pill">À confirmer</ToValidate></dd>
                    </div>
                  ))}
                </dl>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand side="pro" prev="bg" title="Un projet comparable au vôtre ?"
        text="Parlons-en : nous vous dirons si nous avons déjà accompagné un besoin similaire."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
      />
    </>
  )
}
