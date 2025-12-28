"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BACKGROUND_IMAGES = {
  ghana: '/images/ghana-bg.webp',
  dubai: '/images/dubai-bg.webp',
};

const normalizeOfficeKey = (value) => (value === 'uae' ? 'dubai' : value);

// Animation variants for the text elements
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  },
};

const ServicesBanner = () => {
  const [officeKey, setOfficeKey] = useState('ghana');

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

  const backgroundImage = BACKGROUND_IMAGES[officeKey] || BACKGROUND_IMAGES.ghana;

  return (
    <div className="relative bg-[#103666] py-16 md:py-24 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#103666] opacity-80" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Header */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Our Services
        </motion.h1>

        {/* Secondary Title / Tagline */}
        <motion.p
          className="text-lg md:text-xl font-semibold opacity-90 mb-8"
          initial="hidden"
          animate="visible"
          variants={subtextVariants}
        >
          Accounting, Audit, Tax &amp; Advisory Solutions
        </motion.p>

        {/* Descriptive Text */}
        <motion.p
          className="text-base md:text-lg opacity-80 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={subtextVariants}
        >
          With unparalleled experience, resources, and a global network, Kreston Coopers is equipped to serve your business with excellence.
        </motion.p>

      </div>
    </div>
  );
};

export default ServicesBanner;
