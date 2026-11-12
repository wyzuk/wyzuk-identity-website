import { Metadata } from 'next';
import { BASE_URL } from './data/routes';

export interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
}

export function cleanTitle(raw: string): string {
  return raw
    .replace(/[—–]/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function constructMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/assets/gallery/20ed65d3-ee33-443b-9e0e-8519521ef317.png',
  type = 'website',
  publishedTime,
}: PageSeoProps): Metadata {
  const sanitizedTitle = cleanTitle(title);
  const cleanPath = path.endsWith('/') ? path : `${path}/`;
  const canonicalUrl = `${BASE_URL}${cleanPath}`;
  const defaultKeywords = [
    'WYZUK',
    'Wyzuk',
    'NebulaVex',
    'Wasee',
    'nvxwx',
    'ud1q',
    'jamim',
    'Yumemiro OS',
    'Arch Linux',
    'Hyprland',
    'YourCraft',
    'Wyzuk Cast',
    'Student Developer Bangladesh',
    'Independent Software Developer',
    'Linux System Architecture',
    'TypeScript Developer',
  ];

  return {
    title: {
      default: sanitizedTitle,
      template: '%s | WYZUK',
    },
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    authors: [{ name: 'WYZUK', url: BASE_URL }],
    creator: 'WYZUK',
    publisher: 'WYZUK',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: sanitizedTitle,
      description,
      url: canonicalUrl,
      siteName: 'WYZUK Digital Identity & Software Archive',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: sanitizedTitle,
        },
      ],
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
      ...(publishedTime && type === 'article' ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: sanitizedTitle,
      description,
      creator: '@w_jamim',
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
