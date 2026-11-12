import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Wyzuk Cast Streaming Engine Client Side HLS.js Demuxing | WYZUK',
  description:
    'Technical documentation on parsing M3U8 playlists and managing adaptive video buffers directly in the browser runtime.',
  path: '/projects/wyzukcast/hls-streaming/',
});

export default function WyzukcastStreamingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Wyzuk Cast', href: '/projects/wyzukcast/' },
          { label: 'Streaming Engine', href: '/projects/wyzukcast/hls-streaming/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="live_tv" size={15} />
          <span>Streaming Architecture Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Wyzuk Cast: HLS.js Streaming Engine
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Zero-backend client-side IPTV playlist decoding and adaptive buffer management in pure web standards.
        </p>
      </header>

      {/* Article Content */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Wyzuk Cast was built to prove that modern web browsers do not require heavy server-side transcoding proxies to play live broadcast streams. By pairing native HTML5 Video APIs with HLS.js, manifest parsing, transport stream (.ts) demuxing, and buffer appending occur directly within the client browser runtime.
        </p>

        {/* Section 1 */}
        <section className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="playlist_play" size={22} className="text-md-primary" />
            <span>M3U Playlist Parsing Pipeline</span>
          </h2>
          <p>
            IPTV playlists aggregate live stream links structured in M3U format. Wyzuk Cast downloads the raw text manifest asynchronously and feeds it through an in-memory lexical scanner that extracts channel metadata, group identifiers, and stream URLs in sub-50 milliseconds.
          </p>

          <div className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-2 font-mono text-xs text-md-on-surface">
            <div className="flex items-center justify-between pb-2 border-b border-md-outline-variant/30 text-md-on-surface-variant">
              <span>categoryMapping.js</span>
              <span className="text-[11px] text-md-primary">JavaScript ES6</span>
            </div>
            <pre className="overflow-x-auto text-md-primary pt-2">
{`const CATEGORY_MAP = {
  News: ['news', 'headline', 'live', 'cnn', 'bbc'],
  Sports: ['sports', 'arena', 'football', 'cricket', 'espn'],
  Entertainment: ['entertainment', 'comedy', 'series', 'drama'],
  Cinema: ['cinema', 'movies', 'film', 'action'],
};`}
            </pre>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="tune" size={22} className="text-md-primary" />
            <span>Adaptive Buffer Management</span>
          </h2>
          <p>
            To maintain smooth playback across fluctuating mobile and broadband connections, HLS.js monitors download throughput and drops or buffers video segments dynamically without locking the main thread.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/wyzukcast/" icon="arrow_back">
          Wyzuk Cast Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="https://wyzukcast.vercel.app" icon="play_circle">
          Launch Live App
        </M3Button>
      </div>
    </div>
  );
}
