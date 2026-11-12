import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-8 text-center sm:text-left">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-error/15 text-md-error">
          <Icon name="error" size={15} />
          <span>Error 404 · Page Not Found</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-md-on-surface font-sans">
          Lost in the Archive
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed max-w-xl">
          The requested path does not exist in this software archive. It may have been relocated, renamed, or retired.
        </p>
      </div>

      <M3Card variant="elevated" className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-md-primary block font-semibold">
          Explore Main Destinations
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
          <Link
            href="/"
            className="flex items-center gap-2.5 p-3 rounded-2xl bg-md-surface-container hover:bg-md-surface-container-high transition-colors text-md-on-surface"
          >
            <Icon name="home" size={18} className="text-md-primary" />
            <span className="font-medium">Homepage</span>
          </Link>
          <Link
            href="/projects/"
            className="flex items-center gap-2.5 p-3 rounded-2xl bg-md-surface-container hover:bg-md-surface-container-high transition-colors text-md-on-surface"
          >
            <Icon name="deployed_code" size={18} className="text-md-primary" />
            <span className="font-medium">Projects & Systems Archive</span>
          </Link>
          <Link
            href="/notes/"
            className="flex items-center gap-2.5 p-3 rounded-2xl bg-md-surface-container hover:bg-md-surface-container-high transition-colors text-md-on-surface"
          >
            <Icon name="article" size={18} className="text-md-primary" />
            <span className="font-medium">Technical Notes</span>
          </Link>
          <Link
            href="/about/"
            className="flex items-center gap-2.5 p-3 rounded-2xl bg-md-surface-container hover:bg-md-surface-container-high transition-colors text-md-on-surface"
          >
            <Icon name="person" size={18} className="text-md-primary" />
            <span className="font-medium">About WYZUK</span>
          </Link>
        </div>
      </M3Card>

      <div className="pt-2">
        <M3Button variant="filled" size="md" href="/" icon="arrow_back">
          Return to Homepage
        </M3Button>
      </div>
    </div>
  );
}
