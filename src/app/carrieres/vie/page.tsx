'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { CollaboratorCard, type Collaborator } from "@/components/CollaboratorCard"
import { makeFadeUp } from "@/lib/motion"

// ─── Data ───────────────────────────────────────────────────────────────────

const DAILY_LIFE = [
  {
    icon: "☕",
    time: "9h00",
    label: "Café du matin",
    desc: "La machine Nespresso dans la cuisine est sacrée. Personne ne se parle vraiment avant le deuxième café — c'est une règle non-écrite depuis 2015. L'ordre des capsules est sujet à débat régulier.",
  },
  {
    icon: "🧩",
    time: "9h15",
    label: "Stand-up",
    desc: "15 minutes max. On dit ce qu'on fait, ce qui bloque, et ce dont on a besoin. Pas de PowerPoint, pas de reporting. Si ça dépasse 15 min, quelqu'un sort une alarme.",
  },
  {
    icon: "⌨️",
    time: "10h → 12h",
    label: "Deep work",
    desc: "Bloc de concentration protégé. Pas de meetings non-urgents, Slack en silencieux. C'est là que le vrai travail se passe — et tout le monde le sait.",
  },
  {
    icon: "🎮",
    time: "12h30",
    label: "Gaming lunch",
    desc: "FIFA, Rocket League, Mario Kart selon l'humeur. Le classement interne est affiché dans la cuisine. Les discussions sur les choix de formation des équipes peuvent durer jusqu'à 14h.",
  },
  {
    icon: "💬",
    time: "Après-midi",
    label: "Code reviews & pair prog",
    desc: "Les PRs sont relues sérieusement — avec des commentaires qui apprennent quelque chose. Le pair programming est encouragé sur les sujets complexes, pas imposé à la chaîne.",
  },
  {
    icon: "🏍",
    time: "18h+",
    label: "Afterworks & balades",
    desc: "Le jeudi soir ou le vendredi, selon l'envie. Pour les motards, des weekends balade sont organisés. Pour les autres, bar, ciné, ou retour direct à la maison — aucune pression.",
  },
]

const EVENTS = [
  {
    freq: "Mensuel",
    emoji: "🍕",
    title: "Déjeuner mensuel",
    desc: "Accueil des nouveaux arrivants, point RH, retrouvailles entre collègues dispersés sur différentes missions. On mange bien, on parle vrai, on rigole.",
    details: ["Accueil des nouveaux · Tour de table", "Point sur les missions en cours", "Pizza ou restaurant selon le mois", "Gaming ou jeux de société en dessert"],
  },
  {
    freq: "Trimestriel",
    emoji: "🎯",
    title: "Soirée trimestrielle",
    desc: "Des moments de décompression et de cohésion pour l'ensemble des équipes. Escape game, bowling, soirée jeux, restau — chaque trimestre une surprise différente.",
    details: ["Escape game · Bowling · Laser game", "Soirée dégustation / restau", "Tournoi gaming organisé", "Bilan trimestriel décontracté"],
  },
  {
    freq: "Annuel",
    emoji: "🏔",
    title: "Weekend annuel",
    desc: "Le grand rendez-vous de l'année. Tout le monde, tous ensemble, pendant un weekend complet. Séminaire de cohésion avec une bonne dose d'aventure.",
    details: ["Weekend de 2 nuits (loge offert)", "Activité outdoor — ski, randonnée, accrobranche", "Soirée gala / déguisements", "Bilan annuel et vision N+1"],
  },
]

const PERKS = [
  { icon: "🏠", label: "Télétravail partiel", desc: "2 jours/semaine en télétravail, sans justification. La confiance est la règle par défaut." },
  { icon: "🍽", label: "Carte Swile", desc: "Tickets restaurant avec participation employeur généreuse. Le midi ne devrait pas être un sujet de stress." },
  { icon: "🏥", label: "Mutuelle Alan", desc: "Mutuelle 100% digitale, prise en charge à 60% par Koncept. Carte de tiers payant immédiate." },
  { icon: "📚", label: "1 500 €/an de formation", desc: "Budget formation disponible dès le premier jour. Certifs, confs, livres, MOOCs — tu choisis." },
  { icon: "🚗", label: "Parking + vélo", desc: "Parking gratuit sur site. Arceaux vélo sécurisés. Indemnité kilométrique vélo disponible." },
  { icon: "🤖", label: "Outils premium", desc: "GitHub Copilot, JetBrains IDEs, accès Pluralsight. Les bons outils ne sont pas une option." },
  { icon: "🎮", label: "Gaming setup", desc: "PS5, Switch, PC gaming en salle de repos. Pour décompresser vrai." },
  { icon: "📍", label: "Centre de Toulouse", desc: "Parc Technologique du Canal. Accessible tramway ligne T1, à 20 min du centre." },
]

const COLLABORATORS: Collaborator[] = [
  {
    name: "Thomas",
    role: "Lead Développeur Java",
    seniority: "8 ans chez Koncept",
    img: "https://picsum.photos/seed/thomas-lead-java-koncept/400/300",
    parcours: "Développeur Java confirmé en sortie d'école, Thomas a grandi sur des projets aéronautique et télécoms. Il a pris la lead tech d'une équipe de 6 personnes après 4 ans, sans jamais quitter le code.",
    stack: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "GitLab CI"],
    favProject: "La refonte du SI temps-réel d'un opérateur télécoms — 50 ms de latence, 2M d'événements/jour, et une migration sans downtime qu'on a préparée 6 mois.",
    lovesKoncept: "Ce qui m'a gardé ici, c'est la confiance réelle sur les décisions techniques. Je ne suis pas une ressource à placer — je suis un expert reconnu par mes pairs. Et l'équipe, franchement, ça aide.",
    advice: "Ne triche pas sur le niveau en entretien. On cherche quelqu'un qui sait ce qu'il ne sait pas autant que quelqu'un qui maîtrise sa stack. La curiosité se voit tout de suite.",
  },
  {
    name: "Sarah",
    role: "Architecte Solution",
    seniority: "5 ans chez Koncept",
    img: "https://picsum.photos/seed/sarah-architecte-koncept/400/300",
    parcours: "Passée par une grande SSII puis une startup fintech, Sarah a rejoint Koncept pour retrouver une taille humaine sans sacrifier la qualité des projets. Elle est aujourd'hui architecte référente sur deux comptes bancaires majeurs.",
    stack: ["Architecture microservices", "API Gateway", "AWS", "Kubernetes", "Terraform", "TypeScript"],
    favProject: "La conception d'une plateforme d'onboarding client pour une banque régionale — du DDD en greenfield, avec une équipe qu'on a formée de zéro. Le genre de projet qu'on n'a pas souvent.",
    lovesKoncept: "J'ai refusé des offres mieux payées pour rester ici. L'environnement, les projets complexes, et des collègues qui challengent vraiment mes décisions — ça n'a pas de prix sur une fiche de paie.",
    advice: "Prépare un exemple concret d'une décision technique que tu regrettes. C'est ce genre de recul qu'on valorise. On n'embauche pas des gens qui ont toujours raison — on embauche des gens qui apprennent vite.",
  },
  {
    name: "Karim",
    role: "DevOps Engineer",
    seniority: "3 ans chez Koncept",
    img: "https://picsum.photos/seed/karim-devops-koncept/400/300",
    parcours: "Adminsys reconverti DevOps, Karim a passé 4 ans dans l'infra bancaire avant de rejoindre Koncept. Il est maintenant référent Kubernetes sur plusieurs missions, tout en participant activement au kata club interne.",
    stack: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana", "Python", "Bash"],
    favProject: "La migration d'une plateforme monolithique vers du k8s multi-tenant — 3 mois de préparation, 48h de bascule, zéro incident en prod. On a eu les mains qui tremblaient, mais ça a tenu.",
    lovesKoncept: "J'ai appris plus en 18 mois ici qu'en 4 ans dans mon poste précédent. Et les 2 jours de télétravail sans justification à fournir, ça semble rien mais ça change tout sur la durée.",
    advice: "Mets en avant ce que tu as cassé autant que ce que tu as construit. Un bon inginfra sait pourquoi les choses tombent. Si tu n'as jamais rien cassé, c'est soit que tu n'as rien fait d'ambitieux, soit que tu ne t'en souviens pas.",
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Vie() {
  const reduce = useReducedMotion()

  const fadeUp = (delay = 0) => makeFadeUp(reduce, delay)

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p
            style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 20 }}
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
            On travaille sur des projets exigeants — et on vit bien entre les deux. Pas parce qu&apos;on y est obligés, mais parce qu&apos;on est des gens qui partagent les mêmes passions.
          </motion.p>
        </div>
      </section>

      {/* ── Une journée chez Koncept ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Le quotidien</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Une journée chez Koncept,<br />honnêtement.
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="daily-grid">
            {DAILY_LIFE.map((item, i) => (
              <motion.div key={item.label}
                style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "flex-start" }}
                {...fadeUp(i * 0.07)}
              >
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <span style={{ fontSize: 24, display: "block", marginBottom: 6 }}>{item.icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--color-career)", letterSpacing: "0.04em" }}>{item.time}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{item.label}</p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Les events</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Les rendez-vous qui font<br />l&apos;ADN Koncept.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {EVENTS.map((ev, i) => (
              <motion.div key={ev.title}
                style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.1)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 28 }}>{ev.emoji}</span>
                  <span style={{ background: "rgba(var(--color-career),0.15)", color: "var(--color-career)", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>{ev.freq}</span>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avantages ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Avantages</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
              Les petites choses qui<br />font la différence.
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="perks-grid">
            {PERKS.map((perk, i) => (
              <motion.div key={perk.label}
                style={{ padding: "24px 22px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}
                {...fadeUp(i * 0.06)}
              >
                <span style={{ fontSize: 22, display: "block", marginBottom: 12 }}>{perk.icon}</span>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{perk.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 12, lineHeight: 1.65 }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portraits collaborateurs ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Portraits</p>
            <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Ils font Koncept au quotidien.
            </h2>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "52ch", marginBottom: 48 }}>
              Pas des témoignages marketing. Des vrais retours de devs, sur leur parcours, leur stack, et pourquoi ils sont encore là.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="portraits-grid">
            {COLLABORATORS.map((c, i) => (
              <motion.div key={c.name} {...fadeUp(i * 0.1)}>
                <CollaboratorCard data={c} variant="career" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
              Ça ressemble à ce que tu cherches ?
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15 }}>
              Jette un œil aux offres ouvertes — ou écris-nous directement.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/carrieres/offres"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-career-dark)", color: "#fff", padding: "15px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
            >
              Voir les offres <ArrowRight size={15} />
            </Link>
            <Link href="/carrieres/candidature"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-career)", padding: "15px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", border: "1px solid var(--color-career-border)", transition: "background 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--color-career-bg)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent" }}
            >
              Candidature spontanée
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .perks-grid{grid-template-columns:repeat(3,1fr) !important}
          .portraits-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:767px){
          .daily-grid{grid-template-columns:1fr !important}
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
