import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'YourCraft Voxel Engine WebGL Mesh Optimization & Chunks | WYZUK',
  description:
    'Detailed breakdown of chunk partitioning, hidden face culling, and texture atlas mapping for 60 FPS in Three.js.',
  path: '/projects/yourcraft/voxel-engine/',
});

export default function YourcraftVoxelEnginePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'YourCraft', href: '/projects/yourcraft/' },
          { label: 'Voxel Engine', href: '/projects/yourcraft/voxel-engine/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="view_in_ar" size={15} />
          <span>Graphics Engineering Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          YourCraft: 3D Voxel Engine & WebGL
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Chunk partitioning, greedy boundary face culling, and texture atlas mapping for a locked 60 FPS in Three.js.
        </p>
      </header>

      {/* Article Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Rendering a procedural 3D voxel sandbox in a browser requires overcoming memory and GPU draw call bottlenecks. A typical player view distance contains over 250,000 blocks. If each block was an individual mesh, standard browsers drop to unplayable framerates. YourCraft achieves stable 60 FPS performance through three core techniques:
        </p>

        {/* Section 1 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="grid_view" size={22} className="text-md-primary" />
            <span>1. Chunk Partitioning & Buffer Consolidation</span>
          </h2>
          <p>
            The procedural world is segmented into 16x16x16 block chunks. Rather than rendering separate cubes, visible block faces in a chunk are merged into a single consolidated Three.js BufferGeometry. This reduces draw calls per frame from tens of thousands down to fewer than 50.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="visibility_off" size={22} className="text-md-primary" />
            <span>2. Neighbor Boundary Face Culling</span>
          </h2>
          <p>
            Most voxels in underground terrain are enclosed by neighboring opaque blocks. During chunk geometry generation, an adjacency check evaluates whether each block face neighbors an empty air block. Faces touching another solid block are discarded entirely before vertex buffers are allocated.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="texture" size={22} className="text-md-primary" />
            <span>3. Single Texture Atlas Mapping</span>
          </h2>
          <p>
            Binding separate image textures for stone, dirt, grass, and wood causes frequent GPU state changes. YourCraft maps block textures onto a single unified 1024x1024 pixel texture atlas. Vertex UV coordinates on the consolidated geometry point directly to atlas coordinates, executing terrain rendering in a single material pass.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/yourcraft/" icon="arrow_back">
          YourCraft Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="https://your-craft.netlify.app/" icon="play_circle">
          Launch Sandbox Live
        </M3Button>
      </div>
    </div>
  );
}
