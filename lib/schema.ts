import { BASE_URL } from './data/routes';
import { BIOGRAPHY } from './data/biography';
import { Project } from './data/projects';
import { TechnicalNote } from './data/notes';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'WYZUK',
    alternateName: ['NebulaVex', 'Wasee', 'nvxwx', 'ud1q', 'jamim', 'Yumemiro OS'],
    url: BASE_URL,
    image: `${BASE_URL}/assets/gallery/fb45f857-46e3-4d2f-a3fd-ff1d34167be5.png`,
    jobTitle: 'Student & Independent Software Developer',
    description: 'Student in class 11 from Bangladesh obsessed with Linux, operating systems, game engines, and software creation. Creator of Yumemiro OS, YourCraft, and Wyzuk Cast.',
    nationality: {
      '@type': 'Country',
      name: BIOGRAPHY.country,
    },
    sameAs: [
      'https://github.com/wyzuk',
      'https://x.com/w_jamim',
      'https://wasee.dev',
      'https://reddit.com/u/onlyjamim',
    ],
    knowsAbout: [
      'Linux Operating Systems',
      'Arch Linux',
      'Hyprland Wayland Compositor',
      'WebGL & Three.js 3D Graphics',
      'Client-Side Video & Audio Streaming',
      'Python & Discord Bot Architecture',
      'TypeScript & Modern Web Engineering',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WYZUK — Digital Identity & Software Archive',
    url: BASE_URL,
    description: 'The official handcrafted personal website, project archive, and search-engine-readable identity dossier for WYZUK.',
    author: {
      '@type': 'Person',
      name: 'WYZUK',
      url: BASE_URL,
    },
  };
}

export function getProfilePageSchema(path: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${BASE_URL}${path}`,
    name: title,
    description,
    mainEntity: getPersonSchema(),
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.item.startsWith('http') ? it.item : `${BASE_URL}${it.item}`,
    })),
  };
}

export function getSoftwareApplicationSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.shortDescription,
    url: `${BASE_URL}/projects/${project.slug}/`,
    applicationCategory: project.categoryLabel,
    operatingSystem: project.category === 'operating-systems' ? 'Linux (Arch Linux / Wayland)' : 'Any (Web Browser)',
    author: {
      '@type': 'Person',
      name: 'WYZUK',
      url: BASE_URL,
    },
    codeRepository: project.githubUrl,
    ...(project.demoUrl ? { installUrl: project.demoUrl } : {}),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function getArticleSchema(note: TechnicalNote) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: note.title,
    description: note.summary,
    url: `${BASE_URL}/notes/${note.slug}/`,
    datePublished: note.date,
    author: {
      '@type': 'Person',
      name: 'WYZUK',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'WYZUK',
      url: BASE_URL,
    },
  };
}
