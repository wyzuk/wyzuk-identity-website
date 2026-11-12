import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Visual Gallery Creative Assets, Desktop Rices & Art | WYZUK',
  description:
    'Interactive photo gallery generated from local assets featuring desktop rices, neon artwork, and indie game graphics.',
  path: '/gallery/',
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
