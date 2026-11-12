import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectCard from '@/components/ProjectCard';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import { constructMetadata } from '@/lib/seo';
import { getProjectsByCategory } from '@/lib/data/projects';

export const metadata: Metadata = constructMetadata({
  title: 'Software & Developer Utilities Productive CLI & Web Tools | WYZUK',
  description:
    'Productivity utilities including WTOOLS (35+ diagnostic tools), NEXUS network monitor, ttune terminal player, and Discord bots.',
  path: '/projects/software/',
});

export default function SoftwareCategoryPage() {
  const softwareProjects = getProjectsByCategory('software');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Software & Utilities', href: '/projects/software/' },
        ]}
      />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="construction" size={15} />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Software & Developer Utilities
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Productivity platforms, defensive local network discovery tools, terminal multimedia players, and automated Discord bot systems built with Python, TypeScript, and Docker.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softwareProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>

      {/* Architecture Deep Dives */}
      <section className="space-y-6 pt-6 border-t border-md-outline-variant/30">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Engineering Writeups</span>
          <h2 className="text-2xl font-bold text-md-on-surface font-sans">
            Utility System Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="dns" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/wtools/architecture/" className="hover:text-md-primary transition-colors">
                  WTOOLS Edge Architecture
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Privacy-first zero-logging execution of 35+ network, DNS, SSL, and web developer diagnostics.
              </p>
            </div>
            <Link
              href="/projects/wtools/architecture/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read architecture</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>

          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="hub" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/nexus/topology-discovery/" className="hover:text-md-primary transition-colors">
                  NEXUS Topology Engine
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Local subnet ARP sweeping, visual device hierarchy mapping, and real-time WebSocket latency tracking.
              </p>
            </div>
            <Link
              href="/projects/nexus/topology-discovery/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read network discovery</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>

          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="equalizer" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/ttune/terminal-rendering/" className="hover:text-md-primary transition-colors">
                  ttune Terminal Spectrum
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                FFmpeg stream decoding, discrete Fourier transform binning, and curses RGB color pair rendering.
              </p>
            </div>
            <Link
              href="/projects/ttune/terminal-rendering/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read terminal rendering</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>
        </div>
      </section>
    </div>
  );
}
