import React from 'react';
import { Phone, MessageSquare, Navigation, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface MobileStickyBarProps {
  onOpenBookingModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBookingModal }) => {
  return (
    <aside
      aria-label="Quick action navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090b10]/95 backdrop-blur-lg border-t border-neutral-800/90 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl shadow-black"
    >
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={BUSINESS_CONFIG.phoneHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-white transition-all shadow-md shadow-orange-600/30"
          aria-label="Call Quick Bike Point"
        >
          <Phone className="w-5 h-5 fill-white mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white transition-all shadow-md shadow-emerald-600/30"
          aria-label="WhatsApp Quick Bike Point"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={BUSINESS_CONFIG.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-neutral-100 transition-all border border-neutral-700/80"
          aria-label="Get directions on Google Maps"
        >
          <Navigation className="w-5 h-5 text-orange-400 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">Map</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 active:scale-95 text-white transition-all shadow-md shadow-orange-500/20 cursor-pointer"
          aria-label="Book a bike service slot"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">Book</span>
        </button>

      </div>
    </aside>
  );
};
