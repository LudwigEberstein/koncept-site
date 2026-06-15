'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import HomeTechStack from "@/components/home/HomeTechStack"
import { EXPERTISES } from "@/lib/content"

const ICONS: Record<string, string> = {
  code: "⌨️", layers: "🏗️", cloud: "☁️", git: "⚙️", database: "🗄️", shield: "🔒",
}

export default function Expertises() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Nos expertises"
        title="Du code propre,"
        titleAccent="des projets qui livrent."
        subtitle="Six domaines d'expertise, une seule ambition : vous apporter des équipes techniques capables de prendre en charge vos projets les plus exigeants."
        img="https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-solutions-IT-aeronautique.png"
        imgAlt="Expertises Koncept"
      />

      {/* 6 expertises */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Six pôles d'excellence.
            </h2>
          </RevealSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {EXPERTISES.map((exp, i) => (
              <motion.div key={exp.slug}
                style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 32, alignItems: "center", padding: "36px 36px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", transition: "border-color 0.2s" }}
                className="exp-row"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,32,32,0.3)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
              >
                <div style={{ fontSize: 32, textAlign: "center" }}>{ICONS[exp.icon]}</div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 8 }}>{exp.short}</p>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>{exp.title}</h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7, maxWidth: "60ch", marginBottom: 14 }}>{exp.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.stack.map(s => (
                      <span key={s} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 5, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-accent)", fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "10px" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px" }}
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO / certif block */}
      <section style={{ padding: "72px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="cert-grid">
              <div>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
                  La sécurité,<br /><span style={{ color: "var(--color-accent)" }}>pas une option.</span>
                </h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75 }}>
                  Certifiés ISO 27001:2013 depuis 2020. Chaque projet intègre les standards RGPD et OWASP dès la phase de conception. Aucune dette sécuritaire livrée.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["ISO 27001:2013 — Système de management de la sécurité de l'information", "RGPD — Conformité protection des données", "OWASP Top 10 — Sécurité applicative intégrée"].map((c, i) => (
                  <motion.div key={c}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", borderRadius: 10, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                    initial={reduce ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{c}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <HomeTechStack />

      {/* Bottom CTA */}
      <section style={{ padding: "80px 24px", background: "var(--color-accent)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 20 }}>
            Votre projet mérite les bonnes compétences.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.65, marginBottom: 32 }}>
            Discutons de vos besoins. On vous propose un cadrage sans engagement sous 48h.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--color-accent)", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none" }}
          >
            Demander un devis <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){
          .exp-row{grid-template-columns:1fr !important;gap:16px !important}
          .cert-grid{grid-template-columns:1fr !important;gap:36px !important}
        }
      `}</style>
    </>
  )
}
