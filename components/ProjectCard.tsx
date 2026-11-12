import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data/projects';
import Icon from './Icon';
import M3Chip from './M3Chip';
import M3Button from './M3Button';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className="group rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 apple-glass glossy-shine hover:-translate-y-1.5 hover:shadow-2xl hover:border-white/90 dark:hover:border-white/25 transition-all duration-300 flex flex-col justify-between gap-5 relative overflow-hidden">
      {/* Top Meta & Badges */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md text-md-on-surface border border-white/50 dark:border-white/10 flex items-center gap-1 glossy-pill">
              <Icon name="folder_open" size={14} className="text-md-primary" />
              <span>{project.categoryLabel}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/40 dark:bg-white/5 backdrop-blur-md text-md-on-surface-variant border border-white/40 dark:border-white/10 glossy-pill">
              {project.statusLabel}
            </span>
          </div>

          {(project.stars > 0 || project.forks > 0) && (
            <div className="flex items-center gap-2.5 text-xs font-mono text-md-on-surface-variant bg-white/40 dark:bg-white/5 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/40 dark:border-white/10">
              {project.stars > 0 && (
                <span className="inline-flex items-center gap-1" title={`${project.stars} GitHub stars`}>
                  <Icon name="star" size={14} className="text-amber-400" filled />
                  <span>{project.stars}</span>
                </span>
              )}
              {project.forks > 0 && (
                <span className="inline-flex items-center gap-1" title={`${project.forks} forks`}>
                  <Icon name="fork_right" size={14} />
                  <span>{project.forks}</span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-md-on-surface font-sans">
            <Link
              href={`/projects/${project.slug}/`}
              className="hover:text-md-primary transition-colors inline-flex items-center gap-1.5"
            >
              <span>{project.title}</span>
              <Icon
                name="arrow_outward"
                size={18}
                className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-md-primary"
              />
            </Link>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-md-primary">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-md-on-surface-variant font-body leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/40 dark:bg-white/5 backdrop-blur-md text-md-on-surface-variant border border-white/40 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-md-outline bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-md-outline-variant/30">
        <M3Button
          variant="tonal"
          size="sm"
          href={`/projects/${project.slug}/`}
          iconTrailing="arrow_forward"
        >
          Details
        </M3Button>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <M3Button
              variant="filled"
              size="sm"
              href={project.demoUrl}
              icon="play_circle"
            >
              Live Demo
            </M3Button>
          )}

          <M3Button
            variant="outlined"
            size="sm"
            href={project.githubUrl}
            icon="code"
          >
            Source
          </M3Button>
        </div>
      </div>
    </article>
  );
}
