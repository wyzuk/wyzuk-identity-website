import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'NEXUS Network Discovery Subnet Scanning & Topology Mapping | WYZUK',
  description:
    'Defensive local network discovery principles, ARP table inspection, and real-time WebSocket latency tracking in NEXUS.',
  path: '/projects/nexus/topology-discovery/',
});

export default function NexusTopologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'NEXUS', href: '/projects/nexus/' },
          { label: 'Topology Discovery', href: '/projects/nexus/topology-discovery/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="hub" size={15} />
          <span>Network Intelligence Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          NEXUS: Local Subnet Topology Discovery
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Defensive network inspection, ARP sweeps, and real-time state visualization.
        </p>
      </header>

      {/* Article Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Managing a local network with virtual machines, Docker containers, development boards, and servers requires clear visibility. NEXUS was designed from a defensive security perspective: it empowers administrators to inspect and monitor only networks they own and control.
        </p>

        {/* Section 1 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="radar" size={22} className="text-md-primary" />
            <span>Asynchronous Discovery Engine</span>
          </h2>
          <p>
            The backend engine, built in Python 3.11 with FastAPI, performs non-intrusive ICMP echo sweeps and inspects kernel ARP cache tables (/proc/net/arp on Linux) to identify live hosts without aggressive port floods. Discovered MAC addresses are cross-referenced against official IEEE OUI databases to infer device manufacturer hardware.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="stream" size={22} className="text-md-primary" />
            <span>Real-Time WebSocket Graph Streaming</span>
          </h2>
          <p>
            As network states change (such as a device disconnecting or dropping packets), backend event listeners broadcast status deltas via WebSockets to the Next.js frontend. The UI updates its node topology graph in real time without polling or full page refreshes.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/nexus/" icon="arrow_back">
          NEXUS Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="https://github.com/wyzuk/nexus" icon="code">
          GitHub Repository
        </M3Button>
      </div>
    </div>
  );
}
