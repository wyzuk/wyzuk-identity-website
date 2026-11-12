import { PROJECTS } from './projects';
import { TECHNICAL_NOTES } from './notes';
import { TECH_DOMAINS } from './technologies';

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  category: 'core' | 'about' | 'projects' | 'notes' | 'technologies' | 'utility';
}

export const BASE_URL = 'https://nebulavex.bond';

export const STATIC_ROUTES: RouteEntry[] = [
  // Core Identity Pages
  {
    path: '/',
    title: 'WYZUK Handcrafted Personal Identity & Software Archive',
    description: 'Official digital presence of WYZUK (NebulaVex / Wasee / nvxwx) — Student developer, Linux enthusiast, and creator of Yumemiro OS, YourCraft, and Wyzuk Cast.',
    priority: 1.0,
    changefreq: 'weekly',
    category: 'core',
  },
  {
    path: '/about/',
    title: 'About WYZUK Developer, Student & Systems Craftsman',
    description: 'Personal background, technical philosophy, and independent development journey of WYZUK.',
    priority: 0.9,
    changefreq: 'monthly',
    category: 'about',
  },
  {
    path: '/about/identity/',
    title: 'Identity & Aliases Understanding WYZUK, NebulaVex & Online Handles',
    description: 'A clear explanation connecting primary moniker WYZUK, alternative alias NebulaVex, first-name alias Wasee, usernames nvxwx, ud1q, jamim, and Yumemiro OS.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'about',
  },
  {
    path: '/about/education/',
    title: 'Education Statement Academic Background & Learning Philosophy',
    description: 'Statement regarding WYZUK as a Class 11 student in Bangladesh in 2026, self-taught computing studies, and institutional privacy.',
    priority: 0.8,
    changefreq: 'yearly',
    category: 'about',
  },
  {
    path: '/about/interests/',
    title: 'Interests & Passions Linux, Graphics & Digital Systems',
    description: 'Deep dive into WYZUK\'s fascinations with Arch Linux, Wayland compositors, 3D voxel mathematics, and media streaming.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'about',
  },
  {
    path: '/about/journey/',
    title: 'Development Journey Verified Milestones & Timeline',
    description: 'Chronological development history of WYZUK across 2025 and 2026 based strictly on verified repositories and project launches.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'about',
  },

  // Projects Hub & Categories
  {
    path: '/projects/',
    title: 'Projects Index Handcrafted Software, Systems & Games',
    description: 'Comprehensive directory of verified public projects created by WYZUK across operating systems, web apps, browser games, and utilities.',
    priority: 0.95,
    changefreq: 'weekly',
    category: 'projects',
  },
  {
    path: '/projects/operating-systems/',
    title: 'Operating System Work Arch Linux & Desktop Distributions',
    description: 'Explore Yumemiro OS: an aesthetic Arch Linux desktop distribution built with Hyprland, Waybar, and custom Calamares installers.',
    priority: 0.9,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/open-source/',
    title: 'Open Source Work Verified GitHub Repositories by WYZUK',
    description: 'Public open-source contributions, tools, and code repositories maintained on GitHub by @wyzuk.',
    priority: 0.85,
    changefreq: 'weekly',
    category: 'projects',
  },
  {
    path: '/projects/software/',
    title: 'Software & Developer Utilities Productive CLI & Web Tools',
    description: 'Productivity utilities including WTOOLS (35+ diagnostic tools), NEXUS network monitor, ttune terminal player, and Discord bots.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/web/',
    title: 'Web Projects Client Side Streaming & Digital Platforms',
    description: 'High-performance web applications including Wyzuk Cast (IPTV player), Animella (anime catalog), and Vaultrix Marketplace.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/games/',
    title: 'Browser Games & Engines Procedural 3D & Neon 2D',
    description: 'Interactive web browser games built from scratch: YourCraft (3D voxel sandbox), Flappy Wyzuk (Web Audio arcade), W Suffers, and Snake.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/experiments/',
    title: 'Experiments & Prototypes Creative Code & Sandboxes',
    description: 'Exploratory code experiments including iOS UI simulator (iplnchr), VOID fortune machine, and personal knowledge notebooks.',
    priority: 0.75,
    changefreq: 'monthly',
    category: 'projects',
  },

  // Deep Architectural Subpages
  {
    path: '/projects/yumemiro-os/architecture/',
    title: 'Yumemiro OS Architecture System Layers & Packaging',
    description: 'Technical architecture of Yumemiro OS: Archiso mastering, Calamares installer generation, and modular configuration layering.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/yumemiro-os/hyprland-rice/',
    title: 'Hyprland Desktop Rice Wayland Tiling & Aesthetic Styling',
    description: 'Deep dive into Yumemiro OS\'s Wayland environment: Hyprland animation curves, custom Waybar modules, and SDDM blurred glass styling.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/yumemiro-os/releases/',
    title: 'Yumemiro OS Releases Version History & Transparent ISO Status',
    description: 'Official release timeline of Yumemiro OS (Sakura, Hanami, Tsukiyo, Ame) and transparent documentation on ISO binary availability.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/wyzukcast/hls-streaming/',
    title: 'Wyzuk Cast Streaming Engine Client Side HLS.js Demuxing',
    description: 'Technical documentation on parsing M3U8 playlists and managing adaptive video buffers directly in the browser runtime.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/yourcraft/voxel-engine/',
    title: 'YourCraft Voxel Engine WebGL Mesh Optimization & Chunks',
    description: 'Detailed breakdown of chunk partitioning, hidden face culling, and texture atlas mapping for 60 FPS in Three.js.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/flappy-wyzuk/audio-synthesis/',
    title: 'Flappy Wyzuk Audio Synthesis Web Audio API Procedural Oscillators',
    description: 'How Flappy Wyzuk generates dynamic retro arcade sound effects purely through mathematical frequency curves with zero audio files.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/wtools/architecture/',
    title: 'WTOOLS Architecture Privacy First Zero Logging Edge Diagnostics',
    description: 'System design of WTOOLS: executing 35+ DNS, WHOIS, SSL, and network diagnostic tools without storing user data.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/nexus/topology-discovery/',
    title: 'NEXUS Network Discovery Subnet Scanning & Topology Mapping',
    description: 'Defensive local network discovery principles, ARP table inspection, and real-time WebSocket latency tracking in NEXUS.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },
  {
    path: '/projects/ttune/terminal-rendering/',
    title: 'ttune Terminal Rendering RGB Audio Spectrum via Curses & FFmpeg',
    description: 'Technical engineering of real-time terminal equalizer rendering using Python curses and asynchronous FFmpeg decoding.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'projects',
  },

  // Supporting Pages
  {
    path: '/notes/',
    title: 'Engineering Notes & Retrospectives Technical Articles by WYZUK',
    description: 'Original technical writeups, architecture breakdowns, and retrospectives on Linux ricing, WebGL voxel engines, and streaming.',
    priority: 0.9,
    changefreq: 'weekly',
    category: 'notes',
  },
  {
    path: '/technologies/',
    title: 'Technologies & Tools Verified Development Domains',
    description: 'Curated index of technical domains where WYZUK has verified, hands-on development experience in real projects.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'technologies',
  },
  {
    path: '/github/',
    title: 'GitHub Presence Repositories & Open Source Signal (@wyzuk)',
    description: 'Overview of WYZUK\'s public developer profile on GitHub (@wyzuk), repository inventory, and open-source contributions.',
    priority: 0.85,
    changefreq: 'weekly',
    category: 'utility',
  },
  {
    path: '/websites/',
    title: 'Websites Directory Associated Domains & Web Properties',
    description: 'Directory of websites connected to WYZUK including wasee.dev, vaultrix.shop, yumemiro-os.github.io, and live project deployments.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'utility',
  },
  {
    path: '/gallery/',
    title: 'Visual Gallery Creative Assets, Desktop Rices & Art',
    description: 'Interactive photo gallery generated from local assets featuring desktop rices, neon artwork, and indie game graphics.',
    priority: 0.85,
    changefreq: 'weekly',
    category: 'utility',
  },
  {
    path: '/contact/',
    title: 'Contact & Public Profiles Reach WYZUK Directly',
    description: 'Verified public communication channels: Email (onlyjamim@gmail.com), Discord (ID 330355220284571649), X/Twitter, and GitHub.',
    priority: 0.85,
    changefreq: 'monthly',
    category: 'utility',
  },
  {
    path: '/uses/',
    title: 'Uses & Setup Hardware, Linux Environment & Developer Tools',
    description: 'Documented hardware, Arch Linux setup, Hyprland window rules, Kitty terminal, and daily engineering utilities used by WYZUK.',
    priority: 0.8,
    changefreq: 'monthly',
    category: 'utility',
  },
  {
    path: '/colophon/',
    title: 'Colophon Architecture & Engineering of nebulavex.bond',
    description: 'Technical details behind nebulavex.bond: Next.js static export, Tailwind CSS, typography, performance, and accessibility.',
    priority: 0.7,
    changefreq: 'monthly',
    category: 'utility',
  },
  {
    path: '/privacy/',
    title: 'Privacy Policy Zero Trackers, Zero Telemetry, Complete Respect',
    description: 'Plain-language privacy statement affirming zero tracking cookies, zero analytics beacons, and complete user respect.',
    priority: 0.7,
    changefreq: 'yearly',
    category: 'utility',
  },
];

export function getAllCanonicalRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [...STATIC_ROUTES];

  // Dynamic project routes
  PROJECTS.forEach((p) => {
    routes.push({
      path: `/projects/${p.slug}/`,
      title: `${p.title} ${p.subtitle} | WYZUK`,
      description: p.shortDescription,
      priority: 0.85,
      changefreq: 'monthly',
      category: 'projects',
    });
  });

  // Dynamic technical notes routes
  TECHNICAL_NOTES.forEach((n) => {
    routes.push({
      path: `/notes/${n.slug}/`,
      title: `${n.title} | WYZUK Engineering Notes`,
      description: n.summary,
      priority: 0.8,
      changefreq: 'monthly',
      category: 'notes',
    });
  });

  // Dynamic technology domain routes
  TECH_DOMAINS.forEach((t) => {
    routes.push({
      path: `/technologies/${t.slug}/`,
      title: `${t.name} Work & Experience | WYZUK`,
      description: t.tagline,
      priority: 0.8,
      changefreq: 'monthly',
      category: 'technologies',
    });
  });

  return routes;
}
