'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import { GalleryImage } from '@/lib/data/gallery';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${currentImage.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Bar with Title and Close Button */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-sans text-xs sm:text-sm flex items-center gap-2 apple-glass px-4 py-2 rounded-full border border-white/20 glossy-pill">
          <span className="font-bold text-md-primary">{currentImage.title}</span>
          <span className="text-white/60 hidden sm:inline">
            ({currentIndex + 1} of {images.length}) · {currentImage.width}×{currentImage.height}px
          </span>
        </div>

        <button
          onClick={onClose}
          className="h-10 w-10 rounded-full apple-glass text-white transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white border border-white/20 glossy-pill hover:scale-105 active:scale-95"
          aria-label="Close image lightbox"
        >
          <Icon name="close" size={20} />
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-4 h-12 w-12 rounded-full apple-glass text-white transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white z-10 border border-white/20 glossy-pill hover:scale-105 active:scale-95"
        aria-label="Previous image"
      >
        <Icon name="arrow_back" size={24} />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="90vw"
            className="object-contain rounded-[28px] select-none shadow-2xl"
            priority
          />
        </div>
        <p className="mt-3 text-xs sm:text-sm text-white/80 font-body text-center max-w-2xl">
          {currentImage.description}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % images.length);
        }}
        className="absolute right-4 h-12 w-12 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white z-10 border border-white/20"
        aria-label="Next image"
      >
        <Icon name="arrow_forward" size={24} />
      </button>
    </div>
  );
}
