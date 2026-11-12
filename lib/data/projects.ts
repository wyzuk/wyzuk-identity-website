export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'operating-systems' | 'web' | 'games' | 'software' | 'experiments';
  categoryLabel: string;
  status: 'active' | 'completed' | 'experiment' | 'archived' | 'stub';
  statusLabel: string;
  language: string;
  stars: number;
  forks: number;
  githubUrl: string;
  demoUrl?: string;
  officialSite?: string;
  shortDescription: string;
  fullDescription: string;
  purpose: string;
  verifiedFeatures: string[];
  techStack: string[];
  architectureNotes?: string;
  releasesNotes?: string;
  relatedSlugs: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'yumemiro-os',
    title: 'Yumemiro OS',
    subtitle: 'Aesthetic, Lightweight Arch Linux Desktop Distribution',
    category: 'operating-systems',
    categoryLabel: 'Operating Systems',
    status: 'active',
    statusLabel: 'Active Distribution',
    language: 'Python / Shell / Arch Linux',
    stars: 13,
    forks: 2,
    githubUrl: 'https://github.com/wyzuk/yumemiro-os',
    officialSite: 'https://yumemiro-os.github.io',
    shortDescription: 'An Arch Linux-based operating system powered by Hyprland, combining bleeding-edge Linux performance with a curated pastel aesthetic.',
    fullDescription: 'Yumemiro OS (夢見ろ - "Dream On") is a custom desktop distribution built on top of Arch Linux. Engineered by WYZUK, it provides an out-of-the-box Wayland desktop experience driven by the Hyprland tiling compositor, custom Waybar configurations, automated Calamares installation, and fine-tuned system services maintaining a sub-650MB idle memory footprint.',
    purpose: 'To bridge the gap between Arch Linux\'s legendary DIY flexibility and an accessible, visually stunning desktop environment that feels modern and cohesive right after boot.',
    verifiedFeatures: [
      'Hyprland Wayland compositor pre-configured with fluid cubic-bezier workspace transitions',
      'Custom Waybar 0.10 integration with floating popover calendar, audio visualizer, and system monitors',
      'Frosted glass SDDM login display manager theme with blur effects',
      'Pastel color palette across GTK3/4 themes, Kitty terminal emulator, and Rofi menus',
      'Automated installer integration using Python-based Calamares configuration generators',
      'Archiso build tree for mastering custom live ISO images'
    ],
    techStack: ['Arch Linux', 'Hyprland (Wayland)', 'Waybar', 'Rofi', 'SDDM', 'Python', 'Bash / Shell', 'Calamares', 'Kitty Terminal', 'Archiso'],
    architectureNotes: 'Built adhering to the KISS (Keep It Simple, Stupid) principle. All customization is modularized into discrete configuration layers: configs/ for user dotfiles, scripts/ for installer automation, and archiso/ for live boot media.',
    releasesNotes: 'Documented release timeline includes 1.0 Sakura, 1.1 Hanami, 1.5 Tsukiyo, and 2.0 Ame. Note: pre-compiled binary ISO downloads on the showcase site are currently in concept demonstration stage, while git repositories contain genuine configuration and packaging scripts.',
    relatedSlugs: ['wtools', 'nexus', 'ttune']
  },
  {
    slug: 'wyzukcast',
    title: 'Wyzuk Cast',
    subtitle: 'Modern High-Performance IPTV Web Streaming Player',
    category: 'web',
    categoryLabel: 'Web Applications',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'Vanilla JavaScript / HLS.js / HTML5',
    stars: 5,
    forks: 1,
    githubUrl: 'https://github.com/wyzuk/wyzukcast',
    demoUrl: 'https://wyzukcast.vercel.app',
    shortDescription: 'Open-source, lightweight IPTV web player with M3U/M3U8 streaming, category filtering, search, and a clean dark UI.',
    fullDescription: 'Wyzuk Cast is a zero-backend, client-side IPTV player designed for maximum speed and zero friction. It directly parses and decodes M3U and M3U8 broadcast playlists in the browser, providing instant channel category filtering, live channel search, logo rendering, and native Picture-in-Picture playback.',
    purpose: 'To eliminate the need for heavy desktop IPTV applications or server-side transcoding proxies by implementing stream buffer management and playlist parsing directly in client-side JavaScript.',
    verifiedFeatures: [
      'Client-side M3U/M3U8 parser handling hundreds of live broadcast streams',
      'Adaptive bitrate video streaming via HLS.js',
      'Dynamic category categorization (News, Sports, Entertainment, Cinema, Documentary)',
      'Real-time search filtering by channel name, country, or stream format',
      'Native Picture-in-Picture (PiP) and full-screen playback modes with keyboard shortcuts',
      'Zero server-side logging and fully responsive mobile player interface'
    ],
    techStack: ['JavaScript (ES6+)', 'HLS.js', 'HTML5 Video API', 'CSS3 Flexbox/Grid', 'Vercel Edge'],
    architectureNotes: 'Runs entirely in the browser runtime. Stream playlists are fetched asynchronously via client-side fetch, categorized in-memory with regex parsing, and fed dynamically to the HLS.js media element.',
    relatedSlugs: ['ttune-web', 'yourcraft', 'wtools']
  },
  {
    slug: 'yourcraft',
    title: 'YourCraft',
    subtitle: '3D Procedural Voxel Sandbox Built for Modern Web Browsers',
    category: 'games',
    categoryLabel: 'Browser Games & Engines',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'JavaScript / Three.js (r128) / WebGL',
    stars: 9,
    forks: 2,
    githubUrl: 'https://github.com/wyzuk/yourcraft',
    demoUrl: 'https://your-craft.netlify.app/',
    shortDescription: 'A Minecraft-inspired procedural 3D voxel sandbox game running natively in web browsers without plugins.',
    fullDescription: 'YourCraft is a browser-based 3D voxel engine engineered in pure JavaScript and Three.js. It features procedural terrain generation, voxel chunk rendering, raycasted block placement and destruction, collision detection, and first-person camera controls running at a locked 60 FPS.',
    purpose: 'An exploration into low-level 3D graphics, procedural generation mathematics (Perlin/Simplex noise), and chunk meshing optimization inside WebGL.',
    verifiedFeatures: [
      'Procedural terrain generation with variable elevation and biomes',
      'Dynamic block placement, destruction, and material physics',
      'Pointer Lock API integration for authentic first-person mouse look',
      'Frustum culling and hidden face removal for 60 FPS WebGL performance',
      'Custom texture atlas mapping for dirt, grass, stone, wood, and water blocks'
    ],
    techStack: ['JavaScript', 'Three.js (r128)', 'WebGL', 'HTML5 Canvas', 'Netlify'],
    architectureNotes: 'World is partitioned into 16x16x16 voxel chunks. Meshing algorithms calculate only visible boundary faces to prevent rendering unexposed interior polygons, drastically reducing draw calls.',
    relatedSlugs: ['flappy', 'w', 'snake']
  },
  {
    slug: 'flappy',
    title: 'Flappy Wyzuk',
    subtitle: 'Indie Neon Arcade Experience with Procedural Audio Synthesis',
    category: 'games',
    categoryLabel: 'Browser Games & Engines',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'JavaScript / HTML5 Canvas 2D / Web Audio API',
    stars: 9,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/flappy',
    demoUrl: 'https://flpybrd.netlify.app/',
    shortDescription: 'High-octane modern indie browser arcade game engineered from scratch with 12 characters, 11 parallax worlds, and Web Audio API synthesis.',
    fullDescription: 'Flappy Wyzuk reinvents classic tap-to-fly arcade mechanics with high-fidelity glassmorphism aesthetics, futuristic neon UI styling, 12 unlockable aviator characters, 11 parallax-scrolling worlds, dynamic weather effects, and an entirely procedural audio synthesis engine built with the Web Audio API.',
    purpose: 'To demonstrate that a browser arcade game can achieve console-quality tactile feedback, responsive 60+ FPS physics, and rich dynamic audio without loading external sound files.',
    verifiedFeatures: [
      '12 customizable aviator character skins with distinct particle trails',
      '11 layered parallax worlds ranging from cyber cityscapes to aurora skies',
      'Dynamic weather system including rain, snow, and neon particle bursts',
      '100% procedural sound synthesis using Web Audio API oscillators and gain nodes (zero audio asset files)',
      'High-score persistence with localStorage and responsive touch/mouse/keyboard controls'
    ],
    techStack: ['JavaScript', 'HTML5 Canvas 2D', 'Web Audio API', 'CSS3 Glassmorphism'],
    architectureNotes: 'Custom game loop driven by requestAnimationFrame. Procedural audio engine initializes audio context on user gesture, generating square, sine, and triangle waves for wing flaps, coin pings, and crash impacts.',
    relatedSlugs: ['yourcraft', 'w', 'snake']
  },
  {
    slug: 'w',
    title: 'W Suffers',
    subtitle: 'Fast-Paced 3D Urban Endless Runner Web Application',
    category: 'games',
    categoryLabel: 'Browser Games & Engines',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'Vanilla JavaScript (ES Modules) / Three.js',
    stars: 5,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/w',
    shortDescription: 'A 3D endless runner where players navigate a procedurally generated urban environment dodging barriers and collecting coins.',
    fullDescription: 'W Suffers challenges players to run through a procedurally generated 3D city corridor. Built with Three.js and vanilla JavaScript, players dodge obstacles, leap over barriers, slide beneath hazard gantries, and collect W-coins to power up their run.',
    purpose: 'A deep dive into 3D physics simulation, endless procedural track stitching, and object pooling in web graphics.',
    verifiedFeatures: [
      'Procedural continuous track generation with dynamic segment pooling',
      'Three-lane movement mechanics with responsive jumping and sliding hitboxes',
      'Collectible coin magnet and score multiplier power-ups',
      'Progressive speed acceleration increasing difficulty over survival time'
    ],
    techStack: ['JavaScript (ES Modules)', 'Three.js', 'CSS3', 'WebGL'],
    relatedSlugs: ['yourcraft', 'flappy', 'snake']
  },
  {
    slug: 'snake',
    title: 'Snake Arcade',
    subtitle: 'Modern Retro-Style Canvas Arcade Game',
    category: 'games',
    categoryLabel: 'Browser Games & Engines',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'JavaScript / HTML5 Canvas',
    stars: 7,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/snake',
    shortDescription: 'Retro-inspired Snake arcade game with level progression, environmental obstacles, and refined canvas visuals.',
    fullDescription: 'A modern recreation of the beloved classic arcade Snake, built with clean canvas rendering, responsive grid movement, obstacle hazards, and multiple difficulty curves.',
    purpose: 'Classic 2D algorithmic exercise focusing on deterministic grid collision and clean state management.',
    verifiedFeatures: [
      'Smooth grid movement with input buffering to prevent reverse collisions',
      'Dynamic food generation with special bonus power-ups',
      'Obstacle levels and increasing speed progression',
      'Local score persistence and responsive mobile touch controls'
    ],
    techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
    relatedSlugs: ['flappy', 'yourcraft', 'w']
  },
  {
    slug: 'wtools',
    title: 'WTOOLS',
    subtitle: 'Comprehensive Developer Utility Platform with 35+ Tools',
    category: 'software',
    categoryLabel: 'Software & Developer Utilities',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'TypeScript / Next.js 14 / Tailwind CSS',
    stars: 4,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/wtools',
    shortDescription: 'Modern, fast developer utility platform featuring 35+ diagnostic network, domain, web, security, and developer tools.',
    fullDescription: 'WTOOLS provides a high-efficiency command center for developers, security researchers, and system administrators. Featuring 35+ utilities across DNS records, IP geolocation, SSL diagnostics, HTTP header analyzers, hash generators, UUID builders, and format converters, it runs entirely on edge execution with zero user tracking.',
    purpose: 'To replace ad-heavy, tracking-ridden online utility sites with a fast, private, keyboard-driven developer suite.',
    verifiedFeatures: [
      '35+ real diagnostic utilities covering DNS, WHOIS, IP lookup, SSL certificates, and headers',
      'Instant command palette navigation with keyboard shortcuts (Cmd+K / Ctrl+K)',
      'First-class dark and light theme synchronization',
      'Zero-tracker, zero-ad privacy architecture executing directly on client and edge'
    ],
    techStack: ['Next.js 14 (App Router)', 'TypeScript', 'Tailwind CSS', 'Vercel Edge Functions'],
    relatedSlugs: ['nexus', 'ttune', 'yumemiro-os']
  },
  {
    slug: 'nexus',
    title: 'NEXUS',
    subtitle: 'Local Network Intelligence & Defensive Operations Platform',
    category: 'software',
    categoryLabel: 'Software & Developer Utilities',
    status: 'active',
    statusLabel: 'Active Platform',
    language: 'Python 3.11 / Next.js 14 / FastAPI / Docker',
    stars: 2,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/nexus',
    shortDescription: 'Defensive local network discovery, topology visualization, and port monitoring platform for home labs and system administrators.',
    fullDescription: 'NEXUS is an open-source platform engineered for defensive home lab monitoring and local infrastructure visibility. It automatically discovers active devices on authorized subnets, generates hierarchical network topologies, inspects TCP port banners, tracks round-trip latency in real time, and logs network state changes.',
    purpose: 'To give developers and homelab enthusiasts an intuitive, self-hosted single pane of glass into their local physical and virtual networks.',
    verifiedFeatures: [
      'Automated local subnet sweep and ARP table device discovery',
      'Hierarchical visual topology mapping of network gateways, switches, and hosts',
      'Non-intrusive TCP port and service banner discovery',
      'Real-time WebSocket latency tracking and threshold alerting',
      'Docker containerized deployment ready for local servers'
    ],
    techStack: ['Python 3.11+', 'FastAPI', 'Next.js 14.2', 'WebSockets', 'Docker', 'Tailwind CSS'],
    relatedSlugs: ['wtools', 'ttune', 'yumemiro-os']
  },
  {
    slug: 'ttune',
    title: 'ttune',
    subtitle: 'Terminal Multimedia Player with Real-Time RGB Visualizer',
    category: 'software',
    categoryLabel: 'Software & Developer Utilities',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'Python 3.9+ / FFmpeg / Curses',
    stars: 5,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/ttune',
    shortDescription: 'Terminal-based audio and video player featuring a real-time RGB spectrum visualizer and comprehensive codec support.',
    fullDescription: 'ttune brings rich multimedia playback directly into Linux and terminal consoles. Leveraging FFmpeg and curses, it decodes and renders a dynamic RGB audio frequency spectrum while supporting virtually all modern container formats including MP3, MP4, FLAC, AAC, OGG, OPUS, WebM, and MKV.',
    purpose: 'A passion project combining low-level terminal TUI graphics, real-time signal processing, and audio decoding without spinning up heavy GUI frameworks.',
    verifiedFeatures: [
      'Real-time RGB frequency spectrum visualizer rendered in terminal cells',
      'Comprehensive audio/video codec support (MP3, MP4, WAV, FLAC, AAC, M4A, OGG, MKV, WebM, AVI)',
      'Interactive curses keybindings for track progression, volume control, and shuffle',
      'Minimal CPU footprint ideal for background terminal sessions'
    ],
    techStack: ['Python 3.9+', 'FFmpeg', 'Curses / Windows-Curses', 'Audio Signal Processing'],
    relatedSlugs: ['ttune-web', 'nexus', 'yumemiro-os']
  },
  {
    slug: 'ttune-web',
    title: 'ttune Web',
    subtitle: 'Bangla Cinema Soundtrack Audio Streaming Player',
    category: 'web',
    categoryLabel: 'Web Applications',
    status: 'active',
    statusLabel: 'Active Work',
    language: 'JavaScript / HTML5 Audio',
    stars: 0,
    forks: 1,
    githubUrl: 'https://github.com/wyzuk/ttune-web',
    shortDescription: 'Specialized web audio player dedicated to streaming Bangla cinema soundtracks and classic regional music.',
    fullDescription: 'A cultural streaming web application curating and streaming Bengali cinema audio tracks. Designed with lightweight web standards for smooth playback on mobile and desktop devices.',
    purpose: 'Preserving and sharing classic and modern soundtracks from Bangladeshi cinema.',
    verifiedFeatures: [
      'Direct audio streaming with responsive playlist queues',
      'Custom playback scrubber and volume controls',
      'Bengali typography and minimalist dark mode audio player interface'
    ],
    techStack: ['JavaScript', 'HTML5 Audio', 'CSS3'],
    relatedSlugs: ['ttune', 'wyzukcast']
  },
  {
    slug: 'animella',
    title: 'Animella',
    subtitle: 'Cinematic Japanese Anime Discovery Platform',
    category: 'web',
    categoryLabel: 'Web Applications',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'TypeScript / Next.js / Tailwind CSS',
    stars: 1,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/animella',
    shortDescription: 'Glossy, cinematic anime catalog featuring 50 legendary anime series, high-resolution artwork, and 296 character portraits.',
    fullDescription: 'Animella is a modern Japanese anime discovery and exploration platform. It presents curated metadata, seasonal breakdowns, trailer playback, and character galleries for 50 iconic anime franchises with dark glassmorphism styling and Japanese editorial typography.',
    purpose: 'A showcase of high-density media catalog design, responsive modal dialogs, and clean client-side search across local JSON datasets.',
    verifiedFeatures: [
      'Curated database of 50 iconic anime series with synopses and metadata',
      'Local asset library: 50 high-res posters, 50 wide banners, and 296 character portraits',
      'Interactive trailer preview modals and character rosters',
      'High-performance client search and category filtering'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
    relatedSlugs: ['wyzukcast', 'wtools']
  },
  {
    slug: 'vlt-bot',
    title: 'VLT Shop Bot',
    subtitle: 'Discord Shop Management Bot with Components V2',
    category: 'software',
    categoryLabel: 'Software & Developer Utilities',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'Python / discord.py',
    stars: 5,
    forks: 1,
    githubUrl: 'https://github.com/wyzuk/vlt',
    shortDescription: 'Modular Discord bot utilizing Discord Components V2 for shop automation, balance management, moderation, and giveaways.',
    fullDescription: 'VLT is a production Discord management bot built with Python and discord.py. It leverages Discord Components V2 interactive buttons, select menus, and modal dialogs to provide an automated storefront interface, user balance handling, server moderation, and audit logging.',
    purpose: 'Powering automated digital commerce fulfillment and community server management.',
    verifiedFeatures: [
      'Interactive Discord Components V2 panels, buttons, and dropdowns',
      'Automated product delivery, inventory tracking, and balance ledgers',
      'Full moderation suite: ban, kick, timeout, mute, warnings, and message purging',
      'Integrated giveaway engine and comprehensive audit logging'
    ],
    techStack: ['Python', 'discord.py', 'Discord Components V2 API', 'Asyncio'],
    relatedSlugs: ['vaultrix-shop', 'nebula-bot-suite']
  },
  {
    slug: 'vaultrix-shop',
    title: 'Vaultrix Marketplace',
    subtitle: 'Digital Commerce Storefront for Subscriptions & Hosting',
    category: 'web',
    categoryLabel: 'Web Applications',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'Modern Web / Next.js / Tailwind CSS',
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/vlt',
    officialSite: 'https://vaultrix.shop',
    shortDescription: 'Digital commerce storefront for Discord Nitro, Robux, gaming subscriptions, and VPS hosting credited to NebulaVex.',
    fullDescription: 'Vaultrix (https://vaultrix.shop) is a live digital marketplace providing fast, automated fulfillment for gaming subscriptions, game credits, and VPS hosting. Authored under the alias NebulaVex, it connects directly with Discord automation bots for instant delivery.',
    purpose: 'A real-world digital commerce platform exploring automated payment flows, order dispatch, and high-conversion landing page design.',
    verifiedFeatures: [
      'Product catalog for digital subscriptions, gaming credits, and hosting',
      'Automated fulfillment hooks linking web purchases to Discord bot dispatch',
      'Responsive dark commerce UI with instant product modals'
    ],
    techStack: ['HTML5', 'CSS3 / Tailwind', 'JavaScript', 'Discord API'],
    relatedSlugs: ['vlt-bot', 'nebula-bot-suite']
  },
  {
    slug: 'nebula-bot-suite',
    title: 'Nebula Discord Bot Suite',
    subtitle: 'Modular Discord Server Automation & Utility Bots',
    category: 'software',
    categoryLabel: 'Software & Developer Utilities',
    status: 'completed',
    statusLabel: 'Production Ready',
    language: 'Python / discord.py',
    stars: 4,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/nebula',
    shortDescription: 'A series of modular Python Discord bots (nebula, nebula-bot, nebula-os, host) featuring cogs architecture.',
    fullDescription: 'The Nebula Bot Suite represents WYZUK\'s foundational Discord bot development work. Architected in Python using discord.py\'s cogs framework, these repositories (`wyzuk/nebula`, `wyzuk/nebula-bot`, `wyzuk/nebula-os`, `wyzuk/host`) provide extensible modules for music, server administration, automation triggers, and command dispatch.',
    purpose: 'Modularizing server utility features into maintainable, reloadable Python cogs.',
    verifiedFeatures: [
      'Modular cogs architecture enabling hot-reloading of bot commands',
      'Server configuration commands and automated role assignments',
      'Event-driven message routing and exception handling'
    ],
    techStack: ['Python', 'discord.py', 'Asyncio'],
    relatedSlugs: ['vlt-bot', 'vaultrix-shop']
  },
  {
    slug: 'iplnchr',
    title: 'iOS Launcher Simulator',
    subtitle: 'Interactive High-Fidelity iPhone UI Simulator for the Web',
    category: 'experiments',
    categoryLabel: 'Experiments & Prototypes',
    status: 'experiment',
    statusLabel: 'Experiment',
    language: 'JavaScript / CSS3 / HTML5',
    stars: 4,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/iplnchr',
    shortDescription: 'Interactive web-based iPhone simulator reproducing iOS mobile UI, app icons, widgets, and gestures.',
    fullDescription: 'An experimental UI engineering project exploring Apple\'s iOS design language directly in the browser. Features smooth icon spring animations, a functional notification center, clock widgets, and simulated app launches using pure CSS3 transforms.',
    purpose: 'Pushing browser CSS and touch interactions to emulate mobile operating system physics.',
    verifiedFeatures: [
      'Realistic iOS spring physics and swipe gesture emulation',
      'Interactive home screen grid with application icon badges',
      'Dynamic island and status bar layout synchronization'
    ],
    techStack: ['JavaScript', 'CSS3 3D Transforms', 'HTML5'],
    relatedSlugs: ['idk', 'ixnit']
  },
  {
    slug: 'ixnit',
    title: 'Ixnit Knowledge Base',
    subtitle: 'Personal Developer Notebook & Sandbox Recipes',
    category: 'experiments',
    categoryLabel: 'Experiments & Prototypes',
    status: 'active',
    statusLabel: 'Active Work',
    language: 'JavaScript / Markdown',
    stars: 4,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/ixnit',
    shortDescription: 'Personal coding notebook, debugging gotchas, and vanilla JavaScript snippet sandbox written by hand.',
    fullDescription: 'Ixnit is WYZUK\'s private-made-public knowledge repository. Documenting lessons learned, tricky browser API quirks, reusable boilerplate recipes, and vanilla JavaScript patterns, it serves as an authentic record of hands-on learning.',
    purpose: 'Tracking practical programming discoveries, debugging recipes, and algorithmic experiments.',
    verifiedFeatures: [
      'Curated library of vanilla JavaScript snippets and patterns',
      'Browser API notes on Web Audio, WebGL, and Canvas optimization',
      'Real-world debugging takeaways from side projects'
    ],
    techStack: ['JavaScript', 'Markdown', 'Git'],
    relatedSlugs: ['wtools', 'void']
  },
  {
    slug: 'void',
    title: 'VOID Digital Fortune Machine',
    subtitle: 'Minimalist Conceptual Web Simulation',
    category: 'experiments',
    categoryLabel: 'Experiments & Prototypes',
    status: 'experiment',
    statusLabel: 'Experiment',
    language: 'HTML5 / Vanilla JavaScript / CSS3',
    stars: 5,
    forks: 0,
    githubUrl: 'https://github.com/wyzuk/idk',
    shortDescription: 'Experimental web project built around a fictional digital fortune machine that computes randomized aphorisms.',
    fullDescription: 'VOID (hosted in repository `wyzuk/idk`) is a tiny, artistic web experiment. Designed with high-contrast minimalist typography, pressing the interactive activator initiates a simulated calculation cycle that outputs procedural, mysterious philosophical statements.',
    purpose: 'A playful exploration of micro-interactions, typographic rhythm, and digital minimalism.',
    verifiedFeatures: [
      'Minimalist monochrome visual aesthetic with subtle flicker effects',
      'Procedural random message generator with state transition delays',
      'Pure vanilla web technologies with zero dependencies'
    ],
    techStack: ['HTML5', 'Vanilla JavaScript', 'CSS3'],
    relatedSlugs: ['iplnchr', 'ixnit']
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}
