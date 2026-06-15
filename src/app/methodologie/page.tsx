'use client'

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"

const PHASES = [
  {
    num: "01",
    title: "Élaboration",
    tagline: "On comprend avant de coder.",
    desc: "Cadrage fonctionnel et technique, conseil technologique, prototypage, analyse des risques. On entre dans votre projet pour le comprendre de l'intérieur avant d'écrire la première ligne.",
    items: ["Audit de l'existant", "Architecture cible", "Sélection technologique", "Prototype de validation", "Plan de sécurité (RGPD / OWASP)"],
    color: "#3b82f6",
  },
  {
    num: "02",
    title: "Réalisation",
    tagline: "On livre ce qu'on a promis.",
    desc: "Développement itératif en méthode Agile. Des sprints courts, des démos régulières, une qualité de code contrôlée à chaque étape. Pas de surprise à la livraison.",
    items: ["Sprints Agile (2 semaines)", "Code review systématique", "Tests unitaires & intégration", "Recette fonctionnelle", "Documentation technique"],
    color: "#D42020",
  },
  {
    num: "03",
    title: "Delivery",
    tagline: "On reste jusqu'à ce que ça marche.",
    desc: "Déploiement, CI/CD, monitoring, transfert de compétences. On industrialise votre livrable pour qu'il soit maintenu dans les meilleures conditions sur la durée.",
    items: ["Pipeline CI/CD (Jenkins / GitLab CI)", "Déploiement cloud ou on-premise", "Monitoring & alerting", "Formation des équipes client", "Support post-livraison"],
    color: "#16a34a",
  },
]

const COMMITMENTS = [
  "Un interlocuteur unique tout au long du projet",
  "Transparence totale sur l'avancement et les difficultés",
  "Engagement sur les résultats, pas seulement les moyens",
  "Zéro dette technique livrée sans validation explicite",
  "Certification ISO 27001:2013 — sécurité intégrée",
]

export default function Methodologie() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Notre méthodologie"
        title="On livre ce qu'on"
        titleAccent="promet."
        subtitle="Trois phases, un principe : vous impliquer à chaque étape. Notre méthode s'adapte à vos contraintes, pas l'inverse."
      />

      {/* 3 phases */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 64 }}>
              Trois phases. Un projet maîtrisé.
            </h2>
          </RevealSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PHASES.map((phase, i) => (
              <motion.div key={phase.num}
                style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, padding: "48px 48px", borderRadius: 20, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "start" }}
                className="phase-row"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 72, fontWeight: 800, color: phase.color, opacity: 0.2, lineHeight: 1, marginBottom: 8 }}>{phase.num}</p>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>{phase.title}</h3>
                  <p style={{ fontSize: 13, fontWeight: 700, color: phase.color, fontStyle: "italic" }}>{phase.tagline}</p>
                </div>
                <div>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>{phase.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {phase.items.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <CheckCircle size={15} style={{ color: phase.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 14, color: "var(--color-ink-2)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="engage-grid">
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Ce sur quoi on<br /><span style={{ color: "var(--color-accent)" }}>s'engage.</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Chez Koncept, l'engagement n'est pas une formule de politesse. C'est une ligne de conduite qui s'applique du kickoff à la mise en production.
            </p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
            >
              Parlons de votre projet <ArrowRight size={15} />
            </Link>
          </RevealSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {COMMITMENTS.map((c, i) => (
              <motion.div key={c}
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 500 }}>{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){
          .phase-row{grid-template-columns:1fr !important;gap:24px !important;padding:32px 24px !important}
          .engage-grid{grid-template-columns:1fr !important;gap:40px !important}
        }
      `}</style>
    </>
  )
}
