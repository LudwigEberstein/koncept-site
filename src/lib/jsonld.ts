import { JOBS_DATE_POSTED, LEGAL, SITE, type Job } from "./content"

const ORGANIZATION_ID = `${SITE.url}/#organization`

/** Fiche entreprise (schema.org/Organization) : nom, adresse, date de création, réseaux. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    legalName: LEGAL.company,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo-koncept-web.png`,
    image: `${SITE.url}/brand/koncept-equipe.png`,
    description: "ESN toulousaine à taille humaine : développement logiciel, accompagnement technique et fonctionnel, pilotage de projets IT.",
    foundingDate: "2014",
    email: SITE.email,
    vatID: LEGAL.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 avenue de l'Europe",
      postalCode: "31400",
      addressLocality: "Toulouse",
      addressCountry: "FR",
    },
    sameAs: [SITE.linkedin],
  }
}

const escapeHtml = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

/** Description complète de l'offre en HTML, identique au contenu affiché sur la page (exigence Google). */
function jobDescriptionHtml(job: Job) {
  const list = (items: readonly string[]) => `<ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`
  return [
    `<p>${escapeHtml(job.intro)}</p>`,
    `<p><strong>La mission</strong></p><p>${escapeHtml(job.desc)}</p>`,
    `<p><strong>Profil recherché</strong></p>${list(job.profile)}`,
    `<p><strong>Journée type</strong></p>${list(job.daily)}`,
  ].join("")
}

/** Offre d'emploi (schema.org/JobPosting), éligible à Google for Jobs. À placer sur la page dédiée à l'offre uniquement. */
export function jobPostingJsonLd(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: jobDescriptionHtml(job),
    datePosted: JOBS_DATE_POSTED,
    employmentType: "FULL_TIME",
    directApply: false,
    url: `${SITE.url}/carrieres/offres/${job.slug}`,
    hiringOrganization: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE.name,
      sameAs: SITE.url,
      logo: `${SITE.url}/brand/logo-koncept-web.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 avenue de l'Europe",
        postalCode: "31400",
        addressLocality: job.location,
        addressCountry: "FR",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: { "@type": "QuantitativeValue", minValue: job.salaryRange[0], maxValue: job.salaryRange[1], unitText: "YEAR" },
    },
  }
}
