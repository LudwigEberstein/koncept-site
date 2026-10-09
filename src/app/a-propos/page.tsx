'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import LinkedinIcon from "@/components/ui/LinkedinIcon"
import { motion } from "motion/react"
import { IMAGES, SITE, VALUES, CAREER_EVENTS, DIFFERENTIATORS } from "@/lib/content"
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
    desc: "Gérard fonde Koncept IS avec une conviction : faire une ESN différente, à taille humaine, centrée sur la relation avec ses clients et ses consultants.",
  },
  {
    year: "Aujourd'hui",
    label: "La même priorité",
    desc: "La proximité avec nos clients et l'accompagnement de nos consultants restent au cœur de notre façon de travailler.",
  },
]

const DIRIGEANTS = [
  {
    name: "Gérard",
    role: "Président KONCEPT",
    img: "/team/gerard-front.png",
    imgBack: "/team/gerard-back.png",
    pos: "50% 10%",
    posBack: "50% 10%",
    bio: "Fondateur de Koncept IS, Gérard a bâti l'ESN sur un principe simple : que chaque client soit suivi par quelqu'un qui comprend son métier en profondeur.",
    quote: "On ne veut pas être la plus grande ESN de Toulouse. On veut être la meilleure pour nos clients.",
  },
  {
    name: "Valentine",
    role: "Directrice des Ressources Humaines",
    img: "/team/valentine-front.jpg",
    imgBack: "/team/valentine-back.jpg",
    pos: "50% 8%", // photo portrait (3:4) : on ancre sur le visage, pas sur le centre
    fit: 0.86, // dézoom : part de la largeur de la carte occupée par la photo, le reste est prolongé en flou
    posBack: "50% 10%",
    bio: "Valentine construit la culture Koncept de l'intérieur. Son obsession : que chaque Koncepteur trouve sa place et s'y épanouisse vraiment.",
    quote: "On recrute des gens, pas des compétences. Les compétences, ça s'apprend. La personnalité, non.",
  },
  {
    name: "Aurélie",
    role: "Directrice Commerciale",
    img: "/team/aurelie-front.jpg",
    imgBack: "/team/aurelie-back.jpg",
    pos: "50% 10%",
    posBack: "50% 0%", // visage tout en haut de la photo
    bio: "Aurélie est l'interlocutrice de confiance des DSI et directeurs de projet. Elle porte la promesse Koncept à chaque avant-vente.",
    quote: "Je ne signe pas un contrat si je ne suis pas convaincue qu'on peut le tenir.",
  },
]

const PORTRAITS = [
  {
    name: "Thomas",
    title: "Lead Développeur Java",
    xp: "Collaborateur Koncept",
    img: "https://picsum.photos/seed/thomas-lead-java-koncept/300/300",
    quote: "Ce qui m'a gardé ici, c'est qu'on me fait confiance sur les sujets techniques. Je ne suis pas une ressource — je suis un expert.",
    sector: "Aéronautique · Télécoms",
  },
  {
    name: "Sarah",
    title: "Architecte Solution",
    xp: "Collaborateur Koncept",
    img: "https://picsum.photos/seed/sarah-architecte-koncept/300/300",
    quote: "J'ai refusé des offres mieux payées pour rester ici. L'environnement et les projets n'ont pas de prix.",
    sector: "Banque & Assurance",
  },
  {
    name: "Karim",
    title: "DevOps Engineer",
    xp: "Collaborateur Koncept",
    img: "https://picsum.photos/seed/karim-devops-koncept/300/300",
    quote: "Ici j'ai appris plus en 18 mois qu'en 4 ans dans mon poste précédent. La montée en compétences est réelle.",
    sector: "DevOps",
  },
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
              Fondée à Toulouse en 2014, Koncept IS est une ESN à taille humaine. Notre priorité : la proximité avec nos clients et l'accompagnement de nos consultants.
            </motion.p>
            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.18 }}
            >
              <Link href="/solutions/contact"
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
            <div style={{ position: "absolute", top: 20, left: 20, width: "min(760px, calc(100% - 40px))", height: 2, background: "linear-gradient(to right, var(--color-accent), #3b82f6)", opacity: 0.3, zIndex: 0 }} className="timeline-line" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, maxWidth: 820 }} className="timeline-grid">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year}
                  style={{ paddingTop: 52, paddingRight: i < MILESTONES.length - 1 ? 24 : 0, position: "relative" }}
                  {...fadeUp(i * 0.08)}
                >
                  {/* Dot */}
                  <div style={{ position: "absolute", top: 12, left: 0, width: 16, height: 16, borderRadius: "50%", background: i === 0 ? "var(--color-accent)" : "var(--color-bg-3)", border: `2px solid ${i === MILESTONES.length - 1 ? "#3b82f6" : "var(--color-accent)"}`, zIndex: 1 }} />
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.03em", marginBottom: 4 }}>{m.year}</p>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{m.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65 }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Vision (section mise en avant — palier gris clair) ── */}
      <section style={{ padding: "96px 0", background: "var(--color-soft-bg)", color: "var(--color-soft-ink)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }} className="vision-grid">
            <motion.div {...fadeUp()}>
              <Eyebrow mb={16}>Notre vision</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 24, color: "var(--color-soft-ink)" }}>
                Une relation simple,<br />directe et&nbsp;<span style={{ color: "var(--color-accent)" }}>durable.</span>
              </h2>
              <p style={{ color: "var(--color-soft-ink-2)", fontSize: 15, lineHeight: 1.8 }}>
                Nous croyons à une relation de proximité : des interlocuteurs identifiés, des consultants bien choisis et suivis, et des échanges simples avec nos clients comme avec nos équipes.
              </p>
            </motion.div>
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
              {...fadeUp(0.1)}
            >
              {DIFFERENTIATORS.slice(0, 3).map((item, i) => (
                <motion.div key={item.title}
                  style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-soft-border)", background: "var(--color-soft-bg-2)", alignItems: "flex-start" }}
                  {...fadeUp(0.1 + i * 0.08)}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(212,32,32,0.12)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 5, color: "var(--color-soft-ink)" }}>{item.title}</p>
                    <p style={{ color: "var(--color-soft-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 4. Valeurs ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow>Nos valeurs</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Ce qui guide chaque décision.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div className="glass-card" key={v.title}
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
        </Container>
      </section>

      {/* ── 5. Équipe dirigeante ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow>Équipe dirigeante</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 52 }}>
              Les personnes derrière Koncept.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="team-grid">
            {DIRIGEANTS.map((m, i) => (
              <motion.div key={m.name}
                style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--color-bg-2)", display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.09)}
              >
                <div className="flip-card" style={{ height: 300, width: "100%", position: "relative", perspective: 1200 }}>
                  <div className="flip-card-inner" style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                    <div className="flip-card-face" style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", overflow: "hidden" }}>
                      {m.fit ? (
                        <>
                          <Image src={m.img} alt="" aria-hidden="true" fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: m.pos, filter: "blur(18px) grayscale(15%)", transform: "scale(1.15)" }} />
                          <div style={{ position: "absolute", top: 0, bottom: 0, left: `${(1 - m.fit) * 50}%`, width: `${m.fit * 100}%`, WebkitMaskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)" }}>
                            <Image src={m.img} alt={m.name} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: m.pos, filter: "grayscale(15%)" }} />
                          </div>
                        </>
                      ) : (
                        <Image src={m.img} alt={m.name} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: m.pos, filter: "grayscale(15%)" }} />
                      )}
                    </div>
                    <div className="flip-card-face flip-card-back" style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", overflow: "hidden" }}>
                      <Image src={m.imgBack} alt={`${m.name} — coulisses`} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: m.posBack, filter: "grayscale(15%)" }} />
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
                    <LinkedinIcon size={13} /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Portraits collaborateurs ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow>Portraits</Eyebrow>
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
        </Container>
      </section>

      {/* ── 7. Vie de l'entreprise ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
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
        </Container>
      </section>

      {/* ── CTA final ── */}
      <CtaBand side="career" prev="bg" word="ENSEMBLE" title="Travaillons ensemble." text="Parlez-nous de votre besoin : nous vous répondons simplement et directement."
        primary={{ label: "Parlons de votre projet", href: "/solutions/contact" }}
        secondary={{ label: "Rejoindre l'équipe", href: "/carrieres" }}
      />

      <style>{`
        .flip-card:hover .flip-card-inner{transform:rotateY(180deg)}
        @media(max-width:1280px){
          .timeline-grid{grid-template-columns:repeat(2,1fr) !important}
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
          .values-grid{grid-template-columns:repeat(2,1fr) !important}
          .portrait-row{grid-template-columns:1fr !important}
          .portrait-inner{grid-template-columns:1fr !important}
          .traits-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:479px){
          .timeline-grid{grid-template-columns:1fr !important}
          .team-grid{grid-template-columns:1fr !important}
          .values-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
