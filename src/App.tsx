import React, { useState } from 'react';
import { PitchBanner } from './components/PitchBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickActions } from './components/QuickActions';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { LocationHours } from './components/LocationHours';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ServiceModal } from './components/ServiceModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string | undefined>();

  const handleOpenBookingModal = (serviceName?: string) => {
    setModalInitialService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalInitialService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-neutral-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white relative">
      {/* Client Pitch Banner at top */}
      <PitchBanner />

      {/* Sticky Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 3-Card Quick Action Bar */}
        <QuickActions />

        {/* Services Section */}
        <Services onSelectService={(serviceName) => handleOpenBookingModal(serviceName)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Section */}
        <About />

        {/* Google Reviews Section */}
        <Reviews />

        {/* Photo Gallery Section */}
        <Gallery />

        {/* Location & Opening Hours Section */}
        <LocationHours />

        {/* Final CTA Section */}
        <FinalCTA onOpenBookingModal={() => handleOpenBookingModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Navigation Bar */}
      <MobileStickyBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Service Request & Enquiry Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={modalInitialService}
      />
    </div>
  );
}
