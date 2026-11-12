import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectCard from '@/components/ProjectCard';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { PROJECTS } from '@/lib/data/projects';

export const metadata: Metadata = constructMetadata({
  title: 'Open Source Work Verified GitHub Repositories | WYZUK',
  description:
    'Public open-source contributions, repositories, and utilities maintained on GitHub by @wyzuk.',
  path: '/projects/open-source/',
});

export default function OpenSourceCategoryPage() {
  const openSourceProjects = PROJECTS.filter((p) => p.githubUrl && p.status !== 'stub');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Open Source', href: '/projects/open-source/' },
        ]}
      />

      <header className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="code" size={15} />
          <span>GitHub Verified Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Open Source Work
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Public repositories, libraries, and open software maintained on GitHub by WYZUK under the profile <Link href="https://github.com/wyzuk" target="_blank" rel="noopener noreferrer" className="text-md-primary hover:underline font-mono">@wyzuk</Link>.
        </p>

        <div className="pt-1">
          <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk" icon="open_in_new">
            View GitHub Profile (@wyzuk)
          </M3Button>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {openSourceProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </div>
  );
}
