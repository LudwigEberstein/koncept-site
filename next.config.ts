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
      { source: '/notre-offre', destination: '/expertises', permanent: true },
      { source: '/recrutement', destination: '/carrieres/offres', permanent: true },
      { source: '/nous-rejoindre', destination: '/carrieres/offres', permanent: true },
      { source: '/ethique', destination: '/a-propos', permanent: true },
      { source: '/formation', destination: '/carrieres/formation', permanent: true },
    ]
  },
}

export default nextConfig
