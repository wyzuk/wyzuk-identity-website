import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import { constructMetadata } from '@/lib/seo';
import { USES_DATA } from '@/lib/data/uses';

export const metadata: Metadata = constructMetadata({
  title: 'Uses & Setup Hardware, Linux Environment & Tools | WYZUK',
  description:
    'Documented hardware, Arch Linux setup, Hyprland window rules, Kitty terminal, and daily engineering utilities used by WYZUK.',
  path: '/uses/',
});

export default function UsesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs crumbs={[{ label: 'Uses & Setup', href: '/uses/' }]} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="devices" size={15} />
          <span>Daily Tools & Environment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Uses, Setup & Environment
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          The physical hardware, Arch Linux workstation setup, terminal configuration, and development utilities I rely on daily.
        </p>
      </header>

      {/* Categories */}
      <div className="space-y-10">
        {USES_DATA.map((cat) => (
          <section key={cat.category} className="space-y-4">
            <div className="border-b border-md-outline-variant/30 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
                {cat.category}
              </h2>
              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body">
                {cat.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <M3Card key={item.name} variant="elevated" className="space-y-2">
                  <h3 className="font-bold text-base text-md-on-surface font-sans">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-md-outline flex items-center gap-1.5">
                    <Icon name="verified" size={13} className="text-md-primary" />
                    <span>Evidence: {item.evidence}</span>
                  </div>
                </M3Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
