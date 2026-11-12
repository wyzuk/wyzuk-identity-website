import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="border-t border-white/40 dark:border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur-2xl text-md-on-surface-variant text-xs font-sans pt-16 pb-28 lg:pb-16 mt-24 rounded-t-[36px] sm:rounded-t-[48px] shadow-2xl relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-md-primary text-md-on-primary flex items-center justify-center font-bold text-sm">
                W
              </div>
              <span className="font-bold text-base text-md-on-surface tracking-wide">
                WYZUK
              </span>
            </div>
            <p className="text-xs leading-relaxed text-md-on-surface-variant font-body">
              Class 11 student developer (2026) based in Bangladesh. Building Arch Linux desktop systems, 3D voxel graphics, and client-side web tools.
            </p>
            <div className="pt-1 flex items-center gap-2 text-md-primary font-mono text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>nebulavex.bond · Active</span>
            </div>
          </div>

          {/* Column 2: Core Archives */}
          <div className="space-y-3">
            <div className="font-bold text-xs uppercase tracking-wider text-md-on-surface">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/projects/" className="hover:text-md-primary transition-colors flex items-center gap-1.5">
                  <Icon name="deployed_code" size={15} />
                  <span>Projects Archive</span>
                </Link>
              </li>
              <li>
                <Link href="/notes/" className="hover:text-md-primary transition-colors flex items-center gap-1.5">
                  <Icon name="article" size={15} />
                  <span>Technical Notes</span>
                </Link>
              </li>
              <li>
                <Link href="/technologies/" className="hover:text-md-primary transition-colors flex items-center gap-1.5">
                  <Icon name="memory" size={15} />
                  <span>Technologies</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-md-primary transition-colors flex items-center gap-1.5">
                  <Icon name="photo_library" size={15} />
                  <span>Visual Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/uses/" className="hover:text-md-primary transition-colors flex items-center gap-1.5">
                  <Icon name="terminal" size={15} />
                  <span>Uses & Hardware</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Identity & Biography */}
          <div className="space-y-3">
            <div className="font-bold text-xs uppercase tracking-wider text-md-on-surface">
              Identity & Background
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about/" className="hover:text-md-primary transition-colors">
                  About WYZUK
                </Link>
              </li>
              <li>
                <Link href="/about/identity/" className="hover:text-md-primary transition-colors">
                  Identity & Aliases
                </Link>
              </li>
              <li>
                <Link href="/about/education/" className="hover:text-md-primary transition-colors">
                  Education Statement
                </Link>
              </li>
              <li>
                <Link href="/about/interests/" className="hover:text-md-primary transition-colors">
                  Technical Interests
                </Link>
              </li>
              <li>
                <Link href="/about/journey/" className="hover:text-md-primary transition-colors">
                  Development Journey
                </Link>
              </li>
              <li>
                <Link href="/websites/" className="hover:text-md-primary transition-colors">
                  Websites Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels & Connect */}
          <div className="space-y-3">
            <div className="font-bold text-xs uppercase tracking-wider text-md-on-surface">
              Verified Profiles
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="https://github.com/wyzuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-md-primary transition-colors flex items-center gap-1.5"
                >
                  <Icon name="code" size={15} />
                  <span>GitHub (@wyzuk)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://wasee.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-md-primary transition-colors flex items-center gap-1.5"
                >
                  <Icon name="globe" size={15} />
                  <span>wasee.dev</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/w_jamim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-md-primary transition-colors flex items-center gap-1.5"
                >
                  <Icon name="tag" size={15} />
                  <span>X (@w_jamim)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:onlyjamim@gmail.com"
                  className="hover:text-md-primary transition-colors flex items-center gap-1.5"
                >
                  <Icon name="mail" size={15} />
                  <span>onlyjamim@gmail.com</span>
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-md-outline flex items-center gap-3">
                <Link href="/colophon/" className="hover:text-md-primary transition-colors">
                  Colophon
                </Link>
                <span>·</span>
                <Link href="/privacy/" className="hover:text-md-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-md-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-md-on-surface-variant font-mono">
          <div>
            © 2026 WYZUK. Crafted with authentic Google Material 3 Design.
          </div>
          <div className="flex items-center gap-3">
            <span>nebulavex.bond</span>
            <span>·</span>
            <span>Zero Trackers · 100% Client-Side Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
