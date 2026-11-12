import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Flappy Wyzuk Audio Synthesis Web Audio API Procedural Oscillators | WYZUK',
  description:
    'How Flappy Wyzuk generates dynamic retro arcade sound effects purely through mathematical frequency curves with zero audio files.',
  path: '/projects/flappy-wyzuk/audio-synthesis/',
});

export default function FlappyAudioSynthesisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: 'Flappy Wyzuk', href: '/projects/flappy/' },
          { label: 'Audio Synthesis', href: '/projects/flappy-wyzuk/audio-synthesis/' },
        ]}
      />

      <header className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="graphic_eq" size={15} />
          <span>Audio Architecture Whitepaper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Flappy Wyzuk: Procedural Sound Synthesis
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Synthesizing retro sound effects via mathematical oscillator waveforms in JavaScript with zero downloaded audio files.
        </p>
      </header>

      {/* Article Narrative */}
      <article className="space-y-8 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed">
        <p>
          In traditional web game development, developers load audio assets like .wav or .mp3 files over HTTP. This adds network payload, requires asynchronous asset decoding, and can cause frame drops or audio delay on mobile browsers.
        </p>
        <p>
          For Flappy Wyzuk, WYZUK engineered a 100% procedural sound synthesis engine built upon the browser&apos;s native Web Audio API. Zero audio files are downloaded; every wing flap, coin chime, and collision effect is synthesized mathematically in real time.
        </p>

        {/* Section 1 */}
        <section className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="waves" size={22} className="text-md-primary" />
            <span>Oscillator Waveform Design</span>
          </h2>
          <p>
            By chaining an <code className="font-mono text-xs px-2 py-0.5 rounded bg-md-surface-container text-md-primary">OscillatorNode</code> to an exponential <code className="font-mono text-xs px-2 py-0.5 rounded bg-md-surface-container text-md-primary">GainNode</code>, the engine sculpts custom sound envelopes:
          </p>

          <div className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-3 text-xs sm:text-sm font-body text-md-on-surface-variant">
            <div className="flex items-start gap-2.5">
              <Icon name="volume_up" size={18} className="text-md-primary shrink-0 mt-0.5" />
              <div><strong className="text-md-on-surface">Wing Flap:</strong> Triangle wave sweeping from 150Hz to 480Hz over 80ms with rapid exponential decay.</div>
            </div>
            <div className="flex items-start gap-2.5">
              <Icon name="notifications" size={18} className="text-md-primary shrink-0 mt-0.5" />
              <div><strong className="text-md-on-surface">Coin Chime:</strong> Pure sine wave dual-tone jumping from 987Hz (B5) to 1318Hz (E6) creating an upbeat harmonic third.</div>
            </div>
            <div className="flex items-start gap-2.5">
              <Icon name="flash_on" size={18} className="text-md-primary shrink-0 mt-0.5" />
              <div><strong className="text-md-on-surface">Impact / Crash:</strong> Low-frequency sawtooth wave with noise frequency jitter simulating explosive physical shock.</div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans flex items-center gap-2">
            <Icon name="bolt" size={22} className="text-md-primary" />
            <span>Sub-5ms Zero-Latency Interactive Physics</span>
          </h2>
          <p>
            Because synthesized sounds require no network decoding, playback latency is sub-5 milliseconds. Furthermore, subtle frequency jitter is added dynamically on each flap, preventing the repetitive audio fatigue common in retro arcade games.
          </p>
        </section>
      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/projects/flappy/" icon="arrow_back">
          Flappy Wyzuk Overview
        </M3Button>
        <M3Button variant="filled" size="sm" href="https://flpybrd.netlify.app/" icon="play_circle">
          Play Live in Browser
        </M3Button>
      </div>
    </div>
  );
}
