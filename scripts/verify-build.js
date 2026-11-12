const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('WYZUK WEBSITE BUILD, SEO & PRIVACY AUDIT');
console.log('====================================================\n');

const outDir = path.join(__dirname, '..', 'out');
const sitemapPath = path.join(outDir, 'sitemap.xml');
const robotsPath = path.join(outDir, 'robots.txt');

let errors = 0;
let warnings = 0;
let passed = 0;

// 1. Check sitemap existence
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ FAIL: sitemap.xml does not exist in out/');
  errors++;
} else {
  console.log('✓ PASS: sitemap.xml exists in out/');
  passed++;
}

// 2. Check robots.txt
if (!fs.existsSync(robotsPath)) {
  console.error('❌ FAIL: robots.txt does not exist in out/');
  errors++;
} else {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (robots.includes('Sitemap: https://nebulavex.bond/sitemap.xml')) {
    console.log('✓ PASS: robots.txt correctly references canonical sitemap');
    passed++;
  } else {
    console.error('❌ FAIL: robots.txt does not reference https://nebulavex.bond/sitemap.xml');
    errors++;
  }
}

// 3. Parse sitemap URLs and verify corresponding HTML files
const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const locRegex = /<loc>(.*?)<\/loc>/g;
const urls = [];
let match;
while ((match = locRegex.exec(sitemapXml)) !== null) {
  urls.push(match[1]);
}

console.log(`\nAuditing ${urls.length} URLs declared in sitemap.xml...`);

const titlesSeen = new Map();
const descriptionsSeen = new Map();

urls.forEach((url) => {
  const parsed = new URL(url);
  let pathname = parsed.pathname;
  if (!pathname.endsWith('/')) pathname += '/';

  // Map url pathname to filesystem path in out/
  let htmlPath;
  if (pathname === '/') {
    htmlPath = path.join(outDir, 'index.html');
  } else {
    htmlPath = path.join(outDir, pathname.slice(1), 'index.html');
  }

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ FAIL: URL ${url} missing physical file at ${htmlPath}`);
    errors++;
    return;
  }

  const content = fs.readFileSync(htmlPath, 'utf8');

  // Check Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ FAIL: Missing title in ${url}`);
    errors++;
  } else {
    const title = titleMatch[1].trim();
    if (titlesSeen.has(title)) {
      console.warn(`⚠️ WARN: Duplicate title "${title}" between ${titlesSeen.get(title)} and ${url}`);
      warnings++;
    } else {
      titlesSeen.set(title, url);
    }
  }

  // Check Meta Description
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/i) ||
                    content.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ FAIL: Missing meta description in ${url}`);
    errors++;
  } else {
    const desc = descMatch[1].trim();
    if (descriptionsSeen.has(desc)) {
      console.warn(`⚠️ WARN: Duplicate meta description between ${descriptionsSeen.get(desc)} and ${url}`);
      warnings++;
    } else {
      descriptionsSeen.set(desc, url);
    }
  }

  // Check Canonical URL
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) ||
                         content.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i);
  if (!canonicalMatch) {
    console.error(`❌ FAIL: Missing canonical link in ${url}`);
    errors++;
  } else if (canonicalMatch[1] !== url) {
    console.error(`❌ FAIL: Mismatched canonical link in ${url} (found ${canonicalMatch[1]})`);
    errors++;
  }

  // Check JSON-LD
  if (!content.includes('application/ld+json')) {
    console.error(`❌ FAIL: Missing structured data (JSON-LD) in ${url}`);
    errors++;
  }

  // Check Semantic Main
  if (!content.includes('<main') || !content.includes('id="main-content"')) {
    console.error(`❌ FAIL: Missing semantic <main id="main-content"> in ${url}`);
    errors++;
  }

  passed++;
});

// 4. Verify gallery assets are present in out/assets/gallery/
const outGalleryDir = path.join(outDir, 'assets', 'gallery');
if (fs.existsSync(outGalleryDir)) {
  const galleryFiles = fs.readdirSync(outGalleryDir);
  console.log(`\n✓ PASS: out/assets/gallery/ verified with ${galleryFiles.length} image assets`);
  passed++;
} else {
  console.error('❌ FAIL: out/assets/gallery/ is missing');
  errors++;
}

// 5. PRIVACY AUDIT: Recursively scan entire out/ for prohibited name and old domain
console.log('\nRunning Comprehensive Privacy Scan on out/ directory...');
const prohibitedPatterns = [
  { name: 'Prohibited Name (Faiyaz)', regex: /faiyaz/i },
  { name: 'Prohibited Domain (jamim.me)', regex: /jamim\.me/i },
];

function scanDirForPrivacy(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirForPrivacy(fullPath);
    } else if (entry.isFile()) {
      // Only scan text, html, js, json, xml, txt, etc.
      const ext = path.extname(entry.name).toLowerCase();
      if (['.html', '.js', '.json', '.xml', '.txt', '.webmanifest'].includes(ext)) {
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        for (const prob of prohibitedPatterns) {
          if (prob.regex.test(fileContent)) {
            console.error(`❌ PRIVACY VIOLATION: Found ${prob.name} in ${fullPath}`);
            errors++;
          }
        }
      }
    }
  }
}

scanDirForPrivacy(outDir);
console.log('✓ PASS: Privacy scan on out/ completed');
passed++;

console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${passed} Checks Passed | ${warnings} Warnings | ${errors} Errors`);
console.log('====================================================');

if (errors > 0) {
  process.exit(1);
} else {
  console.log('🚀 ALL PRODUCTION, SEO & PRIVACY AUDITS PASSED!\n');
  process.exit(0);
}
