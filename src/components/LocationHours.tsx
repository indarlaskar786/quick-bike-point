import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  ShieldAlert,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const LocationHours: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  // Google Maps embed URL using place query (does NOT require an API key)
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Quick Bike Point, Panathur Main Rd, Kadubeesanahalli, Bengaluru, Karnataka 560103'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Workshop Location &amp; Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Visit Quick Bike Point
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Conveniently located on Panathur Main Road opposite Dine Bell Restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details, Hours & Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening Hours Card */}
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-xl shadow-black/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                      Operating Status
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Today's Hours
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open Now</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 my-3">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  {BUSINESS_CONFIG.hoursToday}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Serving riders late into the evening for urgent repairs &amp; pickups.
                </p>
              </div>

              {/* Call to confirm note */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.hoursNotice}</span>
              </div>
            </div>

            {/* Address & Contact Card */}
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-xl shadow-black/40 space-y-5">
              
              {/* Address Section */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Shop Address</span>
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-sm sm:text-base text-neutral-200 leading-relaxed font-medium">
                  {BUSINESS_CONFIG.addressLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>

              {/* Landmark Callout */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/40 border border-neutral-700/60 text-xs text-neutral-300">
                <span className="font-bold text-orange-400 uppercase tracking-wider text-[11px] shrink-0">
                  Landmark:
                </span>
                <span>{BUSINESS_CONFIG.landmark}</span>
              </div>

              {/* Phone & Plus Code row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800">
                  <span className="text-[11px] text-neutral-400 font-medium block">Phone Hotline</span>
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="text-sm font-bold text-white hover:text-orange-400 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>{BUSINESS_CONFIG.phoneDisplay}</span>
                  </a>
                </div>

                {/* Plus Code */}
                <div className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400 font-medium block">Google Plus Code</span>
                    <button
                      onClick={handleCopyPlusCode}
                      className="text-neutral-400 hover:text-white"
                      title="Copy Plus Code"
                    >
                      {copiedPlusCode ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs font-mono font-bold text-neutral-200 mt-1 truncate">
                    {BUSINESS_CONFIG.plusCode}
                  </div>
                </div>
              </div>

              {/* Large Get Directions CTA Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
                >
                  <Navigation className="w-5 h-5 fill-white" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Polished Map Card & Embed Area */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/60 flex flex-col">
              
              {/* Map Top Bar */}
              <div className="px-5 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></div>
                  <span>Panathur Main Road Location Pin</span>
                </div>

                <a
                  href={BUSINESS_CONFIG.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Frame Area (Works directly without requiring an API key) */}
              <div className="relative w-full h-[380px] sm:h-[420px] bg-neutral-950">
                <iframe
                  title="Quick Bike Point Location Map"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
                />

                {/* Overlaid Card on Map */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-neutral-950/95 backdrop-blur-md border border-neutral-700/80 shadow-2xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Quick Bike Point
                      </h4>
                      <p className="text-xs text-neutral-300 mt-0.5 line-clamp-2">
                        Opposite Dine Bell Restaurant, Panathur Main Rd
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
                    <a
                      href={BUSINESS_CONFIG.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Start Navigation</span>
                    </a>

                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-orange-400" />
                      <span>Call Shop</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Footer Bar with "Open Location in Google Maps" Button */}
              <div className="p-4 bg-neutral-950/90 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-orange-400" />
                  <span>Cadubeesanahalli / Munireddy Layout / Panathur</span>
                </div>

                <a
                  href={BUSINESS_CONFIG.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Open Location in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
