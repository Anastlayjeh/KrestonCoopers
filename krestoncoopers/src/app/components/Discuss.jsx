"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the entire section
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const CTABanner = () => {
  return (
    // The light gray background matches the image
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Let&apos;s Discuss How We Can <br className="hidden sm:inline" />Support Your Business
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Whether you need audit, tax, accounting, or business advisory services, our team is ready to help you achieve your goals.
          </p>

          {/* Contact Button */}
          <a
            href="/contact" // Replace with your actual contact page path
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-blue-900 rounded-lg shadow-xl hover:bg-blue-800 transition duration-300 transform hover:scale-[1.02]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CTABanner;
