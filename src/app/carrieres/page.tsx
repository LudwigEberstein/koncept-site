'use client'

import Link from "next/link"
import { ArrowRight, Play, Coffee, Gamepad2, Bike, Dices, Pizza, Terminal, BookOpen, ClipboardList, Mail, Heart } from "lucide-react"
import { motion } from "motion/react"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import SquidShape, { type Shape } from "@/components/ui/SquidShape"
import KonamiHint from "@/components/ui/KonamiHint"
import Eyebrow from "@/components/ui/Eyebrow"
import Container from "@/components/ui/Container"

// ─── Data ───────────────────────────────────────────────────────────────────

const WHY_US: { shape: Shape; title: string; desc: string }[] = [
  {
    shape: "circle",
    title: "Le gâteau n'est pas un mensonge.",
    desc: "On ne te vend pas un projet sexy pour t'envoyer ailleurs. Ce qu'on te présente en entretien, c'est ce sur quoi tu travailles.",
  },
  {
    shape: "triangle",
    title: "Ton manager code",
    desc: "Ton référent technique est un senior qui a bossé sur des projets similaires — pas un commercial qui lit ton CV entre deux appels.",
  },
  {
    shape: "square",
    title: "Formation sans condition",
    desc: "Un budget dédié à la formation dès ton premier jour. Certifs, confs, livres, MOOCs. On ne demande pas d'ancienneté pour investir.",
  },
  {
    shape: "circle",
    title: "Des projets techniques sérieux",
    desc: "Aéronautique, banque, télécoms, robotique. Des stacks modernes, des contraintes réelles, des enjeux qui forcent à progresser.",
  },
  {
    shape: "triangle",
    title: "50 personnes. Valentine connaît ton prénom.",
    desc: "Taille humaine voulue, maintenue. Tu n'es pas un ticket Jira dans le système RH. Quelqu'un se soucie vraiment de comment ça va.",
  },
  {
    shape: "square",
    title: "On est des devs avant d'être une ESN",
    desc: "Gaming, moto, café, katas de code. La culture technique est réelle ici — pas un argument de recrutement.",
  },
]

const DNA_ITEMS = [
  {
    icon: Coffee,
    label: "Café du matin",
    desc: "La machine Nespresso est sacrée. Les réunions commencent après le deuxième café — c'est une règle non-écrite depuis 2015.",
  },
  {
    icon: Gamepad2,
    label: "Gaming",
    desc: "Jeux vidéo, tournois improvisés, débats de fin de journée sur le meilleur jeu de tous les temps. Sans obligation, toujours avec bonne humeur.",
  },
  {
    icon: Bike,
    label: "Culture moto",
    desc: "Une bonne partie de l'équipe roule. Des weekends balade organisés et des débats carbu vs injection qui durent plus longtemps que les stand-ups.",
  },
  {
    icon: Dices,
    label: "Board games",
    desc: "Codenames, Pandemic, Terraforming Mars. La boîte dans la cuisine sert plus souvent qu'il n'y paraît — et on a même un vrai maître du jeu dans les effectifs : Alexis.",
  },
  {
    icon: Pizza,
    label: "Vendredi pizza",
    desc: "Si les PRs sont mergées à l'heure, c'est pizza. L'incentive qui marche à tous les coups depuis 2016.",
  },
  {
    icon: Terminal,
    label: "Code katas",
    desc: "Sessions hebdo volontaires — algos, patterns, archi. Pas de slides : du code, un écran partagé, et de la discussion franche.",
  },
]

const PORTRAITS = [
  {
    name: "Thomas",
    title: "Lead Dev Java · 8 ans",
    quote: "Ce qui m'a gardé ici, c'est qu'on me fait confiance sur les sujets techniques. Je ne suis pas une ressource — je suis un expert.",
  },
  {
    name: "Sarah",
    title: "Architecte Solution · 5 ans",
    quote: "J'ai refusé des offres mieux payées pour rester. L'environnement et les projets n'ont pas de prix.",
  },
  {
    name: "Karim",
    title: "DevOps Engineer · 3 ans",
    quote: "J'ai appris plus en 18 mois ici qu'en 4 ans dans mon poste précédent. La montée en compétences est réelle.",
  },
]

const SUB_PAGES = [
  { href: "/carrieres/vie", label: "Vie chez Koncept", desc: "La culture, les events, l'ADN quotidien.", icon: Heart },
  { href: "/carrieres/formation", label: "Formation et évolution", desc: "Budget dédié, certifs, trajectoires de carrière.", icon: BookOpen },
  { href: "/carrieres/offres", label: "Offres d'emploi", desc: "Les postes ouverts en CDI à Toulouse.", icon: ClipboardList },
  { href: "/carrieres/candidature", label: "Candidature spontanée", desc: "Pas de poste correspondant ? Écris-nous quand même.", icon: Mail },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Carrieres() {

  const fadeUp = useFadeUp()

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection side="career" next="bg2" paddingTop={140} paddingBottom={88}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "minmax(0, 720px)", gap: 80, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              Carrières · Rejoignez Koncept IS
            </motion.p>
            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 5.5vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              On cherche des devs.<br /><span style={{ color: "var(--color-career)" }}>Pas des profils.</span>
            </motion.h1>
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.75, maxWidth: "48ch", marginBottom: 36 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              Pas de process RH kafkaïen. Pas de grille de compétences à remplir.
              Si tu es passionné, honnête et que tu veux bosser sur de vraies problématiques techniques — on veut te rencontrer.
            </motion.p>
            <motion.div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Link href="/carrieres/offres" aria-label="Voir les offres d'emploi"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                <Play size={14} fill="currentColor" aria-hidden="true" /> Appuie sur Start
              </Link>
              <Link href="/carrieres/candidature"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-bg)", color: "var(--color-career)", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid var(--color-career-border)", transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg-hover)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
              >
                Candidature spontanée
              </Link>
            </motion.div>
            {/* Trust pills */}
            <motion.div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
            >
              {["CDI uniquement", "Toulouse", "Budget formation dédié", "Café illimité"].map(p => (
                <span key={p} style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", padding: "5px 12px", borderRadius: 9999 }}>{p}</span>
              ))}
            </motion.div>
            <KonamiHint />
          </div>

        </div>
      </HeroSection>

      {/* ── Pourquoi Koncept ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Pourquoi nous</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Concrètement, pourquoi Koncept<br />plutôt qu&apos;une autre ESN ?
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="why-grid">
            {WHY_US.map((item, i) => (
              <motion.div className="glass-card" key={item.title}
                style={{ padding: "32px 28px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", position: "relative", overflow: "hidden" }}
                {...fadeUp(i * 0.07)}
                whileHover={{ borderColor: "var(--color-career-border-hover)" }}
              >
                <div style={{ marginBottom: 22 }}><SquidShape shape={item.shape} /></div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ADN Koncept ── */}
      <section className="dna-section" style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <div className="dna-head">
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">L&apos;ADN Koncept</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Entre deux commits,<br />on a une vraie vie.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.7, maxWidth: "56ch", marginBottom: 52 }}>
              La culture geek n&apos;est pas un argument de recrutement : c&apos;est ce qui se passe entre deux pull requests, au déjeuner et le vendredi soir.
            </p>
          </motion.div>
          {/* Mona Lisa : à droite de l'en-tête, dans le flux (ne rallonge pas la section, ne recouvre aucun texte) */}
          <div className="mona-figure" aria-hidden="true">
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/monalisa-static.png" />
              { }
              <img src="/culture/monalisa.gif" alt="" loading="lazy" />
            </picture>
          </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="dna-grid">
            {DNA_ITEMS.map((item, i) => (
              <motion.div className="glass-card" key={item.label}
                style={{ padding: "28px 28px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                {...fadeUp(i * 0.07)}
              >
                <div style={{ width: 40, height: 40, borderRadius: 11, display: "grid", placeItems: "center", background: "rgba(var(--side-rgb), .14)", color: "var(--side2)", marginBottom: 18 }}>
                  <item.icon size={20} aria-hidden="true" />
                </div>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>{item.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Portraits ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Portraits</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Ils ont choisi Koncept.<br />Ils ont choisi de rester.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="portrait-grid">
            {PORTRAITS.map((p, i) => (
              <motion.figure className="glass-card" key={p.name}
                style={{ margin: 0, padding: "32px 28px 26px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg)", display: "flex", flexDirection: "column", gap: 20 }}
                {...fadeUp(i * 0.1)}
              >
                <span aria-hidden="true" style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 64, fontWeight: 800, lineHeight: 0.6, color: "var(--side2)", opacity: 0.9, height: 28 }}>&ldquo;</span>
                <blockquote style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--color-ink)", flex: 1 }}>{p.quote}</blockquote>
                <figcaption style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid var(--color-border)", paddingTop: 18 }}>
                  <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", fontFamily: "var(--font-display, Outfit, sans-serif)", fontWeight: 800, fontSize: 16, color: "var(--side2)", border: "1.5px solid rgba(var(--side-rgb), .55)", background: "rgba(var(--side-rgb), .12)", flexShrink: 0 }}>{p.name[0]}</span>
                  <span>
                    <span style={{ display: "block", fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{p.name}</span>
                    <span style={{ display: "block", color: "var(--side2)", fontSize: 11, fontWeight: 600 }}>{p.title}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Nav sous-pages ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.h2 {...fadeUp()}
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 40 }}
          >
            Explorer la section Carrières.
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="nav-grid">
            {SUB_PAGES.map((page, i) => (
              <motion.div key={page.href} {...fadeUp(i * 0.08)}>
                <Link className="glass-card" href={page.href}
                  style={{ display: "flex", flexDirection: "column", gap: 12, padding: "28px 24px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", textDecoration: "none", height: "100%", transition: "border-color 0.18s, background 0.18s" }}
                >
                  <page.icon size={24} aria-hidden="true" style={{ color: "var(--side2)" }} />
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, color: "var(--color-ink)" }}>{page.label}</p>
                  <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55, flex: 1 }}>{page.desc}</p>
                  <span style={{ color: "var(--color-career)", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>Explorer <ArrowRight size={13} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand side="career" prev="bg"
        title="Prêt·e à devenir Koncepteur·se ?"
        text="Des missions ambitieuses, une équipe soudée, un suivi de carrière sérieux — et de l'humour."
        primary={{ label: "Voir les offres d'emploi", href: "/carrieres/offres" }}
        secondary={{ label: "Candidature spontanée", href: "/carrieres/candidature" }}
      />

      <style>{`
        @media(max-width:1023px){
          .why-grid{grid-template-columns:repeat(2,1fr) !important}
          .dna-grid{grid-template-columns:repeat(2,1fr) !important}
          .nav-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:767px){
          .hero-grid{grid-template-columns:1fr !important;gap:48px !important}
          .why-grid{grid-template-columns:1fr !important}
          .dna-grid{grid-template-columns:1fr !important}
          .portrait-grid{grid-template-columns:1fr !important}
          .nav-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
