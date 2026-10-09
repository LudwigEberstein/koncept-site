'use client'

import { motion, useReducedMotion } from "motion/react"
import { Coffee, Users, Code2, Utensils, Beer, Mountain, TreePine, Flame, Home, CreditCard, HeartPulse, GraduationCap, Car, Bot, Gamepad2, MapPin } from "lucide-react"
import { CollaboratorCard, type Collaborator } from "@/components/CollaboratorCard"
import { makeFadeUp } from "@/lib/motion"
import HeroSection from "@/components/ui/HeroSection"
import CtaBand from "@/components/ui/CtaBand"

// ─── Data ───────────────────────────────────────────────────────────────────

const DAILY_LIFE = [
  {
    icon: Coffee,
    time: "9h00",
    label: "Café du matin",
    desc: "La machine Nespresso dans la cuisine est sacrée. Personne ne se parle vraiment avant le deuxième café — c'est une règle non-écrite depuis 2015. L'ordre des capsules est sujet à débat régulier.",
  },
  {
    icon: Users,
    time: "9h30",
    label: "Stand-up",
    desc: "15 minutes max. On dit ce qu'on fait, ce qui bloque, et ce dont on a besoin. Pas de PowerPoint, pas de reporting. Si ça dépasse 15 min, quelqu'un sort une alarme.",
  },
  {
    icon: Code2,
    time: "10h → 12h",
    label: "Deep work",
    desc: "Bloc de concentration protégé. Pas de meetings non-urgents, Slack en silencieux. C'est là que le vrai travail se passe — et tout le monde le sait.",
  },
  {
    icon: Utensils,
    time: "12h30",
    label: "Déjeuner",
    desc: "On file chercher un truc aux food trucks du coin et on partage un repas. Discussions sur tout et sur rien : on refait le monde autour d'un kebab.",
  },
  {
    icon: Code2,
    time: "Après-midi",
    label: "Deep work",
    desc: "Même principe que le matin : un second bloc de concentration, sans interruption inutile.",
  },
  {
    icon: Beer,
    time: "18h+",
    label: "Après le boulot",
    desc: "Ça dépend des jours. Le jeudi, c'est « jeudi mousse » aux Marins d'Eau Douce, juste à côté des locaux. Le mercredi, ça peut être escalade. Aucune pression : chacun fait comme il veut.",
  },
]

const EVENTS = [
  {
    freq: "Une fois par an",
    icon: Mountain,
    title: "Weekend d'agence",
    desc: "Le grand rendez-vous de l'année : toute l'agence part ensemble le temps d'un weekend. De la cohésion, de l'aventure et de vrais moments en dehors des projets.",
    details: ["Toute l'agence réunie", "Activités en équipe", "Soirée et bonne humeur"],
  },
  {
    freq: "Décembre",
    icon: TreePine,
    title: "Soirée de Noël",
    desc: "On clôt l'année tous ensemble, autour d'un bon repas. L'occasion de se retrouver, de se raconter l'année et de souffler avant les fêtes.",
    details: ["Toute l'équipe", "Repas partagé", "Bilan de l'année, sans PowerPoint"],
  },
  {
    freq: "L'été",
    icon: Flame,
    title: "Barbecue d'été",
    desc: "Quand il fait beau, on sort les grills. Un moment détendu pour se retrouver, discuter et profiter, loin des écrans.",
    details: ["Toute l'équipe", "Grillades et boissons fraîches", "Jeux et discussions"],
  },
]

const PERKS = [
  { icon: Home, label: "Télétravail partiel", desc: "2 jours/semaine en télétravail, sans justification. La confiance est la règle par défaut." },
  { icon: CreditCard, label: "Carte Swile", desc: "Tickets restaurant avec participation employeur généreuse. Le midi ne devrait pas être un sujet de stress." },
  { icon: HeartPulse, label: "Mutuelle prise en charge", desc: "Une complémentaire santé financée à 100 % par Koncept. Carte de tiers payant immédiate." },
  { icon: GraduationCap, label: "Budget formation dédié", desc: "Un budget dédié à ta formation, disponible dès le premier jour. Certifs, confs, livres, MOOCs — tu choisis." },
  { icon: Car, label: "Parking + vélo", desc: "Parking gratuit sur site. Arceaux vélo sécurisés. Indemnité kilométrique vélo disponible." },
  { icon: Bot, label: "Outils premium", desc: "Claude Code, ChatGPT, la suite Microsoft complète et le partage de documents sur SharePoint. Les bons outils ne sont pas une option." },
  { icon: Gamepad2, label: "Gaming", desc: "Jeux vidéo et jeux de société entre collègues : on aime jouer, et ça se voit." },
  { icon: MapPin, label: "Centre de Toulouse", desc: "Parc Technologique du Canal. Accessible tramway ligne T1, à 20 min du centre." },
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
      <HeroSection side="career" next="bg" paddingTop={140} paddingBottom={80}>
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
      </HeroSection>

      {/* ── Une journée chez Koncept ── */}
      <section style={{ padding: "96px 0", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.div {...fadeUp()} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-career)", marginBottom: 12 }}>Le quotidien</p>
              <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 56 }}>
                Une journée chez Koncept,<br />honnêtement.
              </h2>
            </div>
            {/* Mario : à droite de l'en-tête, dans le flux (ne rallonge pas la section, ne recouvre aucun texte) */}
            <div className="mario-figure" aria-hidden="true">
              <picture>
                <source media="(prefers-reduced-motion: reduce)" srcSet="/culture/mario-flappybird-static.png" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/culture/mario-flappybird.gif" alt="" loading="lazy" />
              </picture>
            </div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="daily-grid">
            {DAILY_LIFE.map((item, i) => (
              <motion.div key={item.time}
                style={{ display: "flex", gap: 20, padding: "24px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "flex-start" }}
                {...fadeUp(i * 0.07)}
              >
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <item.icon size={24} aria-hidden="true" style={{ display: "block", margin: "0 auto 8px", color: "var(--side2)" }} />
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
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.75, maxWidth: "56ch", marginTop: -32, marginBottom: 48 }}>
              Tout est organisé par Valentine, notre DRH préférée — la maman de Koncept.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="events-grid">
            {EVENTS.map((ev, i) => (
              <motion.div className="glass-card" key={ev.title}
                style={{ padding: "36px 32px", borderRadius: 16, border: "1px solid var(--color-career-border)", background: "var(--color-career-bg)", display: "flex", flexDirection: "column" }}
                {...fadeUp(i * 0.1)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <ev.icon size={28} aria-hidden="true" style={{ color: "var(--side2)" }} />
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
      <CtaBand side="career" prev="bg2" title="Ça ressemble à ce que tu cherches ?" text="Jette un œil aux offres ouvertes — ou écris-nous directement."
        primary={{ label: "Voir les offres", href: "/carrieres/offres" }}
        secondary={{ label: "Candidature spontanée", href: "/carrieres/candidature" }}
      />

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
