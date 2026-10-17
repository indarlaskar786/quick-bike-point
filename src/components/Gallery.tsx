import React, { useState } from 'react';
import { Maximize2, X, Camera, Sparkles, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES, GalleryItem } from '../data/businessData';

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Service &amp; Workshop Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Workshop Gallery
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            A visual overview of two-wheeler servicing, maintenance and repair capabilities.
          </p>

          {/* Explicit neutral demo disclosure pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Demo visuals for pitch preview — readily updated with your official shop photos.</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer shadow-lg shadow-black/40"
            >
              <div className="aspect-[16/11] overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Expand overlay button */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-orange-400" />
                </div>

                {/* Neutral label overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-0.5">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-neutral-700"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-neutral-950 overflow-hidden relative">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80';
                }}
              />
            </div>

            <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  {activeImage.caption}
                </p>
              </div>

              <div className="text-xs text-neutral-400 shrink-0">
                Demo image • Easily swappable
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
