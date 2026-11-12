import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'WTOOLS Architecture Privacy First Zero Logging Edge Diagnostics | WYZUK',
  description:
    'System design of WTOOLS: executing 35+ DNS, WHOIS, SSL, and network diagnostic tools without storing user data.',
  path: '/projects/wtools/architecture/',
});

export default function WtoolsArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'WTOOLS', href: '/projects/wtools/' },
          { label: 'Architecture', href: '/projects/wtools/architecture/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="dns" size={15} />
          <span>Diagnostic System Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          WTOOLS: Diagnostic Engine Architecture
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Engineering 35+ developer utilities with zero database storage, edge execution, and complete privacy.
        </p>
      </header>

      {/* Article Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Online developer tools are often loaded with advertising trackers, cookie banners, and centralized logging. When querying infrastructure details like DNS records, SSL certificates, or API tokens, developers risk exposing internal endpoints to third parties.
        </p>
        <p>
          WTOOLS was designed as a privacy-first alternative. Built using the Next.js 14 App Router and TypeScript, it partitions tools into two distinct execution models:
        </p>

        {/* Section 1 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="terminal" size={22} className="text-md-primary" />
            <span>1. Client-Side Only Tools</span>
          </h2>
          <p>
            Utilities that operate on text and cryptographic data (such as JSON formatters, regex analyzers, UUID generators, hash checksums, and Base64 encoders) execute entirely inside the browser runtime using native Web Cryptography and JavaScript primitives. Zero data leaves the user&apos;s device.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="cloud_sync" size={22} className="text-md-primary" />
            <span>2. Ephemeral Edge Diagnostic APIs</span>
          </h2>
          <p>
            For utilities requiring external network queries (such as DNS-over-HTTPS lookup, SSL certificate inspection, WHOIS registration queries, and HTTP header checking), WTOOLS routes requests through stateless edge functions. These functions perform direct network queries, format the JSON response, and immediately drop all session memory. No database, server log, or analytics beacon ever records user queries.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/wtools/" icon="arrow_back">
          WTOOLS Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="https://github.com/wyzuk/wtools" icon="code">
          GitHub Repository
        </M3Button>
      </div>
    </div>
  );
}
