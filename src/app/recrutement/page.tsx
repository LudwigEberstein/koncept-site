'use client'

import Link from "next/link"
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import PageHero from "@/components/ui/PageHero"
import RevealSection from "@/components/ui/RevealSection"

const JOBS = [
  {
    title: "Développeur JS FullStack",
    location: "Toulouse",
    type: "CDI",
    sector: "Aéronautique / Télécoms",
    desc: "Vous intégrerez une équipe projet chez l'un de nos clients grands comptes. Vous serez responsable du développement frontend et backend en JavaScript/TypeScript, dans un contexte Agile exigeant.",
    stack: ["JavaScript", "TypeScript", "Node.js", "Angular", "React", "REST API"],
    profile: [
      "Bac+3 à Bac+5 en informatique",
      "2+ ans d'expérience en développement fullstack JS",
      "Maîtrise de Node.js + un framework frontend (Angular ou React)",
      "Curiosité, rigueur, esprit d'équipe",
    ],
  },
]

export default function Recrutement() {
  const reduce = useReducedMotion()
  return (
    <>
      <PageHero
        label="Offres d'emploi"
        title="Nos postes"
        titleAccent="ouverts."
        subtitle="Des missions ambitieuses, un encadrement bienveillant, et une équipe qui vous pousse vers le haut. Si vous cherchez plus qu'un job, vous êtes au bon endroit."
      />

      {/* Job listings */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Postes disponibles.
            </h2>
          </RevealSection>

          {JOBS.map((job, i) => (
            <motion.div key={job.title}
              style={{ borderRadius: 16, border: "1px solid var(--color-border-2)", background: "var(--color-bg-2)", overflow: "hidden", marginBottom: 24 }}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div style={{ padding: "32px 36px", borderBottom: "1px solid var(--color-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 14 }}>
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 14 }}>
                        <Briefcase size={14} /> {job.type}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 14 }}>
                        <Clock size={14} /> {job.sector}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "12px 24px", borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", transition: "filter 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                  >
                    Postuler <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "32px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="job-body">
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>Mission</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7 }}>{job.desc}</p>
                  <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {job.stack.map(s => (
                      <span key={s} style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: "var(--color-ink-2)" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>Profil recherché</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {job.profile.map(p => (
                      <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.5 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0, marginTop: 6 }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spontaneous application */}
      <section style={{ padding: "88px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="sponta-grid">
              <div>
                <p style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Candidature spontanée</p>
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 20 }}>
                  Pas de poste correspondant ?
                </h2>
                <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
                  Vous avez un profil solide mais vous ne trouvez pas l'offre qui vous correspond ? Envoyez-nous votre candidature spontanée. On est toujours à la recherche de personnes motivées et compétentes.
                </p>
                <Link href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                >
                  Envoyer ma candidature <ArrowRight size={16} />
                </Link>
              </div>
              <div style={{ background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "36px 32px" }}>
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Valentine</p>
                  <p style={{ color: "var(--color-accent)", fontSize: 13, fontWeight: 600 }}>Directrice des Ressources Humaines</p>
                </div>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.7 }}>
                  "On ne cherche pas des CV parfaits. On cherche des gens curieux, impliqués et honnêtes. Si c'est vous, on a envie d'en parler."
                </p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--color-border)", display: "flex", gap: 12, fontSize: 13, color: "var(--color-ink-2)" }}>
                  <span>📧 contact@koncept-is.fr</span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <style>{`
        @media(max-width:767px){
          .job-body{grid-template-columns:1fr !important;gap:32px !important}
          .sponta-grid{grid-template-columns:1fr !important;gap:40px !important}
        }
      `}</style>
    </>
  )
}
