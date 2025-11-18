'use client';

import React, { useState, useEffect } from 'react';
// Removed: import { Phone } from 'lucide-react'; 
// The icon is now included inline as an SVG to resolve the dependency error.

// --- CONFIGURATION ---

const OFFICES = {
  GHANA: {
    name: 'Ghana Office',
    phone: '+233 242 754 688',
    flagEmoji: <img src="../Flag_of_Ghana.svg.webp " className="w-13 h-10" alt="" />  ,
  },
  DUBAI: {
    name: 'Dubai Office',
    phone: '+971 55 286 6413',
    flagEmoji: <img src="../Flag-United-Arab-Emirates.webp " className="w-13 h-10" alt="" />  ,
  },
};

// --- REACT COMPONENT ---

const App = () => {
  const [isVisible, setIsVisible] = useState(false); // For animation

  // Animate elements on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Common transition class for fade-in effect
  const transitionClass = `transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`;

  // Helper component for Call Button with Flag
  const CallButton = ({ office }) => (
    <div className="flex flex-col items-center min-w-[200px] sm:min-w-[280px] transition-transform duration-300 hover:scale-[1.03]">
      {/* Flag (Now the sole identifier in this box) */}
      <div className="mb-4 p-3 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
        <span className="text-5xl">{office.flagEmoji}</span>
      </div>

      {/* Phone Button */}
      <a 
        href={`tel:${office.phone.replace(/\s/g, '')}`} // Ensure phone number is clean for tel: link
        className="w-full inline-flex flex-col items-center justify-center py-4 px-6 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-xl hover:bg-blue-700 transition-colors duration-300 active:scale-95"
        aria-label={`Call us now at ${office.phone} (${office.name})`}
      >
        {/* INLINE SVG REPLACEMENT for Phone icon */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 mb-1" // Applying Tailwind classes here
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.65-5.65A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3c.47 0 .94.18 1.25.52l4.44 4.71a1.99 1.99 0 0 1 0 2.76l-2.05 2.05a2.49 2.49 0 0 0 1.27 1.27l2.05-2.05a1.99 1.99 0 0 1 2.76 0l4.71 4.44c.34.31.52.78.52 1.25z"/>
        </svg>
        {/* Only the phone number remains, replacing the "Call us now" text */}
        <span className="mt-1 font-mono text-base sm:text-xl">{office.phone}</span>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      
      {/* Header Section */}
      <header className={`pt-12 pb-16 bg-white shadow-sm transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Home &gt; <span className="font-semibold text-blue-600">Contact Us</span>
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We're here to support your business. Get in touch with our team.
          </p>
        </div>
      </header>

      {/* Main Content Sections with Animation */}
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        {/* Section 1: Call to Action (Focus Section) */}
        <section className={`text-center ${transitionClass} delay-100`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Need Help for Your Financial Consultancy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is very skilled and experienced in providing various business
            solutions, quicker and smarter.
          </p>

          {/* Dual Call Buttons with Flags - Responsive for mobile/desktop */}
          <div className="flex justify-center flex-wrap gap-8 mt-8">
            <CallButton office={OFFICES.GHANA} />
            <CallButton office={OFFICES.DUBAI} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;