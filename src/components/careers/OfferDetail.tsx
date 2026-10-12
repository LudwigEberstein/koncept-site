'use client'

import Link from "next/link"
import { ArrowLeft, ArrowRight, MapPin, Briefcase, Home, Wallet } from "lucide-react"
import { motion } from "motion/react"
import { JOB_PROCESS, type Job } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import Container from "@/components/ui/Container"

const label: React.CSSProperties = { fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 14 }
const meta: React.CSSProperties = { display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13 }

/** Page détaillée d'une offre d'emploi (contenu et style repris du dépliant de la liste). */
export default function OfferDetail({ job }: { job: Job }) {
  const fadeUp = useFadeUp()
  const applyHref = `/carrieres/candidature?poste=${encodeURIComponent(job.title)}`

  return (
    <>
      <HeroSection side="career" next="bg" paddingTop={140} paddingBottom={64}>
        <Container maxWidth={1100}>
          <Link href="/carrieres/offres" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 13, fontWeight: 600, textDecoration: "none", marginBottom: 28 }}>
            <ArrowLeft size={14} aria-hidden="true" /> Toutes les offres
          </Link>
          <motion.p
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            Carrières · Offre d&apos;emploi
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {job.title}
          </motion.h1>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 32 }}>
            <span style={meta}><MapPin size={13} />{job.location}</span>
            <span style={meta}><Briefcase size={13} />{job.type}</span>
            <span style={meta}><Home size={13} />{job.remote} télétravail</span>
            <span style={{ ...meta, color: "var(--color-career)", fontWeight: 600 }}><Wallet size={13} />{job.salary}</span>
          </div>
          <Link href={applyHref}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "13px 24px", borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
          >
            Postuler <ArrowRight size={14} />
          </Link>
        </Container>
      </HeroSection>

      <section style={{ padding: "64px 0 96px", background: "var(--color-bg)" }}>
        <Container maxWidth={1100}>
          <motion.p {...fadeUp()} style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.8, maxWidth: "72ch", marginBottom: 40 }}>{job.intro}</motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32 }} className="job-body">
            <div>
              <p style={label}>La mission</p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.75, marginBottom: 18 }}>{job.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {job.stack.map(s => (
                  <span key={s} style={{ background: "var(--color-career-bg)", border: "1px solid var(--color-career-border)", color: "var(--color-career)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700 }}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={label}>Profil recherché</p>
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

          <div style={{ padding: 24, borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", marginBottom: 32 }}>
            <p style={label}>Ta journée type</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="daily-grid">
              {job.daily.map((d, j) => (
                <div key={d} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 11, fontWeight: 800, color: "var(--color-career)", flexShrink: 0, marginTop: 1 }}>{String(j + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 48 }}>
            <p style={{ ...label, marginBottom: 16 }}>Le process de recrutement</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }} className="process-grid">
              {JOB_PROCESS.map((p, j) => (
                <div key={p.step} style={{ padding: "16px 18px", borderRadius: 10, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)" }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "rgba(var(--color-career),0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "var(--color-career)", marginBottom: 8 }}>{j + 1}</div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 12, fontWeight: 700, marginBottom: 5 }}>{p.step.replace(/^\d\.\s/, "")}</p>
                  <p style={{ fontSize: 11, color: "var(--color-ink-2)", lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "28px 32px", borderRadius: 16, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", flexWrap: "wrap" }}>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 800 }}>Cette offre te parle ?</p>
            <Link href={applyHref}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "13px 24px", borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
            >
              Postuler <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      <style>{`
        @media(max-width:1023px){ .process-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media(max-width:767px){
          .job-body{grid-template-columns:1fr !important;gap:24px !important}
          .daily-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:479px){ .process-grid{grid-template-columns:1fr !important} }
      `}</style>
    </>
  )
}
