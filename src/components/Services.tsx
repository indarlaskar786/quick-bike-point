import React from 'react';
import {
  Wrench,
  Bike,
  Flame,
  Hammer,
  Droplets,
  Disc,
  BatteryCharging,
  Navigation,
  ArrowRight,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_CONFIG } from '../data/businessData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-orange-400" />;
      case 'Bike':
        return <Bike className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-red-400" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-orange-400" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-cyan-400" />;
      case 'Disc':
        return <Disc className="w-6 h-6 text-emerald-400" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-yellow-400" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-purple-400" />;
      default:
        return <Wrench className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3">
            <span>Specialized Two-Wheeler Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Bike &amp; Scooter Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            From routine servicing to major repairs, we help keep your two-wheeler running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service: ServiceItem) => {
            const isAssistance = service.isAssistanceOnly;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isAssistance
                    ? 'bg-neutral-900/40 border border-neutral-800 hover:border-purple-500/40'
                    : 'bg-neutral-900/70 border border-neutral-800 hover:border-orange-500/40 hover:-translate-y-1 shadow-lg shadow-black/40 hover:shadow-orange-500/10'
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center group-hover:scale-105 group-hover:border-orange-500/40 transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    {service.tag && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isAssistance
                            ? 'bg-purple-900/40 text-purple-300 border border-purple-700/40'
                            : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                        }`}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specific notice for Pickup / Service Assistance */}
                  {isAssistance && (
                    <div className="mt-3 p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-start gap-2 text-xs text-neutral-400">
                      <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>Contact us to check availability. Not guaranteed at all times.</span>
                    </div>
                  )}

                  {/* Feature Sub-badge if not assistance */}
                  {!isAssistance && service.badge && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{service.badge}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-neutral-800/70 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1 group-hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    <span>Quick Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={BUSINESS_CONFIG.getWhatsAppUrl(
                      `Hi Quick Bike Point, I want to enquire about ${service.name} for my bike/scooter.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-emerald-400 hover:bg-emerald-950/50 hover:text-emerald-300 transition-colors"
                    title={`WhatsApp enquiry for ${service.name}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific bike issue or custom requirement?</h4>
              <p className="text-xs text-neutral-400">Call our Panathur workshop to discuss symptoms with our mechanics.</p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Call {BUSINESS_CONFIG.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};
