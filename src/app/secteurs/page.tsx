'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

// ─── Enriched sector data ───────────────────────────────────────────────────

type SectorId = "aeronautique" | "banque" | "telecom" | "services-it" | "robotique" | "transport" | "secteur-public"

const SECTORS: {
  id: SectorId
  name: string
  headline: string
  color: string
  credential: string
  context: string
  enjeux: string[]
  cequonfait: string
  missions: { title: string; desc: string }[]
  stack: string[]
}[] = [
  {
    id: "aeronautique",
    name: "Aéronautique",
    headline: "L'exigence du zéro défaut.",
    color: "#3b82f6",
    credential: "Présents dans la filière depuis 2014",
    context:
      "Le logiciel embarqué et les systèmes de production aéronautiques n'ont pas de marge d'erreur. Nos équipes connaissent les contraintes DO-178C, les processus PLM et les cycles de validation de l'industrie. Toulouse est au cœur de la filière — et nous y sommes depuis le début.",
    enjeux: [
      "Conformité DO-178C et ARP4754A sur les systèmes critiques",
      "Systèmes embarqués temps réel et haute fiabilité",
      "Intégration PLM et MES sur la chaîne de production",
      "Traçabilité et auditabilité totale des développements",
      "Cycles de validation longs — maîtrise du V-model",
    ],
    cequonfait:
      "Développement et maintenance de systèmes de production, outils de suivi de fabrication, interfaces PLM, simulateurs et outillage tests. Nos consultants interviennent en mode projet ou renfort sur des cycles longs, avec une connaissance métier qui raccourcit drastiquement la montée en charge.",
    missions: [
      { title: "MES chaîne assemblage court-courrier", desc: "Conception et développement d'un Manufacturing Execution System pour la supervision de ligne d'assemblage, avec intégration temps réel aux outils PLM existants." },
      { title: "Migration COBOL → Java d'un système de suivi", desc: "Refonte complète d'un système de traçabilité de production 20 ans d'âge — zero downtime, migration progressive, couverture de tests 92%." },
      { title: "Simulateur de formation techniciens", desc: "Développement d'un simulateur logiciel pour la formation des techniciens de maintenance sur systèmes embarqués avioniques." },
    ],
    stack: ["Java", "C++", ".NET", "Python", "GitLab CI", "JIRA", "SAP", "Dassault PLM"],
  },
  {
    id: "banque",
    name: "Banque & Finance",
    headline: "La rigueur réglementaire, sans sacrifier l'agilité.",
    color: "#f59e0b",
    credential: "ISO 27001 · Exigée par nos clients bancaires",
    context:
      "DSP2, RGPD, Bâle III, DORA — les contraintes réglementaires bancaires s'alourdissent chaque année. Nos équipes accompagnent les DSI dans la modernisation de leurs SI core, la mise en conformité, et le développement de portails clients qui tiennent la charge.",
    enjeux: [
      "Conformité DSP2, RGPD, Bâle III et DORA",
      "Modernisation des systèmes legacy (COBOL, mainframe)",
      "Open Banking et API-fication des SI",
      "Sécurité, fraude et gestion des accès (IAM)",
      "Haute disponibilité — zéro tolérance aux interruptions",
    ],
    cequonfait:
      "Architecture et développement de SI bancaires, moteurs de règles métier, portails clients self-service, APIs de paiement conformes DSP2. Nous intervenons aussi bien sur des refondations complètes que sur des évolutions réglementaires en urgence.",
    missions: [
      { title: "Portail client self-service — banque régionale", desc: "Refonte complète du portail web et mobile d'une banque mutualiste, intégration Open Banking, authentification forte FIDO2, 200k utilisateurs actifs." },
      { title: "Moteur de détection de fraude", desc: "Développement d'un moteur de règles temps réel pour la détection de transactions frauduleuses, avec scoring machine learning et dashboard supervision." },
      { title: "API de paiement conforme DSP2", desc: "Conception et déploiement d'une API PSD2 PISP/AISP avec certification par un TPP agréé, documentation OpenAPI complète." },
    ],
    stack: ["Java", "Spring Boot", "Angular", "Oracle", "Kafka", "OpenAPI", "Keycloak", "Docker"],
  },
  {
    id: "telecom",
    name: "Télécommunications",
    headline: "Des volumes critiques. Des systèmes qui ne s'arrêtent jamais.",
    color: "#8b5cf6",
    credential: "BSS/OSS, facturation temps réel, orchestration 5G",
    context:
      "Les systèmes télécoms ne dorment jamais. Facturation en temps réel, portails abonnés à fort trafic, orchestration réseau — chaque minute d'indisponibilité a un impact commercial direct. Nos équipes connaissent les architectures BSS/OSS et interviennent sur les sujets les plus exigeants.",
    enjeux: [
      "Haute disponibilité BSS/OSS (SLA 99.95%+)",
      "Facturation temps réel (Real-Time Rating & Charging)",
      "Portails abonnés à fort trafic (millions d'utilisateurs)",
      "Orchestration réseau 5G et API exposure",
      "Convergence fixe/mobile et offres multiservices",
    ],
    cequonfait:
      "Refonte et évolution de systèmes de facturation, développement de portails abonnés, APIs d'exposition réseau, orchestration de services. Nous intervenons sur des stacks Java et microservices, avec une attention particulière à la performance sous charge.",
    missions: [
      { title: "Refonte système de facturation opérateur mobile", desc: "Migration d'un système de billing batch vers une architecture event-driven temps réel, traitement de 50M d'événements/jour, zéro interruption de service pendant la bascule." },
      { title: "Portail abonné haute disponibilité", desc: "Développement d'un portail self-care responsive pour 2M d'abonnés, architecture microservices, CDN, SLA 99.95% atteint en production." },
      { title: "API d'activation de services 5G", desc: "Conception d'une API d'orchestration pour l'activation automatisée de services réseau 5G NSA, conformité TM Forum OpenAPI." },
    ],
    stack: ["Java", "Spring Boot", "Microservices", "Kafka", "Kubernetes", "Docker", "Oracle", "REST", "SOAP"],
  },
  {
    id: "services-it",
    name: "Services IT",
    headline: "Renfort qualifié. Rapidement opérationnel.",
    color: "#D42020",
    credential: "Éditeurs, intégrateurs, scale-ups — nous connaissons votre réalité",
    context:
      "Éditeurs logiciels, intégrateurs, hébergeurs, startups en croissance — le secteur IT a ses propres défis. Time-to-market, dette technique, turnover, montée en maturité DevOps. Nos équipes s'intègrent rapidement à votre contexte sans phase d'apprentissage longue.",
    enjeux: [
      "Time-to-market et vélocité sur les nouvelles features",
      "Dette technique accumulée qui freine la livraison",
      "Turnover et fidélisation des profils senior",
      "Montée en maturité DevOps et culture engineering",
      "Qualité de code et réduction des régressions",
    ],
    cequonfait:
      "Renfort d'équipe sur des stacks modernes (React, Node.js, Java, .NET), mise en place de pratiques engineering (TDD, code review, CI/CD), audit technique et plan de remédiation dette. On s'intègre dans vos rituels Agile sans friction.",
    missions: [
      { title: "Renfort équipe React/Node.js — SaaS B2B", desc: "Intégration de 3 développeurs seniors dans une équipe scale-up, mise en place TDD, réduction des bugs production de 60% en 6 mois." },
      { title: "CI/CD complet sur une base de code existante", desc: "Audit du processus de déploiement, mise en place GitLab CI, SonarQube et déploiement automatisé sur Azure — de 1 déploiement/semaine à 12/semaine." },
      { title: "Plan de remédiation dette technique", desc: "Audit de 150k lignes de code, cartographie des risques, plan de refactoring priorisé par valeur métier — livraison en 3 sprints de recommandations actionnables." },
    ],
    stack: ["React", "Node.js", "TypeScript", "Java", ".NET", "Docker", "GitLab CI", "SonarQube", "AWS", "Azure"],
  },
  {
    id: "robotique",
    name: "Robotique",
    headline: "Connecter le monde physique au numérique.",
    color: "#06b6d4",
    credential: "IHM industrielles, jumeaux numériques, IoT",
    context:
      "La robotique industrielle génère des données en masse — mais les exploiter reste un défi. Nos équipes développent les interfaces de pilotage, les middlewares de communication et les outils de visualisation qui donnent du sens à ces données en temps réel.",
    enjeux: [
      "Interfaces homme-machine (IHM) pour robots industriels",
      "Jumeaux numériques et maintenance prédictive",
      "Protocoles temps réel (ROS, OPC-UA, MQTT)",
      "Robustesse et safety des systèmes de contrôle",
      "Intégration avec les systèmes MES et SCADA existants",
    ],
    cequonfait:
      "Développement d'IHM industrielles, middlewares IoT, connecteurs OPC-UA/MQTT, dashboards temps réel et jumeaux numériques. Nous travaillons avec les stacks C++, Python et ROS pour les systèmes embarqués, et React/Node.js pour les couches de visualisation.",
    missions: [
      { title: "IHM de pilotage cellule robotisée", desc: "Développement d'une interface opérateur pour une cellule de soudage robotisée — supervision temps réel, alertes, historique d'anomalies et reporting production." },
      { title: "Jumeau numérique pour maintenance prédictive", desc: "Conception d'un jumeau numérique d'une ligne de production, intégration des capteurs via OPC-UA, détection d'anomalies par règles métier." },
      { title: "Middleware IoT pour capteurs industriels", desc: "Développement d'un bus de données MQTT → InfluxDB → Grafana pour 500+ capteurs d'une usine de fabrication, latence < 100ms." },
    ],
    stack: ["C++", "Python", "ROS", "Qt", "MQTT", "OPC-UA", "Node-RED", "InfluxDB", "Grafana"],
  },
  {
    id: "transport",
    name: "Transport & Mobilité",
    headline: "Des systèmes fiables pour des environnements sans concession.",
    color: "#16a34a",
    credential: "Billettique NFC, supervision de flottes, systèmes embarqués",
    context:
      "Ponctualité, fiabilité, conformité NF — le transport public ne supporte pas les approximations. Nos équipes ont développé des systèmes billettiques, des outils de supervision de flottes et des portails voyageurs pour des opérateurs de transport régionaux et nationaux.",
    enjeux: [
      "Billettique sans contact (NFC, QR, mobile) et interopérabilité",
      "Supervision de flottes en temps réel",
      "Systèmes embarqués sur véhicules (bus, tram, train)",
      "Portails voyageurs haute disponibilité",
      "Conformité NF 318 et SIRI/GTFS pour les données transport",
    ],
    cequonfait:
      "Systèmes billettiques complets, APIs temps réel GTFS/SIRI, dashboards de supervision de flottes, applications mobiles voyageurs. Nous intervenons aussi bien sur l'embarqué que sur les back-offices de gestion.",
    missions: [
      { title: "Système billettique NFC — réseau urbain", desc: "Développement d'un système complet de billettique sans contact pour un réseau de 80 lignes : validation, rechargement, back-office de gestion et reporting." },
      { title: "Dashboard supervision flotte de bus", desc: "Outil temps réel de supervision d'une flotte de 300 bus — position GPS, ponctualité, alertes pannes, reporting conducteurs." },
      { title: "Application voyageur avec notifications temps réel", desc: "Application mobile iOS/Android et portail web avec info trafic temps réel (SIRI), calcul d'itinéraire et alertes perturbations." },
    ],
    stack: [".NET", "Angular", "React Native", "SQL Server", "Azure", "MQTT", "GTFS", "SIRI", "NFC"],
  },
  {
    id: "secteur-public",
    name: "Secteur public",
    headline: "Dématérialiser sans déshumaniser.",
    color: "#64748b",
    credential: "Marchés publics, RGS, RGAA, cloud souverain",
    context:
      "La dématérialisation du service public avance vite — mais les contraintes sont nombreuses : marchés publics, référentiels RGS et RGAA, souveraineté des données. Nos équipes maîtrisent ces cadres et accompagnent les collectivités et services de l'État dans leur transformation numérique.",
    enjeux: [
      "Accessibilité RGAA et inclusion numérique",
      "Sécurité RGS et hébergement souverain",
      "Dématérialisation des procédures administratives",
      "Interopérabilité avec les SI de l'État (API Gouv)",
      "Marchés publics et cadre CCAG-PI / CCAG-TIC",
    ],
    cequonfait:
      "Portails citoyens, SI métier pour services de l'État et collectivités, migration vers le cloud souverain, mise en conformité RGAA. Nous accompagnons toute la chaîne : avant-projet, développement, recette, déploiement et maintien en condition opérationnelle.",
    missions: [
      { title: "Portail citoyen dématérialisé — collectivité territoriale", desc: "Développement d'un portail de démarches en ligne conforme RGAA 4.1, intégration FranceConnect, 40 démarches dématérialisées en 18 mois." },
      { title: "SI métier pour un service de l'État", desc: "Refonte d'un système d'information métier hétérogène (ASP.NET legacy) vers une architecture moderne Java/Angular, migration sans interruption de service." },
      { title: "Migration cloud souverain (SecNumCloud)", desc: "Accompagnement d'un opérateur public dans sa migration vers un cloud qualifié SecNumCloud — audit, conception architecture, migration par phases." },
    ],
    stack: ["Java", ".NET", "Angular", "PostgreSQL", "Keycloak", "API Gouv", "Docker", "Azure Gov", "RGAA"],
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Secteurs() {
  const [activeId, setActiveId] = useState<SectorId>("aeronautique")
  const reduce = useReducedMotion()

  const active = SECTORS.find(s => s.id === activeId)!

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ paddingTop: 140, paddingBottom: 72, background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p
            style={{ color: "var(--color-accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            Secteurs d&apos;activité
          </motion.p>
          <motion.h1
            style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(38px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            7 secteurs.<br /><span style={{ color: "var(--color-accent)" }}>Une expertise terrain.</span>
          </motion.h1>
          <motion.p
            style={{ color: "var(--color-ink-2)", fontSize: 17, lineHeight: 1.7, maxWidth: "58ch" }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          >
            On ne découvre pas votre secteur le premier jour. Nos équipes connaissent vos contraintes, votre vocabulaire, vos enjeux réglementaires — avant même de commencer.
          </motion.p>
        </div>
      </section>

      {/* ── Sector switcher ── */}
      <section style={{ padding: "80px 0 96px", background: "var(--color-bg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "start" }} className="sector-layout">

            {/* Sidebar nav */}
            <div style={{ position: "sticky", top: 88 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }} className="sector-nav-desktop">
                {SECTORS.map(s => {
                  const isActive = s.id === activeId
                  return (
                    <button key={s.id}
                      onClick={() => setActiveId(s.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 10,
                        background: isActive ? `${s.color}12` : "transparent",
                        border: `1px solid ${isActive ? `${s.color}40` : "transparent"}`,
                        cursor: "pointer", textAlign: "left", transition: "all 0.18s",
                        width: "100%",
                      }}
                      onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "var(--color-bg-2)" }}
                      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent" }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: isActive ? s.color : "var(--color-border)", flexShrink: 0, transition: "background 0.18s" }} />
                      <span style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: isActive ? 700 : 500, color: isActive ? s.color : "var(--color-ink-2)", transition: "color 0.18s" }}>
                        {s.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Mobile: horizontal scroll tabs */}
              <div style={{ display: "none", overflowX: "auto", gap: 8, paddingBottom: 4 }} className="sector-nav-mobile">
                {SECTORS.map(s => {
                  const isActive = s.id === activeId
                  return (
                    <button key={s.id}
                      onClick={() => setActiveId(s.id)}
                      style={{
                        flexShrink: 0, padding: "8px 16px", borderRadius: 9999,
                        background: isActive ? `${s.color}18` : "var(--color-bg-2)",
                        border: `1px solid ${isActive ? s.color : "var(--color-border)"}`,
                        color: isActive ? s.color : "var(--color-ink-2)",
                        fontSize: 13, fontWeight: isActive ? 700 : 500, cursor: "pointer",
                        whiteSpace: "nowrap", transition: "all 0.15s",
                      }}
                    >
                      {s.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Panel */}
            <AnimatePresence mode="wait">
              <motion.div key={activeId}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Header */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 4, height: 32, borderRadius: 2, background: active.color }} />
                    <h2 style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                      {active.name}
                    </h2>
                  </div>
                  <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 20, fontWeight: 700, color: active.color, marginBottom: 16 }}>
                    {active.headline}
                  </p>
                  <p style={{ color: "var(--color-ink-2)", fontSize: 15, lineHeight: 1.8, maxWidth: "70ch" }}>{active.context}</p>
                </div>

                {/* Enjeux + Ce qu'on fait */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }} className="two-col">
                  <div style={{ padding: "28px 28px", borderRadius: 14, border: "1px solid var(--color-border)", background: "var(--color-bg-2)" }}>
                    <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: active.color, marginBottom: 16 }}>Enjeux métier</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                      {active.enjeux.map(e => (
                        <li key={e} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: active.color, flexShrink: 0, marginTop: 7 }} />
                          <span style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.6 }}>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ padding: "28px 28px", borderRadius: 14, border: `1px solid ${active.color}30`, background: `${active.color}06` }}>
                    <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: active.color, marginBottom: 16 }}>Notre intervention</p>
                    <p style={{ fontSize: 13, color: "var(--color-ink-2)", lineHeight: 1.8 }}>{active.cequonfait}</p>
                    <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {active.stack.map(t => (
                        <span key={t} style={{ background: `${active.color}14`, border: `1px solid ${active.color}30`, color: active.color, borderRadius: 5, padding: "3px 9px", fontSize: 11, fontWeight: 700 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Missions */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 14 }}>Exemples de missions</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {active.missions.map((m, i) => (
                      <div key={m.title} style={{ display: "flex", gap: 20, padding: "20px 24px", borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-bg-2)", alignItems: "flex-start" }}>
                        <div style={{ width: 28, height: 28, borderRadius: 7, background: `${active.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 12, fontWeight: 800, color: active.color }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 5 }}>{m.title}</p>
                          <p style={{ color: "var(--color-ink-2)", fontSize: 13, lineHeight: 1.65 }}>{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credential + CTA */}
                <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", borderRadius: 8, background: `${active.color}10`, border: `1px solid ${active.color}30` }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: active.color }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: active.color }}>{active.credential}</span>
                  </div>
                  <Link href="/contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, background: active.color, color: "#fff", padding: "12px 22px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "filter 0.15s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.12)" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
                  >
                    Discutons de votre projet <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Overview strip — all 7 sectors mini-cards ── */}
      <section style={{ padding: "64px 0", background: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px" }}>
          <motion.p
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-2)", marginBottom: 24 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Tous les secteurs
          </motion.p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 10 }} className="mini-grid">
            {SECTORS.map((s, i) => (
              <motion.button key={s.id}
                onClick={() => { setActiveId(s.id); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                style={{ padding: "18px 14px", borderRadius: 12, border: `1px solid ${activeId === s.id ? s.color : "var(--color-border)"}`, background: activeId === s.id ? `${s.color}12` : "var(--color-bg-3)", cursor: "pointer", textAlign: "left", transition: "all 0.18s" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.color; (e.currentTarget as HTMLElement).style.background = `${s.color}10` }}
                onMouseLeave={e => { if (activeId !== s.id) { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg-3)" } }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, marginBottom: 10 }} />
                <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: 12, fontWeight: 700, color: "var(--color-ink)", lineHeight: 1.3 }}>{s.name}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA bas de page ── */}
      <section style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-display, Outfit, sans-serif)", fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8 }}>
              Votre secteur n&apos;est pas listé ?
            </p>
            <p style={{ color: "var(--color-ink-2)", fontSize: 15, maxWidth: "52ch" }}>
              Notre capacité d&apos;adaptation est notre vraie force. On s&apos;intègre à des contextes métier variés.
              Un échange de 30 minutes pour qualifier votre besoin.
            </p>
          </div>
          <Link href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", transition: "filter 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)" }}
          >
            Parlons de votre secteur <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <style>{`
        @media(max-width:1023px){
          .sector-layout{grid-template-columns:1fr !important}
          .sector-nav-desktop{display:none !important}
          .sector-nav-mobile{display:flex !important}
          .mini-grid{grid-template-columns:repeat(4,1fr) !important}
        }
        @media(max-width:767px){
          .two-col{grid-template-columns:1fr !important}
          .mini-grid{grid-template-columns:repeat(3,1fr) !important}
        }
        @media(max-width:479px){
          .mini-grid{grid-template-columns:repeat(2,1fr) !important}
        }
      `}</style>
    </>
  )
}
