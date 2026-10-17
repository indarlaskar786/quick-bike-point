import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Wrench, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0d13]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-xl shadow-black/40 py-2.5'
          : 'bg-[#0b0d13]/85 backdrop-blur-sm border-b border-neutral-800/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Subtitle */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200 border border-orange-400/40">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-racing text-2xl sm:text-3xl font-bold tracking-wider text-white leading-none group-hover:text-orange-400 transition-colors">
                QUICK BIKE POINT
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-orange-400 tracking-wider uppercase">
                {BUSINESS_CONFIG.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 transition-all"
              title="Call shop directly"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Book Service</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBookingModal()}
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 transition-colors"
            >
              Book
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e111a] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:text-orange-400 hover:bg-neutral-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
              <div>
                <div className="text-[11px] text-neutral-400 uppercase font-semibold">Call Panathur Shop</div>
                <div className="text-sm font-bold text-white">{BUSINESS_CONFIG.phoneDisplay}</div>
              </div>
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="p-2.5 rounded-lg bg-orange-600 text-white hover:bg-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-semibold text-xs hover:bg-emerald-600/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-xs shadow-md shadow-orange-500/20"
              >
                <span>Book Service</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
