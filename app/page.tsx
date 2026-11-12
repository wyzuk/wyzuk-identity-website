import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data/projects';
import { TECHNICAL_NOTES } from '@/lib/data/notes';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import M3Chip from '@/components/M3Chip';
import M3Card from '@/components/M3Card';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
  const spotlightProjects = PROJECTS.slice(0, 4);
  const selectedProjects = PROJECTS.slice(0, 6);
  const recentNotes = TECHNICAL_NOTES.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-16 sm:space-y-24">
      {/* 1. Hero & Developer Introduction */}
      <section className="space-y-8 pt-2 sm:pt-6">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass text-md-on-surface text-xs font-sans font-medium shadow-md glossy-pill border border-white/60 dark:border-white/15">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
          <span>Independent Developer · Class 11 Student · 2026</span>
        </div>

        {/* Identity & Main Title */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-md-on-surface font-sans leading-[1.12]">
            Handcrafting operating systems, 3D voxel graphics, and lightweight web crafts.
          </h1>
          <p className="text-base sm:text-lg text-md-on-surface-variant font-body leading-relaxed max-w-3xl">
            I am <strong className="text-md-on-surface font-semibold">WYZUK</strong> (also known as <span className="text-md-primary">NebulaVex</span> and <span className="text-md-primary">Wasee</span>), an independent student developer based in Bangladesh. I explore computing from the silicon up—mastering Arch Linux live distributions with Hyprland, coding procedural WebGL engines at 60 FPS, synthesizing zero-file retro audio, and building private developer tools.
          </p>
        </div>

        {/* M3 Badges & Quick Attributes */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <M3Chip label="Class 11 Student · 2026" icon="school" variant="assist" />
          <M3Chip label="Bangladesh" icon="location_on" variant="assist" />
          <M3Chip label="Arch Linux & Wayland" icon="terminal" variant="assist" />
          <M3Chip label="Three.js & WebGL" icon="view_in_ar" variant="assist" />
          <M3Chip label="Zero Trackers" icon="security" variant="assist" />
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <M3Button
            variant="filled"
            size="lg"
            href="/projects/"
            icon="deployed_code"
          >
            Explore Projects ({PROJECTS.length})
          </M3Button>

          <M3Button
            variant="tonal"
            size="lg"
            href="/notes/"
            icon="article"
          >
            Engineering Notes
          </M3Button>

          <M3Button
            variant="outlined"
            size="lg"
            href="/about/"
            icon="person"
          >
            About & Background
          </M3Button>

          <M3Button
            variant="text"
            size="lg"
            href="https://github.com/wyzuk"
            icon="code"
          >
            GitHub @wyzuk
          </M3Button>
        </div>
      </section>

      {/* 2. Spotlight Bento Grid: Signature Crafts */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-md-outline-variant/30 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Flagship Systems</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-md-on-surface font-sans">
              Signature Projects
            </h2>
          </div>
          <Link
            href="/projects/"
            className="text-xs font-medium text-md-primary hover:underline inline-flex items-center gap-1"
          >
            <span>View all {PROJECTS.length} verified projects</span>
            <Icon name="arrow_forward" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Yumemiro OS */}
          <M3Card variant="elevated" className="flex flex-col justify-between gap-6 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md text-md-on-surface border border-white/50 dark:border-white/10 flex items-center gap-1.5 glossy-pill">
                  <Icon name="terminal" size={15} className="text-md-primary" />
                  <span>Operating Systems</span>
                </span>
                <span className="text-xs font-mono text-md-on-surface-variant flex items-center gap-1 bg-white/40 dark:bg-white/5 px-2.5 py-1 rounded-full border border-white/40 dark:border-white/10">
                  <Icon name="star" size={14} className="text-amber-400" filled />
                  <span>13 stars</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                <Link href="/projects/yumemiro-os/">Yumemiro OS</Link>
              </h3>
              <p className="text-sm text-md-on-surface-variant font-body leading-relaxed">
                A custom Arch Linux desktop distribution powered by the Hyprland Wayland compositor. Features fluid workspace transitions, custom Waybar modules, frosted glass SDDM display manager, and a sub-650MB idle memory footprint.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Arch Linux', 'Hyprland', 'Waybar', 'Calamares', 'Python'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/40 dark:bg-white/5 backdrop-blur-md text-md-on-surface-variant border border-white/40 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-md-outline-variant/30">
              <Link
                href="/projects/yumemiro-os/"
                className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Read architecture</span>
                <Icon name="arrow_forward" size={14} />
              </Link>
              <div className="flex items-center gap-2">
                <M3Button variant="outlined" size="sm" href="https://yumemiro-os.github.io" icon="open_in_new">
                  Showcase
                </M3Button>
                <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk/yumemiro-os" icon="code">
                  Source
                </M3Button>
              </div>
            </div>
          </M3Card>

          {/* Card 2: YourCraft */}
          <M3Card variant="elevated" className="flex flex-col justify-between gap-6 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md text-md-on-surface border border-white/50 dark:border-white/10 flex items-center gap-1.5 glossy-pill">
                  <Icon name="sports_esports" size={15} className="text-md-primary" />
                  <span>3D Browser Engines</span>
                </span>
                <span className="text-xs font-mono text-md-on-surface-variant flex items-center gap-1 bg-white/40 dark:bg-white/5 px-2.5 py-1 rounded-full border border-white/40 dark:border-white/10">
                  <Icon name="star" size={14} className="text-amber-400" filled />
                  <span>9 stars</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                <Link href="/projects/yourcraft/">YourCraft</Link>
              </h3>
              <p className="text-sm text-md-on-surface-variant font-body leading-relaxed">
                A Minecraft-inspired procedural 3D voxel sandbox running directly in web browsers at a locked 60 FPS. Implements 16x16 chunk partitioning, greedy face culling, raycast block modification, and texture atlas mapping in WebGL.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['JavaScript', 'Three.js', 'WebGL', 'Pointer Lock', 'Voxel Engine'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/40 dark:bg-white/5 backdrop-blur-md text-md-on-surface-variant border border-white/40 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-md-outline-variant/30">
              <Link
                href="/projects/yourcraft/"
                className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Read details</span>
                <Icon name="arrow_forward" size={14} />
              </Link>
              <div className="flex items-center gap-2">
                <M3Button variant="filled" size="sm" href="https://your-craft.netlify.app/" icon="play_circle">
                  Play in Browser
                </M3Button>
                <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk/yourcraft" icon="code">
                  Source
                </M3Button>
              </div>
            </div>
          </M3Card>

          {/* Card 3: Wyzuk Cast */}
          <M3Card variant="elevated" className="flex flex-col justify-between gap-6 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md text-md-on-surface border border-white/50 dark:border-white/10 flex items-center gap-1.5 glossy-pill">
                  <Icon name="live_tv" size={15} className="text-md-primary" />
                  <span>Web Streaming</span>
                </span>
                <span className="text-xs font-mono text-md-on-surface-variant flex items-center gap-1 bg-white/40 dark:bg-white/5 px-2.5 py-1 rounded-full border border-white/40 dark:border-white/10">
                  <Icon name="star" size={14} className="text-amber-400" filled />
                  <span>5 stars</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                <Link href="/projects/wyzukcast/">Wyzuk Cast</Link>
              </h3>
              <p className="text-sm text-md-on-surface-variant font-body leading-relaxed">
                A zero-backend client-side IPTV streaming web player. Directly parses and demuxes M3U/M3U8 playlists in the browser with HLS.js, featuring real-time channel category filtering, search, and native Picture-in-Picture.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['JavaScript', 'HLS.js', 'HTML5 Video', 'CSS3', 'Vercel Edge'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/40 dark:bg-white/5 backdrop-blur-md text-md-on-surface-variant border border-white/40 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-md-outline-variant/30">
              <Link
                href="/projects/wyzukcast/"
                className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Read details</span>
                <Icon name="arrow_forward" size={14} />
              </Link>
              <div className="flex items-center gap-2">
                <M3Button variant="filled" size="sm" href="https://wyzukcast.vercel.app" icon="play_circle">
                  Launch Player
                </M3Button>
                <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk/wyzukcast" icon="code">
                  Source
                </M3Button>
              </div>
            </div>
          </M3Card>

          {/* Card 4: Flappy Wyzuk */}
          <M3Card variant="elevated" className="flex flex-col justify-between gap-6 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md text-md-on-surface border border-white/50 dark:border-white/10 flex items-center gap-1.5 glossy-pill">
                  <Icon name="volume_up" size={15} className="text-md-primary" />
                  <span>Procedural Audio & Arcade</span>
                </span>
                <span className="text-xs font-mono text-md-on-surface-variant flex items-center gap-1 bg-white/40 dark:bg-white/5 px-2.5 py-1 rounded-full border border-white/40 dark:border-white/10">
                  <Icon name="star" size={14} className="text-amber-400" filled />
                  <span>9 stars</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors">
                <Link href="/projects/flappy/">Flappy Wyzuk</Link>
              </h3>
              <p className="text-sm text-md-on-surface-variant font-body leading-relaxed">
                An indie neon arcade game running at 60+ FPS on Canvas 2D with 12 characters, 11 parallax worlds, and 100% procedural sound synthesis using Web Audio API oscillators—zero downloaded audio files.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'Physics'].map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/40 dark:bg-white/5 backdrop-blur-md text-md-on-surface-variant border border-white/40 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-md-outline-variant/30">
              <Link
                href="/projects/flappy/"
                className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Read details</span>
                <Icon name="arrow_forward" size={14} />
              </Link>
              <div className="flex items-center gap-2">
                <M3Button variant="filled" size="sm" href="https://flpybrd.netlify.app/" icon="play_circle">
                  Play Game
                </M3Button>
                <M3Button variant="tonal" size="sm" href="https://github.com/wyzuk/flappy" icon="code">
                  Source
                </M3Button>
              </div>
            </div>
          </M3Card>
        </div>
      </section>

      {/* 3. Selected Projects Stream */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-md-outline-variant/30 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Verified Repositories</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-md-on-surface font-sans">
              Selected Work
            </h2>
          </div>
          <M3Button variant="tonal" size="sm" href="/projects/" iconTrailing="arrow_forward">
            Explore All Projects ({PROJECTS.length})
          </M3Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 4. Engineering Notes Preview */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-md-outline-variant/30 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-md-primary">Articles & Retrospectives</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-md-on-surface font-sans">
              Technical Notes
            </h2>
          </div>
          <Link
            href="/notes/"
            className="text-xs font-medium text-md-primary hover:underline inline-flex items-center gap-1"
          >
            <span>Read all {TECHNICAL_NOTES.length} notes</span>
            <Icon name="arrow_forward" size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNotes.map((note) => (
            <M3Card key={note.slug} variant="outlined" className="flex flex-col justify-between gap-4 group">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-md-on-surface-variant">
                  <span className="uppercase text-md-primary font-semibold">{note.category}</span>
                  <span>{note.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-md-on-surface font-sans group-hover:text-md-primary transition-colors line-clamp-2">
                  <Link href={`/notes/${note.slug}/`}>{note.title}</Link>
                </h3>
                <p className="text-xs text-md-on-surface-variant font-body leading-relaxed line-clamp-3">
                  {note.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-md-outline-variant/30 flex items-center justify-between text-xs">
                <time className="font-mono text-[11px] text-md-outline">{note.date}</time>
                <Link
                  href={`/notes/${note.slug}/`}
                  className="font-medium text-md-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Read note</span>
                  <Icon name="arrow_forward" size={14} />
                </Link>
              </div>
            </M3Card>
          ))}
        </div>
      </section>

      {/* 5. Google Account-style Identity & Verification Card */}
      <section className="rounded-3xl p-6 sm:p-8 bg-md-surface-container border border-md-outline-variant/40 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-md-primary-container text-md-on-primary-container flex items-center justify-center font-bold text-xl shadow-xs">
              <Icon name="verified_user" size={26} className="text-md-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-md-on-surface font-sans">
                Identity & Canonical Verification
              </h2>
              <p className="text-xs text-md-on-surface-variant font-body">
                Official presence connecting handles, projects, and domains.
              </p>
            </div>
          </div>
          <M3Button variant="tonal" size="sm" href="/about/identity/" icon="fingerprint">
            Identity Dossier
          </M3Button>
        </div>

        <p className="text-sm text-md-on-surface-variant font-body leading-relaxed">
          <strong className="text-md-on-surface">WYZUK</strong> is my primary developer identity across open-source code and public software. <strong className="text-md-on-surface">NebulaVex</strong> is my project brand and domain moniker (<code className="font-mono text-xs text-md-primary">nebulavex.bond</code>). <strong className="text-md-on-surface">Wasee</strong> is my public first-name alias (<Link href="https://wasee.dev" className="text-md-primary hover:underline">wasee.dev</Link>). Additional handles include <span className="font-mono text-xs">nvxwx</span>, <span className="font-mono text-xs">ud1q</span>, and <span className="font-mono text-xs">jamim</span>.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
          <div className="p-3 rounded-2xl bg-md-surface-container-high border border-md-outline-variant/40 space-y-1">
            <span className="text-[10px] uppercase text-md-outline block">Primary Handle</span>
            <span className="font-bold text-md-on-surface">@wyzuk</span>
          </div>
          <div className="p-3 rounded-2xl bg-md-surface-container-high border border-md-outline-variant/40 space-y-1">
            <span className="text-[10px] uppercase text-md-outline block">Domain</span>
            <span className="font-bold text-md-on-surface">nebulavex.bond</span>
          </div>
          <div className="p-3 rounded-2xl bg-md-surface-container-high border border-md-outline-variant/40 space-y-1">
            <span className="text-[10px] uppercase text-md-outline block">Education</span>
            <span className="font-bold text-md-on-surface">Class 11 (2026)</span>
          </div>
          <div className="p-3 rounded-2xl bg-md-surface-container-high border border-md-outline-variant/40 space-y-1">
            <span className="text-[10px] uppercase text-md-outline block">Location</span>
            <span className="font-bold text-md-on-surface">Bangladesh</span>
          </div>
        </div>
      </section>
    </div>
  );
}
