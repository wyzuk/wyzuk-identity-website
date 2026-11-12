import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import M3Card from '@/components/M3Card';
import M3Button from '@/components/M3Button';
import { constructMetadata } from '@/lib/seo';
import { getArticleSchema } from '@/lib/schema';
import { TECHNICAL_NOTES, getNoteBySlug } from '@/lib/data/notes';
import { getProjectBySlug } from '@/lib/data/projects';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return TECHNICAL_NOTES.map((note) => ({
    slug: note.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const note = getNoteBySlug(params.slug);
  if (!note) return {};

  return constructMetadata({
    title: `${note.title} | WYZUK Engineering Notes`,
    description: note.summary,
    path: `/notes/${note.slug}/`,
    type: 'article',
    publishedTime: note.date,
  });
}

export default function NoteDetailPage({ params }: PageProps) {
  const note = getNoteBySlug(params.slug);
  if (!note) notFound();

  const schema = getArticleSchema(note);
  const relatedProject = note.relatedProjectSlug ? getProjectBySlug(note.relatedProjectSlug) : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <JsonLd data={schema} />
      <Breadcrumbs
        crumbs={[
          { label: 'Notes', href: '/notes/' },
          { label: note.title, href: `/notes/${note.slug}/` },
        ]}
      />

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-md-on-surface-variant">
          <span className="px-3 py-1 rounded-full bg-md-secondary-container text-md-on-secondary-container font-semibold uppercase text-[11px]">
            {note.category}
          </span>
          <span>·</span>
          <time>{note.date}</time>
          <span>·</span>
          <span>{note.readTime}</span>
          <span>·</span>
          <span>By WYZUK</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans leading-tight">
          {note.title}
        </h1>

        <div className="p-5 rounded-3xl bg-md-surface-container border border-md-outline-variant/40 text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          {note.summary}
        </div>

        {relatedProject && (
          <div className="p-4 rounded-2xl bg-md-surface-container-high border border-md-primary/30 text-xs font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Icon name="deployed_code" size={18} className="text-md-primary" />
              <span className="text-md-on-surface-variant">
                Directly relates to software craft: <strong className="text-md-on-surface">{relatedProject.title}</strong>
              </span>
            </div>
            <Link
              href={`/projects/${relatedProject.slug}/`}
              className="text-xs font-semibold text-md-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>View Project Details</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </div>
        )}
      </header>

      {/* Content Sections */}
      <div className="space-y-10 text-md-on-surface-variant text-sm sm:text-base font-body leading-relaxed pt-4 border-t border-md-outline-variant/30">
        {note.content.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-md-on-surface font-sans">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}

            {sec.codeSnippet && (
              <div className="rounded-3xl p-6 bg-md-surface-container border border-md-outline-variant/40 space-y-2 font-mono text-xs text-md-on-surface overflow-hidden">
                <div className="flex items-center justify-between pb-2 border-b border-md-outline-variant/30 text-md-on-surface-variant">
                  <span className="uppercase text-[11px] font-semibold text-md-primary">{sec.codeSnippet.language}</span>
                  {sec.codeSnippet.caption && (
                    <span className="text-[11px] text-md-outline">{sec.codeSnippet.caption}</span>
                  )}
                </div>
                <pre className="overflow-x-auto text-md-on-surface pt-2 leading-relaxed">
                  {sec.codeSnippet.code}
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-md-outline-variant/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        <M3Button variant="tonal" size="sm" href="/notes/" icon="arrow_back">
          All Technical Notes
        </M3Button>
        {relatedProject ? (
          <M3Button variant="filled" size="sm" href={`/projects/${relatedProject.slug}/`} iconTrailing="arrow_forward">
            {relatedProject.title} Overview
          </M3Button>
        ) : (
          <M3Button variant="filled" size="sm" href="/projects/" iconTrailing="arrow_forward">
            Explore Projects Archive
          </M3Button>
        )}
      </div>
    </article>
  );
}
