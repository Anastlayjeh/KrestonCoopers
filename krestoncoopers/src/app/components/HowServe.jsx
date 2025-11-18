"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Icons (Tailwind-friendly) ---
const UsersIcon = () => <span className="text-blue-700 text-3xl" role="img" aria-label="Users">👥</span>;
const ChartLineIcon = () => <span className="text-blue-700 text-3xl" role="img" aria-label="Chart Line">📈</span>;
const ShieldIcon = () => <span className="text-blue-700 text-3xl" role="img" aria-label="Shield">🛡️</span>;
const GraduationCapIcon = () => <span className="text-blue-700 text-3xl" role="img" aria-label="Graduation Cap">🎓</span>;
const CheckCircleIcon = () => <span className="text-blue-700 text-3xl" role="img" aria-label="Check Circle">✅</span>;
const LightbulbIcon = () => <span className="text-blue-700 text-3xl" role="img" aria-label="Lightbulb">💡</span>;


// --- 📄 Reusable Service Card Component ---
const ServiceCard = ({ title, description, icon: IconComponent, delay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay, 
        ease: [0.2, 0.6, 0.3, 0.9]
      }
    },
  };

  const iconBounce = {
    hidden: { scale: 0.7, rotate: -20 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.3,
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
      viewport={{ once: true, amount: 0.5 }}
      // FIX 1: Condensed className for the card wrapper.
      className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center p-8 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl"
    >
      {/* Icon */}
      <motion.div
        variants={iconBounce}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // FIX 2: Condensed className for the icon wrapper.
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-blue-100 text-blue-700"
      >
        <IconComponent />
      </motion.div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-semibold mb-3 text-[#213f70]"
      >
        **{title}**
      </h3>
      
      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};


// --- 📦 Main Section Component ---
const HowWeServeSection = () => {
  const servicePoints = [
    {
      title: "Client-Focused",
      description: "Clients are our most important asset. We prioritize their success and growth in everything we do.",
      icon: UsersIcon
    },
    {
      title: "Deep Understanding",
      description: "We invest time to understand our clients' businesses deeply, enabling tailored solutions.",
      icon: ChartLineIcon
    },
    {
      title: "Trust & Confidentiality",
      description: "We maintain the highest standards of confidentiality and trust in all client relationships.",
      icon: ShieldIcon
    },
    {
      title: "Exceptional Expertise",
      description: "Our team possesses exceptional skills and experience across diverse professional services.",
      icon: GraduationCapIcon
    },
    {
      title: "Accuracy & Ethics",
      description: "We focus on accuracy, ethics, and professionalism in every engagement we undertake.",
      icon: CheckCircleIcon
    },
    {
      title: "Innovation",
      description: "We continuously seek innovative approaches to deliver superior value and service quality.",
      icon: LightbulbIcon
    },
  ];

  return (
    // Responsive Padding and Background
    <div
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: Responsive Text Sizing */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#213f70]"
        >
          How We Serve
        </motion.h2>

        {/* Section Sub-description: Responsive Text Sizing */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16 text-gray-700"
        >
          Our approach is centered on building lasting relationships and delivering measurable value to every client we serve.
        </motion.p>

        {/* Grid for Service Cards: Fully Responsive Grid */}
        <div
          // FIX 3: Condensed className for the main grid container.
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {servicePoints.map((point, index) => (
            <ServiceCard
              key={point.title}
              title={point.title}
              description={point.description}
              icon={point.icon}
              delay={0.1 + index * 0.1} // Stagger delay for each card
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeServeSection;