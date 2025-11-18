"use client"; // <--- THIS FIXES THE ERROR

import React from 'react';
import { motion } from 'framer-motion';
// Assume you've installed and configured Tailwind CSS and framer-motion

// Icon components would be imported from a library like 'react-icons'
// For this example, we'll use simple SVGs or placeholders.

const standards = [
  {
    title: "Independence",
    description: "Maintaining objectivity in all professional relationships",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        {/* Placeholder for Scale Icon */}
        <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z" />
      </svg>
    ),
  },
  {
    title: "Objectivity",
    description: "Unbiased judgment in all professional matters",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        {/* Placeholder for Target/Eye Icon */}
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: "Full Disclosure",
    description: "Transparent communication with all stakeholders",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        {/* Placeholder for Document Icon */}
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    title: "Confidentiality",
    description: "Protecting client information with utmost care",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        {/* Placeholder for Lock Icon */}
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    ),
  },
  {
    title: "Professional Conduct",
    description: "Upholding the highest standards of behavior",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        {/* Placeholder for Badge Icon */}
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-8c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
      </svg>
    ),
  },
];

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay for items
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const EthicsSection = () => {
  return (
    <div className="bg-blue-900 py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ethics &amp; Professional Standards
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            We adhere to the highest ethical and professional standards in all aspects of our practice, ensuring integrity and trust in every engagement.
          </p>
        </motion.header>

        {/* Standards Grid - Animated on Scroll */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
        >
          {standards.map((standard) => (
            <motion.div
              key={standard.title}
              className="flex flex-col items-center text-center p-4"
              variants={itemVariants}
            >
              {/* Icon Circle */}
              <div className="bg-blue-700/50 p-4 rounded-full mb-4 ring-2 ring-blue-500">
                {standard.icon}
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold mb-2">
                {standard.title}
              </h3>
              <p className="text-sm opacity-80">
                {standard.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EthicsSection;