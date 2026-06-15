'use client'

import { useState } from "react"
import { ArrowRight, Mail, Linkedin } from "lucide-react"
import { motion } from "motion/react"
import { SITE } from "@/lib/content"

export default function Candidature() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", poste: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", background: "var(--color-bg-3)",
    border: "1px solid var(--color-border-2)", borderRadius: 10, color: "var(--color-ink)",
    fontSize: 15, outline: "none", fontFamily: "inherit", boxSizing: "border-box",
    transition: "border-color 0.15s",
  }

  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 64, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p style={{ color: "var(--color-career)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            Carrières · Candidature
          </motion.p>
          <motion.h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 5.5vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 20 }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}>
            Votre candidature<br /><span style={{ color: "var(--color-career)" }}>spontanée.</span>
          </motion.h1>
          <motion.p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.65, maxWidth: "52ch" }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
            Pas de poste qui correspond exactement ? Envoyez-nous quand même votre profil. On est toujours attentifs aux bonnes personnes.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }} className="contact-grid">
          <div>
            {submitted ? (
              <motion.div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 16, padding: "48px 40px", textAlign: "center" }}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--color-career)", fontSize: 22 }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Candidature envoyée !</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.65 }}>Valentine vous recontactera dans les meilleurs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="name-grid">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)" }}>Prénom</label>
                    <input name="prenom" type="text" value={form.prenom} onChange={handleChange} required placeholder="Jean" style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--color-career)" }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)" }}>Nom</label>
                    <input name="nom" type="text" value={form.nom} onChange={handleChange} required placeholder="Dupont" style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--color-career)" }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)" }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean.dupont@email.com" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-career)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)" }}>Poste visé / domaine d'expertise</label>
                  <input name="poste" type="text" value={form.poste} onChange={handleChange} required placeholder="ex: Développeur Java Senior, DevOps..." style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-career)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)" }}>Votre message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="Parlez-nous de vous, de vos expériences, de ce que vous cherchez..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-career)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }}
                  />
                </div>
                <button type="submit"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "16px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", alignSelf: "flex-start" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                >
                  Envoyer ma candidature <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ padding: "28px 24px", borderRadius: 14, border: "1px solid rgba(34,197,94,0.2)", background: "rgba(34,197,94,0.04)" }}>
              <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 700, marginBottom: 4 }}>Valentine</p>
              <p style={{ color: "var(--color-career)", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>Directrice des Ressources Humaines</p>
              <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>"On ne cherche pas des CV parfaits. On cherche des gens curieux, impliqués et honnêtes."</p>
            </div>
            {[
              { icon: <Mail size={16} />, label: "Email RH", val: SITE.email, href: `mailto:${SITE.email}` },
              { icon: <Linkedin size={16} />, label: "LinkedIn", val: "Suivez-nous", href: SITE.linkedin },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 14, padding: "20px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "center" }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(34,197,94,0.1)", color: "var(--color-career)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 3 }}>{item.label}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--color-ink)", textDecoration: "none" }}>{item.val}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){.contact-grid{grid-template-columns:1fr !important}}
        @media(max-width:639px){.name-grid{grid-template-columns:1fr !important}}
      `}</style>
    </>
  )
}
