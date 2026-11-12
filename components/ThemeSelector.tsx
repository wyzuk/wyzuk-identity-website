'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';
import { useTheme, Palette, ThemeMode } from './ThemeContext';

const PALETTES: { id: Palette; name: string; lightHex: string; darkHex: string }[] = [
  { id: 'blue', name: 'Nebula Blue', lightHex: '#0b57d0', darkHex: '#a8c7fa' },
  { id: 'teal', name: 'Pixel Mint', lightHex: '#006a6a', darkHex: '#4ddad7' },
  { id: 'coral', name: 'Coral Sunset', lightHex: '#a93a27', darkHex: '#ffb4a2' },
  { id: 'purple', name: 'Lavender Mist', lightHex: '#6e4ea1', darkHex: '#d0bcff' },
  { id: 'green', name: 'Emerald', lightHex: '#006d44', darkHex: '#71dba3' },
];

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, palette, resolvedTheme, setTheme, setPalette } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="state-layer h-10 w-10 rounded-full flex items-center justify-center text-md-on-surface-variant hover:text-md-on-surface hover:bg-md-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-md-primary"
        aria-label="Customize theme and Material You palette"
        title="Theme settings"
      >
        <Icon
          name={resolvedTheme === 'dark' ? 'dark_mode' : 'light_mode'}
          size={20}
        />
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 sm:w-80 p-4 rounded-[28px] apple-glass border border-white/60 dark:border-white/15 shadow-2xl glossy-shine z-50 animate-fade-in text-md-on-surface">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/20 dark:border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <Icon name="palette" size={20} className="text-md-primary" />
              <span className="font-sans font-semibold text-sm">Theme & Appearance</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white/40 dark:hover:bg-white/10 transition-colors text-md-on-surface-variant"
              aria-label="Close theme menu"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          {/* Mode Selector */}
          <div className="space-y-1.5 mb-4">
            <label className="text-xs font-medium text-md-on-surface-variant block">Display Mode</label>
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-full bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md">
              {(
                [
                  { id: 'light', label: 'Light', icon: 'light_mode' },
                  { id: 'dark', label: 'Dark', icon: 'dark_mode' },
                  { id: 'system', label: 'System', icon: 'settings_brightness' },
                ] as { id: ThemeMode; label: string; icon: string }[]
              ).map((mode) => {
                const active = theme === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setTheme(mode.id)}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-full text-xs font-medium transition-all ${
                      active
                        ? 'bg-md-primary text-md-on-primary shadow-sm font-semibold glossy-pill'
                        : 'text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon name={mode.icon} size={16} filled={active} />
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Material You Accent Color Picker */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-md-on-surface-variant block">Material You Dynamic Accent</label>
              <span className="text-[11px] text-md-primary font-mono capitalize">{palette}</span>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-1">
              {PALETTES.map((p) => {
                const isSelected = palette === p.id;
                const swatch = resolvedTheme === 'dark' ? p.darkHex : p.lightHex;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPalette(p.id)}
                    className={`group relative flex flex-col items-center gap-1 p-1 rounded-full transition-all ${
                      isSelected ? 'ring-2 ring-md-primary ring-offset-2 ring-offset-transparent' : 'hover:scale-105'
                    }`}
                    title={p.name}
                    aria-label={`Select ${p.name} color`}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-transform glossy-pill"
                      style={{ backgroundColor: swatch }}
                    >
                      {isSelected && (
                        <Icon
                          name="check"
                          size={18}
                          className={resolvedTheme === 'dark' ? 'text-black font-bold' : 'text-white font-bold'}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
