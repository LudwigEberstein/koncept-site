import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      // Anciennes pages de koncept-is.fr (WordPress) : les 9 URL de son sitemap.
      { source: '/qui-sommes-nous', destination: '/a-propos', permanent: true },
      { source: '/ethique', destination: '/a-propos', permanent: true },
      { source: '/notre-offre', destination: '/solutions/expertises', permanent: true },
      { source: '/formation', destination: '/carrieres/formation', permanent: true },
      { source: '/nous-rejoindre', destination: '/carrieres', permanent: true },
      { source: '/recrutement', destination: '/carrieres/offres', permanent: true },
      { source: '/contact', destination: '/solutions/contact', permanent: true },
      { source: '/mentions-legales-politique-de-confidentialite', destination: '/mentions-legales', permanent: true },
      { source: '/politique-de-cookies-ue', destination: '/politique-de-confidentialite', permanent: true },
    ]
  },
}

export default nextConfig
