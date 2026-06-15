'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import { IMAGES, TEAM, VALUES, STATS } from "@/lib/content"

const ETHICS = [
  { title: "Qualité", color: "#3b82f6", desc: "Nous comprenons les besoins de nos clients pour leur proposer des solutions adaptées. Nous structurons et contrôlons chaque projet pour viser l'excellence." },
  { title: "Responsabilité", color: "#D42020", desc: "Notre expérience en gestion de contrats au forfait nous permet de nous engager sur les résultats. Nous assumons les défis proactivement." },
  { title: "Sécurité", color: "#22c55e", desc: "Certifiés ISO 27001:2013 depuis 2020. Intégrité et confidentialité sont au cœur de notre approche, avec des processus conformes RGPD et OWASP." },
  { title: "Bien-être", color: "#f59e0b", desc: "L'engagement de nos équipes conditionne notre succès. Autonomie, espaces d'initiative et innovation sont au programme au quotidien." },
]

export default function APropos() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="À propos"
        title="Une ESN qui refuse"
        titleAccent="de grossir à tout prix."
        subtitle="Fondée à Toulouse en 2014, Koncept IS a choisi la taille humaine. 50 collaborateurs, 7 secteurs, et une seule obsession : que vos projets aboutissent."
        img={IMAGES.team}
        imgAlt="L'équipe Koncept"
      />

      {/* Story */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }} className="two-col">
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Depuis 2014,<br /><span style={{ color: "var(--color-accent)" }}>on fait ce qu'on aime.</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
              Koncept accompagne startups, PME et grands comptes dans la mise en œuvre de leurs projets IT. En dix ans, nous avons construit une ESN qui refuse de grossir au détriment de l'humain.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75 }}>
              Des développeurs, architectes et consultants qui s'investissent avec fierté dans chaque mission. Pas des ressources — des Koncepteurs.
            </p>
          </RevealSection>
          <RevealSection delay={120}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ padding: "28px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.03em" }}>{s.value}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 12, fontWeight: 500, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Ce qui nous définit.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                style={{ padding: "32px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 32, height: 3, background: "var(--color-accent)", borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              L'équipe dirigeante.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="team-grid">
            {TEAM.map((m, i) => (
              <motion.div key={m.name}
                style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                  <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }} />
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 700 }}>{m.name}</p>
                  <p style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 600, marginTop: 4 }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Nos engagements.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ethics-grid">
            {ETHICS.map((e, i) => (
              <motion.div key={e.title}
                style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", position: "relative", overflow: "hidden" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: e.color }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>{e.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7 }}>{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section style={{ padding: "72px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "16px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
          >
            Parlons de votre projet <ArrowRight size={16} />
          </Link>
          <Link href="/carrieres" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", color: "#4ade80", padding: "16px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(34,197,94,0.25)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.2)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.12)" }}
          >
            Rejoindre l'équipe <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){.values-grid{grid-template-columns:repeat(2,1fr) !important}.team-grid{grid-template-columns:repeat(2,1fr) !important}}
        @media(max-width:767px){.two-col{grid-template-columns:1fr !important;gap:40px !important}.ethics-grid{grid-template-columns:1fr !important}}
      `}</style>
    </>
  )
}
