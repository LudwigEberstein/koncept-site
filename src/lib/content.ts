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
  { title: "Relation durable", desc: "Une collaboration de confiance, pensée pour durer au-delà d'une première prestation." },
] as const

/**
 * Grandes familles de compétences (technologies validées).
 * `desc` : énumération courte (cartes de l'accueil Solutions).
 * `enjeu`, `apport`, `profils` : page Expertises, présentée « votre enjeu → notre réponse ».
 */
export const EXPERTISES = [
  {
    slug: "developpement",
    title: "Développement full stack",
    short: "Applications",
    desc: "Architecture, conception, développement, modernisation et maintenance d'applications web, backend et frontend.",
    enjeu: "Une application à concevoir, à faire évoluer ou à moderniser, et une équipe qui manque de bras ou d'expertise technique.",
    apport: [
      "Des développeurs qui s'intègrent à votre équipe et à vos pratiques",
      "Une réflexion d'architecture avant la première ligne de code",
      "La modernisation progressive des applications existantes",
      "Du code relu, testé et maintenable dans la durée",
    ],
    profils: ["Développeur full stack", "Développeur backend", "Développeur frontend", "Architecte logiciel", "Tech lead"],
    stack: ["Java", "Spring Boot", ".NET", "C#", "Node.js", "Angular", "React", "TypeScript", "JavaScript", "Python"],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    short: "DevOps & Cloud",
    desc: "Intégration et déploiement continus, conteneurisation, automatisation et infrastructure cloud.",
    enjeu: "Des mises en production longues ou risquées, des environnements difficiles à maintenir, une migration vers le cloud à mener.",
    apport: [
      "Des chaînes d'intégration et de déploiement continus fiables",
      "Des environnements conteneurisés et reproductibles",
      "L'automatisation des tâches d'infrastructure",
      "Le déploiement et l'exploitation sur AWS et Azure",
    ],
    profils: ["Ingénieur DevOps", "Ingénieur cloud"],
    stack: ["AWS", "Azure", "Azure DevOps", "Git", "GitLab CI/CD", "Jenkins", "Docker", "Ansible", "Linux"],
  },
  {
    slug: "fonctionnel",
    title: "Accompagnement fonctionnel",
    short: "Métier",
    desc: "Analyse des besoins, cadrage fonctionnel, gestion du backlog et recette, au service des équipes métier.",
    enjeu: "Des besoins métier à clarifier, des utilisateurs à embarquer, un écart entre ce qui est demandé et ce qui est livré.",
    apport: [
      "L'analyse et la formalisation des besoins avec les équipes métier",
      "Le cadrage fonctionnel et la rédaction des spécifications",
      "La priorisation du backlog aux côtés des développeurs",
      "La recette fonctionnelle avant chaque mise en production",
    ],
    profils: ["Consultant AMOA", "Analyste métier", "Product Owner"],
    stack: ["AMOA", "Analyse métier", "Spécifications fonctionnelles", "Gestion du backlog", "Recette fonctionnelle"],
  },
  {
    slug: "pilotage",
    title: "Pilotage & accompagnement opérationnel",
    short: "Pilotage",
    desc: "Pilotage de projets, coordination des équipes et animation de l'agilité au quotidien.",
    enjeu: "Un projet qui dérive, des équipes à coordonner, une organisation agile à mettre en place ou à faire vivre.",
    apport: [
      "Le pilotage du projet : planning, risques, arbitrages",
      "La coordination entre équipes métier, techniques et partenaires",
      "L'animation de l'agilité au quotidien, sans dogme",
      "Un suivi régulier et transparent de l'avancement",
    ],
    profils: ["Chef de projet", "Scrum Master"],
    stack: ["Agile / Scrum", "SAFe", "Jira", "Roadmap", "Gouvernance de projet"],
  },
] as const

/** Secteurs d'intervention. */
export const SECTORS = [
  { slug: "aeronautique", name: "Aéronautique & Spatial", enjeu: "Des programmes au long cours, des exigences de qualité et de sécurité élevées : nous renforçons les équipes de développement, d'analyse et de pilotage." },
  { slug: "banque", name: "Banque, Assurance & Santé", enjeu: "Des métiers très réglementés, des données sensibles et des utilisateurs exigeants : nous accompagnons l'évolution de leurs outils, du recueil du besoin à la mise en production." },
  { slug: "telecom", name: "Télécommunications", enjeu: "Des systèmes d'information vastes et interconnectés : nous intervenons sur leurs applications, leur intégration continue et la coordination de leurs projets." },
  { slug: "editeurs", name: "Éditeurs de logiciels & services numériques", enjeu: "Un produit qui doit évoluer vite sans perdre en qualité : nous renforçons leurs équipes produit, techniques comme fonctionnelles." },
  { slug: "transport", name: "Transport & Mobilité", enjeu: "Des opérations suivies en temps réel et de gros volumes de données : nous contribuons à leurs solutions de gestion et de suivi, comme celles de flottes de véhicules." },
  { slug: "recherche-public", name: "Recherche & secteur public", enjeu: "Des projets au service de chercheurs, d'agents ou d'usagers : nous les accompagnons du cadrage jusqu'à la maintenance des applications." },
] as const

export const VALUES = [
  { title: "Proximité", desc: "Un interlocuteur unique, disponible, qui connaît votre activité et s'implique comme s'il faisait partie de votre équipe." },
  { title: "Confiance", desc: "Des engagements tenus, des délais respectés. On ne vous vend pas ce qu'on ne peut pas livrer." },
  { title: "Échange", desc: "Partage de connaissances, transparence sur les difficultés, communication franche à chaque étape du projet." },
  { title: "Partage", desc: "Une culture de l'entraide en interne comme avec nos clients. Ce qui est appris ici bénéficie à tout le monde." },
] as const

/**
 * Références geek cachées dans le site : leur nombre alimente la phrase « As-tu trouvé les X références geek… »
 * du footer Carrières. Ajouter ou retirer un clin d'œil = mettre cette liste à jour.
 */
export const GEEK_REFERENCES = [
  "Code Konami (n'importe quelle page)",
  "« Le gâteau n'est pas un mensonge » — Portal (/carrieres)",
  "Rond, triangle, carré — Squid Game (/carrieres)",
  "« Appuie sur Start » (/carrieres)",
  "OVNI en pixel art — Space Invaders (pages Carrières)",
  "« --force-with-love » — Star Wars (code du héros)",
  "Mario, Flappy Bird et la plante piranha (/carrieres/vie)",
  "« Prise en charge, ta formation sera » — Yoda (/carrieres/formation)",
  "« Achievement unlocked » (/carrieres/formation)",
  "« Choose your destiny ! » — Mortal Kombat (/carrieres/formation)",
  "« Nouvelle quête disponible » et son « ! » (/carrieres/offres)",
  "« Player 2 » — la carte « Toi » des portraits (/carrieres/vie)",
] as const

/** Portrait d'un collaborateur (cartes de /carrieres/vie, citations de /carrieres et /a-propos). */
export type Collaborator = {
  /** Prénom seul (pas d'initiale du nom). */
  name: string
  role: string
  /** Famille de métier, affichée en pastille sur le visuel. */
  badge: string
  /** Accorde les libellés au féminin (« Ce qu'elle aime chez Koncept »). */
  elle?: boolean
  /** Photo (n'importe quel format : elle est recadrée en 4:3 sur les cartes, en rond dans les citations) ; sans photo, la carte affiche le prénom et la citation une icône (jamais d'initiales). */
  img?: string
  /** Point d'ancrage du recadrage (object-position), pour garder le visage dans le cadre. */
  imgPos?: string
  /** Dézoom : part de la largeur du visuel occupée par la photo (ex. 0.72) ; le reste est prolongé en flou. */
  imgFit?: number
  parcours: string
  stack: string[]
  favProject: string
  lovesKoncept: string
  advice: string
  /** Citation courte pour les sections Portraits de /carrieres et /a-propos. */
  quote: string
}

/**
 * Portraits collaborateurs. Ludwig : textes réels (validés par lui).
 * Alexis, Frédéric, Mélaine, Sébastien : textes SIMULÉS, à faire relire par les intéressés avant la mise en ligne.
 */
export const COLLABORATORS: Collaborator[] = [
  {
    name: "Alexis",
    role: "Développeur expérimenté",
    badge: "Développement",
    parcours: "Entré chez Koncept comme développeur backend, Alexis a enchaîné des missions sur des applications métier dans l'aéronautique et les télécoms. Il intervient aujourd'hui sur toute la chaîne, du back au front, et accompagne les développeurs qui rejoignent son équipe.",
    stack: ["Java", "Spring Boot", "Angular", "TypeScript", "SQL", "Git"],
    favProject: "Moderniser une application vieillissante sans jamais couper le service : on a remplacé les briques une par une, et les utilisateurs ne s'en sont aperçus qu'en voyant que tout allait plus vite.",
    lovesKoncept: "On me laisse choisir les sujets sur lesquels je veux progresser, et il y a toujours quelqu'un pour relire mon code ou débattre d'une archi. Et le soir, c'est moi le maître du jeu.",
    advice: "Montre du code que tu as écrit, même imparfait, et explique tes choix. On apprend bien plus d'une discussion sur un vrai projet que d'un exercice d'algo.",
    quote: "On me laisse choisir les sujets sur lesquels je veux progresser, et il y a toujours quelqu'un pour relire mon code.",
  },
  {
    name: "Frédéric",
    role: "Tech lead",
    badge: "Technique",
    parcours: "Développeur full stack pendant plusieurs années, Frédéric a pris le rôle de tech lead sur des projets en équipe. Il fait le lien entre l'architecture, les développeurs et le métier, sans jamais lâcher complètement le code.",
    stack: ["Node.js", "React", "TypeScript", "Docker", "GitLab CI/CD", "Revue de code"],
    favProject: "Lancer une équipe sur un nouveau produit en partant d'une page blanche : choisir la stack, poser les conventions, et voir l'équipe devenir autonome en quelques sprints.",
    lovesKoncept: "On me fait confiance sur les choix techniques, et on m'écoute quand je dis qu'une équipe a besoin de temps pour bien faire les choses. Et à la pause, on peut parler jazz-rock sans être jugé.",
    advice: "Parle-nous d'une décision technique que tu as dû défendre, ou que tu regrettes. On cherche des gens qui savent expliquer leurs choix, pas des gens qui ont toujours raison.",
    quote: "On me fait confiance sur les choix techniques, et on m'écoute quand une équipe a besoin de temps pour bien faire.",
  },
  {
    name: "Mélaine",
    role: "Scrum Master",
    badge: "Agilité",
    elle: true,
    parcours: "Passée par l'analyse fonctionnelle, Mélaine s'est tournée vers l'agilité pour travailler au plus près des équipes. Scrum Master, elle accompagne aujourd'hui des équipes de développement chez nos clients et partage ses pratiques avec les autres Scrum Masters de Koncept.",
    stack: ["Scrum", "Kanban", "SAFe", "Jira", "Rétrospectives", "Facilitation"],
    favProject: "Accompagner une équipe qui ne croyait plus aux rétrospectives. Quelques mois plus tard, c'est elle qui les réclamait.",
    lovesKoncept: "On me laisse choisir comment accompagner une équipe, sans recette imposée. Et quand je bloque, j'ai des collègues d'autres métiers avec qui en parler.",
    advice: "Viens avec une situation d'équipe difficile que tu as vécue, et ce que tu en as appris. Un bon Scrum Master écoute avant de proposer.",
    quote: "On me laisse choisir comment accompagner une équipe, sans recette imposée. L'agilité, c'est d'abord de l'écoute.",
  },
  {
    name: "Sébastien",
    role: "Architecte solution",
    badge: "Architecture",
    parcours: "Développeur puis tech lead, Sébastien est devenu architecte solution à force de dessiner les systèmes avant de les coder. Il conçoit aujourd'hui des architectures applicatives et cloud, et accompagne les équipes qui les mettent en œuvre.",
    stack: ["Microservices", "API", "AWS", "Azure", "Docker", "DDD"],
    favProject: "Concevoir une plateforme en partant du métier plutôt que de la technique : beaucoup d'ateliers avec les utilisateurs avant la première ligne de code, et une architecture qui a tenu quand le périmètre a grandi.",
    lovesKoncept: "Des collègues qui challengent vraiment mes schémas, et une direction accessible quand il faut trancher. Ici, l'architecture se discute, elle ne s'impose pas.",
    advice: "Prépare un exemple de compromis technique que tu as dû faire, et explique pourquoi. L'architecture, c'est surtout l'art de choisir ce qu'on ne fera pas.",
    quote: "Des collègues qui challengent vraiment mes schémas. Ici, l'architecture se discute, elle ne s'impose pas.",
  },
  {
    name: "Ludwig",
    role: "Chef de projet Agile",
    badge: "Pilotage",
    img: "/team/ludwig-front.webp",
    imgPos: "50% 15%",
    imgFit: 0.72,
    parcours: "Développeur puis Technical Leader sur des applications critiques pour l'industrie aéronautique et la santé, Ludwig s'est tourné vers l'agilité en tant que Scrum Master en contexte SAFe puis en tant que chef de projet. Il pilote aujourd'hui des projets chez un grand compte, tout en coordonnant le suivi des prestations Koncept sur site.",
    stack: ["Pilotage de projet", "Scrum", "SAFe", "Jira", "Roadmap", "Gouvernance"],
    favProject: "Reprendre un projet où le client ne voyait plus clair. On a posé quelques indicateurs simples, rendu le delivery visible, et la confiance est revenue.",
    lovesKoncept: "On m'a fait confiance pour évoluer, du développement jusqu'au pilotage de projets. Et ma carrière, je la construis en one-to-one avec la direction, avec un vrai suivi : on parle de là où je veux aller, pas seulement de la prochaine mission.",
    advice: "Apprends à parler le langage des devs et celui des managers. C'est souvent entre les deux que se joue la réussite d'un projet.",
    quote: "Ma carrière, je la construis en one-to-one avec la direction : on parle de là où je veux aller, pas seulement de la prochaine mission.",
  },
]

/** Prénoms des portraits mis en avant en citation, par page. */
export const FEATURED_PORTRAITS = {
  carrieres: ["Alexis", "Mélaine", "Ludwig"],
  aPropos: ["Frédéric", "Sébastien", "Ludwig"],
} as const

/** Portraits dans l'ordre demandé. Un prénom absent de COLLABORATORS fait échouer le build (pas de carte qui disparaît en silence). */
export function getCollaborators(names: readonly string[]): Collaborator[] {
  return names.map(n => {
    const c = COLLABORATORS.find(c => c.name === n)
    if (!c) throw new Error(`Portrait introuvable dans COLLABORATORS : « ${n} » (vérifier l'orthographe et les accents)`)
    return c
  })
}

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
  { step: "3. Entretien manager", desc: "45 min avec ton futur manager. Si tout colle, l'offre se fait dans ce même entretien." },
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
      "Retours d'expérience partagés avec les autres Scrum Masters de Koncept",
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
