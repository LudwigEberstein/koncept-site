'use client'

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { X, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

// ─── Types ────────────────────────────────────────────────────────────────────

type Sector = "Transport" | "Santé" | "Culture" | "Aéronautique" | "Banque" | "Télécoms"

type CaseStudy = {
  id: string
  client: string
  sector: Sector
  sectorColor: string
  headline: string
  tagline: string
  keyMetrics: { value: string; label: string }[]
  stack: string[]
  // detail
  contexte: string
  enjeux: { title: string; desc: string }[]
  solution: string[]
  resultats: { value: string; label: string; sub?: string }[]
  duration: string
  teamSize: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CASES: CaseStudy[] = [
  {
    id: "oolive",
    client: "oOLive",
    sector: "Transport",
    sectorColor: "#f59e0b",
    headline: "Refonte du SI temps-réel pour une startup du dernier kilomètre",
    tagline: "Tracking en direct pour 200 livreurs sur 8 villes, optimisation de tournées, intégration multi-partenaires logistiques.",
    keyMetrics: [
      { value: "−23 %", label: "de km parcourus" },
      { value: "99.8 %", label: "d'uptime en prod" },
      { value: "−18 min", label: "de délai moyen de livraison" },
    ],
    stack: ["Java 17", "Spring Boot", "Kafka", "React", "WebSocket", "Kubernetes", "GCP", "Redis", "PostgreSQL"],
    duration: "8 mois",
    teamSize: "4 développeurs",
    contexte: "oOLive est une startup toulousaine spécialisée dans la livraison du dernier kilomètre en milieu urbain. Au moment du projet, la société opérait sur 8 villes avec 200 livreurs actifs et traitait jusqu'à 5 000 colis par jour. Leur SI historique — construit rapidement à la levée — ne tenait plus la charge : latences de tracking supérieures à 30 secondes, impossibilité d'intégrer les APIs des grands transporteurs partenaires, et une architecture monolithique bloquant tout déploiement d'urgence.",
    enjeux: [
      { title: "Tracking temps-réel sous 2s", desc: "Les livreurs et les expéditeurs devaient voir la position des colis en temps quasi-réel — condition non-négociable du contrat avec leur client principal (réseau de pharmacies)." },
      { title: "Optimisation des tournées", desc: "L'algorithme d'affectation des livraisons sur les tournées était fait à la main. L'enjeu était de l'automatiser tout en laissant aux dispatchers une interface de supervision et de surcharge manuelle." },
      { title: "Intégration API partenaires", desc: "Chronopost, Colis Privé et DHL exposaient chacun des APIs propriétaires incompatibles. Il fallait une couche d'abstraction permettant d'en ajouter de nouveaux sans modifier le cœur applicatif." },
      { title: "Migration sans interruption", desc: "oOLive ne pouvait pas se permettre une coupure de service. La bascule devait être progressive, en shadow-mode pendant 6 semaines, avant un cutover en week-end." },
    ],
    solution: [
      "Architecture microservices event-driven sur Kubernetes (GCP GKE), avec Kafka comme bus d'événements central. Chaque domaine métier — tracking, tournées, facturation, notifications — est un service indépendant déployable séparément.",
      "Moteur de tracking WebSocket : chaque livreur envoie sa position GPS toutes les 10 secondes via l'app mobile. Le serveur pousse les mises à jour en temps réel aux tableaux de bord dispatchers et à l'API de suivi client.",
      "Algorithme d'optimisation de tournées basé sur VRP (Vehicle Routing Problem) adapté aux contraintes urbaines : fenêtres de livraison, capacité véhicule, restrictions horaires. Les suggestions sont calculées en moins de 3 secondes pour 300 colis.",
      "Gateway d'intégration partenaires : un adaptateur par transporteur, exposant une interface commune. Ajout d'un nouveau partenaire = 2 jours de développement, sans toucher au core.",
      "Migration en shadow-mode : le nouvel SI tournait en parallèle de l'ancien pendant 6 semaines, les deux traitant les mêmes événements. Les écarts de comportement étaient alertés automatiquement.",
    ],
    resultats: [
      { value: "−23 %", label: "de kilomètres parcourus", sub: "grâce à l'optimisation de tournées" },
      { value: "−18 min", label: "de délai moyen de livraison", sub: "par rapport au SI précédent" },
      { value: "99.8 %", label: "d'uptime depuis le go-live", sub: "sur 8 mois de production" },
      { value: "< 1.2 s", label: "de latence tracking", sub: "contre 30+ s sur l'ancien système" },
      { value: "0", label: "incident lors du cutover", sub: "grâce aux 6 semaines de shadow-mode" },
      { value: "+3", label: "partenaires logistiques intégrés", sub: "en 6 semaines post go-live" },
    ],
  },
  {
    id: "jade",
    client: "Jade",
    sector: "Santé",
    sectorColor: "#06b6d4",
    headline: "Plateforme DMP cloud-native certifiée HDS pour un réseau de cliniques",
    tagline: "Dossier Médical Partagé interopérable FHIR pour 12 établissements, zéro incident RGPD, certification HDS obtenue en 4 mois.",
    keyMetrics: [
      { value: "HDS", label: "certifié en 4 mois" },
      { value: "0", label: "incident RGPD" },
      { value: "−40 min", label: "de saisie / praticien / jour" },
    ],
    stack: [".NET 8", "Azure HDS", "FHIR R4", "Angular 17", "PostgreSQL", "Key Vault", "Docker", "Terraform"],
    duration: "11 mois",
    teamSize: "5 développeurs + 1 consultant sécurité",
    contexte: "Jade est un réseau de cliniques privées spécialisées en ophtalmologie et chirurgie ambulatoire, opérant sur 12 établissements dans le Sud-Ouest. Face à l'obligation réglementaire de mise en conformité HDS (Hébergeur de Données de Santé) et à l'obsolescence de leur logiciel de dossier patient (arrêt de maintenance annoncé par l'éditeur), le groupe a décidé de construire une plateforme propriétaire interopérable, cloud-native, certifiable.",
    enjeux: [
      { title: "Certification HDS obligatoire", desc: "Toute donnée de santé hébergée doit l'être chez un HDS certifié. Azure Healthcare API répond à cette exigence en France, mais l'architecture et les pratiques DevSecOps doivent elles-mêmes être auditables." },
      { title: "Interopérabilité FHIR", desc: "L'ANS (Agence du Numérique en Santé) impose le standard FHIR R4 pour les échanges inter-établissements. Le DMP devait exposer des endpoints conformes pour s'intégrer au SI-CPS (Carte Professionnelle de Santé)." },
      { title: "Migration des données historiques", desc: "7 ans de dossiers patients (430 000 entrées) stockés dans un format propriétaire devaient être migrés sans perte, avec traçabilité complète de chaque transformation." },
      { title: "Adoption par les praticiens", desc: "Le frein principal n'était pas technique — c'était l'adhésion des médecins. La nouvelle interface devait être plus rapide et moins intrusive que l'ancien logiciel pour ne pas générer de résistance au changement." },
    ],
    solution: [
      "Plateforme .NET 8 hébergée sur Azure Healthcare APIs (certifié HDS France), avec Infrastructure-as-Code Terraform pour la reproductibilité et l'auditabilité de l'environnement. Tous les secrets sont gérés via Azure Key Vault, aucun credential en dur ni en variable d'environnement.",
      "API FHIR R4 native : chaque ressource patient (Patient, Observation, DiagnosticReport, Appointment) est exposée en FHIR conformément aux profils ANS. L'intégration SI-CPS a été validée en 3 semaines.",
      "Pipeline de migration en 3 passes : extraction du format propriétaire, normalisation en FHIR, validation par un moteur de règles métier (150 règles de cohérence codées avec les médecins-référents). Les dossiers invalides sont isolés pour correction manuelle avant import.",
      "Frontend Angular 17 avec design system interne calqué sur les workflows réels des praticiens — coconstruit en ateliers UX avec des chirurgiens et des secrétaires médicales. Consultation du dossier en 2 clics, ordonnance en 4 clics.",
      "Audit de sécurité mensuel automatisé (SAST via SonarQube + DAST via OWASP ZAP en pipeline CI), rapport fourni au DPO du groupe chaque trimestre.",
    ],
    resultats: [
      { value: "HDS", label: "certification obtenue", sub: "en 4 mois, première présentation" },
      { value: "0", label: "incident RGPD", sub: "depuis le go-live (18 mois)" },
      { value: "−40 min", label: "de saisie / praticien / jour", sub: "mesuré à 3 mois post-déploiement" },
      { value: "430 000", label: "dossiers migrés", sub: "en 6 semaines, 99.97 % sans intervention manuelle" },
      { value: "12", label: "établissements interconnectés", sub: "partage de dossier inter-sites en temps réel" },
      { value: "98 %", label: "de satisfaction praticiens", sub: "enquête interne à 6 mois" },
    ],
  },
  {
    id: "compagnon",
    client: "Édition Compagnon",
    sector: "Culture",
    sectorColor: "#8b5cf6",
    headline: "Plateforme éditoriale numérique pour une maison d'édition indépendante",
    tagline: "Catalogue de 3 000 titres, espace auteur self-service, distribution multi-librairies (FNAC, Amazon, Apple Books) et moteur DRM intégré.",
    keyMetrics: [
      { value: "−40 %", label: "de délai de mise en ligne" },
      { value: "3 000", label: "titres migrés en 6 semaines" },
      { value: "98 %", label: "d'auteurs autonomes" },
    ],
    stack: ["Node.js", "NestJS", "React", "PostgreSQL", "S3", "Stripe", "Readium DRM", "Redis", "Docker"],
    duration: "7 mois",
    teamSize: "3 développeurs",
    contexte: "Édition Compagnon est une maison d'édition indépendante spécialisée dans la littérature régionale et les beaux livres numériques. Avec 3 000 titres au catalogue et une croissance de 35 % des ventes numériques en deux ans, leur process de mise en ligne — entièrement manuel, géré par email et tableurs — était devenu un goulot d'étranglement. Les délais entre signature d'un auteur et première vente atteignaient 6 semaines. L'objectif était de passer sous 3 semaines.",
    enjeux: [
      { title: "Distribution multi-plateforme", desc: "FNAC, Amazon KDP, Apple Books, Kobo et leur boutique propre imposent chacun des formats et des APIs différents (EPUB3, PDF, formats propriétaires). Une mise en ligne = 5 opérations manuelles distinctes." },
      { title: "Gestion des DRM", desc: "La protection anti-copie (DRM) devait être appliquée automatiquement à la mise en ligne, sans intervention technique de l'équipe éditoriale. Le standard Readium LCP a été retenu pour sa compatibilité avec les liseuses du marché." },
      { title: "Espace auteur self-service", desc: "Les auteurs envoyaient leurs manuscrits par email, sans visibilité sur l'état de traitement. L'enjeu était de leur donner un portail autonome : dépôt, suivi, corrections, validation, et reporting des ventes en temps réel." },
      { title: "Migration du catalogue existant", desc: "3 000 titres en formats hétérogènes (Word, InDesign export, PDF natifs) devaient être normalisés en EPUB3 et réindexés avec leurs métadonnées ONIX (standard de l'industrie du livre)." },
    ],
    solution: [
      "Back-office éditorial NestJS : workflow de publication en 6 étapes (dépôt → validation format → enrichissement métadonnées → génération DRM → distribution → reporting). Chaque étape est asynchrone et reprise automatiquement en cas d'échec.",
      "Pipeline de conversion automatique : les fichiers source (Word, InDesign IDML, PDF) sont convertis en EPUB3 via Pandoc + un post-processeur maison qui applique la charte graphique de l'éditeur. La conversion d'un titre prend en moyenne 4 minutes.",
      "Intégration DRM Readium LCP : à la conversion, chaque titre reçoit une empreinte chiffrée unique. Les licences de lecture sont générées à l'achat et liées à l'appareil de l'acheteur — compatible avec 90 % des liseuses du marché.",
      "Connecteurs de distribution : un adaptateur par plateforme (Amazon SP-API, Apple Books Connect, FNAC API, Kobo API), exposant une interface commune. La mise en ligne d'un titre sur les 5 plateformes prend 8 minutes en automatique contre 3h en manuel.",
      "Portail auteur React : dépôt de fichiers avec validation format en temps réel, suivi du statut de publication, historique des corrections demandées, et tableau de bord des ventes (par plateforme, par période, par titre).",
    ],
    resultats: [
      { value: "−40 %", label: "de délai de mise en ligne", sub: "de 6 semaines à moins de 3 semaines" },
      { value: "3 000", label: "titres migrés", sub: "en 6 semaines, EPUB3 + ONIX" },
      { value: "98 %", label: "d'auteurs autonomes sur le portail", sub: "à 2 mois du lancement" },
      { value: "8 min", label: "de mise en ligne multi-plateformes", sub: "contre 3h en processus manuel" },
      { value: "5", label: "librairies distributrices", sub: "FNAC · Amazon · Apple · Kobo · boutique propre" },
      { value: "+22 %", label: "de CA numérique", sub: "à 6 mois, corrélé à la réduction des délais" },
    ],
  },
]

const SECTORS: ("Tous" | Sector)[] = ["Tous", "Transport", "Santé", "Culture", "Aéronautique", "Banque", "Télécoms"]

const SECTOR_COLORS: Record<string, string> = {
  Transport: "#f59e0b",
  Santé: "#06b6d4",
  Culture: "#8b5cf6",
  Aéronautique: "#3b82f6",
  Banque: "#10b981",
  Télécoms: "#f97316",
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Realisations() {
  const reduce = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<"Tous" | Sector>("Tous")
  const [selected, setSelected] = useState<CaseStudy | null>(null)

  const filtered = activeFilter === "Tous" ? CASES : CASES.filter(c => c.sector === activeFilter)

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">
          <div>
            <motion.p
              style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 20 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            >
              Réalisations
            </motion.p>
            <motion.h1
              style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Ce qu&apos;on a<br />construit.<br /><span style={{ color: "var(--color-accent)" }}>Vraiment.</span>
            </motion.h1>
            <motion.p
              style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.8, maxWidth: "48ch" }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            >
              Pas de slides de présentation. Des projets livrés, des métriques mesurées, des clients qui renouvellent. Les cas présentés ici sont anonymisés à la demande de nos clients — les données sont réelles.
            </motion.p>
          </div>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { value: "10+", label: "années de delivery", sub: "fondé en 2014" },
              { value: "50+", label: "projets livrés", sub: "depuis 2020" },
              { value: "7", label: "secteurs couverts", sub: "aéro, banque, santé…" },
              { value: "87 %", label: "de clients qui renouvellent", sub: "taux mesuré sur 3 ans" },
            ].map(s => (
              <div key={s.label} style={{ padding: "28px 22px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.03em" }}>{s.value}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--color-ink)", marginTop: 5 }}>{s.label}</p>
                <p style={{ color: "var(--color-ink-2)", fontSize: 11, marginTop: 3 }}>{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section style={{ padding: "80px 0 120px", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>

          {/* Filters */}
          <motion.div
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 56 }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
          >
            {SECTORS.map(s => {
              const active = s === activeFilter
              const color = s === "Tous" ? "var(--color-accent)" : (SECTOR_COLORS[s] ?? "var(--color-accent)")
              return (
                <button
                  key={s}
                  onClick={() => setActiveFilter(s)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 9999,
                    fontSize: 13,
                    fontWeight: 700,
                    border: `1px solid ${active ? color : "var(--color-border)"}`,
                    background: active ? `${color}18` : "transparent",
                    color: active ? color : "var(--color-ink-2)",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {s}
                </button>
              )
            })}
          </motion.div>

          {/* Case study cards */}
          <motion.div
            layout
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
            className="cases-grid"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => (
                <motion.article
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    borderRadius: 18,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-2)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected(c)}
                  whileHover={reduce ? undefined : { y: -4, borderColor: c.sectorColor + "60" }}
                >
                  {/* Colored sector strip */}
                  <div style={{ height: 4, background: c.sectorColor, flexShrink: 0 }} />

                  <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Sector badge + meta */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
                        color: c.sectorColor, background: `${c.sectorColor}15`,
                        border: `1px solid ${c.sectorColor}30`, borderRadius: 6, padding: "3px 9px"
                      }}>
                        {c.sector}
                      </span>
                      <div style={{ display: "flex", gap: 12 }}>
                        <span style={{ fontSize: 11, color: "var(--color-ink-2)" }}>{c.duration}</span>
                        <span style={{ fontSize: 11, color: "var(--color-ink-2)" }}>{c.teamSize}</span>
                      </div>
                    </div>

                    {/* Client + headline */}
                    <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.2 }}>
                      {c.client}
                    </p>
                    <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.65, marginBottom: 24, flex: 1 }}>{c.tagline}</p>

                    {/* Key metrics */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 22 }}>
                      {c.keyMetrics.map(m => (
                        <div key={m.label} style={{ padding: "12px 10px", borderRadius: 10, background: `${c.sectorColor}09`, border: `1px solid ${c.sectorColor}25`, textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 16, fontWeight: 800, color: c.sectorColor, letterSpacing: "-0.02em", lineHeight: 1 }}>{m.value}</p>
                          <p style={{ fontSize: 10, color: "var(--color-ink-2)", marginTop: 4, lineHeight: 1.3 }}>{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stack tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                      {c.stack.slice(0, 5).map(s => (
                        <span key={s} style={{ fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)", background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 5, padding: "2px 8px" }}>{s}</span>
                      ))}
                      {c.stack.length > 5 && (
                        <span style={{ fontSize: 11, fontWeight: 600, color: "var(--color-ink-2)", background: "var(--color-bg-3)", border: "1px solid var(--color-border)", borderRadius: 5, padding: "2px 8px" }}>+{c.stack.length - 5}</span>
                      )}
                    </div>

                    {/* CTA */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: c.sectorColor, fontSize: 13, fontWeight: 700 }}>
                      Voir l&apos;étude de cas <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--color-ink-2)" }}>
              <p style={{ fontSize: 16 }}>Aucune réalisation pour ce secteur pour le moment.</p>
              <button onClick={() => setActiveFilter("Tous")} style={{ marginTop: 16, color: "var(--color-accent)", fontWeight: 700, fontSize: 14, background: "none", border: "none", cursor: "pointer" }}>
                Voir toutes les réalisations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
              Votre projet ressemble à l&apos;un de ces cas ?
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15 }}>
              Parlons-en. On peut estimer ensemble faisabilité et charge.
            </p>
          </div>
          <Link href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.12)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
          >
            Parlons de votre projet <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Detail modal ── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(4px)", zIndex: 100 }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(720px, 100vw)",
                background: "var(--color-bg)",
                borderLeft: "1px solid var(--color-border)",
                zIndex: 101,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Panel header */}
              <div style={{
                position: "sticky", top: 0,
                background: "var(--color-bg)",
                borderBottom: "1px solid var(--color-border)",
                padding: "20px 32px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                zIndex: 10,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 4, height: 32, borderRadius: 2, background: selected.sectorColor }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 800 }}>{selected.client}</p>
                    <p style={{ fontSize: 12, color: "var(--color-ink-2)", marginTop: 2 }}>{selected.sector} · {selected.duration} · {selected.teamSize}</p>
                  </div>
                </div>
                <button onClick={() => setSelected(null)}
                  aria-label="Fermer l'étude de cas"
                  style={{ width: 36, height: 36, borderRadius: 9, background: "var(--color-bg-2)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-ink-2)" }}
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Panel body */}
              <div style={{ padding: "36px 32px", flex: 1 }}>

                {/* Headline */}
                <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 32 }}>
                  {selected.headline}
                </h2>

                {/* 1. Contexte */}
                <div style={{ marginBottom: 32 }}>
                  <SectionLabel num="01" label="Contexte" color={selected.sectorColor} />
                  <p style={{ color: "var(--color-ink-2)", fontSize: 14, lineHeight: 1.85 }}>{selected.contexte}</p>
                </div>

                {/* 2. Enjeux */}
                <div style={{ marginBottom: 32 }}>
                  <SectionLabel num="02" label="Enjeux" color={selected.sectorColor} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {selected.enjeux.map(e => (
                      <div key={e.title} style={{ padding: "16px 18px", borderRadius: 12, border: `1px solid ${selected.sectorColor}25`, background: `${selected.sectorColor}07` }}>
                        <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, color: selected.sectorColor, marginBottom: 6 }}>{e.title}</p>
                        <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.7 }}>{e.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Solution */}
                <div style={{ marginBottom: 32 }}>
                  <SectionLabel num="03" label="Solution mise en œuvre" color={selected.sectorColor} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {selected.solution.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ width: 24, height: 24, borderRadius: 7, background: `${selected.sectorColor}18`, border: `1px solid ${selected.sectorColor}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: selected.sectorColor, flexShrink: 0, marginTop: 1 }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.75 }}>{s}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Stack */}
                <div style={{ marginBottom: 32 }}>
                  <SectionLabel num="04" label="Stack technique" color={selected.sectorColor} />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {selected.stack.map(s => (
                      <span key={s} style={{
                        fontSize: 12, fontWeight: 700, color: selected.sectorColor,
                        background: `${selected.sectorColor}12`, border: `1px solid ${selected.sectorColor}30`,
                        borderRadius: 7, padding: "5px 12px",
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Résultats */}
                <div>
                  <SectionLabel num="05" label="Résultats" color={selected.sectorColor} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {selected.resultats.map(r => (
                      <div key={r.label} style={{ padding: "20px 18px", borderRadius: 12, border: `1px solid ${selected.sectorColor}30`, background: `${selected.sectorColor}08` }}>
                        <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, color: selected.sectorColor, letterSpacing: "-0.02em", lineHeight: 1 }}>{r.value}</p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginTop: 6 }}>{r.label}</p>
                        {r.sub && <p style={{ fontSize: 11, color: "var(--color-ink-2)", marginTop: 3, lineHeight: 1.5 }}>{r.sub}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel footer */}
              <div style={{ padding: "24px 32px", borderTop: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                <p style={{ fontSize: 13, color: "var(--color-ink-2)", marginBottom: 14 }}>
                  Ce projet vous parle ? Discutons de votre contexte.
                </p>
                <Link href="/contact"
                  onClick={() => setSelected(null)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "13px 24px", borderRadius: 9, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
                >
                  Parler à un expert <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:1023px){
          .cases-grid{grid-template-columns:repeat(2,1fr) !important}
          .hero-grid{grid-template-columns:1fr !important;gap:48px !important}
        }
        @media(max-width:639px){
          .cases-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </>
  )
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function SectionLabel({ num, label, color }: { num: string; label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 11, fontWeight: 800, color, letterSpacing: "0.06em" }}>{num}</span>
      <div style={{ height: 1, width: 20, background: color, opacity: 0.5 }} />
      <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color }}>{label}</span>
    </div>
  )
}
