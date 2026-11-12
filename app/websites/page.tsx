import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { EXTERNAL_WEBSITES } from '@/lib/data/websites';

export const metadata: Metadata = constructMetadata({
  title: 'Websites Directory Associated Domains & Web Properties | WYZUK',
  description:
    'Directory of websites connected to WYZUK including wasee.dev, vaultrix.shop, yumemiro-os.github.io, and live project deployments.',
  path: '/websites/',
});

export default function WebsitesDirectoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs crumbs={[{ label: 'Websites', href: '/websites/' }]} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="language" size={15} />
          <span>Web Ecosystem</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Associated Websites & Domains
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Directory of active online web properties, verified portfolio redirects, and live project deployments created by WYZUK.
        </p>
      </header>

      {/* Grid of Website Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXTERNAL_WEBSITES.map((site) => (
          <M3Card key={site.domain} variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-md-primary">
                  {site.domain}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-md-surface-container text-md-on-surface uppercase">
                  {site.status}
                </span>
              </div>

              <h2 className="text-lg font-bold text-md-on-surface font-sans">
                {site.title}
              </h2>

              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
                {site.description}
              </p>

              <div className="text-xs font-mono text-md-outline pt-1">
                <span>Relationship: </span>
                <span className="text-md-on-surface">{site.relationship}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {site.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-md-surface-container text-md-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-md-outline-variant/30">
              <M3Button
                variant="filled"
                size="sm"
                href={site.url}
                icon="open_in_new"
              >
                Visit {site.domain}
              </M3Button>
            </div>
          </M3Card>
        ))}
      </section>
    </div>
  );
}
