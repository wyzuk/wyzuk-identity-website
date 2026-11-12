import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Education Statement Academic Background & Learning Philosophy | WYZUK',
  description:
    'Formal statement regarding WYZUK\'s status as a Class 11 student in Bangladesh in 2026 and institutional privacy boundaries.',
  path: '/about/education/',
});

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'About', href: '/about/' },
          { label: 'Education Statement', href: '/about/education/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="school" size={15} />
          <span>Formal Education Statement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Education & Learning Philosophy
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Current academic enrollment, self-directed computing studies, and institutional privacy boundaries.
        </p>
      </header>

      {/* Status Card */}
      <M3Card variant="elevated" className="space-y-3 border-md-primary/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-md-primary-container text-md-on-primary-container flex items-center justify-center">
            <Icon name="school" size={20} />
          </div>
          <div>
            <h2 className="text-base font-bold text-md-on-surface font-sans">Class 11 Student · Academic Year 2026</h2>
            <p className="text-xs text-md-primary font-mono">Status: Currently Enrolled · Bangladesh</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed pt-1">
          I am currently a student enrolled in Class 11 in Bangladesh during the 2026 academic calendar. Software engineering, operating system architecture, and 3D computer graphics are pursued independently out of genuine creative curiosity alongside my academic coursework.
        </p>
      </M3Card>

      {/* Institutional Privacy Notice */}
      <M3Card variant="outlined" className="space-y-2">
        <div className="flex items-center gap-2 text-md-primary">
          <Icon name="shield" size={18} />
          <h3 className="font-sans font-bold text-sm">Institutional Privacy Boundary</h3>
        </div>
        <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
          The name and specific location of my educational college or institution are intentionally kept private and undisclosed. I do not publish institutional affiliations or solicit academic sponsorships. All engineering work in this archive is independent personal research.
        </p>
      </M3Card>

      {/* Learning by Building Philosophy */}
      <section className="space-y-4 pt-4 border-t border-md-outline-variant/30">
        <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
          Learning Systems by Shipping Them
        </h2>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          While classroom academics provide mathematical foundation and reasoning, true technical intuition in computing comes from building real systems from the ground up:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl bg-md-surface-container border border-md-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2 text-md-primary">
              <Icon name="terminal" size={18} />
              <strong className="text-sm text-md-on-surface font-sans">Operating Systems</strong>
            </div>
            <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
              Configuring Arch Linux kernel parameters, Wayland protocols, and packaging live ISOs with <Link href="/projects/yumemiro-os/" className="text-md-primary hover:underline">Yumemiro OS</Link>.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-md-surface-container border border-md-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2 text-md-primary">
              <Icon name="view_in_ar" size={18} />
              <strong className="text-sm text-md-on-surface font-sans">3D Graphics & Meshing</strong>
            </div>
            <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
              Solving chunk boundary face culling and vertex buffer consolidation at 60 FPS in <Link href="/projects/yourcraft/" className="text-md-primary hover:underline">YourCraft</Link>.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-md-surface-container border border-md-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2 text-md-primary">
              <Icon name="graphic_eq" size={18} />
              <strong className="text-sm text-md-on-surface font-sans">Procedural Audio</strong>
            </div>
            <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
              Synthesizing zero-file retro arcade sound effects via Web Audio API oscillators in <Link href="/projects/flappy/" className="text-md-primary hover:underline">Flappy Wyzuk</Link>.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-md-surface-container border border-md-outline-variant/40 space-y-2">
            <div className="flex items-center gap-2 text-md-primary">
              <Icon name="live_tv" size={18} />
              <strong className="text-sm text-md-on-surface font-sans">Stream Architecture</strong>
            </div>
            <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
              Decoding live M3U playlists and adaptive video buffers directly in the browser with <Link href="/projects/wyzukcast/" className="text-md-primary hover:underline">Wyzuk Cast</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/about/identity/" icon="arrow_back">
          Identity & Aliases
        </M3Button>
        <M3Button variant="filled" size="sm" href="/about/interests/" iconTrailing="arrow_forward">
          Technical Interests
        </M3Button>
      </div>
    </div>
  );
}
