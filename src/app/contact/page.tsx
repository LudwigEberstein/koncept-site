'use client'

import { useState } from "react"
import { ArrowRight, MapPin, Mail, Phone, Linkedin } from "lucide-react"
import { motion } from "motion/react"
import { SITE } from "@/lib/content"

export default function Contact() {
  const [form, setForm] = useState({ type: "", prenom: "", nom: "", email: "", phone: "", message: "" })
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
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 88, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            Contact
          </motion.p>
          <motion.h1 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}>
            Parlons de<br /><span style={{ color: "var(--color-accent)" }}>votre projet.</span>
          </motion.h1>
          <motion.p style={{ color: "var(--color-ink-2)", fontSize: 18, lineHeight: 1.65, maxWidth: "52ch" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>
            Une question, une demande de devis, une candidature ou juste l'envie d'échanger ? On vous répond rapidement.
          </motion.p>
        </div>
      </section>

      {/* Form + info */}
      <section style={{ padding: "88px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "start" }} className="contact-grid">

          {/* Form */}
          <div>
            {submitted ? (
              <motion.div style={{ background: "var(--color-bg-2)", border: "1px solid rgba(212,32,32,0.3)", borderRadius: 16, padding: "48px 40px", textAlign: "center" }}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(212,32,32,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <span style={{ color: "var(--color-accent)", fontSize: 24 }}>✓</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 26, fontWeight: 800, marginBottom: 12 }}>Message envoyé !</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.65 }}>
                  Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-ink-2)" }}>Type de demande</label>
                  <select name="type" value={form.type} onChange={handleChange} required style={{ ...inputStyle }}>
                    <option value="">Sélectionnez...</option>
                    <option value="projet">Projet IT / Développement</option>
                    <option value="candidature">Candidature</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="name-grid">
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-ink-2)" }}>Prénom</label>
                    <input name="prenom" type="text" value={form.prenom} onChange={handleChange} required placeholder="Jean" style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--color-accent)" }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-ink-2)" }}>Nom</label>
                    <input name="nom" type="text" value={form.nom} onChange={handleChange} required placeholder="Dupont" style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--color-accent)" }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-ink-2)" }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean.dupont@email.com" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-accent)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-ink-2)" }}>Téléphone <span style={{ color: "var(--color-ink-2)", fontWeight: 400 }}>(optionnel)</span></label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+33 6 00 00 00 00" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-accent)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--color-ink-2)" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="Décrivez votre besoin, votre projet ou votre question..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--color-accent)" }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--color-border-2)" }}
                  />
                </div>

                <button type="submit"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", transition: "filter 0.15s, transform 0.15s", alignSelf: "flex-start" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
                >
                  Envoyer le message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                icon: <MapPin size={18} />,
                label: "Notre adresse",
                content: <>{SITE.address.street}<br />{SITE.address.city}</>,
              },
              {
                icon: <Mail size={18} />,
                label: "Email",
                content: <a href={`mailto:${SITE.email}`} style={{ color: "var(--color-ink)", textDecoration: "none" }}>{SITE.email}</a>,
              },
              {
                icon: <Phone size={18} />,
                label: "Téléphone",
                content: <a href={SITE.phoneHref} style={{ color: "var(--color-ink)", textDecoration: "none" }}>{SITE.phone}</a>,
              },
              {
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
                content: <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Suivez-nous</a>,
              },
            ].map((item, i) => (
              <motion.div key={item.label}
                style={{ padding: "24px 24px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", gap: 16, alignItems: "flex-start" }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(212,32,32,0.12)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontSize: 15, lineHeight: 1.55 }}>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .contact-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:767px){
          .name-grid{grid-template-columns:1fr !important}
        }
        select option{background:#1C1C1C;color:#F0EDE8}
      `}</style>
    </>
  )
}
