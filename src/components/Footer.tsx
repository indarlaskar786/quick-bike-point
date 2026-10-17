import React from 'react';
import { Phone, MapPin, Wrench, Clock, Navigation, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06070a] border-t border-neutral-800 text-neutral-400 text-sm pb-24 md:pb-12 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="font-racing text-2xl font-bold tracking-wider text-white leading-none block">
                  {BUSINESS_CONFIG.name.toUpperCase()}
                </span>
                <span className="text-xs text-orange-400 font-medium">
                  {BUSINESS_CONFIG.subtitle} | Panathur, Bengaluru
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {BUSINESS_CONFIG.positioning}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800 w-fit">
              <Clock className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.hoursToday}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[11px]">Phone</span>
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="text-white hover:text-orange-400 font-semibold transition-colors"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block text-[11px]">Address</span>
                  <span className="text-neutral-300">
                    Panathur Main Rd, Panathur, Bengaluru, Karnataka 560103
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={BUSINESS_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-orange-400" />
                <span>Google Maps Route</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>© 2026 Quick Bike Point. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400">
            Client Presentation Demo • Panathur, Bengaluru
          </p>
        </div>

      </div>
    </footer>
  );
};
