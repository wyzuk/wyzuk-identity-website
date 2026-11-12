# WYZUK Handcrafted Personal Identity & Software Archive

The official, production-ready personal website and search-engine-readable identity archive for **WYZUK** (NebulaVex / Wasee / nvxwx), deployed canonically at `https://nebulavex.bond`.

Engineered with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion, utilizing Static Site Generation (`output: 'export'`) for instant performance, complete privacy (zero trackers), and structured data discoverability.

---

## 🚀 Quickstart & Commands

### Prerequisites
- Node.js 18.17+ or Node.js 20+ (Node.js 24 LTS verified)
- npm, pnpm, or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website with instant hot module reloading.

### 3. Production Static Build
```bash
npm run build
```
This compiles and exports 100% pre-rendered static HTML, CSS, JavaScript, `sitemap.xml`, and `robots.txt` into the `out/` directory.

### 4. Run Automated Build & SEO Verification Audit
```bash
node scripts/verify-build.js
```
Runs comprehensive automated audits validating:
- Existence of all 58 canonical URLs declared in `sitemap.xml`
- Unique `<title>` tags and `<meta name="description">`
- Absolute HTTPS canonical URL matching `https://nebulavex.bond`
- Valid JSON-LD structured data (`Person`, `WebSite`, `BreadcrumbList`, `SoftwareApplication`, `TechArticle`)
- Semantic HTML landmarks and keyboard accessibility
- Asset integrity in `out/assets/gallery/`

---

## 📂 Information Architecture & Route Inventory

The site contains **58 canonical, fully-rendered, indexable pages** with zero manufactured duplicate filler:

### Core Identity
- `/` — Main WYZUK homepage with identity statement, featured projects, and reachability note.
- `/about/` — Biographical introduction and builder philosophy.
- `/about/identity/` — Canonical explanation of WYZUK, NebulaVex, Wasee, nvxwx, ud1q, jamim, and Yumemiro OS.
- `/about/education/` — Academic status as a Class 11 student in Bangladesh in 2026 (institution strictly private).
- `/about/interests/` — Deep dive into Linux kernel customization, 3D voxel graphics, and audio synthesis.
- `/about/journey/` — Verified chronological milestone timeline across 2025 and 2026.

### Projects & Systems Hub
- `/projects/` — Master filterable directory of verified software and builds.
- `/projects/operating-systems/` — Operating-system work (Yumemiro OS).
- `/projects/games/` — Browser games & engines (YourCraft, Flappy Wyzuk, W Suffers, Snake).
- `/projects/software/` — Software & developer utilities (WTOOLS, NEXUS, ttune, VLT bot).
- `/projects/web/` — Web applications & streaming (Wyzuk Cast, Animella, Vaultrix).
- `/projects/open-source/` — Open source code repositories on GitHub (@wyzuk).
- `/projects/experiments/` — Prototypes and sandboxes (iplnchr, VOID, ixnit).

### Dedicated Project Detail Pages (17 projects)
- `/projects/yumemiro-os/` — Aesthetic Arch Linux desktop distribution with Hyprland.
- `/projects/wyzukcast/` — Client-side IPTV web streaming player with HLS.js.
- `/projects/yourcraft/` — 3D procedural voxel sandbox running in browser WebGL.
- `/projects/flappy/` — Indie arcade browser game with procedural Web Audio API synthesis.
- `/projects/w/` — W Suffers: 3D endless runner web game in Three.js.
- `/projects/snake/` — Retro canvas arcade game.
- `/projects/wtools/` — 35+ developer network, domain, and security diagnostic utilities.
- `/projects/nexus/` — Local network intelligence & defensive topology platform.
- `/projects/ttune/` — Terminal RGB visualizer music and video player with FFmpeg.
- `/projects/ttune-web/` — Bangla cinema soundtrack web audio player.
- `/projects/animella/` — Cinematic Japanese anime discovery catalog.
- `/projects/vlt-bot/` — Discord shop management bot with Discord Components V2.
- `/projects/vaultrix-shop/` — Digital commerce storefront for subscriptions and hosting.
- `/projects/nebula-bot-suite/` — Modular Discord automation bots using cogs architecture.
- `/projects/iplnchr/` — High-fidelity interactive iOS 26 web simulator.
- `/projects/ixnit/` — Personal developer notebook and experimental sandbox.
- `/projects/void/` — Minimalist conceptual digital fortune machine.

### Deep Architectural Subpages (9 subpages)
- `/projects/yumemiro-os/architecture/` — System architecture, archiso packaging, and Calamares installer generation.
- `/projects/yumemiro-os/hyprland-rice/` — Wayland compositor configuration, Waybar 0.10, and frosted glass SDDM themes.
- `/projects/yumemiro-os/releases/` — Version history (Sakura to Ame) and transparent ISO availability status.
- `/projects/wyzukcast/hls-streaming/` — Client-side M3U manifest regex parsing and HLS buffer management.
- `/projects/yourcraft/voxel-engine/` — Chunk partitioning, neighbor boundary face culling, and texture atlas mapping.
- `/projects/flappy-wyzuk/audio-synthesis/` — Mathematical oscillator waveforms for retro arcade audio without sound files.
- `/projects/wtools/architecture/` — Privacy-first zero-logging client and edge diagnostic execution.
- `/projects/nexus/topology-discovery/` — Defensive local subnet discovery, ARP table sweeps, and WebSocket state graphs.
- `/projects/ttune/terminal-rendering/` — Real-time RGB frequency spectrum rendering in Python curses with FFmpeg.

### Engineering Notes & Articles (6 articles)
- `/notes/` — Technical articles index.
- `/notes/arch-linux-hyprland-setup/` — Building an out-of-the-box Hyprland desktop environment.
- `/notes/client-side-iptv-architecture/` — Client-side IPTV architecture with HLS.js.
- `/notes/browser-voxel-engine-optimizations/` — Optimizing procedural 3D voxel engines for 60 FPS in WebGL.
- `/notes/web-audio-api-procedural-synthesis/` — Procedural audio synthesis without audio files in JavaScript.
- `/notes/terminal-audio-visualization-ffmpeg/` — Crafting terminal TUIs with real-time audio visualization in Python.
- `/notes/student-developer-learning-by-building/` — The student builder mindset: learning systems by shipping them.

### Technology Domains (4 domain dossiers)
- `/technologies/` — Overview of verified technical capabilities.
- `/technologies/linux-systems/` — Arch Linux, Hyprland, Wayland, and shell scripting.
- `/technologies/javascript-webgl/` — Three.js, WebGL, Canvas 2D, and HLS.js.
- `/technologies/python-automation/` — FastAPI, discord.py, curses, and FFmpeg.
- `/technologies/typescript-react/` — Next.js 14, Tailwind CSS, TypeScript, and JSON-LD SEO.

### Supporting & Utility Pages
- `/github/` — Introduction to public GitHub profile (@wyzuk), verified statistics, and repository index.
- `/websites/` — Connected external websites directory (wasee.dev, vaultrix.shop, etc.).
- `/gallery/` — Interactive photo gallery with accessible keyboard lightbox generated from `assets/gallery/`.
- `/contact/` — Direct communication channels, reachability statement, and verified handles.
- `/uses/` — Hardware setup, Arch Linux daily driver, Kitty terminal, and code editors.
- `/colophon/` — Engineering specifications, typography, and performance metrics.
- `/privacy/` — Privacy policy affirming zero tracking cookies and zero telemetry.
- `/404/` — Handcrafted custom 404 error page.

---

## 🖼️ How to Add Gallery Images

1. Place image files into `assets/gallery/` (or organize into subfolders like `assets/gallery/os/` or `assets/gallery/artwork/`).
2. Supported formats: `.png`, `.webp`, `.jpg`, `.jpeg`, `.avif`, `.gif`.
3. Add the image metadata entry into `lib/data/gallery.ts` (id, filename, src, title, category, width, height, alt).
4. Run:
   ```bash
   npm run build
   ```
5. Deploy the updated `out/` directory.
> **Note:** Because this is a statically generated website for maximum speed, security, and SEO, adding new images locally requires rebuilding and redeploying the site to publish them.

---

## 🌐 Deployment Instructions

Because `next.config.js` is configured with `output: 'export'`, the entire build outputs to `out/` as clean static assets.

### Deploying to Cloudflare Pages
1. Push this repository to GitHub or GitLab.
2. In the Cloudflare dashboard, go to **Workers & Pages** > **Create application** > **Pages**.
3. Select your repository.
4. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
5. Click **Save and Deploy**.
6. Under **Custom Domains**, bind `nebulavex.bond`.

### Deploying to Vercel
1. Run `npx vercel` or import the Git repository into the Vercel dashboard.
2. Vercel automatically detects Next.js static export settings and publishes `out/`.
3. In **Project Settings** > **Domains**, assign `nebulavex.bond`.

---

## 🔍 Google Search Console Verification & Indexing Setup

To ensure search engines index `https://nebulavex.bond`:

1. **Verify Ownership:**
   - Log into [Google Search Console](https://search.google.com/search-console).
   - Add property as **Domain** (`nebulavex.bond`) using DNS TXT verification at your domain registrar.
   - Alternatively, add URL prefix (`https://nebulavex.bond`) and use HTML tag verification.

2. **Submit Sitemap:**
   - In Search Console, navigate to **Sitemaps** in the left sidebar.
   - Enter `sitemap.xml` (full URL: `https://nebulavex.bond/sitemap.xml`).
   - Click **Submit**. The sitemap will report all 58 canonical URLs.

3. **Request Initial Indexing:**
   - Use the **URL Inspection Tool** to inspect `https://nebulavex.bond/`.
   - Click **Request Indexing**. Repeat for key hub URLs (`/about/identity/`, `/projects/`, `/projects/yumemiro-os/`).

4. **Monitor Coverage & Schema:**
   - Review the **Enhancements** tab after 48–72 hours to verify that Google recognizes your `Person`, `WebSite`, `ProfilePage`, and `BreadcrumbList` structured data schemas.

---

## 📜 License & Author

- Author: **WYZUK** (NebulaVex / Wasee / nvxwx)
- Website: [https://nebulavex.bond](https://nebulavex.bond)
- GitHub: [@wyzuk](https://github.com/wyzuk)
- Email: [onlyjamim@gmail.com](mailto:onlyjamim@gmail.com)
