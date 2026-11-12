import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectsView from '@/components/ProjectsView';
import { constructMetadata } from '@/lib/seo';
import { PROJECTS } from '@/lib/data/projects';

export const metadata: Metadata = constructMetadata({
  title: 'Projects Index Handcrafted Software, Systems & Games | WYZUK',
  description:
    'Comprehensive directory of verified public projects created by WYZUK across operating systems, web apps, browser games, and utilities.',
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-8">
      <Breadcrumbs crumbs={[{ label: 'Projects', href: '/projects/' }]} />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <span>{PROJECTS.length} Verified Repositories & Tools</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Software, Systems & Games
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Explore handcrafted code repositories, live production deployments, and experimental sandboxes. Filter by domain or search across the entire verified software archive.
        </p>
      </header>

      {/* Interactive Projects Component with Search and Category Filter Chips */}
      <ProjectsView initialProjects={PROJECTS} />
    </div>
  );
}
