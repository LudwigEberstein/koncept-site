'use client'

import { motion } from "motion/react"
import { Lock, LockOpen } from "lucide-react"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Eyebrow from "@/components/ui/Eyebrow"
import Container from "@/components/ui/Container"

// ─── Data ───────────────────────────────────────────────────────────────────

const WHAT_WE_COVER = [
  { icon: "🎓", label: "Certifications", desc: "Cloud, Java, Angular, Scrum, SAFe, management, IA… Celles dont ta mission a besoin sont financées à 100 %. Pour ton évolution, on construit le projet ensemble." },
  { icon: "🎤", label: "Conférences", desc: "Conférences et meetups toulousains (tech, agile, produit), pour rester connecté à la communauté locale. Les frais d'inscription sont pris en charge." },
  { icon: "📚", label: "Livres", desc: "Une wish-list de livres = budget formation. Clean Code, DDD, mais aussi Scrum Guide, Lean Startup, Team Topologies — on commande." },
  { icon: "🖥", label: "Plateformes en ligne", desc: "Udemy, outils d'IA et formations dédiées : Koncept finance les ressources pour développer tes compétences. Une autre plateforme t'intéresse ? On en discute !" },
  { icon: "🔬", label: "Veille", desc: "30 min/semaine de veille libre pendant les heures de travail. Ce qu'on découvre est partagé en équipe." },
]

const PATHS: { id: string; title: string; emoji: string; color: string; desc: string; steps: { year: string; label: string }[] }[] = [
  {
    id: "expert",
    title: "Expert technique",
    emoji: "⚡",
    color: "#2B50F0",
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
    color: "#ff5a5a", // = --color-career, en hexadécimal : on y concatène une opacité (#rrggbbaa) pour le cadre et le fond
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

/** Familles de certifications : une couleur chacune, qui remplace les intertitres (les tuiles sont rangées par famille). */
const CERT_FAMILIES = {
  dev: { label: "Développement & Architecture", color: "#ff5a5a" },
  cloud: { label: "Cloud & DevOps", color: "#7C97FF" },
  agile: { label: "Agilité, Projet & Qualité", color: "#a78bfa" },
  soft: { label: "Management & Compétences transversales", color: "#22d3ee" },
} as const

type CertFamily = keyof typeof CERT_FAMILIES
type Cert = { name: string; level: string; family: CertFamily }

const FAMILY_ORDER = Object.keys(CERT_FAMILIES) as CertFamily[]
/** Tri par famille (ordre de CERT_FAMILIES), en gardant l'ordre de saisie à l'intérieur d'une famille. */
const byFamily = (list: Cert[]) => [...list].sort((a, b) => FAMILY_ORDER.indexOf(a.family) - FAMILY_ORDER.indexOf(b.family))

/** Certifications déjà financées par Koncept pour des collaborateurs (liste validée par Valentine, 2026-11-13). */
const CERTS_UNLOCKED: Cert[] = byFamily([
  { name: "Java", level: "Oracle OCP", family: "dev" },
  { name: "Angular", level: "Angular Training · Junior · Mid-Level", family: "dev" },
  { name: "TOGAF", level: "Practitioner", family: "dev" },
  { name: "AWS Cloud Practitioner", level: "Foundational", family: "cloud" },
  { name: "AWS Solutions Architect", level: "Associate", family: "cloud" },
  { name: "AWS Developer", level: "Associate", family: "cloud" },
  { name: "Scrum Master", level: "PSM I · PSM II", family: "agile" },
  { name: "Product Owner", level: "PSPO I", family: "agile" },
  { name: "SAFe", level: "Agilist · Practitioner", family: "agile" },
  { name: "AgilePM", level: "Foundation", family: "agile" },
  { name: "ISTQB", level: "Foundation", family: "agile" },
  { name: "Management d'équipe", level: "Manitude", family: "soft" },
  { name: "IA & efficacité administrative", level: "Classe Digitale", family: "soft" },
])

/** Exemples de certifications finançables (liste volontairement non exhaustive, validée par Valentine). */
const CERTS_LOCKED: Cert[] = byFamily([
  { name: "Angular", level: "Angular Training · Senior", family: "dev" },
  { name: "AWS", level: "Niveau Professional", family: "cloud" },
  { name: "Azure", level: "AZ-900 → AZ-305", family: "cloud" },
  { name: "Google Cloud", level: "Associate → Professional", family: "cloud" },
  { name: "Kubernetes", level: "CKA · CKAD", family: "cloud" },
  { name: "Terraform", level: "Associate", family: "cloud" },
  { name: "GitLab CI/CD", level: "Associate", family: "cloud" },
  { name: "Product Owner", level: "PSPO II", family: "agile" },
  { name: "SAFe", level: "Scrum Master · POPM", family: "agile" },
  { name: "AgilePM", level: "Practitioner", family: "agile" },
  { name: "ISTQB", level: "Advanced", family: "agile" },
  { name: "Projet & services IT", level: "PMP · PRINCE2 · ITIL 4", family: "agile" },
])

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
              style={{ fontSize: "clamp(14px, 3.8vw, 18px)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
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
              { value: "100 %", label: "certifs mission financées", sub: "Prises en charge par Koncept" },
              { value: "30 min", label: "veille/semaine", sub: "Temps libre dédié" },
              { value: "Confs", label: "et meetups", sub: "Inscriptions prises en charge" },
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
          {/* Cartes en flex-wrap (.cover-card) : 3 par ligne sur desktop, 2 sur tablette, 1 sur mobile ; la dernière ligne s'étire, quel que soit le nombre d'éléments */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {WHAT_WE_COVER.map((item, i) => (
              <motion.div className="glass-card cover-card" key={item.label}
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

      {/* ── Certifications : « Débloqués » (déjà financées) puis « À débloquer » (exemples finançables) ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Certifications</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Achievement unlocked.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "52ch", lineHeight: 1.7, marginBottom: 48 }}>
              Tu débloques de nouvelles compétences, Koncept finance. L&apos;objectif&nbsp;? Te faire progresser, pas te retenir. On préfère que tu restes par envie, pas par obligation.
            </p>
          </motion.div>
          {/* Einstein : à droite de l'en-tête, il « sort » de derrière les certifications */}
          <div className="einstein-figure" aria-hidden="true">
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/einstein-static.png" />
              { }
              <img src="/culture/einstein.gif" alt="" loading="lazy" />
            </picture>
          </div>
          </div>

          {[
            { id: "debloques", title: "Débloqués", sub: "Déjà débloquées par nos Koncepteurs, financées par Koncept.", certs: CERTS_UNLOCKED, locked: false },
            { id: "a-debloquer", title: "À débloquer", sub: "Pas encore débloquées chez nous. Si ta mission nécessite une certification, on la finance. Pour ton évolution de carrière, on construit le projet ensemble.", certs: CERTS_LOCKED, locked: true },
          ].map(group => (
            <div key={group.id} style={{ position: "relative", zIndex: 1, marginBottom: 44 }}>
              <motion.div {...fadeUp()} style={{ marginBottom: 18 }}>
                <h3 style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 6 }}>
                  {group.locked ? <Lock size={18} aria-hidden="true" style={{ color: "var(--color-ink-2)" }} /> : <LockOpen size={18} aria-hidden="true" style={{ color: "var(--color-career)" }} />}
                  {group.title}
                  <span className="cert-count">{group.certs.length}</span>
                </h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65, maxWidth: "70ch" }}>{group.sub}</p>
              </motion.div>
              <ul className={`cert-wall${group.locked ? " locked" : ""}`}>
                {group.certs.map((c, i) => (
                  <motion.li key={`${c.name}-${c.level}`} className="cert-tile" title={CERT_FAMILIES[c.family].label}
                    style={{ "--c": CERT_FAMILIES[c.family].color } as React.CSSProperties}
                    {...fadeUp(i * 0.04)}
                  >
                    <span className="cert-bar" aria-hidden="true" />
                    <span className="cert-text">
                      <span className="cert-name">{c.name}</span>
                      <span className="cert-level">{c.level}</span>
                    </span>
                    {group.locked && (
                      <span className="cert-lock" aria-hidden="true">
                        <Lock size={15} aria-hidden="true" className="closed" />
                        <LockOpen size={15} aria-hidden="true" className="open" />
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <motion.p {...fadeUp()} style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 700, marginTop: -8 }}>
            Une certif qui n&apos;est pas dans la liste&nbsp;? <span style={{ color: "var(--color-career)" }}>Parles-en, on regarde ensemble.</span>
          </motion.p>
        </Container>
      </section>

      {/* ── Trajectoires ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
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
      <CtaBand side="career" prev="bg2" title="Envie de progresser avec nous ?" text="On construit ta trajectoire ensemble dès l'entretien."
        primary={{ label: "Voir les offres", href: "/carrieres/offres" }}
      />

      <style>{`
        .cover-card{flex:1 1 calc((100% - 33px) / 3)}
        /* Mur de badges : la largeur suit le texte et les tuiles s'étirent pour que chaque ligne soit pleine, quel que soit le nombre de certifs */
        .cert-wall{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:12px}
        .cert-tile{flex:1 1 auto;display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:12px;border:1px solid color-mix(in srgb, var(--c) 30%, transparent);background:color-mix(in srgb, var(--c) 6%, transparent);transition:border-color .25s, background .25s}
        .cert-bar{width:4px;align-self:stretch;min-height:28px;border-radius:2px;background:var(--c);flex-shrink:0;transition:background .25s}
        .cert-text{display:flex;flex-direction:column;gap:4px;flex:1}
        .cert-name{font-family:var(--font-display, Outfit, sans-serif);font-size:14px;font-weight:700;color:var(--color-ink);white-space:nowrap}
        .cert-level{font-size:11px;font-weight:500;color:var(--color-ink-2);white-space:nowrap}
        .cert-count{font:700 11px/1 ui-monospace, Consolas, monospace;letter-spacing:.06em;color:var(--color-ink-2);border:1px solid var(--color-border-2);border-radius:6px;padding:4px 7px}
        /* « À débloquer » : grisé et cadenas fermé ; au survol, la tuile reprend sa couleur et le cadenas s'ouvre (accessible, pas interdit) */
        .cert-wall.locked .cert-tile{border-color:var(--color-border);background:rgba(255,255,255,.02)}
        .cert-wall.locked .cert-bar{background:var(--color-border-2)}
        .cert-wall.locked .cert-name{color:var(--color-ink-2)}
        .cert-lock{position:relative;width:15px;height:15px;flex-shrink:0;color:var(--color-ink-2)}
        .cert-lock svg{position:absolute;inset:0;transition:opacity .2s, transform .2s}
        .cert-lock .open{opacity:0;transform:translateY(2px)}
        .cert-wall.locked .cert-tile:hover{border-color:color-mix(in srgb, var(--c) 45%, transparent);background:color-mix(in srgb, var(--c) 8%, transparent)}
        .cert-wall.locked .cert-tile:hover .cert-bar{background:var(--c)}
        .cert-wall.locked .cert-tile:hover .cert-name{color:var(--color-ink)}
        .cert-wall.locked .cert-tile:hover .cert-lock{color:var(--c)}
        .cert-wall.locked .cert-tile:hover .closed{opacity:0;transform:translateY(-2px)}
        .cert-wall.locked .cert-tile:hover .open{opacity:1;transform:none}
        @media(prefers-reduced-motion:reduce){.cert-tile,.cert-bar,.cert-lock svg{transition:none}}
        @media(max-width:1023px){
          .cover-card{flex-basis:calc((100% - 17px) / 2)}
          .paths-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:767px){
          .hero-grid{grid-template-columns:1fr !important;gap:48px !important}
          .cover-card{flex-basis:100%}
        }
        @media(max-width:479px){
          .cert-name,.cert-level{white-space:normal}
        }
      `}</style>
    </>
  )
}
