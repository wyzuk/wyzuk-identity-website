export interface TechnicalNote {
  slug: string;
  title: string;
  summary: string;
  category: 'systems' | 'web-graphics' | 'audio-streaming' | 'tooling' | 'retrospective';
  date: string;
  readTime: string;
  relatedProjectSlug?: string;
  content: {
    heading: string;
    paragraphs: string[];
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];
}

export const TECHNICAL_NOTES: TechnicalNote[] = [
  {
    slug: 'arch-linux-hyprland-setup',
    title: 'Building an Out of the Box Hyprland Desktop Environment',
    summary: 'Architectural lessons from crafting Yumemiro OS: configuring Wayland compositors, custom Waybar modules, and sub-650MB idle footprints on Arch Linux.',
    category: 'systems',
    date: '2026-08-15',
    readTime: '6 min read',
    relatedProjectSlug: 'yumemiro-os',
    content: [
      {
        heading: 'The Wayland Transition and Hyprland',
        paragraphs: [
          'For years, Linux desktop ricing was dominated by X11 window managers like i3 and bspwm. While capable, X11 carries decades of legacy baggage: screen tearing, crude multi-monitor refresh rate synchronization, and insecure IPC boundaries. In building Yumemiro OS, the choice of Hyprland as the core compositor was deliberate: it delivers fluid Wayland-native animation rendering via wlroots, GPU-accelerated blur shaders, and declarative window rules.',
          'The primary technical challenge was achieving complete visual cohesion out-of-the-box without forcing users through hours of manual dotfile editing. A cohesive desktop requires tight coupling between the compositor, status bar, application launcher, and display manager.',
        ],
      },
      {
        heading: 'Modular Configuration Layering',
        paragraphs: [
          'Rather than dumping monolithic dotfiles into ~/, Yumemiro OS structures configurations into modular layers. Hyprland handles window tiling, animations, and input device bindings; Waybar 0.10 serves as the contextual status surface with floating popovers for calendar and volume; and SDDM provides the frosted glass login screen.',
        ],
        codeSnippet: {
          language: 'hyprlang',
          code: `# Yumemiro OS Hyprland Smooth Animation Config
animations {
    enabled = yes
    bezier = overshot, 0.05, 0.9, 0.1, 1.05
    bezier = smoothOut, 0.36, 0, 0.66, -0.56
    
    animation = windows, 1, 4, overshot, slide
    animation = border, 1, 10, default
    animation = fade, 1, 4, default
    animation = workspaces, 1, 5, overshot, slide
}`,
          caption: 'Declarative animation curves engineered for tactile window snapping in Yumemiro OS.',
        },
      },
      {
        heading: 'Preserving the Sub-650MB Idle Target',
        paragraphs: [
          'Arch Linux is celebrated for its zero-bloat philosophy. To keep Yumemiro OS responsive on modest dual-core hardware with 2GB of RAM, we eliminated redundant background daemons. Notification dispatch is handled by dunst/mako, audio mixing uses pure PipeWire, and system monitoring polls procfs at throttled intervals, sustaining an idle memory footprint under 650MB.',
        ],
      },
    ],
  },
  {
    slug: 'client-side-iptv-architecture',
    title: 'Client Side IPTV Architecture: Zero Backend Streaming with HLS.js',
    summary: 'How Wyzuk Cast parses M3U8 broadcast playlists, handles adaptive bitrates, and provides instant channel search entirely in the browser runtime.',
    category: 'audio-streaming',
    date: '2026-08-20',
    readTime: '5 min read',
    relatedProjectSlug: 'wyzukcast',
    content: [
      {
        heading: 'The Problem with Traditional Web Video Players',
        paragraphs: [
          'Most web streaming platforms rely on backend transcoding servers, Redis session stores, and database-backed channel catalogs. When streaming publicly available IPTV broadcasts, this architecture introduces heavy server overhead, latency, and single points of failure. In designing Wyzuk Cast, the goal was radical simplification: 100% client-side execution.',
          'By leveraging HLS.js and browser-native fetch APIs, Wyzuk Cast turns the client browser into a complete stream demuxer and playback engine.',
        ],
      },
      {
        heading: 'Parsing M3U Playlists at the Edge',
        paragraphs: [
          'M3U playlists can contain thousands of stream URIs interleaved with metadata tags like #EXTINF, tvg-logo, and group-title. Wyzuk Cast implements a streaming regex parser that categorizes incoming channel definitions on the fly into an in-memory indexed array.',
        ],
        codeSnippet: {
          language: 'javascript',
          code: `function parseM3U(rawText) {
  const lines = rawText.split('\\n');
  const channels = [];
  let currentMeta = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#EXTINF:')) {
      const nameMatch = trimmed.match(/,(.+)$/);
      const groupMatch = trimmed.match(/group-title="([^"]+)"/);
      const logoMatch = trimmed.match(/tvg-logo="([^"]+)"/);
      currentMeta = {
        name: nameMatch ? nameMatch[1].trim() : 'Unknown Channel',
        group: groupMatch ? groupMatch[1].trim() : 'General',
        logo: logoMatch ? logoMatch[1] : null,
      };
    } else if (trimmed.startsWith('http')) {
      if (currentMeta.name) {
        channels.push({ ...currentMeta, url: trimmed });
        currentMeta = {};
      }
    }
  }
  return channels;
}`,
          caption: 'Efficient regex-driven playlist extraction executing in sub-50 milliseconds.',
        },
      },
      {
        heading: 'Seamless Buffer & Error Recovery',
        paragraphs: [
          'Public IPTV streams suffer from intermittent network jitter and variable frame rates. Wyzuk Cast configures HLS.js error-recovery listeners to automatically switch manifests or restart buffer append cycles without crashing the player, maintaining playback stability.',
        ],
      },
    ],
  },
  {
    slug: 'browser-voxel-engine-optimizations',
    title: 'Optimizing Procedural 3D Voxel Engines for 60 FPS in WebGL',
    summary: 'Techniques used in YourCraft: chunk partitioning, greedy face culling, and camera frustum checks in Three.js.',
    category: 'web-graphics',
    date: '2026-08-25',
    readTime: '7 min read',
    relatedProjectSlug: 'yourcraft',
    content: [
      {
        heading: 'The Voxel Rendering Bottleneck',
        paragraphs: [
          'In a 3D voxel sandbox like YourCraft, a visible terrain grid of just 8x8 chunks (each 16x16x16 blocks) contains over 260,000 individual cubes. If rendered naively as separate Three.js Mesh instances, the browser GPU pipeline collapses within seconds due to tens of thousands of draw calls and redundant geometry calculation.',
          'To achieve a locked 60 FPS in standard modern browsers, the engine must merge block faces into consolidated chunk buffers and discard every polygon that cannot be seen by the player.',
        ],
      },
      {
        heading: 'Chunk Face Culling Algorithm',
        paragraphs: [
          'A voxel face needs to be drawn if and only if its adjacent neighboring cell is empty (air) or transparent (water/glass). By checking the 6 cardinal neighbor coordinates (x±1, y±1, z±1) prior to vertex buffer generation, YourCraft discards roughly 85% to 92% of all potential block faces.',
        ],
        codeSnippet: {
          language: 'javascript',
          code: `function isFaceVisible(world, x, y, z, faceDir) {
  const nx = x + faceDir[0];
  const ny = y + faceDir[1];
  const nz = z + faceDir[2];

  // If outside bounds, render boundary face
  if (ny < 0 || ny >= WORLD_HEIGHT) return true;
  const neighborBlock = world.getBlock(nx, ny, nz);
  
  // Only render face if neighbor is non-opaque air or transparent
  return !neighborBlock || neighborBlock.isTransparent;
}`,
          caption: 'Neighbor adjacency test preventing unexposed internal geometry from reaching WebGL.',
        },
      },
      {
        heading: 'Texture Atlas Mapping & Pointer Lock',
        paragraphs: [
          'Rather than binding multiple material shaders, YourCraft binds a single 1024x1024 texture atlas. Vertex UV coordinates are assigned dynamically depending on whether a block is dirt, stone, or grass. Paired with the HTML5 Pointer Lock API, users enjoy responsive first-person immersion.',
        ],
      },
    ],
  },
  {
    slug: 'web-audio-api-procedural-synthesis',
    title: 'Procedural Audio Synthesis: Sound Without Audio Files in JavaScript',
    summary: 'How Flappy Wyzuk synthesizes retro 8-bit sound effects using Web Audio API oscillators, eliminating HTTP audio asset requests.',
    category: 'audio-streaming',
    date: '2026-09-02',
    readTime: '5 min read',
    relatedProjectSlug: 'flappy',
    content: [
      {
        heading: 'Why Eliminate Audio Asset Files?',
        paragraphs: [
          'Traditional web games bundle dozens of .mp3 or .wav sound files. This introduces network payload bloat, asynchronous decode latency, and playback stuttering on mobile connections. For Flappy Wyzuk, every sound—from the fluttering wing flap to the high-score coin chime—is synthesized mathematically using the browser\'s native Web Audio API.',
          'This results in zero audio HTTP requests, instant zero-latency playback, and procedural variety by subtly varying oscillator frequency on each trigger.',
        ],
      },
      {
        heading: 'Designing Sound Waves Mathematically',
        paragraphs: [
          'Sound in Web Audio is created by routing an OscillatorNode through a GainNode to the AudioContext destination. Frequency modulation curves dictate the character of the sound.',
        ],
        codeSnippet: {
          language: 'javascript',
          code: `function playFlapSound(audioCtx) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  // Rapid pitch envelope: jump from 150Hz to 480Hz over 80ms
  osc.frequency.setValueAtTime(150, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(480, audioCtx.currentTime + 0.08);

  // Quick decay envelope
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.12);
}`,
          caption: 'Procedural frequency ramp generating a dynamic wing flap sound in 120 milliseconds.',
        },
      },
      {
        heading: 'Mobile Audio Context Handling',
        paragraphs: [
          'Modern mobile browsers suspend the Web Audio context until a direct user gesture (touch or click) occurs. Flappy Wyzuk attaches an idempotent initialization listener to the start screen, ensuring audio smoothly awakens without throwing console warnings.',
        ],
      },
    ],
  },
  {
    slug: 'terminal-audio-visualization-ffmpeg',
    title: 'Crafting Terminal TUIs with Real Time Audio Visualization in Python',
    summary: 'Under the hood of ttune: orchestrating FFmpeg audio streams, Fourier transform frequency binning, and curses RGB color pairs in Linux terminals.',
    category: 'tooling',
    date: '2026-09-12',
    readTime: '6 min read',
    relatedProjectSlug: 'ttune',
    content: [
      {
        heading: 'Bringing Multimedia into the Linux Console',
        paragraphs: [
          'Terminal applications possess an enduring elegance: they start instantaneously, use negligible RAM, and integrate seamlessly into tmux or tiling window managers. In developing ttune, the vision was to create a terminal music player capable of playing any media container (from MP3 and FLAC to MP4 and MKV) while rendering a full-color, animated frequency spectrum in pure text cells.',
        ],
      },
      {
        heading: 'Stream Decoding via Subprocess FFmpeg',
        paragraphs: [
          'Rather than compiling cumbersome C bindings for dozens of codecs, ttune delegates raw stream decoding to FFmpeg through an asynchronous pipe. Raw 16-bit PCM audio samples are streamed into Python, where fast Fourier transforms (FFT) compute discrete frequency magnitudes.',
        ],
        codeSnippet: {
          language: 'python',
          code: `import subprocess, numpy as np

def spawn_audio_pipeline(file_path):
    cmd = [
        'ffmpeg', '-i', file_path,
        '-f', 's16le', '-ac', '2', '-ar', '44100',
        '-loglevel', 'quiet', '-'
    ]
    return subprocess.Popen(cmd, stdout=subprocess.PIPE, bufsize=4096)

def calculate_spectrum_bars(raw_chunk, num_bars=32):
    # Convert raw bytes to integer numpy array
    samples = np.frombuffer(raw_chunk, dtype=np.int16)
    if len(samples) == 0:
        return [0] * num_bars
    fft_data = np.abs(np.fft.rfft(samples))
    # Logarithmic grouping of frequency bins into visual bars
    bins = np.array_split(fft_data, num_bars)
    return [min(100, int(np.mean(b) / 50)) for b in bins]`,
          caption: 'FFmpeg PCM pipeline and discrete FFT frequency grouping in ttune.',
        },
      },
      {
        heading: 'RGB Curses Rendering',
        paragraphs: [
          'Terminal colors in curses are managed via color pair definitions. ttune configures 256-color gradient tables that transition from electric blue to violet as audio amplitude rises, creating an authentic retro equalizer aesthetic directly in terminal cells.',
        ],
      },
    ],
  },
  {
    slug: 'student-developer-learning-by-building',
    title: 'The Student Builder Mindset: Learning Systems by Shipping Them',
    summary: 'A personal perspective on independent software creation, exploring Linux operating systems, and balancing academics as a class 11 student in Bangladesh.',
    category: 'retrospective',
    date: '2026-10-10',
    readTime: '5 min read',
    content: [
      {
        heading: 'Coding Beyond the Classroom',
        paragraphs: [
          'As a student in class 11 in Bangladesh during 2026, computer science curriculum is often taught through rote syntax memorization and textbook exercises. While fundamentals matter, true technical intuition cannot be gained from multiple-choice tests. It is forged when a build fails at 1:00 AM because an archiso configuration lacked a kernel module, or when a WebGL scene drops from 60 FPS to 12 FPS because chunk meshing generated duplicate faces.',
          'For me, programming is not a corporate job or a diploma requirement. It is a creative craft—a way to understand how computers, networks, and operating systems genuinely work under the surface.',
        ],
      },
      {
        heading: 'The Power of Public Open Source',
        paragraphs: [
          'Building in public forces rigorous engineering discipline. When a repository on GitHub carries your name, you cannot hide sloppy shortcuts behind corporate NDAs. You have to write clear READMEs, provide install instructions, license your code properly, and ensure your software builds cleanly on another person\'s machine.',
          'From Yumemiro OS and Wyzuk Cast to YourCraft and WTOOLS, every project in this portfolio represents a specific curiosity followed to its logical end: not just reading about an architecture, but building it and putting it into the hands of real users.',
        ],
      },
    ],
  },
];

export function getNoteBySlug(slug: string): TechnicalNote | undefined {
  return TECHNICAL_NOTES.find((n) => n.slug === slug);
}
