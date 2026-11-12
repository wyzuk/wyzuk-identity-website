'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Lightbox from '@/components/Lightbox';
import Icon from '@/components/Icon';
import M3Chip from '@/components/M3Chip';
import { GALLERY_IMAGES } from '@/lib/data/gallery';

const CATEGORIES = [
  { id: 'all', label: 'All Assets' },
  { id: 'aesthetic', label: 'Aesthetic Rices' },
  { id: 'artwork', label: 'Artwork & Wallpapers' },
  { id: 'ui-concept', label: 'Interface Concepts' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    const targetImage = filteredImages[index];
    const masterIndex = GALLERY_IMAGES.findIndex((img) => img.id === targetImage.id);
    setLightboxIndex(masterIndex !== -1 ? masterIndex : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16 space-y-10">
      <Breadcrumbs crumbs={[{ label: 'Visual Gallery', href: '/gallery/' }]} />

      <header className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-md-secondary-container text-md-on-secondary-container">
          <Icon name="photo_library" size={15} />
          <span>Curated Visual Library</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-md-on-surface tracking-tight font-sans">
          Visual Gallery & Creative Assets
        </h1>
        <p className="text-sm sm:text-base text-md-on-surface-variant font-body leading-relaxed">
          Curated visual artwork, aesthetic Arch Linux desktop ricing concepts, and graphic assets created or configured by WYZUK.
        </p>
      </header>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 select-none border-b border-md-outline-variant/30 pb-4">
        {CATEGORIES.map((cat) => (
          <M3Chip
            key={cat.id}
            label={cat.label}
            variant="filter"
            selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          />
        ))}
      </div>

      {/* Responsive Image Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => handleOpenLightbox(idx)}
            className="group cursor-pointer rounded-3xl border border-md-outline-variant/40 bg-md-surface-container-low overflow-hidden hover:border-md-primary/50 hover:shadow-elevation-2 transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full bg-md-surface-container overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                  <Icon name="fullscreen" size={24} />
                </div>
              </div>
            </div>

            <div className="p-4 space-y-1">
              <h2 className="font-bold text-md-on-surface text-sm line-clamp-1 group-hover:text-md-primary transition-colors font-sans">
                {img.title}
              </h2>
              <div className="flex items-center justify-between text-xs font-mono text-md-on-surface-variant">
                <span className="capitalize">{img.category.replace('-', ' ')}</span>
                <span>{img.width}×{img.height}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}
