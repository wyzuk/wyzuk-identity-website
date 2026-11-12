import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact & Public Profiles Reach WYZUK Directly | WYZUK',
  description:
    'Verified public communication channels: Email (onlyjamim@gmail.com), Discord (ID 330355220284571649), X/Twitter, and GitHub.',
  path: '/contact/',
});

const CONTACT_CHANNELS = [
  {
    name: 'Direct Email',
    handle: 'onlyjamim@gmail.com',
    href: 'mailto:onlyjamim@gmail.com',
    icon: 'mail',
    description: 'Best for general inquiries, security notes, code questions, or collaboration proposals.',
    actionLabel: 'Send Email',
  },
  {
    name: 'GitHub',
    handle: '@wyzuk',
    href: 'https://github.com/wyzuk',
    icon: 'code',
    description: 'Issues, discussions, pull requests, and verified open-source software contributions.',
    actionLabel: 'View GitHub Profile',
  },
  {
    name: 'Discord',
    handle: 'User ID: 330355220284571649',
    href: 'https://discord.com/users/330355220284571649',
    icon: 'chat',
    description: 'Direct messaging for technical discussions, Linux ricing, and bot development.',
    actionLabel: 'Connect on Discord',
  },
  {
    name: 'X (Twitter)',
    handle: '@w_jamim',
    href: 'https://x.com/w_jamim',
    icon: 'tag',
    description: 'Short updates, project releases, and quick public mentions.',
    actionLabel: 'Follow @w_jamim',
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs crumbs={[{ label: 'Contact', href: '/contact/' }]} />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="alternate_email" size={15} />
          <span>Verified Channels</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Contact & Verified Channels
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Direct communication channels. Zero marketing funnels, zero spam trackers, and no automated form redirects.
        </p>
      </header>

      {/* Grid of Contact Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONTACT_CHANNELS.map((ch) => (
          <M3Card key={ch.name} variant="elevated" className="flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-md-primary-container text-md-on-primary-container flex items-center justify-center">
                  <Icon name={ch.icon} size={20} className="text-md-primary" />
                </div>
                <span className="font-mono text-xs text-md-on-surface-variant">{ch.handle}</span>
              </div>
              <h2 className="text-lg font-bold text-md-on-surface font-sans">
                {ch.name}
              </h2>
              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
                {ch.description}
              </p>
            </div>

            <div className="pt-3 border-t border-md-outline-variant/30">
              <M3Button
                variant="tonal"
                size="sm"
                href={ch.href}
                iconTrailing="arrow_forward"
              >
                {ch.actionLabel}
              </M3Button>
            </div>
          </M3Card>
        ))}
      </section>

      {/* Safety Notice */}
      <M3Card variant="outlined" className="space-y-2">
        <div className="flex items-center gap-2 text-md-primary">
          <Icon name="verified_user" size={18} />
          <h3 className="font-sans font-bold text-sm">Identity Assurance</h3>
        </div>
        <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed">
          I will never solicit money, demand private keys, or initiate unsolicited investment offers. Any public statements or commits are signed by my official GitHub account (<code className="font-mono text-xs text-md-primary">@wyzuk</code>) or domain (<code className="font-mono text-xs text-md-primary">nebulavex.bond</code>).
        </p>
      </M3Card>
    </div>
  );
}
