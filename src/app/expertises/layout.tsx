import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises',
  description: 'Java Spring Boot, .NET, DevOps Kubernetes : les trois domaines techniques de Koncept IS. Missions DSI, certifications, stacks de référence.',
  alternates: { canonical: 'https://koncept-is.fr/expertises' },
}

export default function ExpertisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
