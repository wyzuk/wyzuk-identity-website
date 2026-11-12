import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Yumemiro OS Releases & ISO Verification Release Changelogs | WYZUK',
  description:
    'Chronological version milestones for Yumemiro OS (Sakura, Hanami, Tsukiyo, Ame) and transparent ISO packaging status report.',
  path: '/projects/yumemiro-os/releases/',
});

const RELEASES = [
  {
    version: '4.0 Ame (雨)',
    date: 'Planned / Under Active Build',
    status: 'Next Iteration',
    summary: 'Focused on low-latency audio mastering, automated dotfiles deployment scripts, and Hyprland v0.40+ compatibility.',
    highlights: [
      'Automated bash bootstrap installer for fresh Arch Linux setups',
      'Integration of ttune CLI terminal music visualizer',
      'Dynamic window rules and scratchpad enhancements',
    ],
  },
  {
    version: '3.0 Tsukiyo (月夜)',
    date: 'Autumn Release Milestone',
    status: 'Stable Rice Configuration',
    summary: 'Dark mode pastel variation featuring deep twilight purples, minimal Waybar layouts, and Rofi app launchers.',
    highlights: [
      'Custom twilight color palette for Kitty and Neovim',
      'Refined window border animations with sub-millisecond response',
      'Waybar network and hardware temperature monitoring widgets',
    ],
  },
  {
    version: '2.0 Hanami (花見)',
    date: 'Mid-Year Iteration',
    status: 'Major Visual Milestone',
    summary: 'Introduced frosted glassmorphic SDDM login theme and dynamic blur shaders under Hyprland.',
    highlights: [
      'Frosted acrylic SDDM theme with customizable user avatars',
      'Plymouth bootloader splash screen integration',
      'Support for multi-monitor Wayland workspaces',
    ],
  },
  {
    version: '1.0 Sakura (桜)',
    date: 'Initial Debut',
    status: 'Foundation Release',
    summary: 'The debut release of Yumemiro OS laying the foundation for pastel aesthetics on Arch Linux with Hyprland.',
    highlights: [
      'First public ISO architecture authored by WYZUK',
      'Calamares automated graphical installer script generation',
      'Signature Pastel Pink GTK theme and icon pack integration',
    ],
  },
];

export default function YumemiroReleasesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Yumemiro OS', href: '/projects/yumemiro-os/' },
          { label: 'Releases & ISO Status', href: '/projects/yumemiro-os/releases/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="history" size={15} />
          <span>Release Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Yumemiro OS: Releases & ISO Status
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Chronological version timeline, milestone highlights, and honest technical verification report.
        </p>
      </header>

      {/* Transparency Note Card */}
      <M3Card variant="outlined" className="space-y-2 border-md-primary/30 bg-md-surface-container-low">
        <div className="flex items-center gap-2 text-md-primary">
          <Icon name="verified_user" size={20} />
          <span className="font-sans font-bold text-sm">Technical Transparency Report on ISO Downloads</span>
        </div>
        <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
          While the configuration trees, dotfiles, Calamares generator scripts, and Archiso packaging profiles in <code className="text-md-primary font-mono text-xs">wyzuk/yumemiro-os</code> and <code className="text-md-primary font-mono text-xs">yumemiro-os/os</code> are genuine codebases, direct download mirrors on <code className="text-md-primary font-mono text-xs">yumemiro-os.github.io</code> reference placeholder hashes. In keeping with WYZUK&apos;s commitment to absolute truthfulness, we document Yumemiro OS as an authentic configuration distribution and desktop rice system, while pre-compiled ISO hosting is classified as a demonstration concept pending a dedicated binary CDN build.
        </p>
      </M3Card>

      {/* Release Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
          Documented Version History
        </h2>

        <div className="space-y-6">
          {RELEASES.map((rel) => (
            <M3Card key={rel.version} variant="elevated" className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-md-outline-variant/30 pb-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-md-on-surface font-sans">{rel.version}</h3>
                  <p className="text-xs text-md-primary font-medium">{rel.summary}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-md-on-surface-variant shrink-0">
                  <span>{rel.date}</span>
                  <span>·</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-md-surface-container text-md-on-surface">{rel.status}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-md-on-surface block">Milestone Highlights</span>
                <ul className="space-y-2 text-xs sm:text-sm text-md-on-surface-variant font-body">
                  {rel.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Icon name="check" size={16} className="text-md-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </M3Card>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/yumemiro-os/hyprland-rice/" icon="arrow_back">
          Hyprland Desktop Rice
        </M3Button>
        <M3Button variant="filled" size="sm" href="/projects/yumemiro-os/" iconTrailing="arrow_forward">
          Yumemiro OS Overview
        </M3Button>
      </div>
    </div>
  );
}
