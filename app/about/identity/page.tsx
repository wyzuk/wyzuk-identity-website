import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { getProfilePageSchema } from '@/lib/schema';
import { BIOGRAPHY } from '@/lib/data/biography';

export const metadata: Metadata = constructMetadata({
  title: 'Identity & Aliases Understanding WYZUK, NebulaVex & Online Handles',
  description:
    'A clear explanation connecting primary moniker WYZUK, alternative alias NebulaVex, first-name alias Wasee, usernames nvxwx, ud1q, jamim, and Yumemiro OS.',
  path: '/about/identity/',
});

export default function IdentityPage() {
  const schema = getProfilePageSchema(
    '/about/identity/',
    'Identity & Aliases Dossier — WYZUK',
    'Official identity clarification connecting WYZUK, NebulaVex, Wasee, nvxwx, ud1q, jamim, and Yumemiro OS.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <JsonLd data={schema} />
      <Breadcrumbs
        crumbs={[
          { label: 'About', href: '/about/' },
          { label: 'Identity & Aliases', href: '/about/identity/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="fingerprint" size={15} />
          <span>Identity Verification Dossier</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Identity, Monikers & Aliases
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Canonical documentation establishing the relationship between public identifiers, domains, and developer profiles.
        </p>
      </header>

      {/* Narrative Section */}
      <section className="space-y-4 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Software developers often accumulate distinct usernames, project aliases, and online monikers across different code repositories, forums, and services. To provide absolute clarity for visitors, collaborators, and search engines, this page establishes the canonical relationship between all public identifiers associated with my work.
        </p>
        <p>
          <strong className="text-md-on-surface">WYZUK</strong> (or <strong className="text-md-on-surface">Wyzuk</strong>) is my primary public developer identity and dominant moniker. It is the author name across my open-source code repositories on <Link href="https://github.com/wyzuk" target="_blank" rel="noopener noreferrer" className="text-md-primary hover:underline">GitHub (@wyzuk)</Link>, browser games such as <Link href="/projects/flappy/" className="text-md-primary hover:underline">Flappy Wyzuk</Link>, and web applications like <Link href="/projects/wyzukcast/" className="text-md-primary hover:underline">Wyzuk Cast</Link>.
        </p>
        <p>
          <strong className="text-md-on-surface">NebulaVex</strong> serves as an alternative public alias and project handle, seen in the primary domain of this archive (<code className="font-mono text-xs text-md-primary">nebulavex.bond</code>) and author credit for digital commerce platforms such as <Link href="https://vaultrix.shop" target="_blank" rel="noopener noreferrer" className="text-md-primary hover:underline">Vaultrix</Link>.
        </p>
        <p>
          <strong className="text-md-on-surface">Wasee</strong> is my public first-name alias, used on <Link href="https://wasee.dev" target="_blank" rel="noopener noreferrer" className="text-md-primary hover:underline">wasee.dev</Link> and the GitHub profile header.
        </p>
        <p>
          <strong className="text-md-on-surface">nvxwx</strong> and <strong className="text-md-on-surface">ud1q</strong> are alternative developer usernames and online handles used across communities and developer platforms.
        </p>
        <p>
          <strong className="text-md-on-surface">jamim</strong> is an online username and handle used across various platforms and communication services.
        </p>
        <p>
          <strong className="text-md-on-surface">Yumemiro OS</strong> is my custom Arch Linux operating system distribution identity, developed and maintained as an open-source project.
        </p>
      </section>

      {/* Identifier Matrix Cards */}
      <section className="space-y-4 pt-4 border-t border-md-outline-variant/30">
        <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
          Public Identifier Matrix
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BIOGRAPHY.aliases.map((item) => (
            <M3Card key={item.name} variant="elevated" className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-md-on-surface font-sans">{item.name}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-md-surface-container text-md-primary">
                  {item.type}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed pt-1">
                {item.usage}
              </p>
            </M3Card>
          ))}
        </div>
      </section>

      {/* Canonical Domain Verification Card */}
      <M3Card variant="outlined" className="space-y-2">
        <div className="flex items-center gap-2 text-md-primary">
          <Icon name="verified" size={20} />
          <h3 className="font-sans font-bold text-sm">Canonical Domain & Provenance</h3>
        </div>
        <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
          The canonical address for this website is <code className="text-md-primary font-mono text-xs">https://nebulavex.bond</code>. All primary releases, verified project writeups, and technical notes originate from this domain and the primary GitHub profile at <code className="text-md-primary font-mono text-xs">https://github.com/wyzuk</code>.
        </p>
      </M3Card>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/about/" icon="arrow_back">
          About Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="/about/education/" iconTrailing="arrow_forward">
          Education Statement
        </M3Button>
      </div>
    </div>
  );
}
