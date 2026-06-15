'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"

const PROGRAMS = [
  { title: "Formation Continue", desc: "Un développement professionnel tout au long de la carrière via un suivi de proximité et des formations personnalisées et régulières." },
  { title: "Partage & Entraide", desc: "Les expertises de nos collaborateurs sont valorisées à travers des ateliers de retours d'expérience et des plateformes de collaboration inter-sites." },
  { title: "Suivi & Accompagnement", desc: "Des bilans réguliers de mission (bien-être RH, développement compétences), des entretiens professionnels annuels avec projection de carrière." },
]

const PILLARS = [
  { label: "Le bon sujet", desc: "Identifier et dimensionner les besoins en formation." },
  { label: "Le bon moment", desc: "Former au moment optimal pour la montée en compétences." },
  { label: "Le bon programme", desc: "Adapté aux fonctions et aux trajectoires individuelles." },
  { label: "Le bon formateur", desc: "Expert, pédagogue, engageant." },
  { label: "Le bon rythme", desc: "Respecter disponibilités et échéances de projet." },
  { label: "Le bon environnement", desc: "Favoriser la concentration et la rétention des savoirs." },
  { label: "La bonne durée", desc: "Calibrée aux objectifs, ni trop courte ni trop longue." },
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

      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Trois programmes, une philosophie.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="programs-grid">
            {PROGRAMS.map((p, i) => (
              <motion.div key={p.title}
                style={{ padding: "36px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", position: "relative" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 80, fontWeight: 800, color: "#4ade80", opacity: 0.1, position: "absolute", top: 8, right: 16, lineHeight: 1 }}>0{i + 1}</span>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700, marginBottom: 14, position: "relative" }}>{p.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7, position: "relative" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Les 7 piliers d'une formation réussie.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "52ch", lineHeight: 1.6, marginBottom: 48 }}>
              Former n'est pas cocher une case. C'est un processus structuré autour de sept conditions de succès.
            </p>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="pillars-grid">
            {PILLARS.map((pillar, i) => (
              <motion.div key={pillar.label}
                style={{ padding: "24px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <p style={{ color: "#4ade80", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</p>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{pillar.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.6 }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 24px", background: "#16a34a" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 28 }}>
            Envie de progresser avec nous ?
          </h2>
          <Link href="/carrieres/offres" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#16a34a", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
            Voir les offres <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){.programs-grid{grid-template-columns:1fr !important}.pillars-grid{grid-template-columns:repeat(2,1fr) !important}}
      `}</style>
    </>
  )
}
