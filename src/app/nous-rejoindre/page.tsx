'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"

const TRAITS = [
  { label: "Anticonformiste", desc: "On s'affranchit des codes qui n'ont pas de sens. Ce qui compte, c'est la qualité du travail et l'épanouissement des équipes." },
  { label: "Engagé", desc: "Chaque Koncepteur s'implique sur ses missions comme s'il en était l'entrepreneur. Votre réussite est notre fierté." },
  { label: "Respectueux", desc: "Bienveillance et écoute attentive sont des valeurs non-négociables chez nous, vers l'interne comme vers les clients." },
  { label: "Tolérant", desc: "Un environnement ouvert, sans jugement, où la diversité des profils et des parcours est une richesse." },
]

const BENEFITS = [
  { label: "Suivi personnalisé", desc: "Des plans de carrière individualisés avec un manager qui connaît votre projet professionnel." },
  { label: "Formation continue", desc: "Budget formation, accès aux certifications, temps dédié à la montée en compétences." },
  { label: "Vie d'équipe", desc: "Déjeuners mensuels, soirées trimestrielles et weekend annuel pour souder les équipes." },
  { label: "Projets à impact", desc: "Des missions dans des secteurs exigeants : aéronautique, banque, robotique, télécoms." },
]

export default function NousRejoindre() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Carrières"
        title="Devenez"
        titleAccent="Koncepteur."
        subtitle="Des développeurs passionnés, des virtuoses de l'algo, des experts en virtualisation. Si vous vous reconnaissez, on a probablement quelque chose à construire ensemble."
        img="https://picsum.photos/seed/koncept-team-office-toulouse/900/600"
        imgAlt="Rejoindre Koncept"
      />

      {/* Culture intro */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="two-col-grid">
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Votre bonheur,<br /><span style={{ color: "var(--color-accent)" }}>notre succès.</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
              Cette phrase résume notre philosophie RH. On ne cherche pas des exécutants : on cherche des Koncepteurs volontaires, passionnés et impliqués, qui défendent nos valeurs chaque jour sur leurs missions.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75 }}>
              On vous offre un cadre de travail bienveillant, un suivi de carrière sérieux et des projets qui ont du sens dans des secteurs stimulants.
            </p>
          </RevealSection>
          <RevealSection delay={120}>
            <div style={{ background: "var(--color-bg-3)", border: "1px solid rgba(212,32,32,0.25)", borderRadius: 16, padding: "40px 36px" }}>
              <p style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>L'état d'esprit Koncept</p>
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 700, lineHeight: 1.4 }}>
                "Voluntaires, passionnés et impliqués. Fiers de représenter les valeurs de Koncept au quotidien."
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Traits */}
      <section style={{ padding: "88px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Ce qu'on recherche.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="traits-grid">
            {TRAITS.map((t, i) => (
              <motion.div key={t.label}
                style={{ padding: "32px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 36, height: 3, background: "var(--color-accent)", borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{t.label}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Ce qu'on vous offre.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.label}
                style={{ padding: "28px 28px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", gap: 20, alignItems: "flex-start" }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "var(--color-accent)", flexShrink: 0, marginTop: 6 }} />
                <div>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{b.label}</h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--color-accent)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 20 }}>
            Prêt à rejoindre l'aventure ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.65, marginBottom: 36 }}>
            Consultez nos offres actuelles ou envoyez une candidature spontanée.
          </p>
          <Link href="/recrutement" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--color-accent)", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "transform 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
          >
            Voir les offres <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){
          .two-col-grid{grid-template-columns:1fr !important;gap:40px !important}
          .traits-grid{grid-template-columns:repeat(2,1fr) !important}
          .benefits-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
