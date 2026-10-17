import React, { useState, useEffect } from 'react';
import { X, Wrench, MessageSquare, Phone, Calendar, Clock, Bike, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, SERVICES } from '../data/businessData';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [vehicleType, setVehicleType] = useState<'Bike' | 'Scooter' | 'Other'>('Bike');
  const [selectedService, setSelectedService] = useState<string>('Bike Servicing');
  const [vehicleModel, setVehicleModel] = useState('');
  const [preferredDay, setPreferredDay] = useState('Today');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
      if (initialService.toLowerCase().includes('scooter')) {
        setVehicleType('Scooter');
      } else {
        setVehicleType('Bike');
      }
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `*Service Request for Quick Bike Point* 🏍️`,
      `• Vehicle Type: ${vehicleType}`,
      vehicleModel ? `• Model: ${vehicleModel}` : null,
      `• Service Needed: ${selectedService}`,
      `• Preferred Day: ${preferredDay}`,
      notes ? `• Symptoms/Note: ${notes}` : null,
      `• Location: Panathur, Bengaluru`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = BUSINESS_CONFIG.getWhatsAppUrl(message);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-neutral-900 border border-neutral-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 shrink-0">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Book Service Enquiry
            </h3>
            <p className="text-xs text-neutral-400">
              Quick Bike Point • Panathur Main Road
            </p>
          </div>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          
          {/* Vehicle Type Toggle */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              Vehicle Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Bike', 'Scooter', 'Other'] as const).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setVehicleType(type)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    vehicleType === type
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Model Name Input */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Two-Wheeler Model (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Activa 6G, Pulsar 150, Classic 350, Jupiter"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Service Needed Dropdown */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Select Service Required
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name} className="bg-neutral-900 text-white">
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Day */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Preferred Timing
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Today', 'Tomorrow', 'This Weekend'].map((day) => (
                <button
                  type="button"
                  key={day}
                  onClick={() => setPreferredDay(day)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    preferredDay === day
                      ? 'bg-neutral-200 text-neutral-900 font-bold'
                      : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Issue notes */}
          <div>
            <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
              Specific Issue or Note (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Strange noise in engine, chain loose, need oil top-up"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Enquiry via WhatsApp</span>
            </button>

            <div className="text-center">
              <span className="text-[11px] text-neutral-400">or urgent enquiry?</span>
            </div>

            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-neutral-700"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Shop Directly: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <p className="text-[11px] text-neutral-400 text-center pt-1">
            Shop Hours: Open until 1:00 AM • Panathur Main Road, Bengaluru
          </p>

        </form>
      </div>
    </div>
  );
};
