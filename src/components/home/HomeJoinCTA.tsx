import CtaBand from "@/components/ui/CtaBand"

export default function HomeJoinCTA() {
  return (
    <CtaBand
      side="career"
      prev="bg2"
      title="Rejoignez les 50."
      text="Développeurs Java, .NET, Angular ou profils DevOps : si vous aimez les projets qui ont du sens, on a peut-être une place pour vous à Toulouse."
      primary={{ label: "Voir les postes ouverts", href: "/carrieres/offres" }}
    />
  )
}
