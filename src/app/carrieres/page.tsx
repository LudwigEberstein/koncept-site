'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import RevealSection from "@/components/ui/RevealSection"
import { CAREER_TRAITS, CAREER_EVENTS, STATS } from "@/lib/content"

const LINKS = [
  { href: "/carrieres/vie", label: "Vie chez Koncept", desc: "Culture, events, ambiance de travail." },
  { href: "/carrieres/formation", label: "Formation", desc: "Investissement continu dans vos compétences." },
  { href: "/carrieres/offres", label: "Offres d'emploi", desc: "Les postes ouverts en CDI à Toulouse." },
  { href: "/carrieres/candidature", label: "Candidature spontanée", desc: "Pas de poste correspondant ? Écrivez-nous quand même." },
]

export default function Carrieres() {
  const reduce = useReducedMotion()
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 96, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade80", marginBottom: 20 }}
              initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >
              Carrières
            </motion.p>
            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(40px, 5.5vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
              initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Votre bonheur,<br /><span style={{ color: "#4ade80" }}>notre succès.</span>
            </motion.h1>
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: "46ch" }}
              initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              On cherche des Koncepteurs : volontaires, passionnés, impliqués. Des personnes qui s'investissent sur leurs missions comme s'ils en étaient les entrepreneurs.
            </motion.p>
            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link href="/carrieres/offres" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#16a34a", color: "#fff", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Voir les offres <ArrowRight size={15} />
              </Link>
              <Link href="/carrieres/candidature" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", color: "#4ade80", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(34,197,94,0.25)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.18)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.1)" }}
              >
                Candidature spontanée <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
          <motion.div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
            initial={reduce ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {[{ v: "50", l: "Koncepteurs" }, { v: "2014", l: "depuis" }, { v: "7", l: "secteurs" }, { v: "CDI", l: "contrats" }].map(s => (
              <div key={s.l} style={{ padding: "28px 20px", borderRadius: 14, border: "1px solid rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.04)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, color: "#4ade80", letterSpacing: "-0.03em" }}>{s.v}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 12, fontWeight: 500, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick nav links */}
      <section style={{ padding: "64px 0", background: "var(--color-bg-2)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="links-grid">
          {LINKS.map((l, i) => (
            <motion.div key={l.href}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link href={l.href} style={{ display: "flex", flexDirection: "column", gap: 8, padding: "24px 20px", borderRadius: 14, border: "1px solid rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.04)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s", height: "100%" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.09)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.2)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.04)" }}
              >
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, color: "var(--color-ink)" }}>{l.label}</p>
                <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.5, flex: 1 }}>{l.desc}</p>
                <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>Explorer <ArrowRight size={13} /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Traits */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Ce qu'on recherche.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="traits-grid">
            {CAREER_TRAITS.map((t, i) => (
              <motion.div key={t.label}
                style={{ padding: "32px 24px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 32, height: 3, background: "#4ade80", borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{t.label}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              La vie chez Koncept.
            </h2>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {CAREER_EVENTS.map((ev, i) => (
              <motion.div key={ev.title}
                style={{ padding: "36px 28px", borderRadius: 14, border: "1px solid rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.04)" }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{ display: "inline-block", background: "rgba(34,197,94,0.15)", color: "#4ade80", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 20 }}>{ev.freq}</span>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{ev.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){.links-grid{grid-template-columns:repeat(2,1fr) !important}.traits-grid{grid-template-columns:repeat(2,1fr) !important}}
        @media(max-width:767px){.hero-grid{grid-template-columns:1fr !important;gap:48px !important}.events-grid{grid-template-columns:1fr !important}.links-grid{grid-template-columns:1fr !important}}
      `}</style>
    </>
  )
}
