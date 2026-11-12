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
  title: 'Operating System Work Arch Linux & Desktop Distributions | WYZUK',
  description:
    'Explore Yumemiro OS: an aesthetic Arch Linux desktop distribution built with Hyprland, Waybar, and custom Calamares installers.',
  path: '/projects/operating-systems/',
});

export default function OperatingSystemsCategoryPage() {
  const osProjects = getProjectsByCategory('operating-systems');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Operating Systems', href: '/projects/operating-systems/' },
        ]}
      />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="terminal" size={15} />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Operating Systems & Linux Work
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Arch Linux distribution engineering, live ISO image mastering with Archiso, Wayland tiling protocols with Hyprland, and custom Calamares installer scripting.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {osProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>

      {/* Deep Architectural Subpages */}
      <section className="space-y-6 pt-6 border-t border-md-outline-variant/30">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Engineering Documentation</span>
          <h2 className="text-2xl font-bold text-md-on-surface font-sans">
            Yumemiro OS Deep Dives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="layers" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/yumemiro-os/architecture/" className="hover:text-md-primary transition-colors">
                  System Architecture
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Archiso foundations, pacman repository packaging, Calamares installer generation, and modular system layers.
              </p>
            </div>
            <Link
              href="/projects/yumemiro-os/architecture/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Read architecture</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>

          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="palette" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/yumemiro-os/hyprland-rice/" className="hover:text-md-primary transition-colors">
                  Hyprland Desktop Rice
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Wayland configurations, custom Waybar floating widgets, SDDM frosted glass styling, and pastel color harmonies.
              </p>
            </div>
            <Link
              href="/projects/yumemiro-os/hyprland-rice/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>Explore rice</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>

          <M3Card variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-2">
              <Icon name="history" size={24} className="text-md-primary" />
              <h3 className="text-base font-bold text-md-on-surface font-sans">
                <Link href="/projects/yumemiro-os/releases/" className="hover:text-md-primary transition-colors">
                  Release History
                </Link>
              </h3>
              <p className="text-xs text-md-on-surface-variant font-body leading-relaxed">
                Release timeline for 1.0 Sakura, 1.1 Hanami, 1.5 Tsukiyo, and 2.0 Ame with transparent ISO packaging notes.
              </p>
            </div>
            <Link
              href="/projects/yumemiro-os/releases/"
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 pt-2"
            >
              <span>View releases</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </M3Card>
        </div>
      </section>
    </div>
  );
}
