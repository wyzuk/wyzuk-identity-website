import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { TECH_DOMAINS } from '@/lib/data/technologies';

export const metadata: Metadata = constructMetadata({
  title: 'Technologies & Tools Verified Development Domains | WYZUK',
  description:
    'Curated index of technical domains where WYZUK has verified, hands-on development experience in real projects.',
  path: '/technologies/',
});

export default function TechnologiesIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs crumbs={[{ label: 'Technologies', href: '/technologies/' }]} />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="memory" size={15} />
          <span>Technical Domain Index</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Technology Domains
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Technical domains supported by verified code in public repositories. No arbitrary percentage skill bars—only actual software engineering.
        </p>
      </header>

      {/* Grid of Domains */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_DOMAINS.map((domain) => (
          <M3Card key={domain.slug} variant="elevated" className="flex flex-col justify-between gap-6 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-md-secondary-container text-md-on-secondary-container">
                  Verified Domain
                </span>
                <span className="text-xs font-mono text-md-on-surface-variant">
                  {domain.associatedProjects.length} Projects
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                <Link href={`/technologies/${domain.slug}/`}>
                  {domain.name}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm font-medium text-md-primary">
                {domain.tagline}
              </p>

              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
                {domain.overview}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {domain.skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-md-surface-container text-md-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-md-outline-variant/30 flex items-center justify-between text-xs font-sans">
              <span className="text-md-outline font-mono text-[11px]">{domain.slug}</span>
              <M3Button
                variant="tonal"
                size="sm"
                href={`/technologies/${domain.slug}/`}
                iconTrailing="arrow_forward"
              >
                Domain Writeup
              </M3Button>
            </div>
          </M3Card>
        ))}
      </section>
    </div>
  );
}
