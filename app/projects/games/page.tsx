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
  title: 'Browser Games & Engines Procedural 3D & Neon 2D | WYZUK',
  description:
    'Interactive web browser games built from scratch: YourCraft (3D voxel sandbox), Flappy Wyzuk (Web Audio arcade), W Suffers, and Snake.',
  path: '/projects/games/',
});

export default function GamesCategoryPage() {
  const gameProjects = getProjectsByCategory('games');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Browser Games', href: '/projects/games/' },
        ]}
      />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="sports_esports" size={15} />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Browser Games & 3D Engines
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          WebGL procedural voxel engines running at 60 FPS in Three.js, Canvas 2D physics, and zero-file procedural audio synthesis built with the Web Audio API.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gameProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>

      {/* Deep Dives Section */}
      <section className="space-y-6 pt-6 border-t border-md-outline-variant/30">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Graphics & Audio Architecture</span>
          <h2 className="text-2xl font-bold text-md-on-surface font-sans">
            Game Engineering Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="view_in_ar" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/yourcraft/voxel-engine/" className="hover:text-md-primary transition-colors">
                  YourCraft Voxel Engine Breakdown
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Chunk partitioning, greedy boundary face culling, and texture atlas coordinate mapping in WebGL and Three.js.
              </p>
            </div>
            <Link
              href="/projects/yourcraft/voxel-engine/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read voxel optimization</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>

          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="graphic_eq" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/flappy-wyzuk/audio-synthesis/" className="hover:text-md-primary transition-colors">
                  Flappy Wyzuk Procedural Audio
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Synthesizing dynamic retro arcade sound effects purely through mathematical frequency oscillator curves in JavaScript.
              </p>
            </div>
            <Link
              href="/projects/flappy-wyzuk/audio-synthesis/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read audio synthesis</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>
        </div>
      </section>
    </div>
  );
}
