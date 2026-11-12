import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy Zero Trackers, Zero Telemetry | WYZUK',
  description:
    'Plain-language privacy statement affirming zero tracking cookies, zero analytics beacons, and complete user respect.',
  path: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs crumbs={[{ label: 'Privacy Policy', href: '/privacy/' }]} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="security" size={15} />
          <span>User Privacy Assurance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Plain language statement confirming zero tracking cookies, zero marketing pixels, and total user respect.
        </p>
      </header>

      {/* Summary Highlight Card */}
      <M3Card variant="elevated" className="space-y-2 border-md-primary/30">
        <div className="flex items-center gap-2 text-md-primary font-bold text-sm">
          <Icon name="verified_user" size={20} />
          <span>Zero Tracking Summary</span>
        </div>
        <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
          This website does not use tracking cookies, analytics pixels, or telemetry beacons. No personal data is collected, stored, sold, or transmitted. All pages are pre-rendered as static HTML files.
        </p>
      </M3Card>

      {/* Sections */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
            1. Tracking Cookies & Analytics
          </h2>
          <p>
            There are zero tracking cookies, zero third-party advertisement scripts, and zero user-tracking analytics packages installed. Browsing this site leaves no fingerprint in any centralized tracking ledger.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
            2. Ephemeral CDN Infrastructure Logs
          </h2>
          <p>
            Standard CDN infrastructure (such as Cloudflare, Vercel, or Netlify) processes ephemeral HTTP requests solely to serve cached static files and mitigate DDoS attacks. These logs are not inspected to identify or track visitors.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
            3. External Links
          </h2>
          <p>
            This website provides links to external services (such as GitHub, Discord, and X). When you navigate to those third-party services, their respective privacy policies apply.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/" icon="home">
          Return Home
        </M3Button>
        <M3Button variant="filled" size="sm" href="/contact/" iconTrailing="arrow_forward">
          Contact Channels
        </M3Button>
      </div>
    </div>
  );
}
