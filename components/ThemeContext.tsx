'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light' | 'system';
export type Palette = 'blue' | 'teal' | 'coral' | 'purple' | 'green';

interface ThemeContextType {
  theme: ThemeMode;
  palette: Palette;
  resolvedTheme: 'dark' | 'light';
  setTheme: (mode: ThemeMode) => void;
  setPalette: (palette: Palette) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [palette, setPaletteState] = useState<Palette>('blue');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount
    const savedTheme = localStorage.getItem('wyzuk-theme') as ThemeMode | null;
    const savedPalette = localStorage.getItem('wyzuk-palette') as Palette | null;

    if (savedTheme && ['dark', 'light', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
    if (savedPalette && ['blue', 'teal', 'coral', 'purple', 'green'].includes(savedPalette)) {
      setPaletteState(savedPalette);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Determine resolved theme
    let isDark = true;
    if (theme === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = theme === 'dark';
    }

    setResolvedTheme(isDark ? 'dark' : 'light');

    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    root.setAttribute('data-palette', palette);
  }, [theme, palette, mounted]);

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem('wyzuk-theme', mode);
  };

  const setPalette = (p: Palette) => {
    setPaletteState(p);
    localStorage.setItem('wyzuk-palette', p);
  };

  const toggleTheme = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        palette,
        resolvedTheme,
        setTheme,
        setPalette,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
