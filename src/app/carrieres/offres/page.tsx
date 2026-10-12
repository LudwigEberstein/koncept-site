'use client'

import Link from "next/link"
import { ArrowRight, MapPin, Briefcase, Home, Wallet } from "lucide-react"
import { motion } from "motion/react"
import { JOBS } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import QuestMark from "@/components/ui/QuestMark"
import Eyebrow from "@/components/ui/Eyebrow"
import Container from "@/components/ui/Container"

const SPONTANEOUS_PROFILES = [
  { tech: "Java / Spring Boot", icon: "☕", desc: "Senior, architecte, lead — on est toujours en veille sur ces profils." },
  { tech: ".NET / C#", icon: "◆", desc: "Développeur ou architecte .NET pour des projets industriels et bancaires." },
  { tech: "DevOps / Cloud", icon: "⚡", desc: "Kubernetes, Terraform, CI/CD. Les profils DevOps sérieux sont rares — et recherchés." },
  { tech: "Frontend React / Angular", icon: "▣", desc: "Senior frontend sur des applications métier complexes, pas des landing pages." },
  { tech: "Business Analyst / Product Owner", icon: "◈", desc: "Pour faire le lien entre les besoins métier et les équipes techniques." },
  { tech: "Scrum Master / Chef de projet", icon: "◎", desc: "Pour animer, coordonner et faire avancer les équipes et les projets." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Offres() {

  const fadeUp = useFadeUp()

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection side="career" next="bg" paddingTop={140} paddingBottom={80}>
        <Container>
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
            <QuestMark />Nouvelle quête<br /><span style={{ color: "var(--color-career)" }}>disponible.</span>
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
            {["CDI uniquement", "Toulouse", "2j télétravail/semaine", "Un vrai retour humain"].map(p => (
              <span key={p} style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", padding: "5px 12px", borderRadius: 9999 }}>{p}</span>
            ))}
          </motion.div>
        </Container>
      </HeroSection>

      {/* ── Listings ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <Container maxWidth={1100}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {JOBS.map((job, i) => (
              <motion.div key={job.slug} {...fadeUp(i * 0.08)}>
                <Link href={`/carrieres/offres/${job.slug}`} className="job-card"
                  style={{ display: "flex", alignItems: "center", gap: 20, padding: "28px 32px", borderRadius: 16, border: "1px solid var(--color-career-border)", background: "var(--color-bg-2)", textDecoration: "none", color: "inherit", transition: "border-color 0.2s, background 0.2s" }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>{job.title}</h3>
                      <span style={{ background: "var(--color-career-bg)", color: "var(--color-career)", borderRadius: 6, padding: "2px 9px", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em" }}>{job.badge}</span>
                    </div>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><MapPin size={13} />{job.location}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><Briefcase size={13} />{job.type}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }}><Home size={13} />{job.remote} télétravail</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-career)", fontSize: 13, fontWeight: 600 }}><Wallet size={13} />{job.salary}</span>
                    </div>
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "11px 20px", borderRadius: 9, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" }}>
                    Voir l&apos;offre <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Profils recherchés en spontané ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container maxWidth={1100}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">En veille permanente</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Pas de poste listé ?<br />On cherche peut-être<br />ton profil quand même.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "56ch", lineHeight: 1.7, marginBottom: 40 }}>
              Ces profils sont en veille permanente chez nous. Si tu corresponds, envoie une candidature spontanée — Valentine la lit vraiment.
            </p>
          </motion.div>
          {/* Mamie : à droite de l'en-tête, dans le flux (ne rallonge pas la section, ne recouvre aucun texte) */}
          <div className="grandma-figure" aria-hidden="true">
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/grandma-static.png" />
              { }
              <img src="/culture/grandma.gif" alt="" loading="lazy" />
            </picture>
          </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 40 }} className="profiles-grid">
            {SPONTANEOUS_PROFILES.map((p, i) => (
              <motion.div className="glass-card" key={p.tech}
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
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "32px 36px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", flexWrap: "wrap", position: "relative" }}
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
        </Container>
      </section>

      <style>{`
        @media(max-width:1023px){
          .profiles-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:767px){
          .profiles-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:479px){
          .profiles-grid{grid-template-columns:1fr !important}
        }
        .job-card:hover{border-color:var(--color-career-border-hover) !important;background:var(--color-career-bg) !important}
      `}</style>
    </>
  )
}
