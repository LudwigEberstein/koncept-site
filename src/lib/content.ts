// Shared content & data — single source of truth

export const SITE = {
  name: "Koncept",
  tagline: "Les bonnes compétences, au bon moment.",
  address: {
    street: "3, Avenue de l'Europe",
    building: "Parc Technologique du Canal - Bâtiment C",
    city: "31 400 Toulouse",
  },
  linkedin: "https://www.linkedin.com/company/konceptkomet",
  email: "contact@koncept-is.fr",
  phone: "05 61 00 00 00",
  phoneHref: "tel:0561000000",
} as const

/**
 * Affiche les pastilles « À valider » sur les contenus non confirmés par le métier (univers Solutions).
 * Passer à false une fois les contenus validés : les pastilles disparaissent partout.
 */
export const SHOW_VALIDATION_MARKERS = true

/** Ce qui différencie Koncept — formulé sans chiffre ni promesse contractuelle. */
export const DIFFERENTIATORS = [
  { title: "Proximité", desc: "Un interlocuteur direct chez Koncept, qui connaît votre contexte et vos équipes." },
  { title: "Les bons profils", desc: "Des consultants dont les compétences correspondent réellement à votre besoin." },
  { title: "Souplesse et réactivité", desc: "Votre besoin évolue : nous nous adaptons, simplement et rapidement." },
  { title: "Consultants accompagnés", desc: "Un suivi humain et technique de chaque consultant pendant sa mission." },
  { title: "Relation durable", desc: "Un échange simple et direct, pensé pour durer au-delà d'une première mission." },
] as const

/** Grandes familles de compétences (technologies validées) ; `roles` = métiers, à distinguer des compétences. */
export const EXPERTISES = [
  {
    slug: "developpement",
    title: "Développement web & logiciel",
    short: "Applications",
    desc: "Conception, développement, modernisation et maintenance d'applications web, backend et frontend.",
    stack: ["Java", "Spring Boot", ".NET", "C#", "Angular", "React", "TypeScript", "JavaScript", "Flutter", "Python"],
    roles: [],
  },
  {
    slug: "integration",
    title: "DevOps & intégration continue",
    short: "DevOps",
    desc: "Automatisation des builds, des tests et des déploiements pour fiabiliser la livraison des applications.",
    stack: ["Azure DevOps", "Git", "GitLab CI/CD", "Jenkins", "Docker", "CI/CD", "Ansible", "Linux"],
    roles: [],
  },
  {
    slug: "donnees",
    title: "Bases de données & gestion des données",
    short: "Données",
    desc: "Conception, modélisation, interrogation et évolution des bases de données au service des applications.",
    stack: ["SQL", "MySQL", "SQL Server", "PostgreSQL", "Oracle", "MongoDB", "NoSQL"],
    roles: [],
  },
  {
    slug: "accompagnement",
    title: "Accompagnement fonctionnel & pilotage",
    short: "Métier & pilotage",
    desc: "Analyse des besoins, cadrage fonctionnel, coordination des équipes et pilotage de projets en environnement agile.",
    stack: ["AMOA", "Agile / Scrum", "SAFe", "Recette fonctionnelle"],
    roles: ["Business Analyst", "Product Owner", "Scrum Master", "Chef de projet"],
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

export const TECH = [
  { name: "Java", src: "https://koncept-is.fr/wp-content/uploads/2025/07/java.png" },
  { name: "Spring Boot", src: "https://koncept-is.fr/wp-content/uploads/2025/07/spring-boot.png" },
  { name: "Microsoft .NET", src: "https://koncept-is.fr/wp-content/uploads/2025/07/ms-dotnet.png" },
  { name: "Angular", src: "https://koncept-is.fr/wp-content/uploads/2025/07/angular.png" },
  { name: "Jenkins", src: "https://koncept-is.fr/wp-content/uploads/2025/07/jenkins.png" },
  { name: "MySQL", src: "https://koncept-is.fr/wp-content/uploads/2025/07/mysql.png" },
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

export const JOBS = [
  {
    title: "Développeur JS FullStack",
    location: "Toulouse",
    type: "CDI",
    sector: "Aéronautique / Télécoms",
    desc: "Vous intégrerez une équipe projet chez l'un de nos clients grands comptes. Vous serez responsable du développement frontend et backend en JavaScript/TypeScript, dans un contexte Agile exigeant.",
    stack: ["JavaScript", "TypeScript", "Node.js", "Angular", "React", "REST API"],
    profile: [
      "Bac+3 à Bac+5 en informatique",
      "2+ ans d'expérience en développement fullstack JS",
      "Maîtrise de Node.js + un framework frontend (Angular ou React)",
      "Curiosité, rigueur, esprit d'équipe",
    ],
  },
  {
    title: "Scrum Master confirmé",
    location: "Toulouse",
    type: "CDI",
    sector: "Aéronautique / Télécoms",
    desc: "Vous accompagnerez une ou plusieurs équipes de développement chez l'un de nos clients grands comptes : animation des cérémonies Scrum, suppression des blocages, amélioration continue de la livraison.",
    stack: ["Scrum", "Kanban", "Jira", "Confluence", "Agilité à l'échelle"],
    profile: [
      "Expérience confirmée comme Scrum Master (équipes de développement logiciel)",
      "Certification Scrum Master (PSM ou équivalent) appréciée",
      "À l'aise avec les équipes techniques et les interlocuteurs métier",
      "Pédagogie, écoute, sens du collectif",
    ],
  },
] as const

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
  logo: "https://koncept-is.fr/wp-content/uploads/2025/07/logo-koncept-web.png",
  team: "https://koncept-is.fr/wp-content/uploads/2025/07/Koncept-equipe.png",
} as const
