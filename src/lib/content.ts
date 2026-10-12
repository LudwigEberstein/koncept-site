// Shared content & data — single source of truth

export const SITE = {
  name: "Koncept",
  url: "https://koncept-is.fr",
  tagline: "Les bonnes compétences, au bon moment.",
  address: {
    street: "3, Avenue de l'Europe",
    building: "Parc Technologique du Canal - Bâtiment C",
    city: "31 400 Toulouse",
  },
  linkedin: "https://www.linkedin.com/company/konceptkomet",
  email: "contact@koncept-is.fr",
} as const

/** Informations légales (mentions légales, politique de confidentialité). */
export const LEGAL = {
  /** Raison sociale telle qu'elle figure sur le site actuel. */
  company: "KONCEPT",
  legalForm: "Société par actions simplifiée (SAS)",
  capital: "20 000 €",
  siret: "799 808 761 00032",
  rcs: "RCS Toulouse 799 808 761",
  vat: "FR54799808761",
  publicationDirector: "Gérard Pucheux, Président",
  /** Date de dernière mise à jour des pages légales. */
  updated: "12 octobre 2026",
  /** Hébergeur actuel (Vercel). À remplacer par OVH (OVH SAS, 2 rue Kellermann, BP 80157, 59053 Roubaix Cedex 1, https://www.ovhcloud.com) lors de la bascule. */
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    url: "https://vercel.com",
  },
} as const

/** Ce qui différencie Koncept — formulé sans chiffre ni promesse contractuelle. */
export const DIFFERENTIATORS = [
  { title: "Proximité", desc: "Un interlocuteur direct chez Koncept, qui connaît votre contexte et vos équipes." },
  { title: "Les bons profils", desc: "Des consultants dont les compétences correspondent réellement à votre besoin." },
  { title: "Souplesse et réactivité", desc: "Votre besoin évolue : nous nous adaptons, simplement et rapidement." },
  { title: "Consultants accompagnés", desc: "Un suivi humain et technique de chaque consultant pendant sa mission." },
  { title: "Relation durable", desc: "Un échange simple et direct, pensé pour durer au-delà d'une première mission." },
] as const

/** Grandes familles de compétences (technologies validées). */
export const EXPERTISES = [
  {
    slug: "developpement",
    title: "Développement web & logiciel",
    short: "Applications",
    desc: "Conception, développement, modernisation et maintenance d'applications web, backend et frontend.",
    stack: ["Java", "Spring Boot", ".NET", "C#", "Angular", "React", "TypeScript", "JavaScript", "Flutter", "Python"],
  },
  {
    slug: "integration",
    title: "DevOps & intégration continue",
    short: "DevOps",
    desc: "Automatisation des builds, des tests et des déploiements pour fiabiliser la livraison des applications.",
    stack: ["Azure DevOps", "Git", "GitLab CI/CD", "Jenkins", "Docker", "CI/CD", "Ansible", "Linux"],
  },
  {
    slug: "donnees",
    title: "Bases de données & gestion des données",
    short: "Données",
    desc: "Conception, modélisation, interrogation et évolution des bases de données au service des applications.",
    stack: ["SQL", "MySQL", "SQL Server", "PostgreSQL", "Oracle", "MongoDB", "NoSQL"],
  },
  {
    slug: "accompagnement",
    title: "Accompagnement fonctionnel & pilotage",
    short: "Métier & pilotage",
    desc: "Analyse des besoins, cadrage fonctionnel, coordination des équipes et pilotage de projets en environnement agile.",
    stack: ["AMOA", "Agile / Scrum", "SAFe", "Recette fonctionnelle"],
  },
] as const

/** Secteurs d'intervention (libellés et descriptions validés). */
export const SECTORS = [
  { slug: "aeronautique", name: "Aéronautique", enjeu: "Développement et évolution d'applications dans des environnements techniques exigeants." },
  { slug: "banque", name: "Banque & Assurance", enjeu: "Développement et maintenance de solutions applicatives au service des activités métiers." },
  { slug: "telecom", name: "Télécommunications", enjeu: "Développement et évolution d'applications au sein de systèmes d'information complexes." },
  { slug: "editeurs", name: "Éditeurs de logiciels & services numériques", enjeu: "Renfort des équipes techniques et fonctionnelles pour concevoir et faire évoluer leurs solutions." },
  { slug: "transport", name: "Transport & Mobilité", enjeu: "Développement de solutions de gestion et de suivi de flottes de véhicules, avec traitement de volumes importants de données et d'événements." },
  { slug: "recherche-public", name: "Recherche & secteur public", enjeu: "Accompagnement de projets applicatifs dans des environnements scientifiques et institutionnels." },
] as const

export const VALUES = [
  { title: "Proximité", desc: "Un interlocuteur unique, disponible, qui connaît votre activité et s'implique comme s'il faisait partie de votre équipe." },
  { title: "Confiance", desc: "Des engagements tenus, des délais respectés. On ne vous vend pas ce qu'on ne peut pas livrer." },
  { title: "Échange", desc: "Partage de connaissances, transparence sur les difficultés, communication franche à chaque étape du projet." },
  { title: "Partage", desc: "Une culture de l'entraide en interne comme avec nos clients. Ce qui est appris ici bénéficie à tout le monde." },
] as const

export const CAREER_EVENTS = [
  { title: "Weekend d'agence", freq: "Annuel", desc: "Un weekend par an où toute l'agence se retrouve pour de la cohésion, des activités et de vrais moments hors projets." },
  { title: "Soirée de Noël", freq: "Décembre", desc: "On clôt l'année tous ensemble autour d'un bon repas." },
  { title: "Barbecue d'été", freq: "L'été", desc: "Quand il fait beau, on sort les grills pour un moment détendu entre collègues." },
] as const

/** Date de mise en ligne des offres (données structurées Google for Jobs). Pas de date de fin : à retirer avec l'offre une fois pourvue. */
export const JOBS_DATE_POSTED = "2026-10-01"

/** Étapes du process de recrutement, communes à toutes les offres. */
export const JOB_PROCESS = [
  { step: "1. Échange RH", desc: "30 min avec Valentine. On se présente, on voit si le feeling passe." },
  { step: "2. Entretien métier", desc: "45 min avec un référent de ton domaine, technique ou fonctionnel. On parle de ton parcours et de cas concrets." },
  { step: "3. Entretien manager", desc: "30 min avec ton futur manager. Si tout colle, l'offre se fait dans ce même entretien." },
  { step: "4. Un café avec la team", desc: "Pour finir de te convaincre, viens prendre un café avec l'équipe. Pas d'épreuve : juste voir si ça matche." },
] as const

/**
 * Offres d'emploi : source unique de la liste, des pages /carrieres/offres/[slug], du sitemap
 * et des données structurées Google for Jobs. Ajouter une offre = ajouter une entrée ici ;
 * la retirer une fois pourvue = supprimer l'entrée.
 */
export const JOBS = [
  {
    slug: "developpeur-js-fullstack",
    title: "Développeur JS FullStack",
    location: "Toulouse",
    type: "CDI",
    remote: "2j/semaine",
    salary: "35–40 K€",
    salaryRange: [35000, 40000],
    badge: "Nouveau",
    sector: "Aéronautique / Télécoms",
    intro: "On cherche un dev JS fullstack passionné pour rejoindre une équipe chez l'un de nos clients grands comptes. Pas un dev de plus dans un open space — quelqu'un qui veut s'investir, proposer des architectures, et laisser sa marque sur un vrai produit.",
    desc: "Vous intégrerez une équipe projet chez l'un de nos clients grands comptes. Vous serez responsable du développement frontend et backend en JavaScript/TypeScript, dans un contexte Agile exigeant.",
    stack: ["JavaScript", "TypeScript", "Node.js", "Angular", "React", "REST API"],
    profile: [
      "Bac+3 à Bac+5 en informatique",
      "2+ ans d'expérience en développement fullstack JS",
      "Maîtrise de Node.js + un framework frontend (Angular ou React)",
      "Curiosité, rigueur, esprit d'équipe",
    ],
    daily: [
      "Feature development en React/Node.js sur un produit B2B utilisé par 50k+ utilisateurs",
      "Code review sérieuses — les PR ne passent pas sans retour constructif",
      "Participation aux rétrospectives et aux décisions d'architecture",
      "Kata club Koncept le jeudi — volontaire mais chaleureusement encouragé",
    ],
  },
  {
    slug: "scrum-master",
    title: "Scrum Master confirmé",
    location: "Toulouse",
    type: "CDI",
    remote: "2j/semaine",
    salary: "40–45 K€",
    salaryRange: [40000, 45000],
    badge: "Nouveau",
    sector: "Aéronautique / Télécoms",
    intro: "On cherche un·e Scrum Master confirmé·e pour accompagner des équipes de développement chez l'un de nos clients grands comptes. Quelqu'un qui sait faire vivre l'agilité au quotidien — sans dogme, avec du bon sens et de l'écoute.",
    desc: "Vous accompagnerez une ou plusieurs équipes de développement chez l'un de nos clients grands comptes : animation des cérémonies Scrum, suppression des blocages, amélioration continue de la livraison.",
    stack: ["Scrum", "Kanban", "Jira", "Confluence", "Agilité à l'échelle"],
    profile: [
      "Expérience confirmée comme Scrum Master (équipes de développement logiciel)",
      "Certification Scrum Master (PSM ou équivalent) appréciée",
      "À l'aise avec les équipes techniques et les interlocuteurs métier",
      "Pédagogie, écoute, sens du collectif",
    ],
    daily: [
      "Animation des cérémonies Scrum : daily, planning, review, rétrospective",
      "Identification et suppression des blocages de l'équipe, en lien avec le Product Owner",
      "Suivi des indicateurs de livraison et amélioration continue des pratiques",
      "Retours d'expérience partagés avec les autres Scrum Masters et le kata club Koncept",
    ],
  },
] as const

export type Job = (typeof JOBS)[number]

export function getJob(slug: string): Job | undefined {
  return JOBS.find(j => j.slug === slug)
}

// Navigation — two distinct tracks
export const NAV_CLIENT = [
  { label: "Expertises", href: "/solutions/expertises" },
  { label: "Secteurs", href: "/solutions/secteurs" },
  { label: "Méthodologie", href: "/solutions/methodologie" },
  { label: "Réalisations", href: "/solutions/realisations" },
] as const

export const NAV_CAREER = [
  { label: "Vie chez Koncept", href: "/carrieres/vie" },
  { label: "Formation et évolution", href: "/carrieres/formation" },
  { label: "Offres d'emploi", href: "/carrieres/offres" },
  { label: "Candidature spontanée", href: "/carrieres/candidature" },
] as const

export const IMAGES = {
  logo: "/brand/logo-koncept-web.png",
  team: "/brand/koncept-equipe.png",
} as const
