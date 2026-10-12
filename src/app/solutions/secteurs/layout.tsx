import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Secteurs d'intervention de nos consultants IT",
  description: "Les secteurs d'activité dans lesquels les consultants de Koncept interviennent, et les enjeux métier propres à chacun.",
  alternates: { canonical: 'https://koncept-is.fr/solutions/secteurs' },
}

export default function SecteursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
