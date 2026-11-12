import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Chip from '@/components/M3Chip';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { TECHNICAL_NOTES } from '@/lib/data/notes';

export const metadata: Metadata = constructMetadata({
  title: 'Engineering Notes & Retrospectives Technical Articles | WYZUK',
  description:
    'Original technical writeups, architecture breakdowns, and retrospectives on Linux ricing, WebGL voxel engines, and streaming.',
  path: '/notes/',
});

export default function NotesIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <Breadcrumbs crumbs={[{ label: 'Notes', href: '/notes/' }]} />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="article" size={15} />
          <span>Technical Whitepapers & Notes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Engineering Notes & Retrospectives
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Original technical writeups, system architecture breakdowns, and personal retrospectives on Arch Linux, WebGL voxel graphics, and audio synthesis.
        </p>
      </header>

      {/* Grid of Notes */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECHNICAL_NOTES.map((note) => (
          <M3Card
            key={note.slug}
            variant="elevated"
            className="flex flex-col justify-between gap-6 group hover:border-md-primary/40"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-md-on-surface-variant">
                <span className="px-2.5 py-0.5 rounded-full bg-md-surface-container text-md-primary font-semibold uppercase text-[10px]">
                  {note.category}
                </span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Icon name="schedule" size={13} />
                  <span>{note.readTime}</span>
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors line-clamp-2">
                <Link href={`/notes/${note.slug}/`}>
                  {note.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-md-on-surface-variant font-body leading-relaxed line-clamp-3">
                {note.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-md-outline-variant/30 flex items-center justify-between text-xs font-sans">
              <time className="font-mono text-[11px] text-md-outline">{note.date}</time>
              <M3Button
                variant="tonal"
                size="sm"
                href={`/notes/${note.slug}/`}
                iconTrailing="arrow_forward"
              >
                Read Article
              </M3Button>
            </div>
          </M3Card>
        ))}
      </section>
    </div>
  );
}
