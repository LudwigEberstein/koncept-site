'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

// ─── Data ───────────────────────────────────────────────────────────────────

const WHAT_WE_COVER = [
  { icon: "🎓", label: "Certifications", desc: "AWS, Azure, GCP, CKA (Kubernetes), Oracle Java, GitLab CI, Scrum Master, ISTQB. Koncept prend en charge l'intégralité du coût." },
  { icon: "🎤", label: "Conférences", desc: "Devoxx Paris, MiXiT Lyon, Paris Web, KubeCon, Breizhcamp. Budget déplacement + hébergement inclus." },
  { icon: "📚", label: "Livres techniques", desc: "Amazon wish-list technique = budget formation. Clean Code, DDD, Designing Data-Intensive Applications — on commande." },
  { icon: "🖥", label: "Plateformes en ligne", desc: "Pluralsight, Udemy, O'Reilly Learning. Accès illimité financé par Koncept pour les formations en ligne." },
  { icon: "⚡", label: "Kata club interne", desc: "Sessions hebdo volontaires : algos, design patterns, archi logicielle. Présentés par les seniors à tour de rôle." },
  { icon: "🔬", label: "Veille technologique", desc: "30 min/semaine de veille libre pendant les heures de travail. Tech radar Thoughtworks discuté en équipe chaque trimestre." },
]

const PATHS: { id: string; title: string; emoji: string; color: string; desc: string; steps: { year: string; label: string }[] }[] = [
  {
    id: "expert",
    title: "Expert technique",
    emoji: "⚡",
    color: "#3b82f6",
    desc: "Tu veux rester dans le code, aller de plus en plus loin dans la maîtrise technique. On fait de toi une référence sur ta stack.",
    steps: [
      { year: "0–1 an", label: "Développeur confirmé — prise en main des projets" },
      { year: "2–3 ans", label: "Senior dev — référent technique sur les sujets complexes" },
      { year: "4–5 ans", label: "Tech lead — architecture, choix technologiques, mentorat" },
      { year: "6+ ans", label: "Expert / Principal — influence sur la stratégie tech Koncept" },
    ],
  },
  {
    id: "lead",
    title: "Lead & Architecture",
    emoji: "◈",
    color: "var(--color-career)",
    desc: "Tu veux concevoir des systèmes entiers, couvrir plusieurs projets, être l'interlocuteur technique des DSI. La voie architecte.",
    steps: [
      { year: "0–2 ans", label: "Senior dev — maîtrise d'une ou plusieurs stacks" },
      { year: "3–4 ans", label: "Lead dev — référent sur un projet ou périmètre client" },
      { year: "4–6 ans", label: "Architecte solution — conception, audit, advisory" },
      { year: "6+ ans", label: "Architecte senior / CTO interne — vision système globale" },
    ],
  },
  {
    id: "management",
    title: "Management & Encadrement",
    emoji: "◎",
    color: "#f59e0b",
    desc: "Tu veux encadrer, faire grandir les autres, gérer des équipes. On t'accompagne vers un rôle de manager technique ou de directeur de projet.",
    steps: [
      { year: "0–2 ans", label: "Dev senior — légitimité technique indispensable d'abord" },
      { year: "3–4 ans", label: "Lead / référent — premier rôle d'encadrement informel" },
      { year: "4–5 ans", label: "Manager de proximité — suivi, onboarding, évaluations" },
      { year: "5+ ans", label: "Directeur technique — équipes, clients, stratégie" },
    ],
  },
]

const CERTIFS = [
  { name: "AWS Solutions Architect", level: "Associate → Professional", color: "#f59e0b" },
  { name: "Azure Fundamentals → Expert", level: "AZ-900 → AZ-305", color: "#3b82f6" },
  { name: "Google Cloud Professional", level: "Associate → Professional", color: "var(--color-career-dark)" },
  { name: "Kubernetes (CKA/CKAD)", level: "Linux Foundation", color: "#06b6d4" },
  { name: "Oracle Java Certified", level: "OCA → OCP", color: "#f97316" },
  { name: "GitLab CI/CD", level: "Associate → Professional", color: "#8b5cf6" },
  { name: "Scrum Master / SAFe", level: "PSM I/II · SAFe Agilist", color: "#D42020" },
  { name: "ISTQB", level: "Foundation → Advanced", color: "#64748b" },
]

const KATA_SESSIONS = [
  { label: "Algo & Data Structures", desc: "LeetCode, Advent of Code. Pas pour l'entretien — pour le plaisir et la rigueur." },
  { label: "Design Patterns", desc: "GoF, patterns d'entreprise, anti-patterns. Avec des exemples tirés des vrais projets Koncept." },
  { label: "Architecture & DDD", desc: "Event storming, bounded contexts, CQRS/ES. Le niveau au-dessus du code propre." },
  { label: "DevSecOps", desc: "Threat modeling, SAST/DAST, secrets management. La sécurité n'est pas une option." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Formation() {
  const reduce = useReducedMotion()

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
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              Carrières · Formation & Évolution
            </motion.p>
            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 5.5vw, 76px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              On investit dans les humains.<br /><span style={{ color: "var(--color-career)" }}>Pas dans les CV.</span>
            </motion.h1>
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.75, maxWidth: "48ch" }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              1 500 €/an de budget formation par collaborateur, disponible dès le premier jour. Sans condition d&apos;ancienneté. Sans justification excessive. Parce qu&apos;un développeur qui monte en compétences, c&apos;est tout le monde qui gagne.
            </motion.p>
          </div>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { value: "1 500 €", label: "budget/an par dev", sub: "Dès le 1er jour" },
              { value: "100 %", label: "certifs financées", sub: "Sans plafond par certif" },
              { value: "30 min", label: "veille/semaine", sub: "Temps libre dédié" },
              { value: "Hebdo", label: "kata club", sub: "Sessions techniques internes" },
            ].map(s => (
              <div key={s.label} style={{ padding: "28px 22px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 800, color: "var(--color-career)", letterSpacing: "-0.03em" }}>{s.value}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--color-ink)", marginTop: 5 }}>{s.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 11, marginTop: 3 }}>{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Ce qu'on prend en charge ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Formation</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Ce qu&apos;on prend en charge.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="covers-grid">
            {WHAT_WE_COVER.map((item, i) => (
              <motion.div key={item.label}
                style={{ display: "flex", gap: 18, padding: "28px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", alignItems: "flex-start" }}
                {...fadeUp(i * 0.08)}
              >
                <span style={{ fontSize: 26, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{item.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Certifications</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Koncept paie ces certifications.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "52ch", lineHeight: 1.7, marginBottom: 48 }}>
              Sans plafond par certification. Sans condition de rester après la certif. On part du principe qu&apos;un dev certifié qui reste est plus utile qu&apos;un dev non-certifié qui part.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="certifs-grid">
            {CERTIFS.map((c, i) => (
              <motion.div key={c.name}
                style={{ padding: "20px 20px", borderRadius: 12, border: `1px solid ${c.color}30`, background: `${c.color}08` }}
                {...fadeUp(i * 0.06)}
              >
                <div style={{ width: 4, height: 28, borderRadius: 2, background: c.color, marginBottom: 14 }} />
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 5 }}>{c.name}</p>
                <p style={{ fontSize: 11, color: "var(--color-ink-2)", fontWeight: 500 }}>{c.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kata Club ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="kata-grid">
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Kata Club</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Une session technique<br />chaque semaine.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
              Tous les jeudis, 1h de session technique volontaire. Pas de slides, pas de cours théorique — du code, un écran partagé, et de la discussion franche entre pairs. Présentées à tour de rôle par les seniors.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75 }}>
              Environ 60 % des Koncepteurs participent régulièrement. C&apos;est l&apos;endroit où les meilleures pratiques se transmettent vraiment.
            </p>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {KATA_SESSIONS.map((s, i) => (
              <motion.div key={s.label}
                style={{ display: "flex", gap: 16, padding: "20px 24px", borderRadius: 12, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", alignItems: "flex-start" }}
                {...fadeUp(i * 0.08)}
              >
                <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(var(--color-career),0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 12, fontWeight: 800, color: "var(--color-career)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trajectoires ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Évolution de carrière</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Trois trajectoires.<br />Aucune voie imposée.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.75, maxWidth: "58ch", marginBottom: 56 }}>
              Pas de promotion automatique au management. Pas de plafond sur la voie technique. On construit ensemble ta trajectoire selon ce qui te motive — pas selon un organigramme préétabli.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="paths-grid">
            {PATHS.map((path, i) => (
              <motion.div key={path.id}
                style={{ padding: "36px 32px", borderRadius: 16, border: `1px solid ${path.color}30`, background: `${path.color}06`, display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.1)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 24 }}>{path.emoji}</span>
                  <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 800, color: path.color }}>{path.title}</h3>
                </div>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>{path.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
                  {path.steps.map((step, j) => (
                    <div key={step.year} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: j < path.steps.length - 1 ? 16 : 0, position: "relative" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 16 }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: path.color, flexShrink: 0, marginTop: 3 }} />
                        {j < path.steps.length - 1 && <div style={{ width: 2, flexGrow: 1, background: `${path.color}30`, marginTop: 4, minHeight: 20 }} />}
                      </div>
                      <div>
                        <span style={{ fontSize: 10, fontWeight: 700, color: path.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>{step.year}</span>
                        <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55, marginTop: 2 }}>{step.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
              Envie de progresser avec nous ?
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15 }}>
              On construit ta trajectoire ensemble dès l&apos;entretien.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/carrieres/offres"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "15px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
            >
              Voir les offres <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .covers-grid{grid-template-columns:repeat(2,1fr) !important}
          .certifs-grid{grid-template-columns:repeat(3,1fr) !important}
          .paths-grid{grid-template-columns:1fr !important}
          .kata-grid{grid-template-columns:1fr !important;gap:48px !important}
        }
        @media(max-width:767px){
          .hero-grid{grid-template-columns:1fr !important;gap:48px !important}
          .covers-grid{grid-template-columns:1fr !important}
          .certifs-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:479px){
          .certifs-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
