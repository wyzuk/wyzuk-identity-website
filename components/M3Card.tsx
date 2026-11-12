import React from 'react';

interface M3CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'filled' | 'outlined';
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export default function M3Card({
  children,
  variant = 'elevated',
  className = '',
  onClick,
  hoverEffect = true,
}: M3CardProps) {
  const baseClasses =
    'rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 transition-all duration-300 text-md-on-surface relative overflow-hidden glossy-shine';

  const variantClasses = {
    elevated:
      'apple-glass' +
      (hoverEffect ? ' hover:-translate-y-1 hover:shadow-2xl hover:border-white/90 dark:hover:border-white/25' : ''),
    filled:
      'bg-white/50 dark:bg-[#1e1f26]/70 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg' +
      (hoverEffect ? ' hover:-translate-y-1 hover:bg-white/65 dark:hover:bg-[#252630]/80' : ''),
    outlined:
      'bg-white/30 dark:bg-black/20 backdrop-blur-lg border border-white/60 dark:border-white/15' +
      (hoverEffect ? ' hover:-translate-y-1 hover:bg-white/50 dark:hover:bg-white/10 hover:border-md-primary/50' : ''),
  }[variant];

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
