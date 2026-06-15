'use client'

import Link from "next/link"
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"
import { JOBS } from "@/lib/content"

export default function Offres() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Offres d'emploi"
        title="Des missions,"
        titleAccent="pas juste un poste."
        subtitle="On cherche des développeurs qui veulent s'investir. Des gens curieux, sérieux, et qui ont envie de construire quelque chose."
      />

      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Postes disponibles.
            </h2>
          </RevealSection>

          {JOBS.map((job, i) => (
            <motion.div key={job.title}
              style={{ borderRadius: 16, border: "1px solid rgba(34,197,94,0.25)", background: "var(--color-bg-2)", overflow: "hidden", marginBottom: 24 }}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ padding: "32px 36px", borderBottom: "1px solid var(--color-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><MapPin size={13} />{job.location}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><Briefcase size={13} />{job.type}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><Clock size={13} />{job.sector}</span>
                    </div>
                  </div>
                  <Link href="/carrieres/candidature"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#16a34a", color: "#fff", padding: "12px 22px", borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                  >
                    Postuler <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <div style={{ padding: "32px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="job-body">
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4ade80", marginBottom: 14 }}>Mission</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7 }}>{job.desc}</p>
                  <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {job.stack.map(s => (
                      <span key={s} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 6, padding: "4px 11px", fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4ade80", marginBottom: 14 }}>Profil recherché</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.profile.map(p => (
                      <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.55 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0, marginTop: 5 }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spontaneous */}
          <RevealSection>
            <div style={{ marginTop: 48, padding: "40px 36px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Pas de poste correspondant ?</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>Envoyez une candidature spontanée — on est toujours attentifs aux bons profils.</p>
              </div>
              <Link href="/carrieres/candidature" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", color: "#4ade80", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(34,197,94,0.25)", whiteSpace: "nowrap" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.18)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.1)" }}
              >
                Candidature spontanée <ArrowRight size={15} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <style>{`@media(max-width:767px){.job-body{grid-template-columns:1fr !important;gap:28px !important}}`}</style>
    </>
  )
}
