import React from 'react';
import { PhoneCall, MessageCircle, MapPin, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const QuickActions: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: CALL */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-5 sm:p-6 hover:border-orange-500/50 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-orange-500/10 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md mb-2">
                  Call Shop
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1 font-mono">
                  {BUSINESS_CONFIG.phoneDisplay}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Speak directly with the Panathur workshop
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-800/80">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-500/20 transition-all"
              >
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: WHATSAPP */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-5 sm:p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-emerald-500/10 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md mb-2">
                  WhatsApp Support
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  Chat with us
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Send bike photos or ask for service estimates
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-800/80">
              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 transition-all"
              >
                <span>WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: LOCATION */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-5 sm:p-6 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-blue-500/10 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md mb-2">
                  Location &amp; Route
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  Panathur, Bengaluru
                </div>
                <p className="text-xs text-neutral-400 mt-1 truncate max-w-[200px] sm:max-w-xs">
                  Opposite Dine Bell Restaurant, Munireddy Layout
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-800/80">
              <a
                href={BUSINESS_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-neutral-100 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 transition-all"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
