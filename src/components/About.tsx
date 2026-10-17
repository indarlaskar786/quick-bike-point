import React from 'react';
import { MapPin, Phone, MessageSquare, Wrench, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workshop Photo with Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <img
                src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1000&q=80"
                alt="Motorcycle repair shop interior and equipment"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/95 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {BUSINESS_CONFIG.name}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Panathur Main Rd, opp. Dine Bell Restaurant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Business Description */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider uppercase">
              <span>About The Workshop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Local Bike Service Partner in Panathur
            </h2>

            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-md">
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
                "{BUSINESS_CONFIG.aboutDescription}"
              </p>
            </div>

            {/* Quick highlight points without invented facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Kadubeesanahalli &amp; Panathur</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Easy access on Panathur Main Road</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Open Late Hours</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Closes at 1:00 AM for evening commuters</p>
                </div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-orange-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-semibold text-xs transition-colors border border-neutral-700"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Workshop</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
