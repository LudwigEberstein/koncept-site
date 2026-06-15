'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import { SECTORS, STATS } from "@/lib/content"

export default function Secteurs() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Secteurs d'activité"
        title="7 secteurs,"
        titleAccent="une expertise terrain."
        subtitle="On ne découvre pas votre métier le premier jour. Nos équipes connaissent vos contraintes, votre vocabulaire et vos enjeux avant même de commencer."
      />

      {/* Stats bar */}
      <section style={{ padding: "40px 0", background: "var(--color-bg-2)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.03em" }}>{s.value}</p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 13, fontWeight: 500, marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sector grid */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Nos secteurs d'intervention.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="sectors-grid">
            {SECTORS.map((s, i) => (
              <motion.div key={s.slug}
                style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column", gap: 16, transition: "border-color 0.2s, transform 0.2s" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,32,32,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
              >
                <div style={{ width: 40, height: 3, background: "var(--color-accent)", borderRadius: 2 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>{s.name}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 5, padding: "3px 9px", fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }} className="cta-row">
              <div>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
                  Votre secteur n'est pas listé ?
                </h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7 }}>
                  Notre capacité d'adaptation est notre vraie force. On s'intègre à des contextes métier variés. Parlons-en.
                </p>
              </div>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "16px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Discuter de votre secteur <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){.sectors-grid{grid-template-columns:repeat(2,1fr) !important}}
        @media(max-width:639px){.sectors-grid{grid-template-columns:1fr !important}.cta-row{grid-template-columns:1fr !important}}
      `}</style>
    </>
  )
}
