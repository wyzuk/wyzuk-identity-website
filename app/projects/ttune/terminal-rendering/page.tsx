import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'ttune Terminal Rendering RGB Audio Spectrum via Curses & FFmpeg | WYZUK',
  description:
    'Technical engineering of real-time terminal equalizer rendering using Python curses and asynchronous FFmpeg decoding.',
  path: '/projects/ttune/terminal-rendering/',
});

export default function TtuneTerminalRenderingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'ttune', href: '/projects/ttune/' },
          { label: 'Terminal Rendering', href: '/projects/ttune/terminal-rendering/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="terminal" size={15} />
          <span>TUI Graphics Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          ttune: Terminal Equalizer Graphics
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          FFmpeg audio pipelines and discrete Fourier transform rendering in Python Curses.
        </p>
      </header>

      {/* Article Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          Rendering smooth, colored graphics in a text terminal requires bypassing conventional print statements in favor of raw terminal buffer control. In ttune, the audio playback pipeline runs parallel to an asynchronous frequency analyzer that updates the terminal display at 30 updates per second.
        </p>

        {/* Section 1 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="stream" size={22} className="text-md-primary" />
            <span>Asynchronous Audio Pipe via Subprocess FFmpeg</span>
          </h2>
          <p>
            FFmpeg runs as a background subprocess decoding any incoming media container into a raw 16-bit 44.1kHz stereo PCM byte stream piped directly into Python standard input. This sidesteps the need for proprietary codec wrappers.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="graphic_eq" size={22} className="text-md-primary" />
            <span>Fast Fourier Transform (FFT) Binning</span>
          </h2>
          <p>
            As raw audio chunks stream through, NumPy computes discrete Fast Fourier Transforms to extract spectral amplitude across human audible frequencies (20Hz to 20kHz). Frequency bands are logarithmically mapped to terminal columns to mirror human ear frequency sensitivity.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="palette" size={22} className="text-md-primary" />
            <span>Curses Color Gradient Mapping</span>
          </h2>
          <p>
            Vertical equalizer bars are drawn using Unicode block characters ( ▂▃▄▅▆▇█). Each vertical level maps to a specific color pair, providing responsive visual feedback synchronized with audio playback.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/ttune/" icon="arrow_back">
          ttune Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="https://github.com/wyzuk/ttune" icon="code">
          GitHub Repository
        </M3Button>
      </div>
    </div>
  );
}
