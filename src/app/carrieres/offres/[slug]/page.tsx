import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/seo/JsonLd'
import OfferDetail from '@/components/careers/OfferDetail'
import { JOBS, getJob } from '@/lib/content'
import { jobPostingJsonLd } from '@/lib/jsonld'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return JOBS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const job = getJob((await params).slug)
  if (!job) return {}
  return {
    title: `${job.title} en ${job.type} à ${job.location}`,
    description: `${job.desc} Poste en ${job.type} à ${job.location} chez Koncept.`,
    alternates: { canonical: `/carrieres/offres/${job.slug}` },
  }
}

export default async function OfferPage({ params }: { params: Promise<Params> }) {
  const job = getJob((await params).slug)
  if (!job) notFound()
  return (
    <>
      <JsonLd data={jobPostingJsonLd(job)} />
      <OfferDetail job={job} />
    </>
  )
}
