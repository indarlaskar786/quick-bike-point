import React from 'react';
import { UserCheck, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BUSINESS_CONFIG } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-orange-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-7 h-7 text-blue-400" />;
      default:
        return <CheckCircle2 className="w-7 h-7 text-orange-400" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Rider Trust &amp; Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Riders Choose Quick Bike Point
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Dedicated two-wheeler servicing with focus on mechanical accuracy, rider safety and honest communication.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 p-6 hover:border-orange-500/40 transition-all duration-300 group shadow-lg shadow-black/40"
            >
              {/* Card number badge */}
              <div className="text-right text-xs font-mono font-bold text-neutral-600 group-hover:text-orange-400/80 transition-colors">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-orange-500/40 transition-transform">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Bike &amp; Scooter Servicing
            </span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Open Until 1:00 AM
            </span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Panathur Main Road Location
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
