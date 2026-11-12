import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { PROJECTS } from '@/lib/data/projects';

export const metadata: Metadata = constructMetadata({
  title: 'GitHub Presence Repositories & Open Source Signal (@wyzuk) | WYZUK',
  description:
    'Overview of WYZUK\'s public developer profile on GitHub (@wyzuk), repository inventory, and open-source contributions.',
  path: '/github/',
});

export default function GitHubPresencePage() {
  const verifiedPublicRepos = 25;
  const verifiedFollowers = 580;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs crumbs={[{ label: 'GitHub Presence', href: '/github/' }]} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="code" size={15} />
          <span>Verified Open Source Profile</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          GitHub Profile: @wyzuk
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Open-source software repositories, live code, and verified Git contributions maintained under the public handle @wyzuk.
        </p>
      </header>

      {/* Verified Stats Strip */}
      <M3Card variant="elevated" className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
        <div className="space-y-1">
          <span className="text-md-outline block text-[11px] uppercase">Public Repos</span>
          <span className="text-xl font-bold text-md-on-surface font-sans">{verifiedPublicRepos}</span>
        </div>
        <div className="space-y-1">
          <span className="text-md-outline block text-[11px] uppercase">Followers</span>
          <span className="text-xl font-bold text-md-on-surface font-sans">{verifiedFollowers}</span>
        </div>
        <div className="space-y-1">
          <span className="text-md-outline block text-[11px] uppercase">Primary Profile</span>
          <Link href="https://github.com/wyzuk" target="_blank" rel="noopener noreferrer" className="text-md-primary hover:underline font-bold text-sm block">
            @wyzuk
          </Link>
        </div>
        <div className="space-y-1">
          <span className="text-md-outline block text-[11px] uppercase">Organization</span>
          <Link href="https://github.com/yumemiro-os" target="_blank" rel="noopener noreferrer" className="text-md-on-surface hover:text-md-primary font-bold text-sm block">
            @yumemiro-os
          </Link>
        </div>
      </M3Card>

      {/* Repository Breakdown */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
            Verified Public Repositories
          </h2>
          <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk" icon="open_in_new">
            View on GitHub
          </M3Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <M3Card key={p.slug} variant="outlined" className="space-y-3 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-md-on-surface-variant">
                  <span>{p.language}</span>
                  {p.stars > 0 && (
                    <span className="flex items-center gap-1 text-amber-400">
                      <Icon name="star" size={13} filled />
                      <span>{p.stars}</span>
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-base text-md-on-surface font-sans">
                  <Link
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-md-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>{p.title}</span>
                    <Icon name="arrow_outward" size={14} className="text-md-primary" />
                  </Link>
                </h3>
                <p className="text-xs text-md-on-surface-variant font-body leading-relaxed line-clamp-2">
                  {p.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-md-outline-variant/30 flex items-center justify-between text-xs">
                <Link href={`/projects/${p.slug}/`} className="text-md-primary hover:underline font-medium">
                  Read details →
                </Link>
                <Link
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md-outline hover:text-md-on-surface flex items-center gap-1"
                >
                  <Icon name="code" size={14} />
                  <span>Repo</span>
                </Link>
              </div>
            </M3Card>
          ))}
        </div>
      </section>
    </div>
  );
}
