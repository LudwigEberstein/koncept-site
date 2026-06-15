'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import { CAREER_EVENTS, CAREER_TRAITS } from "@/lib/content"

const BENEFITS = [
  { label: "Suivi personnalisé", desc: "Plans de carrière individualisés avec un manager qui connaît votre projet professionnel." },
  { label: "Formation continue", desc: "Budget formation, accès aux certifications, temps dédié à la montée en compétences." },
  { label: "Projets à impact", desc: "Des missions dans des secteurs exigeants : aéronautique, banque, robotique, télécoms." },
  { label: "Contrat CDI", desc: "Stabilité et engagement long terme. On ne joue pas avec la carrière de nos collaborateurs." },
]

export default function Vie() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Vie chez Koncept"
        title="Des collègues,"
        titleAccent="pas juste des équipes."
        subtitle="On croit que des équipes soudées font de meilleurs projets. Voilà comment on construit ça."
        img="https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-equipe.png"
        imgAlt="La vie chez Koncept"
      />

      {/* Events */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Les rendez-vous qui font l'ADN Koncept.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {CAREER_EVENTS.map((ev, i) => (
              <motion.div key={ev.title}
                style={{ padding: "40px 32px", borderRadius: 16, border: "1px solid rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.03)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ display: "inline-block", background: "rgba(34,197,94,0.15)", color: "#4ade80", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 24 }}>{ev.freq}</span>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{ev.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7 }}>{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Ce qu'on vous offre.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.label}
                style={{ display: "flex", gap: 20, padding: "28px 28px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", alignItems: "flex-start" }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "#4ade80", flexShrink: 0, marginTop: 5 }} />
                <div>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{b.label}</h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", background: "#16a34a" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 20 }}>
            Prêt à rejoindre l'aventure ?
          </h2>
          <Link href="/carrieres/offres" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#16a34a", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
            Voir les offres <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){.events-grid{grid-template-columns:1fr !important}.benefits-grid{grid-template-columns:1fr !important}}
      `}</style>
    </>
  )
}
