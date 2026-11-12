'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data/projects';
import Icon from './Icon';
import M3Chip from './M3Chip';
import M3Button from './M3Button';
import ProjectCard from './ProjectCard';

interface ProjectsViewProps {
  initialProjects: Project[];
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'operating-systems', label: 'Operating Systems' },
  { id: 'games', label: 'Browser Games' },
  { id: 'web', label: 'Web Applications' },
  { id: 'software', label: 'Software & Utilities' },
  { id: 'experiments', label: 'Experiments & Prototypes' },
];

export default function ProjectsView({ initialProjects }: ProjectsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category filter
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = project.title.toLowerCase().includes(q);
      const inSubtitle = project.subtitle.toLowerCase().includes(q);
      const inDesc = project.shortDescription.toLowerCase().includes(q);
      const inLang = project.language.toLowerCase().includes(q);
      const inTech = project.techStack.some((t) => t.toLowerCase().includes(q));
      const inCategory = project.categoryLabel.toLowerCase().includes(q);

      return inTitle || inSubtitle || inDesc || inLang || inTech || inCategory;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-8">
      {/* Search Bar & Category Filter Bar */}
      <div className="space-y-4">
        {/* Apple Glossy + Material 3 Search Bar */}
        <div className="relative max-w-2xl">
          <div className="flex items-center w-full h-12 px-4 rounded-full apple-glass border border-white/60 dark:border-white/15 focus-within:border-md-primary focus-within:ring-2 focus-within:ring-md-primary/25 transition-all shadow-md glossy-shine">
            <Icon name="search" size={22} className="text-md-on-surface-variant mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name, technology, or keywords..."
              className="w-full bg-transparent text-sm text-md-on-surface placeholder:text-md-on-surface-variant/70 focus:outline-none font-sans"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-full text-md-on-surface-variant hover:text-md-on-surface hover:bg-white/40 dark:hover:bg-white/10 transition-colors shrink-0"
                aria-label="Clear search query"
              >
                <Icon name="close" size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 select-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <M3Chip
                key={cat.id}
                label={cat.label}
                variant="filter"
                selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
              />
            );
          })}
        </div>
      </div>

      {/* Meta Counter & Active Filter Reset */}
      <div className="flex items-center justify-between text-xs font-mono text-md-on-surface-variant border-b border-md-outline-variant/30 pb-3">
        <div className="flex items-center gap-2">
          <span>Showing {filteredProjects.length} of {initialProjects.length} projects</span>
          {(searchQuery || selectedCategory !== 'all') && (
            <span className="text-md-primary font-semibold">· Filter active</span>
          )}
        </div>
        {(searchQuery || selectedCategory !== 'all') && (
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-sans text-md-primary hover:underline flex items-center gap-1 font-medium"
          >
            <Icon name="refresh" size={14} />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl p-12 text-center bg-md-surface-container-low border border-md-outline-variant/40 space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-md-surface-container-highest text-md-on-surface-variant flex items-center justify-center mx-auto">
            <Icon name="search_off" size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-md-on-surface font-sans">
              No matching projects found
            </h3>
            <p className="text-xs text-md-on-surface-variant font-body">
              No repositories match &ldquo;{searchQuery}&rdquo; in this category. Try clearing your search query.
            </p>
          </div>
          <M3Button variant="tonal" size="sm" onClick={handleReset} icon="refresh">
            Reset Filters
          </M3Button>
        </div>
      )}

      {/* Category Deep Links Reference */}
      <div className="pt-8 border-t border-md-outline-variant/30 space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-md-outline block">
          Category Archive Directories
        </span>
        <div className="flex flex-wrap gap-2 text-xs font-sans">
          <Link
            href="/projects/operating-systems/"
            className="px-3 py-1.5 rounded-full bg-md-surface-container text-md-on-surface-variant hover:text-md-primary hover:bg-md-surface-container-high transition-colors"
          >
            Operating Systems Archive →
          </Link>
          <Link
            href="/projects/games/"
            className="px-3 py-1.5 rounded-full bg-md-surface-container text-md-on-surface-variant hover:text-md-primary hover:bg-md-surface-container-high transition-colors"
          >
            Browser Games & Engines Archive →
          </Link>
          <Link
            href="/projects/software/"
            className="px-3 py-1.5 rounded-full bg-md-surface-container text-md-on-surface-variant hover:text-md-primary hover:bg-md-surface-container-high transition-colors"
          >
            Software & Developer Utilities →
          </Link>
          <Link
            href="/projects/web/"
            className="px-3 py-1.5 rounded-full bg-md-surface-container text-md-on-surface-variant hover:text-md-primary hover:bg-md-surface-container-high transition-colors"
          >
            Web Applications →
          </Link>
          <Link
            href="/projects/open-source/"
            className="px-3 py-1.5 rounded-full bg-md-surface-container text-md-on-surface-variant hover:text-md-primary hover:bg-md-surface-container-high transition-colors"
          >
            Open Source Repositories (@wyzuk) →
          </Link>
        </div>
      </div>
    </div>
  );
}
