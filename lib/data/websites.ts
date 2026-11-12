export interface ExternalWebsite {
  domain: string;
  url: string;
  title: string;
  relationship: string;
  status: 'active' | 'redirect' | 'archived';
  description: string;
  technologies: string[];
}

export const EXTERNAL_WEBSITES: ExternalWebsite[] = [
  {
    domain: 'wasee.dev',
    url: 'https://wasee.dev',
    title: 'Wasee (wyzuk) Developer and Linux Enthusiast',
    relationship: 'React-based portfolio (canonical at www.wasee.dev)',
    status: 'redirect',
    description: 'Clean developer-centric portfolio built with React 18, Vite, and Tailwind CSS. Features direct links to GitHub @wyzuk repositories, live API statistics, and verified project writeups.',
    technologies: ['React 18', 'Vite', 'Tailwind CSS', 'Lucide React', 'GitHub API'],
  },
  {
    domain: 'yumemiro-os.github.io',
    url: 'https://yumemiro-os.github.io',
    title: 'Yumemiro OS Official Project Showcase',
    relationship: 'Official website for Yumemiro OS distribution',
    status: 'active',
    description: 'Dedicated presentation website for Yumemiro OS, detailing release milestones (Sakura, Hanami, Tsukiyo, Ame), Hyprland configurations, and desktop features.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
  },
  {
    domain: 'vaultrix.shop',
    url: 'https://vaultrix.shop',
    title: 'Vaultrix Premium Digital Marketplace',
    relationship: 'Commercial digital goods storefront authored under NebulaVex',
    status: 'active',
    description: 'Digital commerce storefront for Discord Nitro, gaming subscriptions, Robux, and VPS hosting, linked directly to automated Discord fulfillment bots.',
    technologies: ['Modern Web', 'Tailwind CSS', 'Discord API'],
  },
  {
    domain: 'wyzukcast.vercel.app',
    url: 'https://wyzukcast.vercel.app',
    title: 'Wyzuk Cast Live IPTV Web Streaming Player',
    relationship: 'Live production deployment of wyzukcast project',
    status: 'active',
    description: 'Zero-backend IPTV streaming web application powered by HLS.js with dynamic M3U playlist decoding and PiP support.',
    technologies: ['Vanilla JavaScript', 'HLS.js', 'Vercel'],
  },
  {
    domain: 'your-craft.netlify.app',
    url: 'https://your-craft.netlify.app/',
    title: 'YourCraft 3D Browser Voxel Engine',
    relationship: 'Live production deployment of yourcraft project',
    status: 'active',
    description: 'Interactive 3D voxel sandbox game running natively in web browsers using WebGL and Three.js.',
    technologies: ['JavaScript', 'Three.js', 'WebGL', 'Netlify'],
  },
  {
    domain: 'flpybrd.netlify.app',
    url: 'https://flpybrd.netlify.app/',
    title: 'Flappy Wyzuk Indie Neon Arcade Game',
    relationship: 'Live production deployment of flappy project',
    status: 'active',
    description: 'Modern canvas arcade game featuring procedural Web Audio API synthesis, 12 aviator characters, and parallax worlds.',
    technologies: ['HTML5 Canvas 2D', 'Web Audio API', 'Netlify'],
  },
];
