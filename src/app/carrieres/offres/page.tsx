'use client'

import Link from "next/link"
import { ArrowRight, MapPin, Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { JOBS } from "@/lib/content"

// ─── Enriched jobs ───────────────────────────────────────────────────────────

const ENRICHED_JOBS = [
  {
    ...JOBS[0],
    id: "js-fullstack",
    badge: "Nouveau",
    badgeColor: "var(--color-career)",
    remote: "2j/semaine",
    salary: "45–65 K€",
    intro: "On cherche un dev JS fullstack passionné pour rejoindre une équipe chez l'un de nos clients grands comptes. Pas un dev de plus dans un open space — quelqu'un qui veut s'investir, proposer des architectures, et laisser sa marque sur un vrai produit.",
    daily: [
      "Feature development en React/Node.js sur un produit B2B utilisé par 50k+ utilisateurs",
      "Code review sérieuses — les PR ne passent pas sans retour constructif",
      "Participation aux rétrospectives et aux décisions d'architecture",
      "Kata club Koncept le jeudi — volontaire mais chaleureusement encouragé",
    ],
    process: [
      { step: "1. Échange RH", desc: "30 min avec Valentine. On se présente, on voit si le feeling passe.", duration: "J+2" },
      { step: "2. Entretien technique", desc: "1h avec un lead dev. Discussion archi, revue de code, exercice pratique.", duration: "J+7" },
      { step: "3. Rencontre équipe", desc: "Rencontre informelle avec l'équipe. Pas d'épreuve — juste voir si ça matche.", duration: "J+12" },
      { step: "4. Offre", desc: "Si tout est bon, offre dans les 48h. Pas de délai artificiel.", duration: "J+14" },
    ],
  },
]

const SPONTANEOUS_PROFILES = [
  { tech: "Java / Spring Boot", icon: "☕", desc: "Senior, architecte, lead — on est toujours en veille sur ces profils." },
  { tech: ".NET / C#", icon: "◆", desc: "Développeur ou architecte .NET pour des projets industriels et bancaires." },
  { tech: "DevOps / Cloud", icon: "⚡", desc: "Kubernetes, Terraform, CI/CD. Les profils DevOps sérieux sont rares — et recherchés." },
  { tech: "Frontend React / Angular", icon: "▣", desc: "Senior frontend sur des applications métier complexes, pas des landing pages." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Offres() {
  const reduce = useReducedMotion()
  const [expanded, setExpanded] = useState<string | null>(ENRICHED_JOBS[0]?.id ?? null)

  const fadeUp = (delay = 0) => reduce ? false as const : ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 as const },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            Carrières · Offres d&apos;emploi
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Des missions.<br /><span style={{ color: "var(--color-career)" }}>Pas des placards.</span>
          </motion.h1>
          <motion.p
            style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.7, maxWidth: "56ch", marginBottom: 32 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            On ne recrute que des postes sur lesquels on a quelque chose de vrai à proposer. Pas de recrutement préventif, pas de bancs de ressources. Chaque offre correspond à un projet concret.
          </motion.p>
          <motion.div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.18 }}
          >
            {["CDI uniquement", "Toulouse", "2j télétravail/semaine", "Réponse sous 48h"].map(p => (
              <span key={p} style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", padding: "5px 12px", borderRadius: 9999 }}>{p}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Listings ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {ENRICHED_JOBS.map((job, i) => {
              const isOpen = expanded === job.id
              return (
                <motion.div key={job.id}
                  style={{ borderRadius: 16, border: `1px solid ${isOpen ? "rgba(74,222,128,0.4)" : "var(--color-career-border)"}`, background: isOpen ? "var(--color-career-bg)" : "var(--color-bg-2)", overflow: "hidden", transition: "border-color 0.2s" }}
                  {...fadeUp(i * 0.08)}
                >
                  {/* Header — always visible */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : job.id)}
                    aria-expanded={isOpen}
                    aria-controls={`job-detail-${job.id}`}
                    style={{ width: "100%", padding: "28px 32px", display: "flex", alignItems: "center", gap: 20, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>{job.title}</h3>
                        <span style={{ background: "rgba(var(--color-career),0.15)", color: "var(--color-career)", borderRadius: 6, padding: "2px 9px", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em" }}>{job.badge}</span>
                      </div>
                      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><MapPin size={13} />{job.location}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><Briefcase size={13} />{job.type}</span>
                        <span style={{ color: "var(--color-ink-2)", fontSize: 13 }}>🏠 {job.remote} télétravail</span>
                        <span style={{ color: "var(--color-career)", fontSize: 13, fontWeight: 600 }}>💰 {job.salary}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <Link href="/carrieres/candidature"
                        onClick={e => e.stopPropagation()}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "11px 20px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                      >
                        Postuler <ArrowRight size={13} />
                      </Link>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--color-career-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-career)", flexShrink: 0 }}>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div id={`job-detail-${job.id}`} style={{ padding: "0 32px 32px", borderTop: "1px solid var(--color-border)" }}>
                          {/* Intro */}
                          <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.8, margin: "28px 0 28px", maxWidth: "72ch" }}>{job.intro}</p>

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 28 }} className="job-body">
                            {/* Mission */}
                            <div>
                              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 14 }}>La mission</p>
                              <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.75, marginBottom: 18 }}>{job.desc}</p>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                                {job.stack.map(s => (
                                  <span key={s} style={{ background: "var(--color-career-bg)", border: "1px solid var(--color-career-border)", color: "var(--color-career)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700 }}>{s}</span>
                                ))}
                              </div>
                            </div>

                            {/* Profile */}
                            <div>
                              <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 14 }}>Profil recherché</p>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                {job.profile.map(p => (
                                  <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-career)", flexShrink: 0, marginTop: 6 }} />
                                    <span style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.55 }}>{p}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Daily */}
                          <div style={{ padding: "24px 24px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", marginBottom: 28 }}>
                            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 14 }}>Ta journée type</p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="daily-grid">
                              {job.daily.map((d, j) => (
                                <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                  <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 11, fontWeight: 800, color: "var(--color-career)", flexShrink: 0, marginTop: 1 }}>{String(j + 1).padStart(2, "0")}</span>
                                  <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{d}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Process */}
                          <div>
                            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 16 }}>Le process de recrutement</p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }} className="process-grid">
                              {job.process.map((p, j) => (
                                <div key={p.step} style={{ padding: "16px 18px", borderRadius: 10, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                    <div style={{ width: 22, height: 22, borderRadius: 6, background: "rgba(var(--color-career),0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "var(--color-career)", flexShrink: 0 }}>{j + 1}</div>
                                    <span style={{ fontSize: 10, fontWeight: 700, color: "var(--color-career)" }}>{p.duration}</span>
                                  </div>
                                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 12, fontWeight: 700, marginBottom: 5 }}>{p.step.replace(/^\d\.\s/, "")}</p>
                                  <p style={{ fontSize: 11, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{p.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Profils recherchés en spontané ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>En veille permanente</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Pas de poste listé ?<br />On cherche peut-être ton profil quand même.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "56ch", lineHeight: 1.7, marginBottom: 40 }}>
              Ces profils sont en veille permanente chez nous. Si tu corresponds, envoie une candidature spontanée — Valentine la lit vraiment.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 40 }} className="profiles-grid">
            {SPONTANEOUS_PROFILES.map((p, i) => (
              <motion.div key={p.tech}
                style={{ padding: "24px 22px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)" }}
                {...fadeUp(i * 0.08)}
              >
                <span style={{ fontSize: 22, display: "block", marginBottom: 12 }}>{p.icon}</span>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 6, color: "var(--color-career)" }}>{p.tech}</p>
                <p style={{ fontSize: 12, color: "var(--color-ink-2)", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.1)}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "32px 36px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", flexWrap: "wrap" }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 800, marginBottom: 6 }}>Ton profil n&apos;est pas listé ?</p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 14 }}>Envoie-nous quand même. On est curieux des profils atypiques.</p>
            </div>
            <Link href="/carrieres/candidature"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-bg)", color: "var(--color-career)", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid var(--color-career-border)", whiteSpace: "nowrap", transition: "background 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
            >
              Candidature spontanée <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .profiles-grid{grid-template-columns:repeat(2,1fr) !important}
          .process-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:767px){
          .job-body{grid-template-columns:1fr !important;gap:24px !important}
          .daily-grid{grid-template-columns:1fr !important}
          .profiles-grid{grid-template-columns:repeat(2,1fr) !important}
          .process-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:479px){
          .profiles-grid{grid-template-columns:1fr !important}
          .process-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
