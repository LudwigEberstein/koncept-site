'use client'

import { motion } from "motion/react"
import { ArrowDown, Check, ClipboardList, Cloud, CodeXml, Compass, type LucideIcon } from "lucide-react"
import { EXPERTISES } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

const ICONS: Record<(typeof EXPERTISES)[number]["slug"], LucideIcon> = {
  developpement: CodeXml,
  "devops-cloud": Cloud,
  fonctionnel: ClipboardList,
  pilotage: Compass,
}

const label: React.CSSProperties = { fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 12 }
const chip: React.CSSProperties = { background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 6, padding: "5px 11px", fontSize: 12.5, fontWeight: 600, color: "var(--color-ink-2)" }

export default function Expertises() {
  const fadeUp = useFadeUp()

  return (
    <>
      <HeroSection side="pro" next="bg" paddingTop={140} paddingBottom={72}>
        <Container>
          <motion.div style={{ maxWidth: "64ch" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow mb={20}>Expertises</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}>
              Des compétences<br /><span style={{ color: "var(--color-accent)" }}>techniques et fonctionnelles.</span>
            </h1>
            <p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch", marginBottom: 32 }}>
              Quatre familles de compétences au service de vos projets, du cadrage et de l&apos;architecture jusqu&apos;à la mise en production.
            </p>
            <nav aria-label="Nos expertises" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {EXPERTISES.map(exp => {
                const Icon = ICONS[exp.slug]
                return (
                  <a key={exp.slug} href={`#${exp.slug}`} className="exp-jump">
                    <Icon size={15} aria-hidden="true" /> {exp.title}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        </Container>
      </HeroSection>

      {EXPERTISES.map((exp, i) => {
        const Icon = ICONS[exp.slug]
        return (
          <section key={exp.slug} id={exp.slug} aria-labelledby={`${exp.slug}-titre`}
            style={{ padding: "88px 0", background: i % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-2)", borderTop: i === 0 ? undefined : "1px solid var(--color-border)", scrollMarginTop: 68 }}
          >
            <Container className="exp-row">
              {/* Présentation : numéro, titre, profils */}
              <motion.div {...fadeUp()}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <span style={{ width: 48, height: 48, borderRadius: 12, display: "grid", placeItems: "center", background: "rgba(var(--side-rgb), .14)", color: "var(--side2)" }}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 800, color: "var(--side2)", letterSpacing: "0.06em" }}>
                    {String(i + 1).padStart(2, "0")} / {String(EXPERTISES.length).padStart(2, "0")}
                  </span>
                </div>
                <h2 id={`${exp.slug}-titre`} style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(30px, 3.4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 16 }}>
                  {exp.title}
                </h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.65, marginBottom: 32, maxWidth: "46ch" }}>{exp.desc}</p>
                <p style={label}>Profils</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {exp.profils.map(p => (
                    <li key={p} style={{ ...chip, color: "var(--color-ink)", background: "rgba(var(--side-rgb), .10)", border: "1px solid rgba(var(--side-rgb), .32)" }}>{p}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Votre enjeu → notre réponse */}
              <div>
                <motion.div {...fadeUp(0.06)} style={{ padding: "26px 28px", borderRadius: 16, border: "1px dashed var(--color-border-2)", background: "var(--color-bg-3)" }}>
                  <p style={label}>Votre enjeu</p>
                  <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--color-ink)" }}>{exp.enjeu}</p>
                </motion.div>

                <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", padding: "10px 0", color: "var(--side2)" }}>
                  <ArrowDown size={22} />
                </div>

                <motion.div {...fadeUp(0.12)} className="glass-card"
                  style={{ padding: "26px 28px", borderRadius: 16, border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-accent)" }}
                >
                  <p style={{ ...label, color: "var(--color-accent-text)" }}>Ce que nous apportons</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {exp.apport.map(a => (
                      <li key={a} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15.5, lineHeight: 1.55 }}>
                        <Check size={18} aria-hidden="true" style={{ color: "var(--side2)", flexShrink: 0, marginTop: 2 }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div style={{ borderTop: "1px solid var(--color-border)", marginTop: 22, paddingTop: 18 }}>
                    <p style={label}>Compétences</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {exp.stack.map(t => <span key={t} style={chip}>{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>
        )
      })}

      <CtaBand side="pro" prev={EXPERTISES.length % 2 === 0 ? "bg2" : "bg"} title="Un besoin précis de compétences ?"
        text="Décrivez-nous votre contexte et le profil recherché : nous revenons vers vous."
        primary={{ label: "Nous contacter", href: "/solutions/contact" }}
      />

      <style>{`
        .exp-row { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: 64px; align-items: center; }
        .exp-jump { display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 999px; font-size: 13px; font-weight: 600; color: var(--color-ink-2); text-decoration: none; background: rgba(var(--side-rgb), .08); border: 1px solid rgba(var(--side-rgb), .28); transition: color .15s, border-color .15s, background .15s; }
        .exp-jump svg { color: var(--side2); }
        .exp-jump:hover, .exp-jump:focus-visible { color: var(--color-ink); border-color: rgba(var(--side-rgb), .6); background: rgba(var(--side-rgb), .16); }
        @media (max-width: 900px) { .exp-row { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </>
  )
}
