'use client'

import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"

const PILLARS = [
  {
    title: "Qualité",
    subtitle: "Notre objectif = la satisfaction client.",
    desc: "Nous comprenons les besoins de nos clients pour leur proposer des solutions adaptées. En mobilisant expérience et bonnes pratiques, nous structurons et contrôlons chaque projet pour viser l'excellence.",
    quote: "\"La maîtrise de la Qualité Totale signifie simplement faire ce qu'on est censé faire.\"",
    author: "Kaoru Ishikawa",
    color: "#1a73e8",
  },
  {
    title: "Responsabilité",
    subtitle: "Notre responsabilité = la confiance du client.",
    desc: "Notre expérience en gestion de contrats au forfait nous permet de nous engager sur les résultats. Nous assumons les défis proactivement, car les difficultés naissent de l'hésitation, non des circonstances.",
    quote: null,
    author: null,
    color: "var(--color-accent)",
  },
  {
    title: "Sécurité",
    subtitle: "Notre exigence = la sécurité du client.",
    desc: "Face aux risques numériques, Koncept a mis en place des processus rigoureux et obtenu la certification ISO 27001:2013 en 2020. Intégrité et confidentialité sont au coeur de notre approche sécurité.",
    quote: null,
    author: null,
    color: "#22c55e",
  },
  {
    title: "Bien-être",
    subtitle: "Notre fierté = nos collaborateurs.",
    desc: "L'engagement de nos équipes conditionne notre succès. Autonomie, espaces d'initiative et innovation sont au programme au quotidien. La satisfaction et l'évolution professionnelle de nos collaborateurs sont notre philosophie.",
    quote: null,
    author: null,
    color: "#f59e0b",
  },
]

export default function Ethique() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Notre éthique"
        title="Des engagements,"
        titleAccent="pas des promesses."
        subtitle="Quatre piliers qui guident chacune de nos décisions, chacun de nos projets, chaque jour."
      />

      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="ethics-grid">
            {PILLARS.map((pillar, i) => (
              <motion.div key={pillar.title}
                style={{ padding: "40px 36px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", position: "relative", overflow: "hidden" }}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: pillar.color, borderRadius: "16px 16px 0 0" }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{pillar.title}</h3>
                <p style={{ color: pillar.color, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>{pillar.subtitle}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7 }}>{pillar.desc}</p>
                {pillar.quote && (
                  <blockquote style={{ marginTop: 24, paddingLeft: 16, borderLeft: `2px solid ${pillar.color}`, color: "var(--color-ink-2)", fontSize: 14, fontStyle: "italic", lineHeight: 1.65 }}>
                    {pillar.quote}
                    {pillar.author && <cite style={{ display: "block", marginTop: 8, fontStyle: "normal", fontSize: 12, fontWeight: 600 }}>{pillar.author}</cite>}
                  </blockquote>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO certification */}
      <section style={{ padding: "72px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="cert-grid">
              <div>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20 }}>
                  Certifié ISO 27001:2013<br /><span style={{ color: "var(--color-accent)" }}>depuis 2020.</span>
                </h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75 }}>
                  La certification ISO 27001:2013 atteste de notre engagement en matière de sécurité de l'information. Nos processus sont conformes aux standards RGPD et OWASP, intégrés dès la phase de conception.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {["ISO 27001:2013 - Sécurité de l'information", "RGPD - Protection des données personnelles", "OWASP - Standards de sécurité applicative"].map((cert, i) => (
                  <motion.div key={cert}
                    style={{ padding: "20px 24px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", display: "flex", alignItems: "center", gap: 16 }}
                    initial={reduce ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <style>{`@media(max-width:767px){.ethics-grid{grid-template-columns:1fr !important}.cert-grid{grid-template-columns:1fr !important}}`}</style>
    </>
  )
}
