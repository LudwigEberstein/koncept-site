'use client'

import { useState } from "react"
import { ArrowRight, MapPin, Mail, Phone, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { SITE } from "@/lib/content"

// ─── Types ──────────────────────────────────────────────────────────────────

type RequestType = "projet" | "candidature" | "partenariat" | "autre" | ""

const REQUEST_TYPES: { id: Exclude<RequestType, "">; label: string; desc: string; icon: string }[] = [
  { id: "projet", label: "Projet IT", desc: "Développement, architecture, DevOps, renfort d'équipe", icon: "⚙" },
  { id: "candidature", label: "Candidature", desc: "Rejoindre l'équipe Koncept IS", icon: "✦" },
  { id: "partenariat", label: "Partenariat", desc: "Collaboration commerciale ou technique", icon: "◆" },
  { id: "autre", label: "Autre", desc: "Question, information, prise de contact", icon: "●" },
]

// Contact person per type
const CONTACTS: Record<Exclude<RequestType, "">, { name: string; role: string; img: string; intro: string }> = {
  projet: {
    name: "Aurélie",
    role: "Responsable Commercial",
    img: "https://picsum.photos/seed/aurelie-koncept-commercial/120/120",
    intro: "Je qualifie votre besoin et vous propose la bonne équipe. Premier échange gratuit, sans engagement.",
  },
  candidature: {
    name: "Valentine",
    role: "Directrice RH",
    img: "https://picsum.photos/seed/valentine-koncept-rh/120/120",
    intro: "Je lis chaque candidature avec attention. Même sans poste ouvert, un bon profil nous intéresse toujours.",
  },
  partenariat: {
    name: "Gérard",
    role: "Président",
    img: "https://picsum.photos/seed/gerard-koncept-president/120/120",
    intro: "Je traite directement les propositions de partenariat. Venez avec vos idées — on est ouverts.",
  },
  autre: {
    name: "L'équipe Koncept",
    role: "On vous répond sous 24h",
    img: "https://picsum.photos/seed/koncept-team-contact/120/120",
    intro: "Quelle que soit votre demande, quelqu'un de notre équipe vous répondra sous 24h ouvrés.",
  },
}

// What happens next per type
const NEXT_STEPS: Record<Exclude<RequestType, "">, { step: string; desc: string }[]> = {
  projet: [
    { step: "Réponse sous 24h", desc: "Aurélie vous rappelle ou vous écrit pour confirmer la réception et planifier un créneau." },
    { step: "Échange de 30 min", desc: "Un premier appel pour comprendre votre contexte, votre stack, vos contraintes et votre timeline." },
    { step: "Proposition sous 5 jours", desc: "Si le projet est qualifié, vous recevez une proposition technique et commerciale détaillée." },
  ],
  candidature: [
    { step: "Lecture sous 48h", desc: "Valentine lit chaque candidature. Pas de réponse automatique — un retour humain systématique." },
    { step: "Échange téléphonique", desc: "Un premier appel de 20 minutes pour vous connaître et vous présenter Koncept." },
    { step: "Entretien technique", desc: "Si le profil correspond, un entretien avec l'équipe technique — en présentiel ou visio." },
  ],
  partenariat: [
    { step: "Réponse sous 48h", desc: "Gérard ou Guillaume reviendra vers vous pour évaluer la pertinence d'un échange." },
    { step: "Présentation mutuelle", desc: "On prend le temps de se connaître avant tout engagement — modèle, clients, valeurs." },
    { step: "Proposition de collaboration", desc: "Si les synergies sont réelles, on construit ensemble un cadre de partenariat adapté." },
  ],
  autre: [
    { step: "Réponse sous 24h", desc: "Un membre de l'équipe vous répond directement, sans formulaire intermédiaire." },
    { step: "Mise en relation", desc: "On vous oriente vers la bonne personne selon votre demande." },
    { step: "Suite selon votre besoin", desc: "On s'adapte à votre rythme et vos contraintes." },
  ],
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Contact() {
  const [type, setType] = useState<RequestType>("")
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", phone: "", societe: "", budget: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const contact = type ? CONTACTS[type as Exclude<RequestType, "">] ?? null : null
  const nextSteps = type ? NEXT_STEPS[type as Exclude<RequestType, "">] ?? null : null

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px", background: "var(--color-bg-3)",
    border: "1px solid var(--color-border-2)", borderRadius: 10, color: "var(--color-ink)",
    fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box",
    transition: "border-color 0.15s",
  }

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 12, fontWeight: 600, marginBottom: 7, color: "var(--color-ink-2)", letterSpacing: "0.02em",
  }

  const focusRed = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = "var(--color-accent)" }
  const blurReset = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = "var(--color-border-2)" }

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 140, paddingBottom: 72, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p
            style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            Contact
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Parlons de<br /><span style={{ color: "var(--color-accent)" }}>votre projet.</span>
          </motion.h1>
          <motion.p
            style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.7, maxWidth: "52ch", marginBottom: 36 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            Projet IT, candidature ou simple question — un humain vous répond. Pas un chatbot, pas un ticket.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
          >
            {[
              { icon: "⏱", label: "Réponse sous 24h ouvrés" },
              { icon: "☎", label: "Premier échange de 30 min gratuit" },
              { icon: "🔒", label: "Vos données restent confidentielles" },
            ].map(t => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 9999, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)" }}>
                <span style={{ fontSize: 13 }}>{t.icon}</span>
                {t.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main ── */}
      <section style={{ padding: "80px 0 96px", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 400px", gap: 64, alignItems: "start" }} className="contact-grid">

          {/* ── Form ── */}
          <div>
            {submitted ? (
              <motion.div
                style={{ background: "var(--color-bg-2)", border: "1px solid rgba(212,32,32,0.3)", borderRadius: 20, padding: "56px 48px", textAlign: "center" }}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(212,32,32,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--color-accent)", fontSize: 26 }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
                  Message bien reçu.
                </h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "44ch", margin: "0 auto" }}>
                  {contact ? `${contact.name} vous recontactera sous 24h ouvrés. En attendant, n'hésitez pas à parcourir nos expertises.` : "Notre équipe vous recontactera sous 24h ouvrés."}
                </p>
                {contact && (
                  <div style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 14, padding: "14px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}>
                    <img src={contact.img} alt={contact.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                    <div style={{ textAlign: "left" }}>
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{contact.name}</p>
                      <p style={{ color: "var(--color-ink-2)", fontSize: 12 }}>{contact.role}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                {/* Step 1 — Type */}
                <div>
                  <p style={{ ...labelStyle, fontSize: 13, marginBottom: 12 }}>
                    <span style={{ color: "var(--color-accent)", fontWeight: 800 }}>01</span>&nbsp; Quel est l&apos;objet de votre demande ?
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }} className="type-grid">
                    {REQUEST_TYPES.map(rt => {
                      const isSelected = type === rt.id
                      return (
                        <button key={rt.id} type="button" onClick={() => setType(rt.id)}
                          style={{
                            padding: "16px 12px", borderRadius: 12, border: `1px solid ${isSelected ? "var(--color-accent)" : "var(--color-border)"}`,
                            background: isSelected ? "rgba(212,32,32,0.08)" : "var(--color-bg-2)",
                            cursor: "pointer", textAlign: "left", transition: "all 0.15s",
                          }}
                          onMouseEnter={e => { if (!isSelected) (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,32,32,0.35)" }}
                          onMouseLeave={e => { if (!isSelected) (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
                        >
                          <span style={{ fontSize: 16, display: "block", marginBottom: 8 }}>{rt.icon}</span>
                          <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, marginBottom: 4, color: isSelected ? "var(--color-accent)" : "var(--color-ink)" }}>{rt.label}</p>
                          <p style={{ fontSize: 11, color: "var(--color-ink-2)", lineHeight: 1.4 }}>{rt.desc}</p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 2 — Fields (animated in when type is selected) */}
                <AnimatePresence>
                  {type && (
                    <motion.div
                      key="fields"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: "flex", flexDirection: "column", gap: 18 }}
                    >
                      <div style={{ height: 1, background: "var(--color-border)" }} />
                      <p style={{ ...labelStyle, fontSize: 13, marginBottom: 0 }}>
                        <span style={{ color: "var(--color-accent)", fontWeight: 800 }}>02</span>&nbsp; Dites-nous en plus sur vous
                      </p>

                      {/* Name */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="name-grid">
                        <div>
                          <label style={labelStyle}>Prénom</label>
                          <input name="prenom" type="text" value={form.prenom} onChange={handleChange} required placeholder="Jean" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                        </div>
                        <div>
                          <label style={labelStyle}>Nom</label>
                          <input name="nom" type="text" value={form.nom} onChange={handleChange} required placeholder="Dupont" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                        </div>
                      </div>

                      {/* Email + Phone */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="name-grid">
                        <div>
                          <label style={labelStyle}>Email</label>
                          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean.dupont@email.com" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                        </div>
                        <div>
                          <label style={labelStyle}>Téléphone <span style={{ fontWeight: 400 }}>(optionnel)</span></label>
                          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+33 6 00 00 00 00" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                        </div>
                      </div>

                      {/* Société + Budget — only for projet */}
                      {type === "projet" && (
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="name-grid">
                          <div>
                            <label style={labelStyle}>Société</label>
                            <input name="societe" type="text" value={form.societe} onChange={handleChange} placeholder="Votre entreprise" style={inputStyle} onFocus={focusRed} onBlur={blurReset} />
                          </div>
                          <div>
                            <label style={labelStyle}>Budget estimé <span style={{ fontWeight: 400 }}>(optionnel)</span></label>
                            <select name="budget" value={form.budget} onChange={handleChange} style={inputStyle} onFocus={focusRed} onBlur={blurReset}>
                              <option value="">Non défini</option>
                              <option value="<50k">{"< 50 000 €"}</option>
                              <option value="50-150k">50 000 – 150 000 €</option>
                              <option value="150-500k">150 000 – 500 000 €</option>
                              <option value=">500k">{"> 500 000 €"}</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label style={labelStyle}>
                          {type === "projet" ? "Décrivez votre projet" : type === "candidature" ? "Parlez-nous de vous" : "Votre message"}
                        </label>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                          placeholder={
                            type === "projet"
                              ? "Contexte du projet, stack existante, délais, enjeux principaux..."
                              : type === "candidature"
                              ? "Votre parcours, vos technologies de prédilection, ce que vous cherchez..."
                              : "Décrivez votre demande..."
                          }
                          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                          onFocus={focusRed} onBlur={blurReset}
                        />
                      </div>

                      <button type="submit"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", alignSelf: "flex-start", transition: "filter 0.15s, transform 0.12s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
                      >
                        Envoyer <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            )}
          </div>

          {/* ── Right panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 96 }}>

            {/* Contact person — adapts to type */}
            <AnimatePresence mode="wait">
              {contact ? (
                <motion.div key={type}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ padding: "28px 24px", borderRadius: 16, border: "1px solid rgba(212,32,32,0.2)", background: "rgba(212,32,32,0.04)" }}
                >
                  <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                    <img src={contact.img} alt={contact.name} style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-border)" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700 }}>{contact.name}</p>
                      <p style={{ color: "var(--color-accent)", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 2 }}>{contact.role}</p>
                    </div>
                  </div>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7, fontStyle: "italic" }}>"{contact.intro}"</p>
                </motion.div>
              ) : (
                <motion.div key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ padding: "28px 24px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                >
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>À qui écrivez-vous ?</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>
                    Sélectionnez le type de demande pour être mis en relation avec la bonne personne chez Koncept.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* What happens next */}
            <AnimatePresence mode="wait">
              {nextSteps && (
                <motion.div key={`steps-${type}`}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  style={{ padding: "24px 24px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                >
                  <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 16 }}>Ce qui se passe ensuite</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {nextSteps.map((s, i) => (
                      <div key={s.step} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(212,32,32,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 11, fontWeight: 800, color: "var(--color-accent)" }}>
                          {i + 1}
                        </div>
                        <div>
                          <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{s.step}</p>
                          <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Coordinates */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: <MapPin size={15} />, label: "Adresse", value: `${SITE.address.street}, ${SITE.address.city}`, href: undefined },
                { icon: <Mail size={15} />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: <Phone size={15} />, label: "Téléphone", value: SITE.phone, href: SITE.phoneHref },
                { icon: <Linkedin size={15} />, label: "LinkedIn", value: "Suivez Koncept IS", href: SITE.linkedin },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 16px", borderRadius: 10, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(212,32,32,0.08)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 2 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ fontSize: 13, color: "var(--color-ink)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-accent)" }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                      >{item.value}</a>
                    ) : (
                      <p style={{ fontSize: 13, color: "var(--color-ink)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternatives bar ── */}
      <section style={{ padding: "56px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, marginBottom: 20, color: "var(--color-ink-2)" }}>
            Vous n&apos;avez pas le temps de remplir un formulaire ?
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`mailto:${SITE.email}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 9, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", fontSize: 13, fontWeight: 600, color: "var(--color-ink)", textDecoration: "none", transition: "border-color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
            >
              <Mail size={14} style={{ color: "var(--color-accent)" }} /> Écrire directement à {SITE.email}
            </a>
            <a href={SITE.phoneHref}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 9, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", fontSize: 13, fontWeight: 600, color: "var(--color-ink)", textDecoration: "none", transition: "border-color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
            >
              <Phone size={14} style={{ color: "var(--color-accent)" }} /> Appeler le {SITE.phone}
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 9, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", fontSize: 13, fontWeight: 600, color: "var(--color-ink)", textDecoration: "none", transition: "border-color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)" }}
            >
              <Linkedin size={14} style={{ color: "var(--color-accent)" }} /> Envoyer un message LinkedIn
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .contact-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:767px){
          .type-grid{grid-template-columns:repeat(2,1fr) !important}
          .name-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:479px){
          .type-grid{grid-template-columns:1fr !important}
        }
        select option{background:#1C1C1C;color:#F0EDE8}
      `}</style>
    </>
  )
}
