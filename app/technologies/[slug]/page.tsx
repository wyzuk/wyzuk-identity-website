import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import ProjectCard from '@/components/ProjectCard';
import { constructMetadata } from '@/lib/seo';
import { TECH_DOMAINS, getTechDomainBySlug } from '@/lib/data/technologies';
import { getProjectBySlug, Project } from '@/lib/data/projects';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return TECH_DOMAINS.map((domain) => ({
    slug: domain.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const domain = getTechDomainBySlug(params.slug);
  if (!domain) return {};

  return constructMetadata({
    title: `${domain.name} Work & Experience | WYZUK`,
    description: domain.tagline,
    path: `/technologies/${domain.slug}/`,
  });
}

export default function TechDomainDetailPage({ params }: PageProps) {
  const domain = getTechDomainBySlug(params.slug);
  if (!domain) notFound();

  const associatedProjects = domain.associatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Technologies', href: '/technologies/' },
          { label: domain.name, href: `/technologies/${domain.slug}/` },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="memory" size={15} />
          <span>Verified Technical Domain</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          {domain.name}
        </h1>
        <p className="text-sm sm:text-base text-md-primary font-sans font-medium">
          {domain.tagline}
        </p>
      </header>

      {/* Main Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="description" size={22} className="text-md-primary" />
            <span>Overview & Engineering Philosophy</span>
          </h2>
          <p>{domain.overview}</p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="verified" size={22} className="text-md-primary" />
            <span>Evidence-Based Project Experience</span>
          </h2>
          <div className="p-5 rounded-3xl bg-md-surface-container border border-md-outline-variant/40">
            <p>{domain.evidenceBasedUsage}</p>
          </div>
        </section>

        {/* Section 3: Skills List */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="build" size={22} className="text-md-primary" />
            <span>Tools, Frameworks & Standards</span>
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {domain.skillsList.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-md-surface-container-high text-md-on-surface border border-md-outline-variant/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Section 4: Key Takeaways */}
        {domain.keyTakeaways && domain.keyTakeaways.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
              <Icon name="lightbulb" size={22} className="text-md-primary" />
              <span>Key Technical Takeaways</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {domain.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-md-primary shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {/* Associated Projects */}
      {associatedProjects.length > 0 && (
        <section className="pt-8 border-t border-md-outline-variant/30 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-md-on-surface font-sans">
              Verified Projects in this Domain
            </h2>
            <Link href="/projects/" className="text-xs text-md-primary hover:underline">
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {associatedProjects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/technologies/" icon="arrow_back">
          All Technologies
        </M3Button>
        <M3Button variant="filled" size="sm" href="/projects/" iconTrailing="arrow_forward">
          Explore Projects Archive
        </M3Button>
      </div>
    </div>
  );
}
