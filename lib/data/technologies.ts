export interface TechDomain {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  evidenceBasedUsage: string;
  associatedProjects: string[];
  skillsList: string[];
  keyTakeaways: string[];
}

export const TECH_DOMAINS: TechDomain[] = [
  {
    slug: 'linux-systems',
    name: 'Linux & Operating Systems',
    tagline: 'Arch Linux distribution engineering, Wayland tiling, and custom desktop ricing.',
    overview: 'Linux is at the core of WYZUK\'s computing philosophy. Rather than treating an operating system as a passive consumer appliance, he treats it as a malleable substrate for performance, visual beauty, and automation.',
    evidenceBasedUsage: 'He designed and built Yumemiro OS, an Arch Linux-based distribution powered by Hyprland. His public dotfiles and scripts automate Waybar widgets, SDDM login screens, Calamares installer routines, and live archiso image packaging.',
    associatedProjects: ['yumemiro-os', 'ttune'],
    skillsList: ['Arch Linux', 'Hyprland (Wayland)', 'Waybar', 'SDDM', 'Bash / Shell', 'Archiso', 'Calamares', 'Systemd', 'Procfs'],
    keyTakeaways: [
      'Declarative window tiling and smooth cubic animations via Wayland protocols',
      'Maintaining a lightweight sub-650MB idle memory footprint without background bloat',
      'Packaging automated live ISO distributions with custom Calamares installers',
    ],
  },
  {
    slug: 'javascript-webgl',
    name: 'JavaScript, WebGL & Canvas',
    tagline: '3D procedural voxel engines, high-octane 2D arcade games, and client-side streaming.',
    overview: 'Exploring modern browser graphics and multimedia without heavy runtime abstractions. WYZUK builds interactive 3D procedural sandboxes, high-framerate arcade games, and video streaming applications in pure web standards.',
    evidenceBasedUsage: 'Engineered YourCraft (a procedural 3D voxel sandbox in Three.js and WebGL), Flappy Wyzuk (a 60+ FPS canvas game with procedural Web Audio API synthesis), W Suffers (3D endless runner), and Wyzuk Cast (client-side IPTV player using HLS.js).',
    associatedProjects: ['yourcraft', 'flappy', 'w', 'wyzukcast', 'snake'],
    skillsList: ['JavaScript (ES6+)', 'Three.js', 'WebGL', 'HTML5 Canvas 2D', 'Web Audio API', 'HLS.js', 'Pointer Lock API'],
    keyTakeaways: [
      'Chunk boundary face culling and vertex buffer consolidation for 60 FPS WebGL',
      'Mathematical procedural audio synthesis eliminating sound file network payloads',
      'Client-side HLS video stream buffer management and real-time M3U playlist parsing',
    ],
  },
  {
    slug: 'python-automation',
    name: 'Python, APIs & Network Systems',
    tagline: 'Discord automation bots, defensive network intelligence, and terminal multimedia.',
    overview: 'Python serves as WYZUK\'s primary language for backend systems, network discovery, terminal multimedia, and Discord community automation.',
    evidenceBasedUsage: 'Architected VLT Shop Bot (using Discord Components V2 for digital storefront automation), NEXUS (local network intelligence and topology discovery with FastAPI), ttune (terminal multimedia player with FFmpeg), and the modular Nebula bot suite.',
    associatedProjects: ['vlt-bot', 'nexus', 'ttune', 'nebula-bot-suite'],
    skillsList: ['Python 3.11+', 'FastAPI', 'discord.py', 'Discord Components V2', 'FFmpeg', 'Curses', 'WebSockets', 'Docker', 'Asyncio'],
    keyTakeaways: [
      'Building interactive, accessible bot UIs using Discord Components V2 panels and modals',
      'Non-intrusive local network discovery, ARP sweeps, and hierarchical topology mapping',
      'Real-time frequency spectrum analysis and curses color cell rendering from raw PCM audio',
    ],
  },
  {
    slug: 'typescript-react',
    name: 'TypeScript & Next.js Ecosystem',
    tagline: 'Production static generation, privacy-first developer tools, and rich identity archives.',
    overview: 'Leveraging TypeScript and modern React frameworks to build high-performance, accessible, and search-engine-readable web applications.',
    evidenceBasedUsage: 'Engineered WTOOLS (a privacy-focused developer platform featuring 35+ diagnostic tools built with Next.js 14 and Tailwind CSS), Animella (cinematic anime catalog), wasee.dev (React 18 SPA), and the canonical identity platform nebulavex.bond.',
    associatedProjects: ['wtools', 'animella'],
    skillsList: ['TypeScript', 'Next.js 14 (App Router)', 'React 18', 'Tailwind CSS', 'Static Site Generation (SSG)', 'JSON-LD Schema', 'Edge Runtime'],
    keyTakeaways: [
      'Zero-tracker developer utilities executing client-side for absolute privacy',
      'Strict TypeScript interfaces ensuring bulletproof component architecture',
      'Comprehensive JSON-LD structured data and semantic HTML for Google discoverability',
    ],
  },
];

export function getTechDomainBySlug(slug: string): TechDomain | undefined {
  return TECH_DOMAINS.find((t) => t.slug === slug);
}
