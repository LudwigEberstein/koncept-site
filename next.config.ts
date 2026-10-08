import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'koncept-is.fr' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/qui-sommes-nous', destination: '/a-propos', permanent: true },
      { source: '/notre-offre', destination: '/solutions/expertises', permanent: true },
      { source: '/recrutement', destination: '/carrieres/offres', permanent: true },
      { source: '/nous-rejoindre', destination: '/carrieres/offres', permanent: true },
      { source: '/ethique', destination: '/a-propos', permanent: true },
      // Anciennes URL « à plat » de la partie Solutions → /solutions/...
      { source: '/expertises', destination: '/solutions/expertises', permanent: true },
      { source: '/secteurs', destination: '/solutions/secteurs', permanent: true },
      { source: '/methodologie', destination: '/solutions/methodologie', permanent: true },
      { source: '/realisations', destination: '/solutions/realisations', permanent: true },
      { source: '/contact', destination: '/solutions/contact', permanent: true },
      { source: '/formation', destination: '/carrieres/formation', permanent: true },
    ]
  },
}

export default nextConfig
