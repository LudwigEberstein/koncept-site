'use client'

import type { Metadata } from 'next'
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import { IMAGES, TEAM } from "@/lib/content"

const VALUES = [
  { title: "Proximité", desc: "Un interlocuteur unique, disponible, qui connaît votre activité et s'implique comme s'il faisait partie de votre équipe." },
  { title: "Confiance", desc: "Des engagements tenus, des délais respectés. On ne vous vend pas ce qu'on ne peut pas livrer." },
  { title: "Échange", desc: "Partage de connaissances, transparence sur les difficultés, communication franche à chaque étape du projet." },
  { title: "Partage", desc: "Une culture de l'entraide en interne comme avec nos clients. Ce qui est appris ici bénéficie à tout le monde." },
]

const EVENTS = [
  { title: "Déjeuners mensuels", desc: "Accueil des nouveaux, point RH, retrouvailles entre collègues de différentes missions." },
  { title: "Soirées trimestrielles", desc: "Des moments de décompression et de cohésion pour l'ensemble des équipes." },
  { title: "Weekend annuel", desc: "Un séminaire de cohésion mémorable pour renforcer les liens et les ambitions communes." },
]

export default function QuiSommesNous() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Notre histoire"
        title="Qui sommes-nous"
        titleAccent="vraiment ?"
        subtitle="Une ESN à taille humaine, fondée à Toulouse en 2014. Des passionnés de technologie au service de votre transformation digitale."
        img={IMAGES.team}
        imgAlt="L'équipe Koncept"
      />

      {/* Story */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }} className="two-col-grid">
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Depuis 2014,<br /><span style={{ color: "var(--color-accent)" }}>on fait ce qu'on aime.</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
              Koncept accompagne startups, PME et grands comptes dans la mise en oeuvre de leurs projets IT. En dix ans, nous avons construit une ESN qui refuse de grossir au détriment de l'humain.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75 }}>
              50 collaborateurs, 7 secteurs d'activité, 3,2M€ de chiffre d'affaires. Et surtout : des développeurs, architectes et consultants qui s'investissent avec fierté dans chaque mission.
            </p>
          </RevealSection>
          <RevealSection delay={120}>
            <div style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 16, padding: 36 }}>
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 700, lineHeight: 1.4, color: "var(--color-ink)", marginBottom: 20 }}>
                "Nos équipes investissent avec fierté dans la réussite de vos projets."
              </p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 14 }}>Gérard, Président - Koncept</p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "88px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Ce qui nous définit.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                style={{ padding: "32px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 32, height: 3, background: "var(--color-accent)", borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              L'équipe dirigeante.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="team-grid">
            {TEAM.map((member, i) => (
              <motion.div key={member.name}
                style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                  <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700 }}>{member.name}</p>
                  <p style={{ color: "var(--color-accent)", fontSize: 13, fontWeight: 600, marginTop: 4 }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Events */}
      <section style={{ padding: "88px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              La vie chez Koncept.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "48ch", lineHeight: 1.6, marginBottom: 52 }}>
              On croit que des équipes soudées font de meilleurs projets. Quelques rendez-vous qui font partie de l'ADN Koncept.
            </p>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {EVENTS.map((ev, i) => (
              <motion.div key={ev.title}
                style={{ padding: "32px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ display: "inline-block", background: "rgba(212,32,32,0.15)", color: "var(--color-accent)", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 20 }}>
                  {i === 0 ? "Mensuel" : i === 1 ? "Trimestriel" : "Annuel"}
                </span>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{ev.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65 }}>{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){
          .two-col-grid{grid-template-columns:1fr !important;gap:40px !important}
          .values-grid{grid-template-columns:1fr !important}
          .team-grid{grid-template-columns:repeat(2,1fr) !important}
          .events-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
