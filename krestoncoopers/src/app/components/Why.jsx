"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Placeholders ---
// In a real project, replace these with components from react-icons (e.g., react-icons/fa)
const icons = {
  Experience: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Trophy Icon Path */}
      <path d="M18 9.5a2 2 0 100-4 2 2 0 000 4zM16 11v-1.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V11H5v2h14v-2h-3z"/>
    </svg>
  ),
  Global: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Globe Icon Path */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.41-7-7.93h2c0 3.03 2.47 5.5 5.5 5.5V19.93zm6-2.06V14.5c0-1.38-1.12-2.5-2.5-2.5S11 13.12 11 14.5v3.37c3.95-.49 7-3.41 7-7.93h-2c0 3.03-2.47 5.5-5.5 5.5V16.94z"/>
    </svg>
  ),
  Handshake: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Handshake Icon Path */}
      <path d="M15.5 2h-7c-1.38 0-2.5 1.12-2.5 2.5v15c0 1.38 1.12 2.5 2.5 2.5h7c1.38 0 2.5-1.12 2.5-2.5v-15c0-1.38-1.12-2.5-2.5-2.5zm-5 2h3c.83 0 1.5.67 1.5 1.5v.5h-6v-.5c0-.83.67-1.5 1.5-1.5zM15 19H9v-1h6v1zM15 17H9v-1h6v1zM15 15H9v-1h6v1zM15 13H9v-1h6v1zM15 11H9V6h6v5z"/>
    </svg>
  ),
  Star: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      {/* Star/Quality Icon Path */}
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  ),
};
// --- End Icon Placeholders ---


const features = [
  {
    title: "Experience",
    description: "Decades of expertise in accounting and advisory services",
    icon: icons.Experience,
  },
  {
    title: "Global Standards",
    description: "International best practices and compliance standards",
    icon: icons.Global,
  },
  {
    title: "Professionalism",
    description: "Highest ethical standards and professional integrity",
    icon: icons.Handshake,
  },
  {
    title: "Quality Service",
    description: "Exceptional service delivery tailored to your needs",
    icon: icons.Star,
  },
];

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger delay for items
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const WhyChooseUsSection = () => {
  // Main background color: using bg-white as the image shows a very light background.
  // If it needs a subtle tint, bg-gray-50 could be used.
  return (
    <div className="bg-white py-16 md:py-24"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section (Animated) */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          {/* Main Title: Dark navy blue, looks like text-[#0B2545] or text-blue-900 */}
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2545] mb-2"> 
            Why Choose Us
          </h2>
          {/* Subtitle: A bit lighter than the title, text-gray-700 is good */}
          <p className="text-lg text-gray-700"> 
            Our commitment to excellence drives everything we do
          </p>
        </motion.header>

        {/* Features Grid (Staggered Animation) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center p-4"
              variants={itemVariants}
            >
              {/* Icon Circle: Vibrant blue. Using bg-[#2A65A4] or bg-blue-700 */}
              <div className="bg-[#2A65A4] p-4 rounded-full mb-6 shadow-lg"> 
                {feature.icon}
              </div>

              {/* Title: Darker blue, looks like text-blue-800 or text-[#103666] */}
              <h3 className="text-xl font-bold text-[#103666] mb-3"> 
                {feature.title}
              </h3>

              {/* Description: Medium gray, text-gray-600 is good */}
              <p className="text-gray-600"> 
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;