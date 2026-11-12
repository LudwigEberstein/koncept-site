interface JsonLdProps {
  data: Record<string, unknown>
}

/** Données structurées schema.org, invisibles pour le visiteur, lues par les moteurs de recherche. */
export default function JsonLd({ data }: JsonLdProps) {
  // « < » remplacé par la séquence d'échappement JSON (6 caractères) : aucune valeur ne peut refermer la balise <script>
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
