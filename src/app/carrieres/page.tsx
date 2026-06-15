'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

// ─── Data ───────────────────────────────────────────────────────────────────

const WHY_US = [
  {
    icon: "◎",
    title: "Pas de bait & switch",
    desc: "On ne te vend pas un projet sexy pour t'envoyer ailleurs. Ce qu'on te présente en entretien, c'est ce sur quoi tu travailles.",
  },
  {
    icon: "▣",
    title: "Ton manager code",
    desc: "Ton référent technique est un senior qui a bossé sur des projets similaires — pas un commercial qui lit ton CV entre deux appels.",
  },
  {
    icon: "◈",
    title: "Formation sans condition",
    desc: "1 500 €/an de budget formation dès ton premier jour. Certifs, confs, livres, MOOCs. On ne demande pas d'ancienneté pour investir.",
  },
  {
    icon: "◇",
    title: "Des projets techniques sérieux",
    desc: "Aéronautique, banque, télécoms, robotique. Des stacks modernes, des contraintes réelles, des enjeux qui forcent à progresser.",
  },
  {
    icon: "○",
    title: "50 personnes. Valentine connaît ton prénom.",
    desc: "Taille humaine voulue, maintenue. Tu n'es pas un ticket Jira dans le système RH. Quelqu'un se soucie vraiment de comment ça va.",
  },
  {
    icon: "△",
    title: "On est des devs avant d'être une ESN",
    desc: "Gaming, moto, café, katas de code. La culture technique est réelle ici — pas un argument de recrutement.",
  },
]

const DNA_ITEMS = [
  {
    icon: "☕",
    label: "Café du matin",
    desc: "La machine Nespresso est sacrée. Les réunions commencent après le deuxième café — c'est une règle non-écrite depuis 2015.",
  },
  {
    icon: "🎮",
    label: "Gaming lunches",
    desc: "FIFA, Mario Kart, Valorant selon les humeurs. Le championnat interne de Rocket League est perpétuellement en cours.",
  },
  {
    icon: "🏍",
    label: "Culture moto",
    desc: "Une bonne partie de l'équipe roule. Des weekends balade organisés et des débats carbu vs injection qui durent plus longtemps que les stand-ups.",
  },
  {
    icon: "🎲",
    label: "Board games",
    desc: "Codenames, Pandemic, Terraforming Mars. La boîte dans la cuisine sert plus souvent qu'il n'y paraît — surtout le vendredi.",
  },
  {
    icon: "🍕",
    label: "Vendredi pizza",
    desc: "Si les PRs sont mergées à l'heure, c'est pizza. L'incentive qui marche à tous les coups depuis 2016.",
  },
  {
    icon: "⚡",
    label: "Code katas",
    desc: "Sessions hebdo volontaires — algos, patterns, archi. Pas de slides : du code, un écran partagé, et de la discussion franche.",
  },
]

const PORTRAITS = [
  {
    name: "Thomas",
    title: "Lead Dev Java · 8 ans",
    img: "https://picsum.photos/seed/thomas-lead-java-koncept/200/200",
    quote: "Ce qui m'a gardé ici, c'est qu'on me fait confiance sur les sujets techniques. Je ne suis pas une ressource — je suis un expert.",
  },
  {
    name: "Sarah",
    title: "Architecte Solution · 5 ans",
    img: "https://picsum.photos/seed/sarah-architecte-koncept/200/200",
    quote: "J'ai refusé des offres mieux payées pour rester. L'environnement et les projets n'ont pas de prix.",
  },
  {
    name: "Karim",
    title: "DevOps Engineer · 3 ans",
    img: "https://picsum.photos/seed/karim-devops-koncept/200/200",
    quote: "J'ai appris plus en 18 mois ici qu'en 4 ans dans mon poste précédent. La montée en compétences est réelle.",
  },
]

const SUB_PAGES = [
  { href: "/carrieres/vie", label: "Vie chez Koncept", desc: "La culture, les events, l'ADN quotidien.", emoji: "🎮" },
  { href: "/carrieres/formation", label: "Formation & Évolution", desc: "Budget, certifs, trajectoires de carrière.", emoji: "⚡" },
  { href: "/carrieres/offres", label: "Offres d'emploi", desc: "Les postes ouverts en CDI à Toulouse.", emoji: "📋" },
  { href: "/carrieres/candidature", label: "Candidature spontanée", desc: "Pas de poste correspondant ? Écris-nous quand même.", emoji: "✉" },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Carrieres() {
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
      <section style={{ paddingTop: 140, paddingBottom: 88, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
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
              <Link href="/carrieres/offres"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
              >
                Voir les offres <ArrowRight size={15} />
              </Link>
              <Link href="/carrieres/candidature"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", color: "var(--color-career)", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(34,197,94,0.25)", transition: "background 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.18)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.1)" }}
              >
                Candidature spontanée
              </Link>
            </motion.div>
            {/* Trust pills */}
            <motion.div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
            >
              {["CDI uniquement", "Toulouse", "1 500 €/an de formation", "Café illimité ☕"].map(p => (
                <span key={p} style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink-2)", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", padding: "5px 12px", borderRadius: 9999 }}>{p}</span>
              ))}
            </motion.div>
          </div>

          {/* Floating quotes panel */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 4 }}>Ce qu&apos;on entend dans les couloirs</p>
            {[
              { text: "\"La première semaine, j'avais déjà un accès prod et une PR mergée. C'est pas commun.\"", name: "Romain, 2 ans chez Koncept" },
              { text: "\"Mon manager m'a conseillé de prendre la certification AWS avant même que je lui demande.\"", name: "Léa, 3 ans chez Koncept" },
              { text: "\"J'ai quitté un poste en GAFA pour venir ici. La qualité des projets et l'ambiance valent plus qu'un badge.\"", name: "Alex, 4 ans chez Koncept" },
            ].map((q, i) => (
              <motion.div key={i}
                style={{ padding: "20px 24px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)" }}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <p style={{ fontSize: 14, lineHeight: 1.65, fontStyle: "italic", color: "var(--color-ink)", marginBottom: 10 }}>{q.text}</p>
                <p style={{ fontSize: 11, fontWeight: 600, color: "var(--color-career)" }}>{q.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Pourquoi Koncept ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Pourquoi nous</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Concrètement, pourquoi Koncept<br />plutôt qu&apos;une autre ESN ?
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="why-grid">
            {WHY_US.map((item, i) => (
              <motion.div key={item.title}
                style={{ padding: "32px 28px", borderRadius: 16, border: "1px solid var(--color-border)", background: "var(--color-bg-3)", position: "relative", overflow: "hidden" }}
                {...fadeUp(i * 0.07)}
                whileHover={{ borderColor: "rgba(74,222,128,0.4)" }}
              >
                <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", position: "absolute", top: 16, right: 20, fontSize: 48, fontWeight: 800, color: "var(--color-career)", opacity: 0.08 }}>{item.icon}</span>
                <div style={{ width: 28, height: 3, background: "var(--color-career)", borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADN Koncept ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>L&apos;ADN Koncept</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
              On est des développeurs.<br />On vit comme des développeurs.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 16, lineHeight: 1.7, maxWidth: "56ch", marginBottom: 52 }}>
              La culture technique n&apos;est pas un argument RH chez nous. C&apos;est ce qui se passe vraiment entre deux réunions, le vendredi soir, et dans les couloirs.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="dna-grid">
            {DNA_ITEMS.map((item, i) => (
              <motion.div key={item.label}
                style={{ display: "flex", gap: 20, padding: "28px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "flex-start" }}
                {...fadeUp(i * 0.07)}
              >
                <span style={{ fontSize: 28, flexShrink: 0, lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{item.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portraits ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Portraits</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
              Ils ont choisi Koncept.<br />Ils ont choisi de rester.
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PORTRAITS.map((p, i) => (
              <motion.div key={p.name}
                style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 24, padding: "28px 32px", borderRadius: 14, border: "1px solid rgba(var(--color-career),0.15)", background: "var(--color-career-bg)", alignItems: "center" }}
                className="portrait-row"
                {...fadeUp(i * 0.1)}
              >
                <Image src={p.img} alt={p.name} width={56} height={56} style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-career-border)" }} />
                <div>
                  <p style={{ fontSize: 15, fontStyle: "italic", color: "var(--color-ink)", lineHeight: 1.6 }}>{p.quote}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700 }}>{p.name}</p>
                  <p style={{ color: "var(--color-career)", fontSize: 11, fontWeight: 600 }}>{p.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nav sous-pages ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.h2 {...fadeUp()}
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 40 }}
          >
            Explorer la section Carrières.
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="nav-grid">
            {SUB_PAGES.map((page, i) => (
              <motion.div key={page.href} {...fadeUp(i * 0.08)}>
                <Link href={page.href}
                  style={{ display: "flex", flexDirection: "column", gap: 12, padding: "28px 24px", borderRadius: 14, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", textDecoration: "none", height: "100%", transition: "border-color 0.18s, background 0.18s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.45)"; (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-career-border)"; (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
                >
                  <span style={{ fontSize: 24 }}>{page.emoji}</span>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 700, color: "var(--color-ink)" }}>{page.label}</p>
                  <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.55, flex: 1 }}>{page.desc}</p>
                  <span style={{ color: "var(--color-career)", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>Explorer <ArrowRight size={13} /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
          .portrait-row{grid-template-columns:64px 1fr !important}
          .nav-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
