import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import M3Button from '@/components/M3Button';
import M3Chip from '@/components/M3Chip';
import M3Card from '@/components/M3Card';
import ProjectCard from '@/components/ProjectCard';
import { constructMetadata } from '@/lib/seo';
import { getSoftwareApplicationSchema } from '@/lib/schema';
import { PROJECTS, getProjectBySlug, Project } from '@/lib/data/projects';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} ${project.subtitle} | WYZUK`,
    description: project.shortDescription,
    path: `/projects/${project.slug}/`,
  });
}

// Map project slugs to their deep subpages if any
const SUBPAGE_MAP: Record<string, { label: string; href: string; icon: string }[]> = {
  'yumemiro-os': [
    { label: 'System Architecture & Packaging', href: '/projects/yumemiro-os/architecture/', icon: 'layers' },
    { label: 'Hyprland Desktop Rice & Wayland', href: '/projects/yumemiro-os/hyprland-rice/', icon: 'palette' },
    { label: 'Releases & Version Timeline', href: '/projects/yumemiro-os/releases/', icon: 'history' },
  ],
  'wyzukcast': [
    { label: 'HLS.js Stream Demuxing Architecture', href: '/projects/wyzukcast/hls-streaming/', icon: 'tune' },
  ],
  'yourcraft': [
    { label: 'Voxel Engine & WebGL Mesh Optimization', href: '/projects/yourcraft/voxel-engine/', icon: 'view_in_ar' },
  ],
  'flappy': [
    { label: 'Web Audio API Procedural Synthesis', href: '/projects/flappy-wyzuk/audio-synthesis/', icon: 'graphic_eq' },
  ],
  'wtools': [
    { label: 'Privacy-First Edge Architecture', href: '/projects/wtools/architecture/', icon: 'dns' },
  ],
  'nexus': [
    { label: 'Network Discovery & Topology Engine', href: '/projects/nexus/topology-discovery/', icon: 'hub' },
  ],
  'ttune': [
    { label: 'Terminal RGB Audio Equalizer via Curses', href: '/projects/ttune/terminal-rendering/', icon: 'terminal' },
  ],
};

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const schema = getSoftwareApplicationSchema(project);
  const relatedProjects = project.relatedSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is Project => p !== undefined);

  const subpages = SUBPAGE_MAP[project.slug] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-12">
      <JsonLd data={schema} />
      <Breadcrumbs
        crumbs={[
          { label: 'Projects', href: '/projects/' },
          { label: project.categoryLabel, href: `/projects/${project.category}/` },
          { label: project.title, href: `/projects/${project.slug}/` },
        ]}
      />

      {/* Hero Header Card */}
      <header className="rounded-3xl p-6 sm:p-10 bg-md-surface-container-low border border-md-outline-variant/40 shadow-elevation-1 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-md-secondary-container text-md-on-secondary-container flex items-center gap-1.5">
              <Icon name="folder_open" size={15} />
              <span>{project.categoryLabel}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-md-surface-container text-md-on-surface-variant border border-md-outline-variant/40">
              {project.statusLabel}
            </span>
          </div>

          {(project.stars > 0 || project.forks > 0) && (
            <div className="flex items-center gap-3 text-xs font-mono text-md-on-surface-variant">
              {project.stars > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-md-surface-container">
                  <Icon name="star" size={14} className="text-amber-400" filled />
                  <span>{project.stars} stars</span>
                </span>
              )}
              {project.forks > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-md-surface-container">
                  <Icon name="fork_right" size={14} />
                  <span>{project.forks} forks</span>
                </span>
              )}
            </div>
          )}
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-md-primary font-sans font-medium">
            {project.subtitle}
          </p>
          <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed pt-1">
            {project.shortDescription}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-md-outline-variant/30">
          {project.demoUrl && (
            <M3Button
              variant="filled"
              size="md"
              href={project.demoUrl}
              icon="play_circle"
            >
              Launch Live Demo
            </M3Button>
          )}

          {project.officialSite && (
            <M3Button
              variant="tonal"
              size="md"
              href={project.officialSite}
              icon="open_in_new"
            >
              Official Showcase
            </M3Button>
          )}

          <M3Button
            variant="outlined"
            size="md"
            href={project.githubUrl}
            icon="code"
          >
            GitHub Repository
          </M3Button>
        </div>
      </header>

      {/* Main Content & Specs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Deep Narrative & Architecture */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-md-on-surface font-sans flex items-center gap-2">
              <Icon name="description" size={22} className="text-md-primary" />
              <span>Project Overview</span>
            </h2>
            <div className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed space-y-3">
              <p>{project.fullDescription}</p>
            </div>
          </section>

          {/* Technical Motivation */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-md-on-surface font-sans flex items-center gap-2">
              <Icon name="lightbulb" size={22} className="text-md-primary" />
              <span>Engineering Motivation</span>
            </h2>
            <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
              {project.purpose}
            </p>
          </section>

          {/* Verified Technical Features */}
          {project.verifiedFeatures.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-md-on-surface font-sans flex items-center gap-2">
                <Icon name="check_circle" size={22} className="text-md-primary" />
                <span>Verified Features & Capabilities</span>
              </h2>
              <div className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-3">
                <ul className="space-y-3 text-sm text-md-on-surface-variant font-body">
                  {project.verifiedFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="done" size={18} className="text-md-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-md-on-surface font-sans flex items-center gap-2">
                <Icon name="account_tree" size={22} className="text-md-primary" />
                <span>System Architecture Notes</span>
              </h2>
              <div className="p-5 rounded-2xl bg-md-surface-container-low border border-md-outline-variant/40 text-sm text-md-on-surface-variant font-body leading-relaxed">
                {project.architectureNotes}
              </div>
            </section>
          )}

          {/* Releases Notes */}
          {project.releasesNotes && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-md-on-surface font-sans flex items-center gap-2">
                <Icon name="history_edu" size={22} className="text-md-primary" />
                <span>Release Status & Packaging</span>
              </h2>
              <div className="p-5 rounded-2xl bg-md-surface-container-low border border-md-outline-variant/40 text-sm text-md-on-surface-variant font-body leading-relaxed">
                {project.releasesNotes}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar: Quick Specs & Subpages */}
        <div className="space-y-6">
          {/* Quick Specs Card */}
          <M3Card variant="outlined" className="space-y-4">
            <h3 className="text-base font-bold text-md-on-surface font-sans">
              Metadata & Attributes
            </h3>

            <div className="divide-y divide-md-outline-variant/30 text-xs font-sans">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-md-on-surface-variant">Primary Language</span>
                <span className="font-mono font-medium text-md-on-surface">{project.language}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-md-on-surface-variant">Category</span>
                <span className="font-medium text-md-on-surface">{project.categoryLabel}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-md-on-surface-variant">Current Status</span>
                <span className="font-mono font-medium text-md-primary">{project.statusLabel}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-md-on-surface-variant">Author Credit</span>
                <span className="font-medium text-md-on-surface">WYZUK</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-md-on-surface-variant">License</span>
                <span className="font-mono text-md-on-surface">Open Source (MIT / GPL)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-md-on-surface block mb-2">Technologies Used</span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-md-surface-container text-md-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </M3Card>

          {/* Deep Architecture Subpages if available */}
          {subpages.length > 0 && (
            <M3Card variant="elevated" className="space-y-3">
              <div className="flex items-center gap-2 text-md-primary">
                <Icon name="auto_stories" size={20} />
                <h3 className="text-sm font-bold font-sans">
                  Deep Architectural Articles
                </h3>
              </div>
              <div className="space-y-1.5 pt-1">
                {subpages.map((sp) => (
                  <Link
                    key={sp.href}
                    href={sp.href}
                    className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-md-surface-container-high transition-colors group text-xs font-medium text-md-on-surface"
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={sp.icon} size={16} className="text-md-primary" />
                      <span>{sp.label}</span>
                    </div>
                    <Icon name="chevron_right" size={16} className="text-md-outline group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </M3Card>
          )}

          {/* GitHub Signal Card */}
          <div className="p-5 rounded-3xl bg-md-surface-container-high border border-md-outline-variant/40 space-y-3 text-xs">
            <span className="font-bold text-md-on-surface block">GitHub Verification</span>
            <p className="text-md-on-surface-variant font-body leading-relaxed">
              Maintained under the primary verified account <code className="text-md-primary font-mono">github.com/wyzuk</code>.
            </p>
            <M3Button variant="tonal" size="sm" href={project.githubUrl} icon="code">
              View Repository
            </M3Button>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="pt-8 border-t border-md-outline-variant/30 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-md-on-surface font-sans">
              Related Systems & Software
            </h2>
            <Link href="/projects/" className="text-xs text-md-primary hover:underline">
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((rel) => (
              <ProjectCard key={rel.slug} project={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
