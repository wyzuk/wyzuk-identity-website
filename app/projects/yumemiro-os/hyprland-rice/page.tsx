import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Hyprland Desktop Rice Wayland Tiling & Aesthetic Styling | WYZUK',
  description:
    'Deep dive into Yumemiro OS\'s Wayland environment: Hyprland animation curves, custom Waybar modules, and SDDM styling.',
  path: '/projects/yumemiro-os/hyprland-rice/',
});

export default function HyprlandRicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Yumemiro OS', href: '/projects/yumemiro-os/' },
          { label: 'Hyprland Rice', href: '/projects/yumemiro-os/hyprland-rice/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="palette" size={15} />
          <span>Desktop Environment Deep Dive</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Hyprland Rice & Visual Ecosystem
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Pastel colorways, cubic bezier animation curves, and Wayland compositor configuration in Yumemiro OS.
        </p>
      </header>

      {/* Article Content */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Desktop &ldquo;ricing&rdquo; in the Linux community describes the deliberate art of customizing desktop aesthetics, window management workflows, and system styling. In Yumemiro OS, the visual system was designed around a signature aesthetic: soft pastel highlights and clean typography set against dark slate panels.
        </p>

        {/* Section 1: Hyprland Curves */}
        <section className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="motion_mode" size={22} className="text-md-primary" />
            <span>Hyprland Compositor & Animation Curves</span>
          </h2>
          <p>
            Hyprland utilizes a custom C++ Wayland compositor engine that supports hardware-accelerated animations via cubic-bezier curves. In Yumemiro OS, workspace switching and window focus changes use slightly overshooting curves that give windows physical inertia without delaying user interaction.
          </p>

          <div className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-2 font-mono text-xs text-md-on-surface">
            <div className="flex items-center justify-between pb-2 border-b border-md-outline-variant/30 text-md-on-surface-variant">
              <span>hyprland.conf</span>
              <span className="text-[11px] text-md-primary">Wayland Config</span>
            </div>
            <pre className="overflow-x-auto text-md-primary pt-2">
{`general {
    gaps_in = 5
    gaps_out = 12
    border_size = 2
    col.active_border = rgba(ff79c6ee) rgba(bd93f9ee) 45deg
    col.inactive_border = rgba(595959aa)
    layout = dwindle
}

animations {
    enabled = yes
    bezier = myBezier, 0.05, 0.9, 0.1, 1.05
    animation = windows, 1, 7, myBezier
    animation = workspaces, 1, 6, default
}`}
            </pre>
          </div>
        </section>

        {/* Section 2: Unified Cohesion */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="auto_awesome" size={22} className="text-md-primary" />
            <span>Unified Cohesion Across Waybar & SDDM</span>
          </h2>
          <p>
            A desktop environment feels broken when different tools conflict in typography or margins. Yumemiro OS enforces visual coherence across all desktop layers: Waybar displays CPU/RAM status with floating popovers, Kitty runs custom pastel themes, and SDDM presents a frosted login backdrop.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/yumemiro-os/architecture/" icon="arrow_back">
          System Architecture
        </M3Button>
        <M3Button variant="filled" size="sm" href="/projects/yumemiro-os/releases/" iconTrailing="arrow_forward">
          Releases & Version Timeline
        </M3Button>
      </div>
    </div>
  );
}
