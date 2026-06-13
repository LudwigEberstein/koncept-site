'use client'

import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import HomeTechStack from "@/components/home/HomeTechStack"

const PHASES = [
  {
    phase: "Élaboration",
    items: [
      { title: "Conseil technologique", desc: "Sélection des solutions optimales : apps mobile, sites responsives, Java/Python, cloud public/privé." },
      { title: "Sécurité IT", desc: "Certifié ISO 27001:2013. Standards RGPD et OWASP intégrés dès la conception." },
      { title: "Prototypage", desc: "Validation rapide des concepts métier et techniques, avant tout développement coûteux." },
      { title: "Gestion de projet", desc: "Organisation stratégique et pilotage tout au long du cycle de vie du projet." },
    ],
  },
  {
    phase: "Réalisation",
    items: [
      { title: "Développement Web/Mobile", desc: "Projets full-stack sur mesure en Java, .NET, Python, Angular, NodeJS. Préférence open-source." },
      { title: "Data Management", desc: "Accompagnement des PME dans le suivi, l'exploitation des données et l'interopérabilité des systèmes." },
    ],
  },
  {
    phase: "Delivery",
    items: [
      { title: "DevOps", desc: "Rationalisation des chaînes de déploiement par l'organisation et l'outillage (Jenkins, CI/CD)." },
      { title: "Cloud", desc: "Cloud privé/public, maîtrise des coûts, conformité RGPD, scalabilité, sécurité, continuité d'activité." },
    ],
  },
]

const PILLARS = [
  { title: "Solutions", desc: "Du prototypage à l'industrialisation, conseil technologique tout au long de votre projet." },
  { title: "Expertise", desc: "Compétences partagées en Web, Mobilité, Heavy Client et DevOps pour tous vos besoins." },
  { title: "Méthodologie", desc: "L'agilité dans l'ADN, la sécurité comme principe directeur. On livre ce qu'on promet." },
]

export default function NotreOffre() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Notre Offre"
        title="Une offre digitale"
        titleAccent="sur mesure."
        subtitle="De la conception à la livraison, Koncept vous accompagne avec des équipes expertes en développement, DevOps et conseil IT."
        img="https://picsum.photos/seed/koncept-offre-digitale-toulouse/900/600"
        imgAlt="Offre digitale Koncept"
      />

      {/* 3 pillars */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="pillars-grid">
            {PILLARS.map((p, i) => (
              <motion.div key={p.title}
                style={{ padding: "36px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>{p.title}</p>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{p.title === "Solutions" ? "Du concept au produit" : p.title === "Expertise" ? "Compétences transverses" : "Agilité & rigueur"}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      {PHASES.map((phase, pi) => (
        <section key={phase.phase} style={{ padding: "72px 0", background: pi % 2 === 0 ? "var(--color-bg-2)" : "var(--color-bg)" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
            <RevealSection>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
                <span style={{ background: "var(--color-accent)", color: "#fff", borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Phase {pi + 1}</span>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{phase.phase}</h2>
              </div>
            </RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${phase.items.length === 4 ? 4 : 2}, 1fr)`, gap: 16 }} className="phase-grid">
              {phase.items.map((item, i) => (
                <motion.div key={item.title}
                  style={{ padding: "28px 24px", borderRadius: 12, border: "1px solid var(--color-border)", background: pi % 2 === 0 ? "var(--color-bg-3)" : "var(--color-bg-2)" }}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <HomeTechStack />

      <style>{`
        @media(max-width:767px){
          .pillars-grid{grid-template-columns:1fr !important}
          .phase-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
