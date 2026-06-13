'use client'

import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"

const PROGRAMS = [
  {
    title: "Formation Continue",
    desc: "Un développement professionnel tout au long de la carrière via un suivi de proximité et des formations personnalisées et régulières.",
  },
  {
    title: "Partage et Entraide",
    desc: "Les expertises et expériences de nos collaborateurs sont valorisées à travers des ateliers de retours d'expérience et des plateformes de collaboration inter-sites.",
  },
  {
    title: "Suivi et Accompagnement",
    desc: "Des bilans réguliers de mission (bien-être RH, développement compétences), des entretiens professionnels annuels avec projection de carrière.",
  },
]

const QUALITY_PILLARS = [
  { label: "Le bon sujet", desc: "Identifier et dimensionner les besoins en formation." },
  { label: "Le bon moment", desc: "Former au moment optimal pour la montée en compétences." },
  { label: "Le bon programme", desc: "Adapté aux fonctions et aux trajectoires individuelles." },
  { label: "Le bon formateur", desc: "Expert, pédagogue, engageant." },
  { label: "Le bon rythme", desc: "Respecter disponibilités et échéances de projet." },
  { label: "Le bon environnement", desc: "Favoriser la concentration et la rétention des savoirs." },
  { label: "La bonne durée", desc: "Ni trop courte ni trop longue, calibrée aux objectifs." },
]

export default function Formation() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Formation"
        title="La formation,"
        titleAccent="dans notre ADN."
        subtitle="Le succès de Koncept repose sur l'implication et l'investissement de femmes et d'hommes qui font progresser nos clients chaque jour."
      />

      {/* Programs */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Trois programmes, une philosophie.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="programs-grid">
            {PROGRAMS.map((prog, i) => (
              <motion.div key={prog.title}
                style={{ padding: "36px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", position: "relative" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(64px,7vw,96px)", fontWeight: 800, color: "var(--color-accent)", opacity: 0.12, position: "absolute", top: 8, right: 20, lineHeight: 1 }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 700, marginBottom: 16, position: "relative" }}>{prog.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7, position: "relative" }}>{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 quality pillars */}
      <section style={{ padding: "88px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Les 7 piliers d'une formation réussie.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "50ch", lineHeight: 1.6, marginBottom: 52 }}>
              Chez Koncept, former n'est pas cocher une case. C'est un processus exigeant, structuré autour de sept conditions de succès.
            </p>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="pillars-grid">
            {QUALITY_PILLARS.map((pillar, i) => (
              <motion.div key={pillar.label}
                style={{ padding: "24px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <p style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{pillar.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.6 }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){
          .programs-grid{grid-template-columns:1fr !important}
          .pillars-grid{grid-template-columns:repeat(2,1fr) !important}
        }
      `}</style>
    </>
  )
}
