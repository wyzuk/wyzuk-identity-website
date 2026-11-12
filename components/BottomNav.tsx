'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';

const BOTTOM_ITEMS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Projects', href: '/projects/', icon: 'deployed_code' },
  { label: 'Notes', href: '/notes/', icon: 'article' },
  { label: 'Tech', href: '/technologies/', icon: 'memory' },
  { label: 'About', href: '/about/', icon: 'person' },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      className="lg:hidden fixed bottom-3 inset-x-3 z-40 max-w-md mx-auto apple-glass rounded-full px-3 py-2 shadow-2xl glossy-shine select-none pointer-events-auto"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="grid grid-cols-5 gap-1 items-center">
        {BOTTOM_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 py-0.5 text-center group focus:outline-none"
            >
              <div
                className={`w-12 h-7 rounded-full flex items-center justify-center transition-all ${
                  active
                    ? 'bg-md-primary text-md-on-primary shadow-md shadow-md-primary/30 glossy-pill'
                    : 'text-md-on-surface-variant group-hover:bg-white/40 dark:group-hover:bg-white/10'
                }`}
              >
                <Icon name={item.icon} size={18} filled={active} />
              </div>
              <span
                className={`text-[10px] font-sans tracking-tight transition-colors ${
                  active ? 'font-bold text-md-primary' : 'font-medium text-md-on-surface-variant'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
