import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Yumemiro OS Architecture System Layers & Packaging | WYZUK',
  description:
    'Technical architecture of Yumemiro OS: Archiso mastering, Calamares installer generation, and modular configuration layering.',
  path: '/projects/yumemiro-os/architecture/',
});

export default function YumemiroArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Yumemiro OS', href: '/projects/yumemiro-os/' },
          { label: 'System Architecture', href: '/projects/yumemiro-os/architecture/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="layers" size={15} />
          <span>Technical Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Yumemiro OS: System Architecture
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Arch Linux distribution engineering, live boot mastering with Archiso, and automated installer generation.
        </p>
      </header>

      {/* Main Narrative Article */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Yumemiro OS is engineered as a declarative, multi-tier distribution layer built directly upon the upstream Arch Linux rolling-release base. Rather than patching the Linux kernel with fragile proprietary modifications, Yumemiro OS focuses on clean user-space orchestration, deterministic package curation, and automated live boot media generation.
        </p>

        {/* Section 1: Directory Tree */}
        <section className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="folder_zip" size={22} className="text-md-primary" />
            <span>1. Repository Directory Structure</span>
          </h2>
          <p>
            In the official repository (<code className="font-mono text-xs px-2 py-0.5 rounded bg-md-surface-container text-md-primary">wyzuk/yumemiro-os</code>), the source tree is organized into isolated component directories:
          </p>

          <div className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-3 font-mono text-xs text-md-on-surface-variant">
            <div className="space-y-2">
              <div><strong className="text-md-primary">archiso/</strong>: Profiles, package lists, and bootstrap scripts for mkarchiso live image builds.</div>
              <div><strong className="text-md-primary">configs/</strong>: Modular dotfiles for Hyprland, Waybar, Rofi, Kitty, and Dunst.</div>
              <div><strong className="text-md-primary">sddm/</strong>: Custom display manager theme assets with blurred glassmorphism.</div>
              <div><strong className="text-md-primary">plymouth/</strong>: Boot splash animation and graphical logo routines.</div>
              <div><strong className="text-md-primary">scripts/</strong>: Automation scripts for Calamares directory structure creation (<code className="text-md-on-surface">create_calamares_dirs.py</code>).</div>
              <div><strong className="text-md-primary">welcome/</strong>: First-boot graphical onboarding application.</div>
            </div>
          </div>
        </section>

        {/* Section 2: Calamares Automation */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="terminal" size={22} className="text-md-primary" />
            <span>2. Calamares Installer Integration</span>
          </h2>
          <p>
            Standard Arch Linux installations require manual partition table manipulation, raw pacstrap invocations, and manual chroot bootstrapping. To make Yumemiro OS accessible without requiring hours of manual terminal commands, WYZUK engineered Python automation scripts (<code className="font-mono text-xs text-md-primary">create_calamares_dirs.py</code>) that pre-populate Calamares modules for automated disk partitioning, timezone localization, and user provisioning.
          </p>
        </section>

        {/* Section 3: Memory Footprint */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="speed" size={22} className="text-md-primary" />
            <span>3. Sub-650MB Idle Memory Footprint</span>
          </h2>
          <p>
            By strictly auditing systemd user services and avoiding monolithic desktop environments like GNOME or KDE, Yumemiro OS maintains an idle footprint under 650MB of RAM. Window rendering is handled directly by Hyprland on Wayland, PipeWire manages low-latency audio, and background daemons are minimized to essential hardware sensors and notification routing.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/yumemiro-os/" icon="arrow_back">
          Yumemiro OS Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="/projects/yumemiro-os/hyprland-rice/" iconTrailing="arrow_forward">
          Hyprland Desktop Rice
        </M3Button>
      </div>
    </div>
  );
}
