import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

interface M3ChipProps {
  label: string;
  variant?: 'filter' | 'assist' | 'status';
  selected?: boolean;
  icon?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function M3Chip({
  label,
  variant = 'assist',
  selected = false,
  icon,
  href,
  onClick,
  className = '',
}: M3ChipProps) {
  const baseClasses =
    'state-layer inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full text-xs font-sans font-medium transition-all duration-200 select-none focus:outline-none focus:ring-1 focus:ring-md-primary active:scale-[0.98] glossy-pill';

  let variantClasses = '';
  if (variant === 'filter') {
    variantClasses = selected
      ? 'bg-md-primary text-md-on-primary font-semibold shadow-md shadow-md-primary/25'
      : 'bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 text-md-on-surface hover:bg-white/60 dark:hover:bg-white/15';
  } else if (variant === 'status') {
    variantClasses =
      'bg-md-primary/10 text-md-primary font-mono text-[11px] border border-md-primary/30 backdrop-blur-md';
  } else {
    // assist / tag
    variantClasses =
      'bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/60 dark:hover:bg-white/15';
  }

  const fullClasses = `${baseClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {selected && variant === 'filter' ? (
        <Icon name="check" size={16} className="text-md-on-secondary-container" />
      ) : icon ? (
        <Icon name={icon} size={16} />
      ) : null}
      <span>{label}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={fullClasses}
      >
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={fullClasses}>
        {content}
      </button>
    );
  }

  return <span className={fullClasses}>{content}</span>;
}
