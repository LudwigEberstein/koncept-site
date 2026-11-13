'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Mail } from "lucide-react"
import LinkedinIcon from "@/components/ui/LinkedinIcon"
import { motion } from "motion/react"
import { JOB_PROCESS, SITE } from "@/lib/content"
import HeroSection from "@/components/ui/HeroSection"
import Container from "@/components/ui/Container"

/** Interlocutrice des candidatures (même présentation que la personne à contacter de /solutions/contact). */
const RECRUITER = {
  name: "Valentine",
  role: "Ressources humaines",
  img: "/team/valentine-front.jpg",
  pos: "50% 12%", // photo portrait (3:4) : on ancre le rond sur le visage
  intro: "On ne cherche pas des CV parfaits. On cherche des gens curieux, impliqués et honnêtes.",
}

export default function Candidature() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", poste: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  // Poste pré-rempli depuis une offre (?poste=…) : lu après l'hydratation pour garder le HTML statique de la page.
  useEffect(() => {
    const poste = new URLSearchParams(window.location.search).get("poste")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (poste) setForm(prev => ({ ...prev, poste }))
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px", background: "var(--color-bg-3)",
    border: "1px solid var(--color-border-2)", borderRadius: 10, color: "var(--color-ink)",
    fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box",
    transition: "border-color 0.15s",
  }

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)", letterSpacing: "0.02em",
  }

  const focusRed = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "var(--color-career)" }
  const blurReset = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = "var(--color-border-2)" }

  return (
    <>
      <HeroSection side="career" next="bg" paddingTop={140} paddingBottom={64}>
        <Container>
          <motion.p style={{ color: "var(--color-career)", fontSize: 18, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            Carrières · Candidature
          </motion.p>
          <motion.h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 5.5vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 20 }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}>
            Ta candidature<br /><span style={{ color: "var(--color-career)" }}>spontanée.</span>
          </motion.h1>
          <motion.p style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.7, maxWidth: "52ch" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
            Pas de poste qui correspond exactement ? Écris-nous et parle-nous de toi !
          </motion.p>
        </Container>
      </HeroSection>

      <section style={{ padding: "80px 0 96px", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 400px", gap: 64, alignItems: "start" }} className="contact-grid">

          {/* ── Formulaire ── */}
          <div>
            {submitted ? (
              <motion.div
                style={{ background: "var(--color-bg-2)", border: "1px solid var(--color-career-border)", borderRadius: 20, padding: "56px 48px", textAlign: "center" }}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--color-career-bg-hover)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--color-career)" }}>
                  <Check size={28} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
                  Candidature bien reçue !
                </h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "44ch", margin: "0 auto" }}>
                  {RECRUITER.name} revient vers toi très vite.
                </p>
                <div style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 14, padding: "14px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}>
                  <Image src={RECRUITER.img} alt={RECRUITER.name} width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover", objectPosition: RECRUITER.pos }} />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{RECRUITER.name}</p>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 12 }}>{RECRUITER.role}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="name-grid">
                  <div>
                    <label htmlFor="cand-prenom" style={labelStyle}>Prénom</label>
                    <input id="cand-prenom" name="prenom" type="text" value={form.prenom} onChange={handleChange} required placeholder="Jean" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                  </div>
                  <div>
                    <label htmlFor="cand-nom" style={labelStyle}>Nom</label>
                    <input id="cand-nom" name="nom" type="text" value={form.nom} onChange={handleChange} required placeholder="Dupont" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                  </div>
                </div>
                <div>
                  <label htmlFor="cand-email" style={labelStyle}>Email</label>
                  <input id="cand-email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean.dupont@email.com" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                </div>
                <div>
                  <label htmlFor="cand-poste" style={labelStyle}>Poste visé / domaine d&apos;expertise</label>
                  <input id="cand-poste" name="poste" type="text" value={form.poste} onChange={handleChange} required placeholder="ex : Développeur full stack, Business Analyst, Scrum Master..." style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                </div>
                <div>
                  <label htmlFor="cand-message" style={labelStyle}>Ton message</label>
                  <textarea id="cand-message" name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="Parle-nous de toi, de tes expériences, de ce que tu cherches..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                    onFocus={focusRed} onBlur={blurReset}
                  />
                </div>
                <button type="submit"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", alignSelf: "flex-start", transition: "filter 0.15s, transform 0.12s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
                >
                  Envoyer ma candidature <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* ── Panneau de droite (même présentation que /solutions/contact, aux couleurs Carrières) ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 96 }} className="side-panel">

            {/* Interlocutrice */}
            <div style={{ padding: "28px 24px", borderRadius: 16, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                <Image src={RECRUITER.img} alt={RECRUITER.name} width={52} height={52} style={{ borderRadius: "50%", objectFit: "cover", objectPosition: RECRUITER.pos, border: "2px solid var(--color-border)" }} />
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700 }}>{RECRUITER.name}</p>
                  <p style={{ color: "var(--color-career)", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 2 }}>{RECRUITER.role}</p>
                </div>
              </div>
              <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7, fontStyle: "italic" }}>&laquo;&nbsp;{RECRUITER.intro}&nbsp;&raquo;</p>
            </div>

            {/* Ce qui se passe ensuite : le process de recrutement commun aux offres */}
            <div style={{ padding: "24px 24px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
              <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 16 }}>Ce qui se passe ensuite</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {JOB_PROCESS.map((s, i) => (
                  <div key={s.step} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 26, height: 26, borderRadius: 7, background: "var(--color-career-bg-hover)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 11, fontWeight: 800, color: "var(--color-career)" }}>
                      {i + 1}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{s.step.replace(/^\d\.\s/, "")}</p>
                      <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: <Mail size={15} />, label: "Email recrutement", value: SITE.recruitmentEmail, href: `mailto:${SITE.recruitmentEmail}` },
                { icon: <LinkedinIcon size={15} />, label: "LinkedIn", value: "Suis Koncept", href: SITE.linkedin },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 16px", borderRadius: 10, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--color-career-bg)", color: "var(--color-career)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 2 }}>{item.label}</p>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ fontSize: 13, color: "var(--color-ink)", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-career)" }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                    >{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){.contact-grid{grid-template-columns:1fr !important}.side-panel{position:static !important}}
        @media(max-width:639px){.name-grid{grid-template-columns:1fr !important}}
      `}</style>
    </>
  )
}
