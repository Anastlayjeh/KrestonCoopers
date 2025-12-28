"use client";
import React, { useEffect, useState, useRef } from 'react';

const BACKGROUND_IMAGES = {
  ghana: '/images/ghana-bg.webp',
  dubai: '/images/dubai-bg.webp',
};

const normalizeOfficeKey = (value) => (value === 'uae' ? 'dubai' : value);

export default function AboutKrestonCoopers() {
  const [isVisible, setIsVisible] = useState(false);
  const [officeKey, setOfficeKey] = useState('ghana');
  const sectionRef = useRef(null); 
  
  // 1. Trigger the fade-in animation on mount
  useEffect(() => {
    // Ensures the transition CSS applies correctly after hydration
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedOffice = normalizeOfficeKey(localStorage.getItem('office'));
    if (savedOffice && BACKGROUND_IMAGES[savedOffice]) {
      setOfficeKey(savedOffice);
    }

    const handleOfficeChange = (event) => {
      const nextOffice = normalizeOfficeKey(event?.detail);
      if (nextOffice && BACKGROUND_IMAGES[nextOffice]) {
        setOfficeKey(nextOffice);
      }
    };

    window.addEventListener('office-changed', handleOfficeChange);
    return () => window.removeEventListener('office-changed', handleOfficeChange);
  }, []);

  // Helper function for animation classes and stagger delay
  const getAnimationClasses = (delayMs) => {
    // Dynamically creates the delay class (e.g., delay-[150ms])
    const delayClass = delayMs > 0 ? `delay-[${delayMs}ms]` : 'delay-0';
    
    return `
      transition-all duration-1000 ease-out 
      ${delayClass}
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `;
  };

  return (
    // Outer Container: Responsive Height
    <div 
      ref={sectionRef}
      className="relative h-72 sm:h-80 md:h-[400px] flex items-center justify-center text-center overflow-hidden"
    >
      
      {/* Background Image and Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGES[officeKey] || BACKGROUND_IMAGES.ghana})` }} 
      >
        {/* Semi-transparent Dark Blue Overlay for contrast */}
        <div className="absolute inset-0 bg-[#04366A] opacity-80"></div> 
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title - Animates first */}
        <h1 
          className={`
            text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 
            ${getAnimationClasses(0)}
          `}
        >
          About Kreston Coopers
        </h1>

        {/* Subtitle - Animates after title */}
        <p 
          className={`
            text-lg sm:text-xl md:text-2xl text-white font-light mb-5 sm:mb-6
            ${getAnimationClasses(150)}
          `}
        >
          Trusted Accountants & Business Advisors
        </p>

        {/* Accent Divider and Tagline Container - Animates last */}
        <div 
          className={`
            flex flex-col items-center 
            ${getAnimationClasses(300)}
          `}
        >
          <div className="w-16 h-0.5 bg-sky-400 mb-2 sm:w-20"></div>
          <span className="text-xs sm:text-sm font-medium tracking-widest text-white/90">
            EXCELLENCE IN PROFESSIONAL SERVICES
          </span>
        </div>
      </div>
    </div>
  );
}
