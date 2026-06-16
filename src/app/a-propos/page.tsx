'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { IMAGES, SITE, VALUES, CAREER_EVENTS } from "@/lib/content"
import { makeFadeUp } from "@/lib/motion"

// ─── Local enriched data ────────────────────────────────────────────────────

const MILESTONES = [
  {
    year: "2014",
    label: "Fondation à Toulouse",
    desc: "Gérard et Guillaume créent Koncept IS avec une conviction : faire une ESN différente, centrée sur l'humain et l'expertise technique.",
  },
  {
    year: "2016",
    label: "Premiers grands comptes",
    desc: "Airbus, Thales, Société Générale. Les premiers clients stratégiques valident la promesse qualité.",
  },
  {
    year: "2018",
    label: "Cap des 30 collaborateurs",
    desc: "Croissance maîtrisée. On choisit de ne recruter que des profils confirmés — jamais au détriment de la qualité.",
  },
  {
    year: "2020",
    label: "Certification ISO 27001",
    desc: "Reconnaissance de notre engagement sécurité — une exigence de nos clients, et notre propre conviction depuis le premier jour.",
  },
  {
    year: "2022",
    label: "€3M de chiffre d'affaires",
    desc: "Un cap symbolique franchi sans levée de fonds, ni croissance externe. 100 % organique.",
  },
  {
    year: "2024",
    label: "10 ans d'existence",
    desc: "Cinquante collaborateurs, sept secteurs, et la même culture depuis le premier jour.",
  },
]

const KEY_STATS = [
  { value: "50+", label: "collaborateurs", sub: "en CDI à Toulouse" },
  { value: "€3.2M", label: "chiffre d'affaires", sub: "100 % croissance organique" },
  { value: "7", label: "secteurs couverts", sub: "aéronautique, banque, télécom…" },
  { value: "10 ans", label: "d'expérience", sub: "fondée en 2014" },
  { value: "ISO 27001", label: "certifié", sub: "depuis 2020" },
  { value: "98%", label: "satisfaction client", sub: "sur les projets au forfait" },
]

const DIRIGEANTS = [
  {
    name: "Gérard",
    role: "Président KONCEPT",
    img: "/team/gerard-front.png",
    imgBack: "/team/gerard-back.png",
    bio: "Co-fondateur de Koncept IS, Gérard a bâti l'ESN sur un principe simple : que chaque client soit suivi par quelqu'un qui comprend son métier en profondeur.",
    quote: "On ne veut pas être la plus grande ESN de Toulouse. On veut être la meilleure pour nos clients.",
  },
  {
    name: "Guillaume",
    role: "Directeur KONCEPT",
    img: "/team/guillaume-front.png",
    imgBack: "/team/guillaume-back.jpg",
    bio: "15 ans d'expérience en architecture logicielle. Guillaume supervise les choix techniques et s'assure que la qualité ne soit jamais sacrifiée à la vitesse.",
    quote: "Un projet bien cadré en amont, c'est 80 % des problèmes évités en production.",
  },
  {
    name: "Valentine",
    role: "Directrice des Ressources Humaines",
    img: "/team/valentine-front.jpg",
    imgBack: "/team/valentine-back.jpg",
    bio: "Valentine a construit la culture Koncept de l'intérieur depuis 2015. Son obsession : que chaque Koncepteur trouve sa place et s'y épanouisse vraiment.",
    quote: "On recrute des gens, pas des compétences. Les compétences, ça s'apprend. La personnalité, non.",
  },
  {
    name: "Aurélie",
    role: "Responsable Commerciale",
    img: "/team/aurelie-front.jpg",
    imgBack: "/team/aurelie-back.jpg",
    bio: "Aurélie est l'interlocutrice de confiance des DSI et directeurs de projet. Elle porte la promesse Koncept à chaque avant-vente.",
    quote: "Je ne signe pas un contrat si je ne suis pas convaincue qu'on peut le tenir.",
  },
]

const PORTRAITS = [
  {
    name: "Thomas",
    title: "Lead Développeur Java",
    xp: "8 ans chez Koncept",
    img: "https://picsum.photos/seed/thomas-lead-java-koncept/300/300",
    quote: "Ce qui m'a gardé ici, c'est qu'on me fait confiance sur les sujets techniques. Je ne suis pas une ressource — je suis un expert.",
    sector: "Aéronautique · Télécoms",
  },
  {
    name: "Sarah",
    title: "Architecte Solution",
    xp: "5 ans chez Koncept",
    img: "https://picsum.photos/seed/sarah-architecte-koncept/300/300",
    quote: "J'ai refusé des offres mieux payées pour rester ici. L'environnement et les projets n'ont pas de prix.",
    sector: "Banque · Services IT",
  },
  {
    name: "Karim",
    title: "DevOps Engineer",
    xp: "3 ans chez Koncept",
    img: "https://picsum.photos/seed/karim-devops-koncept/300/300",
    quote: "Ici j'ai appris plus en 18 mois qu'en 4 ans dans mon poste précédent. La montée en compétences est réelle.",
    sector: "Cloud · Infrastructure",
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function APropos() {
  const reduce = useReducedMotion()

  const fadeUp = (delay = 0) => makeFadeUp(reduce, delay)

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              À propos de Koncept IS
            </motion.p>
            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 5.5vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Une équipe,<br />pas <span style={{ color: "var(--color-accent)" }}>une usine.</span>
            </motion.h1>
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.75, maxWidth: "50ch", marginBottom: 36 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              Fondée à Toulouse en 2014, Koncept IS a choisi la taille humaine. 50 collaborateurs, 7 secteurs, et une seule obsession : que vos projets aboutissent.
            </motion.p>
            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.18 }}
            >
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Parlons de votre projet <ArrowRight size={15} />
              </Link>
              <Link href="/carrieres"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-bg)", color: "var(--color-career)", padding: "13px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid var(--color-career-border)", transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg-hover)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
              >
                Rejoindre l&apos;équipe <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src={IMAGES.team} alt="L'équipe Koncept IS" fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </section>

      {/* ── 1. Histoire — timeline ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Notre histoire</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Dix ans construits<br />pierre par pierre.
            </h2>
          </motion.div>

          {/* Horizontal timeline */}
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: 20, left: 20, right: 20, height: 2, background: "linear-gradient(to right, var(--color-accent), #3b82f6)", opacity: 0.3, zIndex: 0 }} className="timeline-line" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }} className="timeline-grid">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year}
                  style={{ paddingTop: 52, paddingRight: i < 5 ? 24 : 0, position: "relative" }}
                  {...fadeUp(i * 0.08)}
                >
                  {/* Dot */}
                  <div style={{ position: "absolute", top: 12, left: 0, width: 16, height: 16, borderRadius: "50%", background: i === 0 ? "var(--color-accent)" : "var(--color-bg-3)", border: `2px solid ${i === 5 ? "#3b82f6" : "var(--color-accent)"}`, zIndex: 1 }} />
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.03em", marginBottom: 4 }}>{m.year}</p>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{m.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Chiffres clés ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Chiffres clés</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Des chiffres qui parlent d&apos;eux-mêmes.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="stats-grid">
            {KEY_STATS.map((s, i) => (
              <motion.div key={s.label}
                style={{ padding: "32px 28px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
                {...fadeUp(i * 0.07)}
              >
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{s.value}</p>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{s.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 12 }}>{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Vision (section mise en avant — palier gris clair) ── */}
      <section style={{ padding: "96px 0", background: "var(--color-soft-bg)", color: "var(--color-soft-ink)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }} className="vision-grid">
            <motion.div {...fadeUp()}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>Notre vision</p>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 24, color: "var(--color-soft-ink)" }}>
                Rendre chaque client<br />autonome et&nbsp;<span style={{ color: "var(--color-accent)" }}>performant.</span>
              </h2>
              <p style={{ color: "var(--color-soft-ink-2)", fontSize: 15, lineHeight: 1.8 }}>
                On ne cherche pas à créer de la dépendance. Notre succès se mesure à la capacité de nos clients à voler de leurs propres ailes à la fin de chaque projet.
              </p>
            </motion.div>
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
              {...fadeUp(0.1)}
            >
              {[
                { icon: "⚙", title: "Expertise technique de haut niveau", desc: "Des architectes et développeurs seniors sur chaque mission critique. Pas de juniors livrés à eux-mêmes chez vos équipes." },
                { icon: "🤝", title: "Partenaire, pas prestataire", desc: "On s'implique dans vos succès et vos difficultés. Un client en difficulté, c'est notre problème — pas seulement le sien." },
                { icon: "📐", title: "Méthode rigoureuse, résultats mesurables", desc: "Chaque engagement est suivi, mesuré, documenté. La confiance se construit sur la transparence, pas les belles paroles." },
              ].map((item, i) => (
                <motion.div key={item.title}
                  style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-soft-border)", background: "var(--color-soft-bg-2)", alignItems: "flex-start" }}
                  {...fadeUp(0.1 + i * 0.08)}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(212,32,32,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 5, color: "var(--color-soft-ink)" }}>{item.title}</p>
                    <p style={{ color: "var(--color-soft-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Valeurs ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Nos valeurs</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Ce qui guide chaque décision.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                style={{ padding: "36px 28px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", position: "relative", overflow: "hidden" }}
                {...fadeUp(i * 0.09)}
                whileHover={{ borderColor: "rgba(212,32,32,0.4)" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--color-accent)", opacity: 0.7 }} />
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 52, fontWeight: 800, color: "var(--color-accent)", opacity: 0.08, lineHeight: 1, marginBottom: -16, letterSpacing: "-0.04em" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Équipe dirigeante ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Équipe dirigeante</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Les personnes derrière Koncept.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="team-grid">
            {DIRIGEANTS.map((m, i) => (
              <motion.div key={m.name}
                style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.09)}
              >
                <div className="flip-card" style={{ height: 300, width: "100%", position: "relative", perspective: 1200 }}>
                  <div className="flip-card-inner" style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                    <div className="flip-card-face" style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", overflow: "hidden" }}>
                      <Image src={m.img} alt={m.name} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover", filter: "grayscale(15%)" }} />
                    </div>
                    <div className="flip-card-face flip-card-back" style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", overflow: "hidden" }}>
                      <Image src={m.imgBack} alt={`${m.name} — coulisses`} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover", filter: "grayscale(15%)" }} />
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 0, flexGrow: 1 }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>{m.name}</p>
                  <p style={{ color: "var(--color-accent)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4, marginBottom: 12 }}>{m.role}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>{m.bio}</p>
                  <blockquote style={{ borderLeft: "2px solid var(--color-accent)", paddingLeft: 12, margin: "0 0 16px", flexGrow: 1 }}>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65, fontStyle: "italic" }}>"{m.quote}"</p>
                  </blockquote>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-ink-2)", fontSize: 11, fontWeight: 600, textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Portraits collaborateurs ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Portraits</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Ils font Koncept<br />au quotidien.
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PORTRAITS.map((p, i) => (
              <motion.div key={p.name}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 28, padding: "32px 36px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", alignItems: "center" }}
                className="portrait-row"
                {...fadeUp(i * 0.1)}
              >
                <Image
                  src={p.img} alt={p.name}
                  width={72} height={72}
                  style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-border)", flexShrink: 0 }}
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }} className="portrait-inner">
                  <div>
                    <blockquote style={{ margin: "0 0 12px" }}>
                      <p style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.65, color: "var(--color-ink)" }}>"{p.quote}"</p>
                    </blockquote>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{p.name}</p>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-border)" }} />
                      <p style={{ color: "var(--color-ink-2)", fontSize: 13 }}>{p.title}</p>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-border)" }} />
                      <p style={{ color: "var(--color-ink-2)", fontSize: 12 }}>{p.xp}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", padding: "4px 10px", borderRadius: 6, whiteSpace: "nowrap" }}>
                      {p.sector}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Vie de l'entreprise ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="life-grid">
            <motion.div {...fadeUp()} style={{ position: "sticky", top: 100 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Vie de l&apos;entreprise</p>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
                On travaille bien<br />parce qu&apos;on vit bien.
              </h2>
              <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: "40ch" }}>
                La qualité de nos projets passe par la qualité de vie de nos équipes. Ce n&apos;est pas un discours RH — c&apos;est notre modèle.
              </p>
              <Link href="/carrieres"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-career)", fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid var(--color-career-border)", padding: "12px 20px", borderRadius: 9, transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent" }}
              >
                Découvrir la vie chez Koncept <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Career traits */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 4 }} className="traits-grid">
                {[
                  { label: "Anticonformiste", emoji: "✦", desc: "On s'affranchit des codes qui n'ont pas de sens. Ce qui compte : la qualité et l'épanouissement." },
                  { label: "Engagé", emoji: "◆", desc: "Chaque Koncepteur s'implique sur sa mission comme s'il en était l'entrepreneur." },
                  { label: "Respectueux", emoji: "▲", desc: "Bienveillance et écoute attentive, vers l'interne comme vers les clients. Non-négociable." },
                  { label: "Tolérant", emoji: "●", desc: "Un environnement ouvert où la diversité des profils est une richesse, pas une contrainte." },
                ].map((t, i) => (
                  <motion.div key={t.label}
                    style={{ padding: "22px 22px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                    {...fadeUp(i * 0.07)}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ color: "var(--color-career)", fontSize: 10, fontWeight: 800 }}>{t.emoji}</span>
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{t.label}</p>
                    </div>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{t.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Events */}
              {CAREER_EVENTS.map((ev, i) => (
                <motion.div key={ev.title}
                  style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", alignItems: "flex-start" }}
                  {...fadeUp(0.1 + i * 0.08)}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--color-career-bg)", border: "1px solid var(--color-career-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--color-career)", fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 11, fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>
                    {ev.freq.split(" ")[0].slice(0, 3).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700 }}>{ev.title}</p>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "var(--color-career)", background: "var(--color-career-bg)", padding: "2px 8px", borderRadius: 4 }}>{ev.freq}</span>
                    </div>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{ev.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
              Travaillons ensemble.
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15 }}>
              Un échange de 30 minutes pour qualifier votre projet — sans engagement.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "15px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
            >
              Parlons de votre projet <ArrowRight size={15} />
            </Link>
            <Link href="/carrieres"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-career)", padding: "15px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", border: "1px solid var(--color-career-border)", transition: "background 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent" }}
            >
              Rejoindre l&apos;équipe <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .flip-card:hover .flip-card-inner{transform:rotateY(180deg)}
        @media(max-width:1280px){
          .timeline-grid{grid-template-columns:repeat(3,1fr) !important}
          .timeline-line{display:none !important}
        }
        @media(max-width:1023px){
          .hero-grid{grid-template-columns:1fr !important}
          .vision-grid{grid-template-columns:1fr !important;gap:48px !important}
          .team-grid{grid-template-columns:repeat(2,1fr) !important}
          .life-grid{grid-template-columns:1fr !important;gap:48px !important}
        }
        @media(max-width:767px){
          .timeline-grid{grid-template-columns:repeat(2,1fr) !important}
          .stats-grid{grid-template-columns:repeat(2,1fr) !important}
          .values-grid{grid-template-columns:repeat(2,1fr) !important}
          .portrait-row{grid-template-columns:1fr !important}
          .portrait-inner{grid-template-columns:1fr !important}
          .traits-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:479px){
          .timeline-grid{grid-template-columns:1fr !important}
          .team-grid{grid-template-columns:1fr !important}
          .stats-grid{grid-template-columns:1fr !important}
          .values-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
