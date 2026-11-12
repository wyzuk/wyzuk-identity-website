import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

export interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 select-none">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-sans text-md-on-surface-variant">
        <li>
          <Link
            href="/"
            className="state-layer inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-md-surface-container hover:bg-md-surface-container-high text-md-on-surface hover:text-md-primary transition-colors"
            title="Home"
          >
            <Icon name="home" size={14} />
            <span className="font-medium">Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              <Icon name="chevron_right" size={16} className="text-md-outline" />
              {isLast ? (
                <span
                  className="px-2.5 py-1 rounded-full bg-md-secondary-container/60 text-md-on-secondary-container font-semibold truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="state-layer px-2.5 py-1 rounded-full hover:bg-md-surface-container-high text-md-on-surface-variant hover:text-md-on-surface transition-colors font-medium"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
