'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import ThemeSelector from './ThemeSelector';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Projects', href: '/projects/', icon: 'deployed_code' },
  { label: 'Notes', href: '/notes/', icon: 'article' },
  { label: 'Technologies', href: '/technologies/', icon: 'memory' },
  { label: 'Gallery', href: '/gallery/', icon: 'photo_library' },
  { label: 'About', href: '/about/', icon: 'person' },
  { label: 'Contact', href: '/contact/', icon: 'mail' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-md-primary focus:text-md-on-primary focus:rounded-full focus:font-medium focus:text-xs focus:shadow-elevation-3"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 sm:top-3 z-40 w-full px-2 sm:px-6 pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 rounded-3xl sm:rounded-full apple-glass glossy-shine pointer-events-auto transition-all duration-300">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-md-primary rounded-full px-2 py-1 select-none"
            aria-label="WYZUK Home"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-md-primary to-md-secondary text-md-on-primary flex items-center justify-center font-sans font-bold text-base shadow-md shadow-md-primary/20 group-hover:scale-105 transition-transform">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-wide text-md-on-surface group-hover:text-md-primary transition-colors">
                WYZUK
              </span>
              <span className="text-[11px] font-mono text-md-on-surface-variant">
                nebulavex.bond
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 font-sans text-xs" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`state-layer px-3.5 py-2 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-md-primary text-md-on-primary font-semibold shadow-md shadow-md-primary/25 glossy-pill'
                      : 'text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon} size={16} filled={active} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1.5">
            {/* Quick Search Shortcut */}
            <Link
              href="/projects/"
              className="state-layer h-10 w-10 rounded-full flex items-center justify-center text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10 transition-colors"
              title="Search projects and software"
              aria-label="Search"
            >
              <Icon name="search" size={20} />
            </Link>

            {/* Material You Theme & Palette Selector */}
            <ThemeSelector />

            {/* GitHub Profile Button */}
            <Link
              href="https://github.com/wyzuk"
              target="_blank"
              rel="noopener noreferrer"
              className="state-layer hidden sm:flex h-10 px-3.5 rounded-full items-center gap-1.5 border border-white/40 dark:border-white/10 text-xs font-medium text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10 transition-colors shadow-xs"
              title="GitHub @wyzuk"
            >
              <Icon name="code" size={16} />
              <span>@wyzuk</span>
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden state-layer h-10 w-10 rounded-full flex items-center justify-center text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden max-w-6xl mx-auto mt-2 rounded-[28px] apple-glass p-3 space-y-1 shadow-2xl glossy-shine pointer-events-auto border border-white/60 dark:border-white/15 animate-fade-in">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium transition-all ${
                    active
                      ? 'bg-md-primary text-md-on-primary font-semibold shadow-md'
                      : 'text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon} size={20} filled={active} className={active ? 'text-md-on-primary' : 'text-md-primary'} />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-white/20 dark:border-white/10 flex items-center justify-between px-3 text-xs font-mono text-md-on-surface-variant">
              <span>WYZUK · Class 11 · Bangladesh</span>
              <Link
                href="https://github.com/wyzuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md-primary hover:underline font-sans font-medium"
              >
                GitHub →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
