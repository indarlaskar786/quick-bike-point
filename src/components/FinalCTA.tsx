import React from 'react';
import { Phone, MessageSquare, Navigation, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface FinalCTAProps {
  onOpenBookingModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/20 to-neutral-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-tr from-orange-600/15 via-red-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-950 border border-orange-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-orange-500/10 text-center relative overflow-hidden">
          
          {/* Subtle decorative glow accents */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-xl shadow-orange-500/30 mb-6 border border-orange-400/40">
            <Wrench className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Need Your Bike Serviced?
          </h2>

          {/* Text */}
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Talk to Quick Bike Point today and get your two-wheeler checked by a local service team in Panathur.
          </p>

          {/* Phone callout pill */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/80 border border-neutral-800 text-sm font-semibold text-neutral-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Shop Helpline:</span>
            <span className="text-orange-400 font-mono font-bold">{BUSINESS_CONFIG.phoneDisplay}</span>
          </div>

          {/* 3 Prominent Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={BUSINESS_CONFIG.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-800/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
            >
              <Navigation className="w-4 h-4 text-orange-400" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Interactive Modal trigger */}
          <div className="mt-6">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-orange-400 transition-colors font-medium cursor-pointer"
            >
              <span>Prefer to book a slot online? Click here to request service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
