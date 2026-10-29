import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SPECIES_DATA, getSpeciesSlug, getSpeciesBySlug } from '@/data/species';
import { PUBLICATIONS_DATA } from '@/data/publications';
import SpeciesDetailView from '@/components/species/SpeciesDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SPECIES_DATA.map(species => ({
    slug: getSpeciesSlug(species),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug(slug);

  if (!species) {
    return { title: 'Species Not Found | Morocco Herpetology' };
  }

  const commonName = species.commonNames.en || species.commonNames.fr || species.scientificName;

  return {
    title: `${species.scientificName} (${commonName}) | Morocco Herpetology`,
    description: `Scientific record, conservation status, taxonomy, and distribution of ${species.scientificName} in Morocco. ${species.distributionNotes || ''}`,
    openGraph: {
      title: `${species.scientificName} | Morocco Herpetology Reference`,
      description: `Taxonomic documentation and conservation profile for ${species.scientificName}.`,
      images: species.image ? [{ url: species.image }] : [],
    },
  };
}

export default async function SpeciesDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const species = getSpeciesBySlug(slug);

  if (!species) {
    notFound();
  }

  // Related publications mentioning the genus or species
  const relatedPubs = PUBLICATIONS_DATA.filter(p =>
    p.title.toLowerCase().includes(species.genus.toLowerCase()) ||
    p.keywords?.some(k => k.toLowerCase().includes(species.genus.toLowerCase())) ||
    p.title.toLowerCase().includes(species.speciesEpithet.toLowerCase())
  ).slice(0, 4);

  // Related species in same family
  const relatedTaxa = SPECIES_DATA.filter(s =>
    s.family === species.family && s.id !== species.id
  ).slice(0, 4);

  return (
    <SpeciesDetailView
      species={species}
      relatedPubs={relatedPubs}
      relatedTaxa={relatedTaxa}
    />
  );
}
