import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ThemeProvider } from '@/components/ThemeContext';
import { getPersonSchema, getWebSiteSchema } from '@/lib/schema';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'WYZUK Handcrafted Personal Identity & Software Archive',
  description:
    'Official digital presence of WYZUK (NebulaVex / Wasee / nvxwx) — Student developer, Linux enthusiast, and creator of Yumemiro OS, YourCraft, and Wyzuk Cast.',
  path: '/',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = getPersonSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="dark" data-palette="blue" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Roboto+Mono:wght@400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Anti-flicker theme initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('wyzuk-theme') || 'dark';
                var palette = localStorage.getItem('wyzuk-palette') || 'blue';
                var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                document.documentElement.setAttribute('data-palette', palette);
              } catch (e) {}
            `,
          }}
        />
        <JsonLd data={[personSchema, webSiteSchema]} />
      </head>
      <body className="bg-md-surface text-md-on-surface antialiased min-h-screen flex flex-col font-sans transition-colors duration-200 relative overflow-x-hidden selection:bg-md-primary/20 selection:text-md-primary">
        {/* Apple Vision & Material 3 Ambient Lighting Spheres */}
        <div aria-hidden="true" className="ambient-glow-1 pointer-events-none" />
        <div aria-hidden="true" className="ambient-glow-2 pointer-events-none" />

        <ThemeProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
