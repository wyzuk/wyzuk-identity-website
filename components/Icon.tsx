import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  filled?: boolean;
  style?: React.CSSProperties;
}

export default function Icon({
  name,
  className = '',
  size = 20,
  filled = false,
  style = {},
}: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center leading-none ${filled ? 'filled' : ''} ${className}`}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        ...style,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
