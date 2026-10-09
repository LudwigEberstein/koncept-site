'use client'

import { motion } from "motion/react"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Eyebrow from "@/components/ui/Eyebrow"
import Container from "@/components/ui/Container"

// ─── Data ───────────────────────────────────────────────────────────────────

const WHAT_WE_COVER = [
  { icon: "🎓", label: "Certifications", desc: "Cloud (AWS, Azure, GCP), Kubernetes, Java, Scrum Master, Product Owner, gestion de projet, analyse métier… Koncept prend en charge l'intégralité du coût." },
  { icon: "🎤", label: "Conférences", desc: "Conférences et meetups toulousains (tech, agile, produit), pour rester connecté à la communauté locale. Les frais d'inscription sont pris en charge." },
  { icon: "📚", label: "Livres", desc: "Une wish-list de livres = budget formation. Clean Code, DDD, mais aussi Scrum Guide, Lean Startup, Team Topologies — on commande." },
  { icon: "🖥", label: "Plateformes en ligne", desc: "Udemy, Pluralsight, et les licences d'outils d'IA. Accès financé par Koncept pour monter en compétence en ligne." },
  { icon: "⚡", label: "Kata club interne", desc: "Sessions hebdo volontaires, ouvertes à tous les métiers : code, agilité, cadrage. Présentées à tour de rôle." },
  { icon: "🔬", label: "Veille", desc: "30 min/semaine de veille libre pendant les heures de travail. Ce qu'on découvre est partagé en équipe." },
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
    title: "Fonctionnel & Pilotage",
    emoji: "◎",
    color: "#f59e0b",
    desc: "Tu viens du fonctionnel, ou tu veux animer une équipe, cadrer un produit, piloter des projets. On t'accompagne vers Scrum Master, Product Owner, puis chef de projet.",
    steps: [
      { year: "0–2 ans", label: "Business Analyst — analyse du besoin, cadrage, recette" },
      { year: "3–4 ans", label: "Référent fonctionnel — premier rôle d'animation d'équipe" },
      { year: "4–5 ans", label: "Scrum Master / Product Owner — animation, backlog, cadrage" },
      { year: "5+ ans", label: "Chef de projet — pilotage des équipes et des clients" },
    ],
  },
]

const CERTIFS = [
  { name: "AWS Solutions Architect", level: "Associate → Professional", color: "#f59e0b" },
  { name: "Azure Fundamentals → Expert", level: "AZ-900 → AZ-305", color: "#3b82f6" },
  { name: "Google Cloud Professional", level: "Associate → Professional", color: "#34a853" },
  { name: "Kubernetes (CKA/CKAD)", level: "Linux Foundation", color: "#06b6d4" },
  { name: "Oracle Java Certified", level: "OCA → OCP", color: "#f97316" },
  { name: "GitLab CI/CD", level: "Associate → Professional", color: "#8b5cf6" },
  { name: "Scrum Master / SAFe", level: "PSM I/II · SAFe Agilist", color: "#D42020" },
  { name: "ISTQB", level: "Foundation → Advanced", color: "#64748b" },
  { name: "Product Owner", level: "PSPO I/II · SAFe POPM", color: "#ec4899" },
  { name: "Gestion de projet", level: "PMP · PRINCE2", color: "#14b8a6" },
  { name: "Analyse métier", level: "IIBA : ECBA → CBAP", color: "#a855f7" },
  { name: "ITIL 4", level: "Foundation", color: "#eab308" },
]

const KATA_SESSIONS = [
  { label: "Algo & Data Structures", desc: "LeetCode, Advent of Code. Pas pour l'entretien — pour le plaisir et la rigueur." },
  { label: "Design Patterns", desc: "GoF, patterns d'entreprise, anti-patterns. Avec des exemples tirés des vrais projets Koncept." },
  { label: "Architecture & DDD", desc: "Event storming, bounded contexts, CQRS/ES. Le niveau au-dessus du code propre." },
  { label: "DevSecOps", desc: "Threat modeling, SAST/DAST, secrets management. La sécurité n'est pas une option." },
  { label: "Agilité & facilitation", desc: "Rétrospectives, ateliers, user story mapping. Pour mieux travailler ensemble, pas seulement mieux coder." },
  { label: "Cadrage & produit", desc: "Product discovery, priorisation, écriture de user stories. Le lien entre le besoin et le code." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Formation() {

  const fadeUp = useFadeUp()

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection side="career" next="bg2" paddingTop={140} paddingBottom={80}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              Carrières · Formation et évolution
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
              Un budget formation dédié à chaque collaborateur, disponible dès le premier jour. Sans condition d&apos;ancienneté. Sans justification excessive. Parce qu&apos;un Koncepteur qui monte en compétences, c&apos;est tout le monde qui gagne.
            </motion.p>
          </div>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { value: "Dédié", label: "budget formation", sub: "Dès le 1er jour" },
              { value: "100 %", label: "certifs financées", sub: "Prises en charge par Koncept" },
              { value: "30 min", label: "veille/semaine", sub: "Temps libre dédié" },
              { value: "Hebdo", label: "kata club", sub: "Sessions internes ouvertes à tous" },
            ].map(s => (
              <div className="glass-card" key={s.label} style={{ padding: "28px 22px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 800, color: "var(--color-career)", letterSpacing: "-0.03em" }}>{s.value}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--color-ink)", marginTop: 5 }}>{s.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 11, marginTop: 3 }}>{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </HeroSection>

      {/* ── Prise en charge ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Formation</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Prise en charge,<br />ta formation sera.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="covers-grid">
            {WHAT_WE_COVER.map((item, i) => (
              <motion.div className="glass-card" key={item.label}
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
        </Container>
      </section>

      {/* ── Certifications ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Certifications</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Achievement unlocked.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "52ch", lineHeight: 1.7, marginBottom: 48 }}>
              Sans condition de rester après la certif. On part du principe qu&apos;un Koncepteur certifié qui reste est plus utile qu&apos;un non-certifié qui part.
            </p>
          </motion.div>
          {/* Einstein : à droite de l'en-tête, il « sort » de derrière la grille de certifications */}
          <div className="einstein-figure" aria-hidden="true">
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/einstein-static.png" />
              { }
              <img src="/culture/einstein.gif" alt="" loading="lazy" />
            </picture>
          </div>
          </div>
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
        </Container>
      </section>

      {/* ── Kata Club ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="kata-grid">
          <motion.div {...fadeUp()} style={{ position: "relative" }}>
            <Eyebrow tone="career">Kata Club</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Une session<br />chaque semaine.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
              Tous les jeudis, 1h de session volontaire, ouverte à tous les métiers. Pas de slides, pas de cours théorique — du code, un atelier, un écran partagé, et de la discussion franche entre pairs. Présentées à tour de rôle.
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
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Évolution de carrière</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Choose your destiny !
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
        </Container>
      </section>

      {/* ── CTA ── */}
      <CtaBand side="career" prev="bg" title="Envie de progresser avec nous ?" text="On construit ta trajectoire ensemble dès l'entretien."
        primary={{ label: "Voir les offres", href: "/carrieres/offres" }}
      />

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
