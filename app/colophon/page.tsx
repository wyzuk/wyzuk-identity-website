import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Colophon Architecture & Engineering of nebulavex.bond | WYZUK',
  description:
    'Technical details behind nebulavex.bond: Google Material 3 design system, Next.js static export, typography, performance, and accessibility.',
  path: '/colophon/',
});

export default function ColophonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs crumbs={[{ label: 'Colophon', href: '/colophon/' }]} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="design_services" size={15} />
          <span>System Colophon</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Colophon & Architecture
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          The engineering decisions, Google Material 3 design system tokens, typography scales, and accessibility principles behind nebulavex.bond.
        </p>
      </header>

      {/* Main Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="palette" size={22} className="text-md-primary" />
            <span>1. Google Material 3 (M3) Design System</span>
          </h2>
          <p>
            The website is handcrafted according to Google&apos;s modern <strong>Material 3 Expressive</strong> design guidelines. It features a complete tonal surface hierarchy (<code className="text-xs font-mono px-1.5 py-0.5 rounded bg-md-surface-container text-md-primary">surface</code>, <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-md-surface-container text-md-primary">surface-container-low</code>, <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-md-surface-container text-md-primary">surface-container</code>, <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-md-surface-container text-md-primary">surface-container-high</code>), expressive 24px–28px card corners, full rounded-pill buttons, state layer hover overlays (8% opacity), and interactive Material You dynamic color palette selection (Nebula Blue, Pixel Mint, Coral Sunset, Lavender Mist, Emerald).
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="terminal" size={22} className="text-md-primary" />
            <span>2. Framework & Static Generation</span>
          </h2>
          <p>
            Built with <strong>Next.js 14 App Router</strong>, <strong>React 18</strong>, and <strong>TypeScript</strong>. Every route is pre-rendered at build time with Static Site Generation (<code className="text-xs font-mono text-md-primary">output: &apos;export&apos;</code>), resulting in pure static HTML and optimized JavaScript chunks. This guarantees sub-second load times, zero server-side vulnerabilities, and zero database dependencies.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="text_fields" size={22} className="text-md-primary" />
            <span>3. Typography & Google Icons</span>
          </h2>
          <p>
            Headings, brand marks, buttons, and navigation elements utilize Google Sans geometry via <strong>Outfit</strong>. Long-form prose uses <strong>Roboto</strong>, and code elements utilize <strong>Roboto Mono</strong>. All interface icons are dynamically rendered via Google <strong>Material Symbols Outlined</strong> variable fonts.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="accessibility_new" size={22} className="text-md-primary" />
            <span>4. Accessibility & User Respect</span>
          </h2>
          <p>
            The website implements keyboard skip navigation (<code className="text-xs font-mono text-md-primary">#main-content</code>), semantic HTML landmark regions, high-contrast M3 focus rings, and strict respect for <code className="text-xs font-mono text-md-primary">prefers-reduced-motion</code>. There are zero third-party tracking scripts, marketing pixels, or telemetry beacons.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/" icon="home">
          Return Home
        </M3Button>
        <M3Button variant="filled" size="sm" href="/privacy/" iconTrailing="arrow_forward">
          Privacy Policy
        </M3Button>
      </div>
    </div>
  );
}
