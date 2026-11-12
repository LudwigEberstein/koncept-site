import type { ReactNode } from "react"
import type { SECTORS } from "@/lib/content"
import "./sector-icon.css"

type SectorSlug = (typeof SECTORS)[number]["slug"]

/**
 * Pictos au trait des secteurs (page Secteurs), chacun avec une petite animation en boucle :
 * avion sur sa trajectoire, pouls dans le bouclier, ondes de l'antenne, curseur qui clignote,
 * route qui défile, bulles dans la fiole. Animations coupées si l'utilisateur réduit les animations.
 */
const ICONS: Record<SectorSlug, ReactNode> = {
  aeronautique: (
    <>
      <path className="sx-trail" d="M8 40 L40 12" />
      <g className="sx-plane">
        <g transform="translate(8 40) rotate(-41)">
          <path className="sx-fill" d="M-5 -3.5 L6 0 L-5 3.5 L-2.5 0 Z" />
        </g>
      </g>
      <circle className="sx-fill sx-star" cx="13" cy="12" r="1.4" />
      <circle className="sx-fill sx-star sx-star-2" cx="37" cy="34" r="1.4" />
      <circle cx="40" cy="12" r="3" />
    </>
  ),
  banque: (
    <>
      <path d="M24 5 L39 11 V23 C39 33 32 40 24 43 C16 40 9 33 9 23 V11 Z" />
      <path className="sx-ecg" pathLength={1} d="M14 25 H19 L22 18 L26 31 L29 25 H34" />
    </>
  ),
  telecom: (
    <>
      <path d="M24 21 L18 43 M24 21 L30 43 M16 43 H32 M20 35 H28" />
      <circle cx="24" cy="18" r="2.5" />
      <path className="sx-wave" d="M19 12 A8 8 0 0 0 19 24 M29 12 A8 8 0 0 1 29 24" />
      <path className="sx-wave sx-wave-2" d="M15 8 A13 13 0 0 0 15 28 M33 8 A13 13 0 0 1 33 28" />
    </>
  ),
  editeurs: (
    <>
      <rect x="6" y="9" width="36" height="30" rx="4" />
      <path d="M6 16 H42" />
      <path d="M17 23 L12 28 L17 33 M31 23 L36 28 L31 33" />
      <path className="sx-cursor" d="M24 23 V33" />
    </>
  ),
  transport: (
    <>
      <path d="M5 13 H28 V31 H5 Z M28 19 H36 L42 25 V31 H28" />
      <circle cx="13" cy="33" r="3.5" />
      <circle cx="35" cy="33" r="3.5" />
      <path className="sx-road" d="M2 42 H46" />
    </>
  ),
  "recherche-public": (
    <>
      <path d="M19 6 H29 M21 6 V18 L10 37 C8.5 40 10.5 43 14 43 H34 C37.5 43 39.5 40 38 37 L27 18 V6" />
      <path d="M13.5 32 H34.5" />
      <circle className="sx-fill sx-bubble" cx="20" cy="38" r="1.6" />
      <circle className="sx-fill sx-bubble sx-bubble-2" cx="27" cy="39" r="1.3" />
      <circle className="sx-fill sx-bubble sx-bubble-3" cx="24" cy="36" r="1" />
    </>
  ),
}

export default function SectorIcon({ slug }: { slug: SectorSlug }) {
  return (
    <span className="sx-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" focusable="false">{ICONS[slug]}</svg>
    </span>
  )
}
