import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectCard from '@/components/ProjectCard';
import Icon from '@/components/Icon';
import { constructMetadata } from '@/lib/seo';
import { getProjectsByCategory } from '@/lib/data/projects';

export const metadata: Metadata = constructMetadata({
  title: 'Experiments & Prototypes Creative Code & Sandboxes | WYZUK',
  description:
    'Exploratory code experiments including iOS UI simulator (iplnchr), VOID fortune machine, and personal knowledge notebooks.',
  path: '/projects/experiments/',
});

export default function ExperimentsCategoryPage() {
  const expProjects = getProjectsByCategory('experiments');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Experiments & Prototypes', href: '/projects/experiments/' },
        ]}
      />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="science" size={15} />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Experiments & Prototypes
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Exploratory UI engineering, minimalist web simulations, and personal code notebooks exploring touch gestures, spring physics, and digital minimalism.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </div>
  );
}
