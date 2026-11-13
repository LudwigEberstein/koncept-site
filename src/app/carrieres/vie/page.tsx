'use client'

import { motion } from "motion/react"
import { Coffee, Users, Swords, Utensils, Save, LogOut, Mountain, TreePine, Flame, Home, CreditCard, HeartPulse, GraduationCap, Compass, Bot, Gamepad2, MapPin } from "lucide-react"
import { CollaboratorCard, YouCard } from "@/components/CollaboratorCard"
import { COLLABORATORS } from "@/lib/content"
import { useFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"
import Eyebrow from "@/components/ui/Eyebrow"
import Container from "@/components/ui/Container"

// ─── Data ───────────────────────────────────────────────────────────────────

/** Journée type en mission (textes validés par Valentine, 2026-11-13). */
const DAILY_LIFE = [
  {
    icon: Coffee,
    time: "9h00",
    label: "Spawn chez le client",
    desc: "Badge, café et coup d'œil aux sujets du jour. Certains sont déjà opérationnels, d'autres attendent encore que le café fasse effet.",
  },
  {
    icon: Users,
    time: "9h30",
    label: "Briefing de mission",
    desc: "Daily, point d'équipe ou simple échange informel, selon le projet. Tu n'es pas le PNJ du fond de la salle : tu fais partie de l'équipe.",
  },
  {
    icon: Swords,
    time: "Matinée",
    label: "Quête principale",
    desc: "Développement, analyse, recette, architecture ou pilotage, avec les équipes et les outils du client. Pas toujours de boss final, mais toujours quelques défis à relever.",
  },
  {
    icon: Utensils,
    time: "12h30",
    label: "Pause ravitaillement",
    desc: "Food trucks du coin, restaurant d'entreprise ou file d'attente devant le micro-ondes. On parle projets, séries, week-end… ou de tout sauf du boulot. Et le vendredi, c'est pizza pour ceux qui sont à l'agence !",
  },
  {
    icon: Save,
    time: "Après-midi",
    label: "Checkpoint",
    desc: "Une fonctionnalité à terminer, un sujet à débloquer, un livrable à finaliser. On sauvegarde sa progression, et demain, on reprend là où on s'est arrêté.",
  },
  {
    icon: LogOut,
    time: "Fin de journée",
    label: "Log out",
    desc: "Le jeudi, c'est « jeudi mousse » aux Marins d'Eau Douce, juste à côté des locaux. Le mardi, escalade. Aucune obligation : le mode multijoueur reste facultatif.",
  },
]

const EVENTS = [
  {
    freq: "L'été",
    icon: Flame,
    title: "Barbecue d'été",
    desc: "Quand il fait beau, on sort les grills. Un moment détendu pour se retrouver, discuter et profiter, loin des écrans.",
    details: ["Toute l'équipe, les conjoints, les enfants et les chiens", "Grillades et boissons fraîches", "Jeux et discussions"],
  },
  {
    freq: "Décembre",
    icon: TreePine,
    title: "Soirée de Noël",
    desc: "On clôt l'année tous ensemble, autour d'un bon repas. L'occasion de se retrouver, de se raconter l'année et de souffler avant les fêtes.",
    details: ["Toute l'équipe et les conjoints", "Repas partagé", "Bilan de l'année, sans PowerPoint"],
  },
  {
    freq: "Une fois par an",
    icon: Mountain,
    title: "Weekend d'agence",
    desc: "Le grand rendez-vous de l'année : toute l'agence part ensemble le temps d'un weekend. De la cohésion, de l'aventure et de vrais moments en dehors des projets. Ce qui se passe en weekend d'agence reste en weekend d'agence.",
    details: ["Uniquement l'équipe : ce moment est pour nous", "Activités et tireuse à jus (de houblon)", "Soirée, bonne humeur et grasse mat (ou pas !)"],
  },
]

const PERKS = [
  { icon: Home, label: "Télétravail partiel", desc: "2 jours/semaine en télétravail, sans justification. La confiance est la règle par défaut." },
  { icon: CreditCard, label: "Carte Swile", desc: "Tickets restaurant avec une participation employeur généreuse : 60 %. Le repas, c'est sacré !" },
  { icon: HeartPulse, label: "Mutuelle prise en charge", desc: "Une complémentaire santé financée à 100 %, enfants inclus (pas ton chat !). Carte de tiers payant immédiate et dématérialisée." },
  { icon: GraduationCap, label: "Budget formation dédié", desc: "Un budget dédié à ta formation, disponible dès le premier jour. Certifs, confs, livres, MOOCs — tu choisis." },
  { icon: Compass, label: "Suivi de carrière en one-to-one", desc: "Ta carrière se construit en direct avec la direction, avec un vrai suivi : on parle de là où tu veux aller, pas seulement de ta prochaine mission." },
  { icon: Bot, label: "Outils premium", desc: "Claude Code, ChatGPT, la suite Microsoft complète et le partage de documents sur SharePoint. Les bons outils ne sont pas une option." },
  { icon: Gamepad2, label: "Gaming", desc: "Jeux vidéo et jeux de société entre collègues : on aime jouer, et ça se voit." },
  { icon: MapPin, label: "Accès en métro", desc: "Parc Technologique du Canal, accessible par la ligne B du métro (station Ramonville). Et parking gratuit sur place." },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Vie() {

  const fadeUp = useFadeUp()

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection side="career" next="bg" paddingTop={140} paddingBottom={80}>
        <Container>
          <motion.p
            style={{ fontSize: "clamp(14px, 3.8vw, 18px)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            Carrières · Vie chez Koncept
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Le boulot c&apos;est sérieux.<br /><span style={{ color: "var(--color-career)" }}>Le reste aussi.</span>
          </motion.h1>
          <motion.p
            style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.75, maxWidth: "56ch" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            On travaille sur des projets exigeants, et on prend aussi le temps de bien vivre ensemble. Pas parce qu&apos;on y est obligés, mais parce qu&apos;on partage les mêmes passions.
          </motion.p>
        </Container>
      </HeroSection>

      {/* ── Une journée chez Koncept ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <motion.div {...fadeUp()}>
              <Eyebrow tone="career">Le quotidien</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
                Une journée en mission,<br />honnêtement.
              </h2>
              <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "56ch", marginTop: -32, marginBottom: 48 }}>
                La plupart des Koncepteurs travaillent chez nos clients, intégrés à leurs équipes. Horaires, rituels et projets varient d&apos;une mission à l&apos;autre. Mais concrètement, une journée en mission, ça ressemble à quoi&nbsp;?
              </p>
            </motion.div>
            {/* Mario : à droite de l'en-tête, dans le flux (ne rallonge pas la section, ne recouvre aucun texte) */}
            <div className="mario-figure" aria-hidden="true">
              <picture>
                <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/mario-flappybird-static.png" />
                { }
                <img src="/culture/mario-flappybird.gif" alt="" loading="lazy" />
              </picture>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="daily-grid">
            {DAILY_LIFE.map((item, i) => (
              <motion.div key={item.time}
                style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "flex-start" }}
                {...fadeUp(i * 0.07)}
              >
                {/* Colonne de largeur fixe : les textes restent alignés quelle que soit la longueur de l'horaire (« Fin de journée » passe sur deux lignes) */}
                <div style={{ flexShrink: 0, width: 60, textAlign: "center" }}>
                  <item.icon size={24} aria-hidden="true" style={{ display: "block", margin: "0 auto 8px", color: "var(--side2)" }} />
                  <span style={{ display: "block", fontSize: 10, fontWeight: 700, lineHeight: 1.3, color: "var(--color-career)", letterSpacing: "0.04em" }}>{item.time}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{item.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Events ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Les events</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Les rendez-vous qui font<br />l&apos;ADN Koncept.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "56ch", marginTop: -32, marginBottom: 48 }}>
              Tout est organisé par Valentine, notre DRH préférée — la maman de Koncept.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {EVENTS.map((ev, i) => (
              <motion.div className="hud-card" key={ev.title}
                style={{ padding: "34px 32px 30px", display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.1)}
              >
                <i className="cn1" aria-hidden="true" /><i className="cn2" aria-hidden="true" />
                <div className="hud-head" aria-hidden="true"><span>Événement {String(i + 1).padStart(2, "0")}</span><span>{ev.freq}</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <ev.icon size={28} aria-hidden="true" style={{ color: "var(--side2)" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, marginBottom: 12 }}>{ev.title}</h3>
                <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.7, marginBottom: 24, flex: 1 }}>{ev.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {ev.details.map(d => (
                    <div key={d} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-career)", flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "var(--color-ink-2)" }}>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="hud-xp" aria-hidden="true"><i /></div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Avantages ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Avantages</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Les petites choses qui<br />font la différence.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="perks-grid">
            {PERKS.map((perk, i) => (
              <motion.div className="glass-card" key={perk.label}
                style={{ padding: "24px 22px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                {...fadeUp(i * 0.06)}
              >
                <perk.icon size={22} aria-hidden="true" style={{ display: "block", marginBottom: 14, color: "var(--side2)" }} />
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{perk.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Portraits collaborateurs ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <Container>
          <motion.div {...fadeUp()}>
            <Eyebrow tone="career">Portraits</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Ils font Koncept au quotidien.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "52ch", marginBottom: 48 }}>
              Pas des témoignages marketing : des Koncepteurs racontent leur parcours, leur métier, et pourquoi ils sont encore là. La sixième place, c'est peut-être la tienne.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="portraits-grid">
            {COLLABORATORS.map((c, i) => (
              <motion.div key={c.name} {...fadeUp((i % 3) * 0.1)}>
                <CollaboratorCard data={c} variant="career" />
              </motion.div>
            ))}
            <motion.div {...fadeUp((COLLABORATORS.length % 3) * 0.1)}>
              <YouCard />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <CtaBand side="career" prev="bg2" title="Ça ressemble à ce que tu cherches ?" text="Jette un œil aux offres ouvertes."
        primary={{ label: "Voir les offres", href: "/carrieres/offres" }}
      />

      <style>{`
        @media(max-width:1023px){
          .perks-grid{grid-template-columns:repeat(3,1fr) !important}
          .portraits-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:767px){
          .daily-grid{grid-template-columns:1fr !important}
          .daily-grid > div{padding:20px !important;gap:16px !important}
          .events-grid{grid-template-columns:1fr !important}
          .perks-grid{grid-template-columns:repeat(2,1fr) !important}
          .portraits-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:479px){
          .perks-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}
