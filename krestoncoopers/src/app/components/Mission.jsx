"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for an icon library (e.g., react-icons/fa or lucide-react)
const BullseyeIcon = () => <span className="text-white text-2xl" role="img" aria-label="Target">🎯</span>;
const EyeIcon = () => <span className="text-white text-2xl" role="img" aria-label="Eye">👁️</span>;

// --- 🎯 Reusable Card Component ---
const AnimatedCard = ({ title, content, icon: IconComponent, delay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay, // Use the delay prop for staggering
        ease: [0.2, 0.6, 0.3, 0.9]
      }
    },
  };

  const iconBounce = {
    hidden: { scale: 0.7, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.5, // Icon animates slightly after the card
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      // FIX 1: Condensed className to a single line for hydration consistency.
      className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center w-full max-w-sm sm:max-w-md lg:max-w-none sm:w-[48%] lg:w-[45%]"
    >
      {/* Icon Wrapper */}
      <motion.div
        variants={iconBounce}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // FIX 2: Condensed className to a single line for hydration consistency.
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-blue-600 text-white shadow-lg"
      >
        <IconComponent />
      </motion.div>

      <h3
        className="text-xl sm:text-2xl font-bold mb-3 text-[#213f70]"
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
};


// --- 📦 Main Section Component ---
const MissionVisionSection = () => {
  return (
    // Responsive Padding and Background
    <div
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title with simple fade-in and Responsive Text Sizing */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // FIX 3: Condensed className to a single line for hydration consistency.
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center relative mx-auto mb-12 md:mb-16 text-[#213f70] border-b-4 border-blue-600 w-fit pb-2"
        >
          Mission & Vision
        </motion.h2>

        {/* Cards Container: Flexible, Centered, Responsive Gap */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 max-w-6xl mx-auto"
        >
          {/* Mission Card */}
          <AnimatedCard
            title="Our Mission"
            content="To provide reliable audit, tax, and advisory services that strengthen governance, enhance financial transparency, and support sustainable growth for our clients."
            icon={BullseyeIcon}
            delay={0.1} // Stagger
          />

          {/* Vision Card */}
          <AnimatedCard
            title="Our Vision"
            content="To be a trusted professional services firm recognised for integrity, technical competence, and practical insight, supporting organisations to meet regulatory requirements while achieving long-term business objectives."
            icon={EyeIcon}
            delay={0.3} // Stagger
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
