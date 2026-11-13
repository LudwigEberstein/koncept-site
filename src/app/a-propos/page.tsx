'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Handshake, MessagesSquare, Share2, ShieldCheck, type LucideIcon } from "lucide-react"
import LinkedinIcon from "@/components/ui/LinkedinIcon"
import { motion } from "motion/react"
import { IMAGES, VALUES } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Eyebrow from "@/components/ui/Eyebrow"
import Container from "@/components/ui/Container"

// ─── Local enriched data ────────────────────────────────────────────────────

const MILESTONES = [
  {
    year: "2014",
    label: "Fondation à Toulouse",
    desc: "Gérard fonde Koncept avec une conviction : faire une ESN différente, à taille humaine, centrée sur la relation avec ses clients et ses consultants.",
  },
  {
    year: "Aujourd'hui",
    label: "La même priorité",
    desc: "La proximité avec nos clients et l'accompagnement de nos consultants restent au cœur de notre façon de travailler.",
  },
]

const VALUE_ICONS: Record<(typeof VALUES)[number]["title"], LucideIcon> = {
  "Proximité": Handshake,
  "Confiance": ShieldCheck,
  "Échange": MessagesSquare,
  "Partage": Share2,
}

type Member = {
  name: string
  role: string
  /** Photo de face ; sans photo, la carte affiche le prénom en contour (comme les portraits collaborateurs), sans effet de retournement. */
  img?: string
  /** Photo « coulisses » révélée au survol (retournement de la carte). */
  imgBack?: string
  pos?: string
  posBack?: string
  /** Dézoom : part de la largeur de la carte occupée par la photo, le reste est prolongé en flou. */
  fit?: number
  bio: string
  quote?: string
  linkedin: string
}

const TEAM: Member[] = [
  {
    name: "Gérard",
    role: "PDG",
    img: "/team/gerard-front.png",
    imgBack: "/team/gerard-back.png",
    pos: "50% 10%",
    posBack: "50% 10%",
    bio: "Fondateur de Koncept, Gérard a bâti l'ESN sur un principe simple : que chaque client soit suivi par quelqu'un qui comprend son métier en profondeur.",
    quote: "On ne veut pas être la plus grande ESN de Toulouse. On veut être la meilleure pour nos clients.",
    linkedin: "https://www.linkedin.com/in/g%C3%A9rard-pucheux-9426a3b5/",
  },
  {
    name: "Valentine",
    role: "Ressources humaines",
    img: "/team/valentine-front.jpg",
    imgBack: "/team/valentine-back.jpg",
    pos: "50% 8%", // photo portrait (3:4) : on ancre sur le visage, pas sur le centre
    fit: 0.86, // dézoom : part de la largeur de la carte occupée par la photo, le reste est prolongé en flou
    posBack: "50% 10%",
    bio: "Valentine construit la culture Koncept de l'intérieur. Son obsession : que chaque Koncepteur trouve sa place et s'y épanouisse vraiment.",
    quote: "On recrute des gens, pas des compétences. Les compétences, ça s'apprend. La personnalité, non.",
    linkedin: "https://www.linkedin.com/in/valentine-bordes-b4b5489a/",
  },
  {
    name: "Aurélie",
    role: "Commerce",
    img: "/team/aurelie-front.jpg",
    imgBack: "/team/aurelie-back.jpg",
    pos: "50% 10%",
    posBack: "50% 0%", // visage tout en haut de la photo
    bio: "Aurélie est l'interlocutrice de confiance des DSI et directeurs de projet. Elle porte la promesse Koncept à chaque avant-vente.",
    quote: "Je ne signe pas un contrat si je ne suis pas convaincue qu'on peut le tenir.",
    linkedin: "https://www.linkedin.com/in/aur%C3%A9lie-sajous-88669212b/",
  },
  {
    // Pas encore de photo ni de citation : bio générique, à faire valider par Lucie.
    name: "Lucie",
    role: "Gestion",
    bio: "Lucie s'occupe de la gestion de Koncept au quotidien, pour que les équipes puissent se concentrer sur leurs projets et leurs clients.",
    linkedin: "https://www.linkedin.com/in/lucie-desgrez/",
  },
]

/** Traits de caractère de la vie d'entreprise. */
const TRAITS = [
  { label: "Anticonformiste", emoji: "✦", desc: "On s'affranchit des codes qui n'ont pas de sens. Ce qui compte : la qualité et l'épanouissement." },
  { label: "Engagé", emoji: "◆", desc: "Chaque Koncepteur s'implique sur sa mission comme s'il en était l'entrepreneur." },
  { label: "Respectueux", emoji: "▲", desc: "Bienveillance et écoute attentive, vers l'interne comme vers les clients. Non-négociable." },
  { label: "Tolérant", emoji: "●", desc: "Un environnement ouvert où la diversité des profils est une richesse, pas une contrainte." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function APropos() {

  const fadeUp = useFadeUp()

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection side="career" decor="net" next="bg" paddingTop={140} paddingBottom={80}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ color: "var(--color-accent-text)", fontSize: 18, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              À propos de Koncept
            </motion.p>
            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 5.5vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Une équipe,<br />pas <span style={{ color: "var(--color-accent-text)" }}>une usine.</span>
            </motion.h1>
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.75, maxWidth: "50ch", marginBottom: 36 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              Fondée à Toulouse en 2014, Koncept est une ESN à taille humaine. Notre priorité : la proximité avec nos clients et l'accompagnement de nos consultants.
            </motion.p>
            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.18 }}
            >
              <Link href="/solutions/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-pro-dark)", color: "#fff", padding: "13px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Parlons de votre projet <ArrowRight size={15} />
              </Link>
              <Link href="/carrieres/offres"
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
            <Image src={IMAGES.team} alt="L'équipe Koncept" fill sizes="(max-width: 1023px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </HeroSection>

      {/* ── 1. Histoire — timeline ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow>Notre histoire</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Une ESN toulousaine,<br />à taille humaine.
            </h2>
          </motion.div>

          {/* Horizontal timeline */}
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: 20, left: 20, width: "min(760px, calc(100% - 40px))", height: 2, background: "linear-gradient(to right, var(--color-accent), var(--color-pro-dark))", opacity: 0.3, zIndex: 0 }} className="timeline-line" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, maxWidth: 820 }} className="timeline-grid">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year}
                  style={{ paddingTop: 52, paddingRight: i < MILESTONES.length - 1 ? 24 : 0, position: "relative" }}
                  {...fadeUp(i * 0.08)}
                >
                  {/* Dot */}
                  <div style={{ position: "absolute", top: 12, left: 0, width: 16, height: 16, borderRadius: "50%", background: i === 0 ? "var(--color-accent)" : "var(--color-bg-3)", border: `2px solid ${i === MILESTONES.length - 1 ? "var(--color-pro-dark)" : "var(--color-accent)"}`, zIndex: 1 }} />
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, color: "var(--color-accent-text)", letterSpacing: "-0.03em", marginBottom: 4 }}>{m.year}</p>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{m.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Vision et valeurs (fusion des deux sections, en bleu : elle mène aux Solutions) ── */}
      <section data-side="pro" style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="life-grid">
            <motion.div {...fadeUp()} style={{ position: "sticky", top: 100 }}>
              <Eyebrow>Vision et valeurs</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
                Une relation simple,<br />directe et <span style={{ color: "var(--color-accent-text)" }}>durable.</span>
              </h2>
              <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: "40ch" }}>
                Des interlocuteurs identifiés, des consultants bien choisis et suivis, des échanges simples avec nos clients comme avec nos équipes : c&apos;est ce qui guide chacune de nos décisions.
              </p>
              <Link href="/solutions"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-accent-text)", fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(var(--color-accent-rgb), 0.45)", padding: "12px 20px", borderRadius: 9, transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(var(--color-accent-rgb), 0.12)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent" }}
              >
                Découvrir nos solutions <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="traits-grid">
              {VALUES.map((v, i) => {
                const Icon = VALUE_ICONS[v.title]
                return (
                  <motion.div key={v.title}
                    style={{ padding: "22px 22px", borderRadius: 12, border: "1px solid rgba(var(--color-accent-rgb), 0.3)", background: "rgba(var(--color-accent-rgb), 0.08)" }}
                    {...fadeUp(i * 0.07)}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <Icon size={15} aria-hidden="true" style={{ color: "var(--color-accent-text)", flexShrink: 0 }} />
                      <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{v.title}</p>
                    </div>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{v.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Équipe structure ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow>Équipe structure</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Les personnes derrière Koncept.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${TEAM.length}, 1fr)`, gap: 24 }} className="team-grid">
            {TEAM.map((m, i) => (
              <motion.div key={m.name}
                style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.09)}
              >
                {m.img ? (
                  <div className="flip-card" style={{ height: 300, width: "100%", position: "relative", perspective: 1200 }}>
                    <div className="flip-card-inner" style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      <div className="flip-card-face" style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", overflow: "hidden" }}>
                        {m.fit ? (
                          <>
                            <Image src={m.img} alt="" aria-hidden="true" fill sizes="(max-width: 767px) 100vw, 25vw" style={{ objectFit: "cover", objectPosition: m.pos, filter: "blur(18px) grayscale(15%)", transform: "scale(1.15)" }} />
                            <div style={{ position: "absolute", top: 0, bottom: 0, left: `${(1 - m.fit) * 50}%`, width: `${m.fit * 100}%`, WebkitMaskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)" }}>
                              <Image src={m.img} alt={m.name} fill sizes="(max-width: 767px) 100vw, 25vw" style={{ objectFit: "cover", objectPosition: m.pos, filter: "grayscale(15%)" }} />
                            </div>
                          </>
                        ) : (
                          <Image src={m.img} alt={m.name} fill sizes="(max-width: 767px) 100vw, 25vw" style={{ objectFit: "cover", objectPosition: m.pos, filter: "grayscale(15%)" }} />
                        )}
                      </div>
                      {m.imgBack && (
                        <div className="flip-card-face flip-card-back" style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", overflow: "hidden" }}>
                          <Image src={m.imgBack} alt={`${m.name} — coulisses`} fill sizes="(max-width: 767px) 100vw, 25vw" style={{ objectFit: "cover", objectPosition: m.posBack, filter: "grayscale(15%)" }} />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ height: 300, width: "100%", position: "relative" }}>
                    <div className="collab-monogram" aria-hidden="true"><span>{m.name}</span></div>
                  </div>
                )}
                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 0, flexGrow: 1 }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>{m.name}</p>
                  <p style={{ color: "var(--color-accent-text)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4, marginBottom: 12 }}>{m.role}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>{m.bio}</p>
                  {m.quote && (
                    <blockquote style={{ borderLeft: "2px solid var(--color-accent)", paddingLeft: 12, margin: "0 0 16px" }}>
                      <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65, fontStyle: "italic" }}>&laquo;&nbsp;{m.quote}&nbsp;&raquo;</p>
                    </blockquote>
                  )}
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} sur LinkedIn`}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: "auto", alignSelf: "flex-start", color: "var(--color-ink-2)", fontSize: 11, fontWeight: 600, textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-ink-2)" }}
                  >
                    <LinkedinIcon size={13} aria-hidden="true" /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Vie de l'entreprise ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="life-grid">
            <motion.div {...fadeUp()} style={{ position: "sticky", top: 100 }}>
              <Eyebrow tone="career">Vie de l&apos;entreprise</Eyebrow>
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

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="traits-grid">
              {TRAITS.map((t, i) => (
                <motion.div key={t.label}
                  style={{ padding: "22px 22px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-3)" }}
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
          </div>
        </Container>
      </section>

      {/* ── Bande finale : le mot KONCEPT seul, sans texte ni bouton ── */}
      <CtaBand side="career" prev="bg2" word="KONCEPT" bolt={false} />

      <style>{`
        .flip-card:hover .flip-card-inner{transform:rotateY(180deg)}
        @media(max-width:1280px){
          .timeline-grid{grid-template-columns:repeat(2,1fr) !important}
          .timeline-line{display:none !important}
        }
        @media(max-width:1199px){
          .team-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:1023px){
          .hero-grid{grid-template-columns:1fr !important}
          .life-grid{grid-template-columns:1fr !important;gap:48px !important}
        }
        @media(max-width:767px){
          .timeline-grid{grid-template-columns:repeat(2,1fr) !important}
          .traits-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:479px){
          .timeline-grid{grid-template-columns:1fr !important}
          .team-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
