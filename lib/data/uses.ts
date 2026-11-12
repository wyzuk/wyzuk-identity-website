export interface UseCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    evidence: string;
  }[];
}

export const USES_DATA: UseCategory[] = [
  {
    category: 'Operating System & Desktop Environment',
    description: 'The foundation of daily development, ricing, and system experimentation.',
    items: [
      {
        name: 'Arch Linux',
        description: 'Primary rolling-release Linux distribution used for daily development, scripting, and system builds.',
        evidence: 'Documented on wasee.dev and foundation for Yumemiro OS repository.',
      },
      {
        name: 'Hyprland (Wayland)',
        description: 'Dynamic tiling Wayland compositor configured with custom animations, window rules, and keybindings.',
        evidence: 'Core compositor featured in Yumemiro OS configs and dotfiles.',
      },
      {
        name: 'Waybar & Rofi',
        description: 'Custom Waybar status bar with floating widgets and Rofi application launcher with pastel themes.',
        evidence: 'Directly configured in wyzuk/yumemiro-os configs repository.',
      },
      {
        name: 'SDDM (Simple Desktop Display Manager)',
        description: 'Display login manager configured with custom frosted glassmorphic theme.',
        evidence: 'Documented in Yumemiro OS release notes and repository tree.',
      },
    ],
  },
  {
    category: 'Terminal & Command Line',
    description: 'Where late-night ideas turn into working code.',
    items: [
      {
        name: 'Kitty Terminal',
        description: 'Fast, GPU-accelerated terminal emulator configured with custom pastel color schemes and font ligatures.',
        evidence: 'Pre-configured kitty/ directory in wyzuk/yumemiro-os.',
      },
      {
        name: 'Zsh / Bash Shell',
        description: 'Primary command-line shells used for automation scripting, Archiso builds, and interactive work.',
        evidence: 'Featured in shell dotfiles, terminal setups, and repository automation scripts.',
      },
      {
        name: 'FFmpeg',
        description: 'Command-line audio and video decoding suite used for multimedia streaming and visual spectrum analysis.',
        evidence: 'Mandatory prerequisite and core dependency in wyzuk/ttune.',
      },
    ],
  },
  {
    category: 'Development Environments & Editors',
    description: 'Code crafting tools and version control systems.',
    items: [
      {
        name: 'Visual Studio Code & Neovim',
        description: 'Primary code editors for TypeScript, React, Python, and shell configuration editing.',
        evidence: 'Standard frontend tooling verified across repository config files.',
      },
      {
        name: 'Git & GitHub',
        description: 'Version control and collaboration platform hosting 25 public repositories under @wyzuk.',
        evidence: 'Active GitHub profile https://github.com/wyzuk with 25 public repos.',
      },
      {
        name: 'Docker',
        description: 'Containerization tool used for local defensive network monitoring and service deployment.',
        evidence: 'Documented in wyzuk/nexus repository architecture and Dockerfile.',
      },
    ],
  },
  {
    category: 'Languages & Core Frameworks',
    description: 'Technologies actively used in verified projects.',
    items: [
      {
        name: 'Python 3',
        description: 'Core language for Discord bots (discord.py), backend APIs (FastAPI), and terminal utilities (curses).',
        evidence: 'Used in wyzuk/vlt, wyzuk/nexus, wyzuk/ttune, and wyzuk/nebula.',
      },
      {
        name: 'JavaScript / TypeScript',
        description: 'Modern web scripting and strictly typed engineering across frontend applications and browser games.',
        evidence: 'Used in wyzuk/wtools, wyzuk/animella, wyzuk/yourcraft, and wasee.dev.',
      },
      {
        name: 'Three.js & WebGL',
        description: 'Hardware-accelerated 3D graphics rendering in modern browsers for voxel sandboxes and runners.',
        evidence: 'Core engine in wyzuk/yourcraft and wyzuk/w.',
      },
      {
        name: 'HTML5 Canvas & Web Audio API',
        description: '2D physics loops and mathematical procedural sound synthesis without audio files.',
        evidence: 'Featured in wyzuk/flappy and wyzuk/snake.',
      },
      {
        name: 'Next.js & React',
        description: 'Production React framework for static site generation, clean routes, and SEO-optimized apps.',
        evidence: 'Used in wasee.dev, wyzuk/wtools, wyzuk/animella, and nebulavex.bond.',
      },
    ],
  },
];
