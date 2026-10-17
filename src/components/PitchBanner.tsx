import React from 'react';
import { Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const PitchBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-950/80 via-neutral-900 to-orange-950/80 border-b border-orange-500/20 text-xs text-neutral-300 py-1.5 px-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 truncate">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="font-semibold text-orange-400 uppercase tracking-wider text-[11px]">
            Website Concept Pitch
          </span>
          <span className="hidden sm:inline text-neutral-500">•</span>
          <span className="hidden sm:inline text-neutral-300 truncate">
            Prepared for {BUSINESS_CONFIG.name} — Panathur, Bengaluru
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="hidden md:inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-orange-400" />
            <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={BUSINESS_CONFIG.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium transition-colors"
          >
            <span>Google Maps</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
