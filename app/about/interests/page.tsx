import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Interests & Passions Linux, Graphics & Digital Systems | WYZUK',
  description:
    'Deep exploration of WYZUK\'s technical interests: Arch Linux, Wayland window management, 3D voxel graphics, audio synthesis, and utilities.',
  path: '/about/interests/',
});

const INTEREST_DOMAINS = [
  {
    title: 'Linux Systems & Operating System Architecture',
    icon: 'terminal',
    description:
      'Fascinated by the modularity of Linux distributions. Rather than accepting stock desktop configurations, I explore kernel optimizations, Wayland display protocols, systemd service management, and custom ISO mastering through Archiso.',
    realBuild: 'Yumemiro OS',
    href: '/projects/yumemiro-os/',
  },
  {
    title: '3D Graphics & Voxel Engine Programming',
    icon: 'view_in_ar',
    description:
      'Understanding the mathematics of 3D computer graphics: procedural noise functions (Simplex/Perlin), frustum culling, vertex chunk meshing, and WebGL optimization to deliver 60 FPS in standard browser tabs.',
    realBuild: 'YourCraft',
    href: '/projects/yourcraft/',
  },
  {
    title: 'Client Side Media Streaming & Audio Synthesis',
    icon: 'live_tv',
    description:
      'Exploring how multimedia can be processed directly on the client. From decoding HLS video manifests without server-side transcoding to synthesizing procedural sound waves via the Web Audio API.',
    realBuild: 'Wyzuk Cast & Flappy Wyzuk',
    href: '/projects/wyzukcast/',
  },
  {
    title: 'Discord Bot Architecture & Server Utilities',
    icon: 'smart_toy',
    description:
      'Building asynchronous automation bots in Python with discord.py, utilizing modern Discord Components V2 panels, modal dialogs, and automated storefront dispatchers.',
    realBuild: 'VLT Shop Bot & Nebula Suite',
    href: '/projects/vlt-bot/',
  },
];

export default function InterestsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'About', href: '/about/' },
          { label: 'Technical Interests', href: '/about/interests/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="interests" size={15} />
          <span>Technical Focus</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Technical Interests & Focus
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Core domains of practical investigation and active project development verified in public software.
        </p>
      </header>

      {/* Domain Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INTEREST_DOMAINS.map((domain) => (
          <M3Card key={domain.title} variant="elevated" className="flex flex-col justify-between gap-4 group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-md-surface-container-high text-md-primary flex items-center justify-center">
                <Icon name={domain.icon} size={22} />
              </div>
              <h2 className="text-lg font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                {domain.title}
              </h2>
              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
                {domain.description}
              </p>
            </div>

            <div className="pt-3 border-t border-md-outline-variant/30 flex items-center justify-between text-xs">
              <span className="text-md-outline">Proof in code:</span>
              <Link
                href={domain.href}
                className="font-semibold text-md-primary hover:underline inline-flex items-center gap-1"
              >
                <span>{domain.realBuild}</span>
                <Icon name="arrow_forward" size={14} />
              </Link>
            </div>
          </M3Card>
        ))}
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/about/education/" icon="arrow_back">
          Education Statement
        </M3Button>
        <M3Button variant="filled" size="sm" href="/about/journey/" iconTrailing="arrow_forward">
          Development Journey
        </M3Button>
      </div>
    </div>
  );
}
