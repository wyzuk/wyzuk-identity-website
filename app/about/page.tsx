import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Chip from '@/components/M3Chip';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'About WYZUK Developer, Student & Systems Craftsman',
  description:
    'Biographical background, development philosophy, and personal narrative of WYZUK (NebulaVex / Wasee / nvxwx).',
  path: '/about/',
});

const SUBSECTIONS = [
  {
    title: 'Identity & Aliases',
    href: '/about/identity/',
    icon: 'fingerprint',
    description: 'Canonical explanation connecting primary moniker WYZUK, alternative alias NebulaVex, first-name alias Wasee, usernames nvxwx, ud1q, jamim, and Yumemiro OS.',
  },
  {
    title: 'Education Statement',
    href: '/about/education/',
    icon: 'school',
    description: 'Formal statement regarding status as a Class 11 student in Bangladesh during the 2026 academic year, self-taught computing, and institutional privacy.',
  },
  {
    title: 'Technical Interests',
    href: '/about/interests/',
    icon: 'interests',
    description: 'Deep dive into passions for Arch Linux system internals, Wayland tiling compositors, 3D voxel graphics, and client-side media streaming.',
  },
  {
    title: 'Development Journey',
    href: '/about/journey/',
    icon: 'timeline',
    description: 'Chronological timeline tracking verified Git commits, repository milestones, and project launches across 2025 and 2026.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs crumbs={[{ label: 'About', href: '/about/' }]} />

      {/* Profile Header */}
      <header className="rounded-3xl p-6 sm:p-10 bg-md-surface-container-low border border-md-outline-variant/40 shadow-elevation-1 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-3xl bg-md-primary-container text-md-on-primary-container flex items-center justify-center font-sans font-bold text-2xl shadow-sm">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-md-on-surface font-sans">
                  WYZUK
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
                  Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body">
                Independent Developer · Class 11 Student · Rangpur, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk" icon="code">
              GitHub @wyzuk
            </M3Button>
            <M3Button variant="filled" size="sm" href="/contact/" icon="mail">
              Contact
            </M3Button>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed pt-2 border-t border-md-outline-variant/30">
          <p>
            I am a student in class 11 during the 2026 academic calendar in Bangladesh and an independent software developer driven by low-level curiosity. I build operating systems, 3D computer graphics, and web utilities to understand how computing platforms genuinely operate from the inside out.
          </p>
          <p>
            Programming is not an academic duty or a corporate 9-to-5 job for me—it is a creative craft. I believe software should be fast, lightweight, respectful of users, and free of artificial bloatware, marketing hype, and tracking scripts.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <M3Chip label="Class 11 Student (2026)" icon="school" variant="assist" />
          <M3Chip label="Arch Linux & Hyprland" icon="terminal" variant="assist" />
          <M3Chip label="WebGL & Three.js" icon="view_in_ar" variant="assist" />
          <M3Chip label="Zero Trackers" icon="lock" variant="assist" />
        </div>
      </header>

      {/* Sub-sections Grid */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Dossiers & Statements</span>
          <h2 className="text-2xl font-bold text-md-on-surface font-sans">
            In-Depth Background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUBSECTIONS.map((sec) => (
            <M3Card key={sec.href} variant="elevated" className="flex flex-col justify-between gap-4 group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-2xl bg-md-surface-container-high text-md-primary flex items-center justify-center">
                  <Icon name={sec.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                  <Link href={sec.href}>{sec.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
                  {sec.description}
                </p>
              </div>
              <div className="pt-3 border-t border-md-outline-variant/30">
                <Link
                  href={sec.href}
                  className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore {sec.title}</span>
                  <Icon name="arrow_forward" size={14} />
                </Link>
              </div>
            </M3Card>
          ))}
        </div>
      </section>

      {/* Related Utility References */}
      <section className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-4">
        <h3 className="text-base font-bold text-md-on-surface font-sans">
          Associated Information
        </h3>
        <div className="flex flex-wrap gap-3 text-xs font-sans">
          <M3Button variant="tonal" size="sm" href="/uses/" icon="terminal">
            Hardware & Daily Setup
          </M3Button>
          <M3Button variant="tonal" size="sm" href="/websites/" icon="language">
            Associated Websites Directory
          </M3Button>
          <M3Button variant="tonal" size="sm" href="/gallery/" icon="photo_library">
            Visual Assets Gallery
          </M3Button>
          <M3Button variant="tonal" size="sm" href="/privacy/" icon="security">
            Privacy Statement
          </M3Button>
        </div>
      </section>
    </div>
  );
}
