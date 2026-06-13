'use client'

import { useState, useRef, useEffect } from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  Phone, Mail, MapPin, Menu, X, ArrowRight,
  Server, Code2, ShieldCheck, Users, Linkedin,
} from "lucide-react"

// ---- Constants ----
const PHONE = "05 61 XX XX XX"
const PHONE_HREF = "tel:0561XXXXXX"
const EMAIL = "contact@koncept-is.fr"

const STATS = [
  { value: "50", label: "collaborateurs" },
  { value: "€3.2M", label: "de chiffre d'affaires" },
  { value: "7", label: "secteurs d'activité" },
  { value: "2017", label: "fondée à Toulouse" },
]

const SECTORS_RAW = [
  "Banque", "Aéronautique", "Télécommunications",
  "Services IT", "Robotique", "Transport", "Secteur public",
]
// doubled for seamless CSS marquee
const SECTORS = [...SECTORS_RAW, ...SECTORS_RAW]

const SERVICES = [
  {
    id: "dev",
    title: "Développement sur mesure",
    desc: "Applications Java, .NET et Angular conçues autour de vos besoins métier, livrées avec méthode et rigueur.",
    img: "https://picsum.photos/seed/koncept-toulouse-dev-software-code/900/700",
    Icon: Code2,
    wide: true,
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    desc: "Spring Boot, Jenkins et CI/CD pour accélérer vos cycles de livraison et fiabiliser vos déploiements.",
    img: "https://picsum.photos/seed/koncept-devops-infra-jenkins/700/600",
    Icon: Server,
    wide: false,
  },
  {
    id: "conseil",
    title: "Conseil & Architecture IT",
    desc: "Cadrage, conception et pilotage technique de vos projets numériques les plus exigeants.",
    img: "https://picsum.photos/seed/koncept-conseil-architecture-it/700/600",
    Icon: ShieldCheck,
    wide: false,
  },
]

const TECH = [
  { name: "Java", src: "https://koncept-is.fr/wp-content/uploads/2025/07/java.png" },
  { name: "Spring Boot", src: "https://koncept-is.fr/wp-content/uploads/2025/07/spring-boot.png" },
  { name: "Microsoft .NET", src: "https://koncept-is.fr/wp-content/uploads/2025/07/ms-dotnet.png" },
  { name: "Angular", src: "https://koncept-is.fr/wp-content/uploads/2025/07/angular.png" },
  { name: "Jenkins", src: "https://koncept-is.fr/wp-content/uploads/2025/07/jenkins.png" },
  { name: "MySQL", src: "https://koncept-is.fr/wp-content/uploads/2025/07/mysql.png" },
]

// ---- Reveal hook ----
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ---- Shared animation variants ----
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function PageClient() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-ink)", fontFamily: "var(--font-body, Inter, sans-serif)" }}>

      {/* ---- NAV ---- */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(13,13,13,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--color-border)",
        height: 68,
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#accueil" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img
              src="https://koncept-is.fr/wp-content/uploads/2025/07/logo-koncept-web.png"
              alt="Koncept"
              style={{ height: 32, width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none" }} className="hide-mobile">
            {[["#services", "Services"], ["#appropos", "À propos"], ["#secteurs", "Secteurs"]].map(([href, label]) => (
              <a key={href} href={href} style={{ color: "var(--color-ink-2)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
              >{label}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hide-mobile">
            <a href={PHONE_HREF} style={{ color: "var(--color-ink-2)", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
            >
              <Phone size={14} />
              {PHONE}
            </a>
            <a href="#contact"
              style={{ background: "var(--color-accent)", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "background 0.2s, transform 0.1s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#E53535" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-accent)" }}
              onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = "scale(0.98)" }}
              onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
            >
              Nous contacter
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="show-mobile" onClick={() => setMenuOpen(v => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-ink)", padding: 8 }}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)", padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
            {[["#services", "Services"], ["#appropos", "À propos"], ["#secteurs", "Secteurs"], ["#contact", "Contact"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                style={{ color: "var(--color-ink)", textDecoration: "none", fontSize: 16, fontWeight: 500 }}
              >{label}</a>
            ))}
            <a href={PHONE_HREF} style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* ---- HERO ---- */}
      <section id="accueil" style={{ minHeight: "100dvh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 40 }}>
        {/* Subtle red glow */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,32,32,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{ color: "var(--color-accent)", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                ESN toulousaine
              </p>
            </motion.div>

            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(44px, 5.5vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 28px" }}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              On transforme<br />
              <span style={{ color: "var(--color-accent)" }}>votre IT.</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: "var(--color-ink-2)", maxWidth: "52ch", margin: "0 0 40px" }}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              50 experts Java, .NET et DevOps basés à Toulouse, engagés dans votre transformation digitale depuis 2017.
            </motion.p>

            <motion.div
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#contact"
                style={{ background: "var(--color-accent)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s, transform 0.1s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#E53535" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-accent)" }}
                onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = "scale(0.98)" }}
                onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)" }}
              >
                Nous contacter <ArrowRight size={16} />
              </a>
              <a href="#services"
                style={{ background: "transparent", color: "var(--color-ink)", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: "none", border: "1px solid var(--color-border-2)", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.35)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-2)" }}
              >
                Nos services
              </a>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-img"
          >
            <img
              src="https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-solutions-IT-aeronautique.png"
              alt="Koncept - solutions IT pour l'aéronautique et l'industrie toulousaine"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Red corner accent */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(212,32,32,0.18) 0%, transparent 50%)", pointerEvents: "none" }} />
          </motion.div>
        </div>
      </section>

      {/* ---- STATS STRIP ---- */}
      <StatsStrip reduce={reduce ?? false} />

      {/* ---- SERVICES BENTO ---- */}
      <section id="services" style={{ padding: "100px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Ce qu'on fait,<br />
              <span style={{ color: "var(--color-accent)" }}>vraiment bien.</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "50ch", lineHeight: 1.6, marginBottom: 52 }}>
              Trois domaines d'expertise, une seule promesse : des équipes qui s'impliquent autant que vous dans vos projets.
            </p>
          </RevealSection>

          {/* Bento: 1 wide + 2 square */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }} className="services-bento">
            {SERVICES.map((svc, i) => {
              const Icon = svc.Icon
              const isWide = svc.wide
              return (
                <motion.div
                  key={svc.id}
                  style={{
                    gridColumn: isWide ? "span 2" : "span 1",
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    minHeight: isWide ? 420 : 340,
                    background: "var(--color-bg-3)",
                    border: "1px solid var(--color-border)",
                    cursor: "default",
                  }}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.015 }}
                >
                  {/* Background image */}
                  <img
                    src={svc.img}
                    alt={svc.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.97) 40%, rgba(13,13,13,0.4) 100%)" }} />

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 1, padding: 32, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 10, background: "rgba(212,32,32,0.18)", border: "1px solid rgba(212,32,32,0.3)", marginBottom: 20 }}>
                      <Icon size={20} style={{ color: "var(--color-accent)" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: isWide ? 28 : 22, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.02em" }}>{svc.title}</h3>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.6, maxWidth: "44ch" }}>{svc.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---- SECTORS MARQUEE ---- */}
      <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "28px 0", overflow: "hidden", background: "var(--color-bg-2)" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
          {SECTORS.map((sector, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28, paddingRight: 56, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-ink-2)" }}>
              <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
              {sector}
            </span>
          ))}
        </div>
      </div>

      {/* ---- TECH STACK ---- */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <p style={{ color: "var(--color-ink-2)", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 36, textAlign: "center" }}>
              Technologies maitrisees
            </p>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, alignItems: "center" }} className="tech-grid">
            {TECH.map(({ name, src }, i) => (
              <motion.div
                key={name}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 16px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", transition: "border-color 0.2s" }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: "rgba(212,32,32,0.4)", scale: 1.03 }}
              >
                <img src={src} alt={name} style={{ height: 40, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1) opacity(0.75)" }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)", textAlign: "center" }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- ABOUT ---- */}
      <section id="appropos" style={{ padding: "100px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
          {/* Image */}
          <motion.div
            style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}
            initial={reduce ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="about-img"
          >
            <img
              src="https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-equipe.png"
              alt="L'equipe Koncept a Toulouse"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 60%, rgba(212,32,32,0.15) 100%)" }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Pas une grande ESN anonyme.<br />
              <span style={{ color: "var(--color-accent)" }}>Une vraie equipe.</span>
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
              Depuis 2017, Koncept accompagne les entreprises toulousaines dans leurs projets de transformation digitale. Avec 50 collaborateurs specialises Java, .NET et DevOps, nous intervenons dans 7 secteurs d'activite - de la banque a l'aeronautique en passant par les telecoms.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
              Notre ambition : integrer des technologies pertinentes pour donner vie aux projets de nos clients, avec engagement, methode et passion pour la technique.
            </p>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  style={{ paddingTop: 20, borderTop: "1px solid var(--color-border)" }}
                >
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-accent)", lineHeight: 1 }}>{value}</p>
                  <p style={{ fontSize: 13, color: "var(--color-ink-2)", marginTop: 6 }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- SECTEURS ---- */}
      <section id="secteurs" style={{ padding: "100px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              7 secteurs, une meme exigence.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "50ch", lineHeight: 1.6, marginBottom: 52 }}>
              Nos equipes ont developpe une expertise reconnue dans des environnements metier exigeants et reglements.
            </p>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="sectors-grid">
            {SECTORS_RAW.map((sector, i) => (
              <motion.div
                key={sector}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: "rgba(212,32,32,0.4)" }}
                style={{ padding: "24px 20px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", transition: "border-color 0.2s" }}
              >
                <div style={{ width: 8, height: 8, borderRadius: 2, background: "var(--color-accent)", marginBottom: 16 }} />
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 600 }}>{sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- JOIN US CTA ---- */}
      <section style={{ padding: "100px 24px", background: "var(--color-accent)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.05, marginBottom: 20 }}>
              Rejoignez les 50.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.65, maxWidth: "44ch", margin: "0 auto 36px" }}>
              Developpeurs Java, .NET, Angular ou profils DevOps : si vous aimez les projets qui ont du sens, on a peut-etre une place pour vous a Toulouse.
            </p>
            <a href={`mailto:${EMAIL}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "var(--color-accent)", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "transform 0.15s, box-shadow 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.25)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none" }}
            >
              <Users size={16} /> Voir les postes ouverts
            </a>
          </motion.div>
        </div>
      </section>

      {/* ---- CONTACT ---- */}
      <section id="contact" style={{ padding: "100px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <RevealSection>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Parlons de votre projet.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, maxWidth: "44ch", lineHeight: 1.6, marginBottom: 52 }}>
              Une question, un projet ou une envie de nous rencontrer ? Contactez l'equipe Koncept a Toulouse.
            </p>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="contact-grid">
            <ContactCard
              href={PHONE_HREF}
              icon={<Phone size={22} />}
              label="Telephone"
              value={PHONE}
              accent
              reduce={reduce ?? false}
              delay={0}
            />
            <ContactCard
              href={`mailto:${EMAIL}`}
              icon={<Mail size={22} />}
              label="Email"
              value={EMAIL}
              reduce={reduce ?? false}
              delay={0.08}
            />
            <ContactCard
              href="#"
              icon={<MapPin size={22} />}
              label="Localisation"
              value="Toulouse, Haute-Garonne"
              reduce={reduce ?? false}
              delay={0.16}
            />
          </div>
        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer style={{ borderTop: "1px solid var(--color-border)", padding: "40px 24px", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <img
            src="https://koncept-is.fr/wp-content/uploads/2025/07/logo-koncept-web.png"
            alt="Koncept"
            style={{ height: 28, width: "auto", objectFit: "contain" }}
          />
          <p style={{ color: "var(--color-ink-2)", fontSize: 13, textAlign: "center" }}>
            &copy; {new Date().getFullYear()} Koncept - ESN Toulousaine. Site par{" "}
            <a href="https://devantia.vercel.app" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Devantia</a>.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://www.linkedin.com/company/koncept-is" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--color-ink-2)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-2)")}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <a
        href={PHONE_HREF}
        className="show-mobile"
        style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px 24px", background: "var(--color-accent)", color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600 }}
      >
        <Phone size={16} /> {PHONE}
      </a>
      <div className="show-mobile" style={{ height: 56 }} />

      <style>{`
        .hide-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 40px !important; }
          .hero-img { display: block !important; }
          .services-bento { grid-template-columns: 1fr !important; }
          .services-bento > div { grid-column: span 1 !important; min-height: 320px !important; }
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-img { order: -1; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .sectors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  )
}

// ---- Sub-components ----

function StatsStrip({ reduce }: { reduce: boolean }) {
  return (
    <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-strip">
        {STATS.map(({ value, label }, i) => (
          <motion.div
            key={label}
            style={{ padding: "36px 24px", borderRight: i < 3 ? "1px solid var(--color-border)" : "none", display: "flex", flexDirection: "column", gap: 6 }}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-accent)" }}>
              {value}
            </span>
            <span style={{ fontSize: 13, color: "var(--color-ink-2)", fontWeight: 500 }}>{label}</span>
          </motion.div>
        ))}
        <style>{`
          @media (max-width: 767px) {
            .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-strip > div { border-right: none !important; border-bottom: 1px solid var(--color-border) !important; }
          }
        `}</style>
      </div>
    </div>
  )
}

function RevealSection({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
      {children}
    </div>
  )
}

function ContactCard({
  href, icon, label, value, accent = false, reduce, delay
}: { href: string; icon: React.ReactNode; label: string; value: string; accent?: boolean; reduce: boolean; delay: number }) {
  return (
    <motion.a
      href={href}
      style={{
        display: "flex", flexDirection: "column", gap: 16, padding: "28px 24px", borderRadius: 16,
        border: accent ? "none" : "1px solid var(--color-border)",
        background: accent ? "var(--color-accent)" : "var(--color-bg-3)",
        textDecoration: "none", transition: "border-color 0.2s, transform 0.15s",
        color: "var(--color-ink)",
      }}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, borderColor: accent ? undefined : "rgba(240,237,232,0.25)" }}
    >
      <span style={{ color: accent ? "rgba(255,255,255,0.9)" : "var(--color-accent)" }}>{icon}</span>
      <div>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: accent ? "rgba(255,255,255,0.65)" : "var(--color-ink-2)", marginBottom: 6 }}>{label}</p>
        <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 600, color: accent ? "#fff" : "var(--color-ink)", letterSpacing: "-0.01em" }}>{value}</p>
      </div>
    </motion.a>
  )
}
