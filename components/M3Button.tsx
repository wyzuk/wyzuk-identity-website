import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

interface M3ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconTrailing?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export default function M3Button({
  children,
  variant = 'filled',
  size = 'md',
  icon,
  iconTrailing,
  href,
  target,
  rel,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
}: M3ButtonProps) {
  const baseClasses =
    'state-layer inline-flex items-center justify-center font-sans font-medium tracking-wide rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-md-primary focus:ring-offset-2 disabled:opacity-38 disabled:pointer-events-none select-none active:scale-[0.98] glossy-pill';

  const sizeClasses = {
    sm: 'text-xs h-9 px-3.5 gap-1.5',
    md: 'text-sm h-11 px-5 gap-2',
    lg: 'text-base h-12 px-6 gap-2.5',
  }[size];

  const variantClasses = {
    filled:
      'bg-md-primary text-md-on-primary shadow-md shadow-md-primary/25 hover:shadow-lg hover:shadow-md-primary/35 hover:brightness-105',
    tonal:
      'bg-white/60 dark:bg-white/10 backdrop-blur-md text-md-on-surface border border-white/50 dark:border-white/15 shadow-sm hover:bg-white/80 dark:hover:bg-white/15 hover:shadow-md',
    outlined:
      'border border-white/60 dark:border-white/20 backdrop-blur-md text-md-on-surface hover:bg-white/50 dark:hover:bg-white/10 hover:border-md-primary/60',
    text:
      'text-md-primary hover:bg-white/40 dark:hover:bg-white/10 px-3.5',
    elevated:
      'apple-glass text-md-on-surface shadow-md hover:shadow-xl hover:border-white/80 dark:hover:border-white/20',
  }[variant];

  const fullClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />}
      <span>{children}</span>
      {iconTrailing && <Icon name={iconTrailing} size={size === 'sm' ? 16 : 18} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <Link
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={fullClasses}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
