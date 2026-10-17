import React from 'react';
import { Phone, MessageSquare, Navigation, Star, CheckCircle2, Clock, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Background radial gradients for subtle automotive mood */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold tracking-wider uppercase">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>{BUSINESS_CONFIG.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">Bike &amp; Scooter Service</span> in Panathur
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
              {BUSINESS_CONFIG.supportingText}
            </p>

            {/* Prominent Rating Badge */}
            <div className="flex flex-wrap items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-lg shadow-black/40 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold text-white leading-none">
                  {BUSINESS_CONFIG.rating}
                </span>
                <span className="text-sm text-neutral-400">/ 5</span>
              </div>
              <span className="text-neutral-600 hidden xs:inline">•</span>
              <a
                href={BUSINESS_CONFIG.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                <span>{BUSINESS_CONFIG.reviewsCount} Google Reviews</span>
              </a>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 hover:border-emerald-500/70 shadow-lg shadow-emerald-950/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={BUSINESS_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-600 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-orange-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick availability pill */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_CONFIG.hoursToday}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400 truncate">Opp. Dine Bell Restaurant</span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Overlays */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/80 bg-neutral-900 group">
              
              {/* High-quality motorcycle workshop photo */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80"
                  alt="Quick Bike Point motorcycle service workshop in Panathur"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-[#0b0d13]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d13]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Status Badge Top Right */}
              <div className="absolute top-4 right-4 bg-neutral-950/85 backdrop-blur-md border border-neutral-700/70 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-400">Open Now</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>Panathur, Bengaluru</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      Quick Bike Point Workshop
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Opposite Dine Bell Restaurant, Kadubeesanahalli
                    </p>
                  </div>
                  <button
                    onClick={onOpenBookingModal}
                    className="shrink-0 px-3 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md shadow-orange-600/30 cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </div>

            </div>

            {/* Subtle decorative glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-3xl blur-2xl -z-10" />
          </div>

        </div>

        {/* Small Trust Strip Beneath Hero */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {BUSINESS_CONFIG.trustStrip.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
