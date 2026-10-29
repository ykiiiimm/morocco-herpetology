import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/data/projects';
import type { Metadata } from 'next';
import ProjectDetailView from '@/components/projects/ProjectDetailView';

export function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found | Morocco Herpetology' };

  return {
    title: `${project.title} | Morocco Herpetology Conservation Projects`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
