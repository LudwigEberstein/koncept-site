'use client'

import { motion } from "motion/react"
import { Building, Building2, Landmark, Store } from "lucide-react"
import { SECTORS } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import SectorIcon from "@/components/solutions/SectorIcon"

/** Tailles de structures accompagnées, de la plus petite à la plus grande. */
const SIZES = [
  { label: "TPE", icon: Store },
  { label: "PME", icon: Building },
  { label: "ETI", icon: Building2 },
  { label: "Grands comptes", icon: Landmark },
]

export default function Secteurs() {
  const fadeUp = useFadeUp()

  return (
    <>
      <HeroSection side="pro" next="bg" paddingTop={140} paddingBottom={72}>
        <Container>
          <motion.div style={{ maxWidth: "64ch" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow mb={20}>Secteurs</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
              Les contextes<br /><span style={{ color: "var(--color-accent)" }}>où nous intervenons.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch" }}>
              Nos consultants accompagnent des entreprises et organisations de toutes tailles et de différents secteurs, en s&apos;adaptant aux enjeux techniques et métiers de leurs projets.
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <section style={{ padding: "72px 0 88px", background: "var(--color-bg)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 14 }}>
            {SECTORS.map((s, i) => (
              <motion.div key={s.slug} className="glass-card" {...fadeUp(i * 0.05)}
                style={{ padding: "26px 24px", borderRadius: 14, border: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: 12 }}
              >
                <SectorIcon slug={s.slug} />
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 19, fontWeight: 700 }}>{s.name}</h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.6 }}>{s.enjeu}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Tailles d'entreprise ── */}
      <section style={{ padding: "88px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container className="sz-row">
          <motion.div {...fadeUp()}>
            <Eyebrow>Toutes les tailles</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              De la TPE<br />au grand compte.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.7, maxWidth: "46ch" }}>
              Nous travaillons pour de grands comptes comme pour des TPE. Quelle que soit votre taille, vous gardez le même interlocuteur et la même exigence : seule notre façon de nous organiser s&apos;adapte.
            </p>
          </motion.div>
          <ol className="sz-scale">
            {SIZES.map((sz, i) => (
              <motion.li key={sz.label} className="glass-card" {...fadeUp(i * 0.06)}>
                <sz.icon size={22 + i * 4} aria-hidden="true" />
                <span>{sz.label}</span>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand side="pro" prev="bg2" title="Votre secteur n'est pas listé ?"
        text="Parlez-nous de votre contexte : nous vous dirons honnêtement si nous pouvons vous aider."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
      />

      <style>{`
        .sz-row { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 64px; align-items: center; }
        .sz-scale { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; align-items: end; }
        .sz-scale li { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 14px; padding: 24px 12px; border-radius: 14px; border: 1px solid var(--color-border); text-align: center; font-family: var(--font-display, Outfit, sans-serif); font-weight: 700; font-size: 16px; }
        .sz-scale li svg { color: var(--side2); }
        .sz-scale li:nth-child(1) { min-height: 120px; }
        .sz-scale li:nth-child(2) { min-height: 145px; }
        .sz-scale li:nth-child(3) { min-height: 170px; }
        .sz-scale li:nth-child(4) { min-height: 195px; }
        @media (max-width: 900px) { .sz-row { grid-template-columns: 1fr; gap: 36px; } }
        @media (max-width: 520px) { .sz-scale { grid-template-columns: repeat(2, 1fr); } .sz-scale li { min-height: 0 !important; } }
      `}</style>
    </>
  )
}
