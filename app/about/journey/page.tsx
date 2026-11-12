import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { BIOGRAPHY } from '@/lib/data/biography';

export const metadata: Metadata = constructMetadata({
  title: 'Development Journey Verified Milestones & Timeline | WYZUK',
  description:
    'Chronological development history of WYZUK across 2025 and 2026 based strictly on verified repositories and project launches.',
  path: '/about/journey/',
});

export default function JourneyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'About', href: '/about/' },
          { label: 'Development Journey', href: '/about/journey/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="timeline" size={15} />
          <span>Milestones Timeline</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Development Timeline & Milestones
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Chronological progression based strictly on verified Git commits, repository publications, and project launches.
        </p>
      </header>

      {/* Timeline Stream */}
      <section className="space-y-6">
        {BIOGRAPHY.journeyTimeline.map((item, idx) => (
          <M3Card key={`${item.year}-${item.month}-${idx}`} variant="elevated" className="space-y-3 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-md-outline-variant/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-md-primary-container text-md-on-primary-container flex items-center justify-center font-bold text-xs font-mono">
                  {idx + 1}
                </span>
                <h2 className="text-lg font-bold text-md-on-surface font-sans">
                  {item.title}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-md-on-surface-variant">
                <span>{item.month ? `${item.month} ` : ''}{item.year}</span>
                <span>·</span>
                <span className="px-2 py-0.5 rounded-full bg-md-surface-container text-md-primary uppercase text-[10px]">
                  {item.category}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
              {item.description}
            </p>

            {item.verifiedArtifact && (
              <div className="text-xs font-mono text-md-outline flex items-center gap-1.5 pt-1">
                <Icon name="verified" size={14} className="text-md-primary" />
                <span>Verified artifact:</span>
                <code className="text-md-on-surface font-semibold">{item.verifiedArtifact}</code>
              </div>
            )}
          </M3Card>
        ))}
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/about/interests/" icon="arrow_back">
          Technical Interests
        </M3Button>
        <M3Button variant="filled" size="sm" href="/projects/" iconTrailing="arrow_forward">
          Explore Projects Archive
        </M3Button>
      </div>
    </div>
  );
}
