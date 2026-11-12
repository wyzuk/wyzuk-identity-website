export interface TimelineMilestone {
  year: string;
  month?: string;
  title: string;
  category: 'systems' | 'web' | 'gaming' | 'identity';
  description: string;
  verifiedArtifact?: string;
}

export const BIOGRAPHY = {
  primaryName: 'WYZUK',
  aliases: [
    {
      name: 'Wyzuk',
      type: 'Primary Public Identity & Developer Moniker',
      usage: 'Used as the primary display name, GitHub profile handle (@wyzuk), and author credit across public open-source software, tools, and games.',
    },
    {
      name: 'NebulaVex',
      type: 'Alternative Public Alias & Project Brand',
      usage: 'Alternative public handle, primary domain moniker (nebulavex.bond), and author credit for digital projects.',
    },
    {
      name: 'Wasee',
      type: 'Public First-Name Alias',
      usage: 'First-name alias used on wasee.dev and github.com/wyzuk profile header.',
    },
    {
      name: 'nvxwx',
      type: 'Alternative Username',
      usage: 'Alternative developer username and online handle.',
    },
    {
      name: 'ud1q',
      type: 'Online Username',
      usage: 'Online handle and username used across developer networks.',
    },
    {
      name: 'jamim',
      type: 'Username / Online Alias',
      usage: 'Online username and handle used across platforms and communication channels.',
    },
    {
      name: 'Yumemiro OS',
      type: 'Operating System Project Identity',
      usage: 'Custom Arch Linux distribution project identity developed and maintained by WYZUK.',
    },
  ],
  country: 'Bangladesh',
  city: 'Rangpur',
  education: {
    status: 'Student in Class 11 during the 2026 academic calendar',
    country: 'Bangladesh',
    note: 'The name of the college is intentionally private and undisclosed.',
    stance: 'Programming is pursued out of genuine curiosity and creative passion, not merely as an academic obligation or corporate job.',
  },
  interests: [
    'Linux kernel customization and Arch Linux system architecture',
    'Modern Wayland compositors (Hyprland), window rules, and aesthetic desktop ricing',
    '3D graphics programming, voxel engines, and WebGL with Three.js',
    'Low-latency client-side video and audio streaming (HLS.js, Web Audio API)',
    'Practical developer diagnostic tools and privacy-first network intelligence',
    'Discord bot architecture and automated server management systems',
  ],
  journeyTimeline: [
    {
      year: '2025',
      month: 'April',
      title: 'Initial Web & Automation Experiments',
      category: 'web',
      description: 'Created secondary developer accounts. Began building early web applications, automation scripts, and personal web experiments.',
      verifiedArtifact: 'github.com/wyzuk',
    },
    {
      year: '2026',
      month: 'January',
      title: 'Consolidation of WYZUK Developer Identity',
      category: 'identity',
      description: 'Established the primary @wyzuk developer identity on GitHub. Started building Python Discord bots, modular cogs architectures, and server utility tools.',
      verifiedArtifact: 'github.com/wyzuk',
    },
    {
      year: '2026',
      month: 'July',
      title: 'Yumemiro OS Project Launch',
      category: 'systems',
      description: 'Founded Yumemiro OS, an Arch Linux desktop distribution featuring custom Hyprland configurations, pastel GTK styling, Waybar setups, and Calamares installer scripts.',
      verifiedArtifact: 'github.com/wyzuk/yumemiro-os',
    },
    {
      year: '2026',
      month: 'August',
      title: 'Exploration of Browser Games & Graphics',
      category: 'gaming',
      description: 'Engineered YourCraft (a procedural 3D voxel sandbox in Three.js), Flappy Wyzuk (a high-octane canvas game with Web Audio API synthesis), W Suffers (3D endless runner), and Snake.',
      verifiedArtifact: 'your-craft.netlify.app & flpybrd.netlify.app',
    },
    {
      year: '2026',
      month: 'August',
      title: 'Streaming Engine & Wyzuk Cast Deployment',
      category: 'web',
      description: 'Built Wyzuk Cast, a lightweight client-side IPTV streaming player powered by HLS.js with M3U/M3U8 parsing, instant category filtering, and native Picture-in-Picture.',
      verifiedArtifact: 'wyzukcast.vercel.app',
    },
    {
      year: '2026',
      month: 'September',
      title: 'Developer Diagnostics & Terminal Utilities',
      category: 'systems',
      description: 'Created WTOOLS (35+ developer utilities built with Next.js 14 and Tailwind) and ttune (a curses-based terminal music player with a real-time RGB spectrum visualizer).',
      verifiedArtifact: 'github.com/wyzuk/wtools & github.com/wyzuk/ttune',
    },
    {
      year: '2026',
      month: 'October',
      title: 'Animella & Network Platform Prototyping',
      category: 'web',
      description: 'Shipped Animella, a modern anime media discovery catalog. Prototyped NEXUS, a defensive local network intelligence platform using FastAPI and Next.js.',
      verifiedArtifact: 'github.com/wyzuk/animella & github.com/wyzuk/nexus',
    },
    {
      year: '2026',
      month: 'October',
      title: 'Architecting nebulavex.bond',
      category: 'identity',
      description: 'Designed and implemented the definitive handcrafted personal website and search-engine-readable identity archive at https://nebulavex.bond.',
      verifiedArtifact: 'nebulavex.bond',
    },
  ] as TimelineMilestone[],
};
