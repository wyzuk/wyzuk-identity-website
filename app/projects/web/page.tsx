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
  title: 'Web Projects Client Side Streaming & Digital Platforms | WYZUK',
  description:
    'High-performance web applications including Wyzuk Cast (IPTV player), Animella (anime catalog), and Vaultrix Marketplace.',
  path: '/projects/web/',
});

export default function WebCategoryPage() {
  const webProjects = getProjectsByCategory('web');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Web Applications', href: '/projects/web/' },
        ]}
      />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="language" size={15} />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Web Applications & Streaming
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          High-efficiency client-side streaming platforms, anime discovery portals, and digital storefront systems built with vanilla web standards and Next.js.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {webProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>

      {/* Deep Dives */}
      <section className="space-y-6 pt-6 border-t border-md-outline-variant/30">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Architecture Breakdown</span>
          <h2 className="text-2xl font-bold text-md-on-surface font-sans">
            Web Streaming Architecture
          </h2>
        </div>

        <div className="max-w-xl">
          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="live_tv" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/wyzukcast/hls-streaming/" className="hover:text-md-primary transition-colors">
                  Wyzuk Cast: Client-Side HLS.js Demuxing
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Zero-backend IPTV streaming: in-browser M3U regex parsing, buffer switching, and adaptive video playback.
              </p>
            </div>
            <Link
              href="/projects/wyzukcast/hls-streaming/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read streaming architecture</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>
        </div>
      </section>
    </div>
  );
}
