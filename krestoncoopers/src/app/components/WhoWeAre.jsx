// src/app/components/OurLeadershipSection.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Use placeholder image URLs for demonstration (replace with actual paths)
const OMAR_IMAGE = "/images/Omar.webp"; // Placeholder path
const MICHAEL_IMAGE = "/images/Apoum.webp"; // Placeholder path
const SARAH_IMAGE = "/images/Dabouss.webp"; // Placeholder path


// Reusable Profile Card Component
const ProfileCard = ({ name, title, experience, bio, imageUrl, delay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.2, 0.6, 0.3, 0.9] }
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-0 transition-all duration-300 transform hover:shadow-2xl"
    >
      <div className="w-full h-72 md:h-80 overflow-hidden">
        {/* Replace the image tag with a Next.js <Image> component for production */}
        <img
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 md:p-8 w-full">
        <h3 className="text-2xl font-bold mb-1 text-[#04366A]">{name}</h3>
        <p className="text-base font-semibold text-blue-600 mb-2">{title}</p>
        <p className="text-sm text-gray-500 mb-4">{experience}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
};


const OurLeadershipSection = () => {
  const leaders = [
    {
      name: "Omar Zowk",
      title: "Partner (FCCA, MBA)",
      experience: "20+ Years Experience",
      bio: "A seasoned professional with extensive experience in audit, taxation, and business advisory. Omar leads our strategic initiatives and maintains our commitment to excellence.",
      imageUrl: OMAR_IMAGE,
    },
    {
      name: "Michael Stevens",
      title: "Senior Partner (CPA, MSc)",
      experience: "25+ Years Experience",
      bio: "Specializing in corporate finance and advisory services, Michael brings deep industry knowledge and strategic insight to complex business challenges.",
      imageUrl: MICHAEL_IMAGE,
    },
    {
      name: "Sarah Mitchell",
      title: "Partner (ACCA, LLB)",
      experience: "18+ Years Experience",
      bio: "An expert in regulatory compliance and risk management, Sarah ensures our clients navigate complex regulatory environments with confidence.",
      imageUrl: SARAH_IMAGE,
    },
  ];
  const BRAND_BLUE = '#04366A';

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#04366A]"
          style={{ color: BRAND_BLUE }}
        >
          Leadership &amp; Governance
          <div className="mx-auto mt-2 h-1 w-20 bg-blue-600 rounded"></div> {/* Underline */}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16 text-gray-700"
        >
          <p>
            Our firm is led by experienced professionals with strong backgrounds in audit, taxation,
            financial reporting, and advisory services.
          </p>
          <p className="mt-4">Every engagement is partner-led, ensuring:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside max-w-md mx-auto text-left">
            <li>Proper risk assessment</li>
            <li>High-quality review</li>
            <li>Clear communication with management and stakeholders</li>
          </ul>
          <p className="mt-4">
            This structure allows us to maintain consistency, accountability, and professional
            oversight across all assignments.
          </p>
        </motion.div>

        {/* Responsive Grid for Leaders */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <ProfileCard
              key={leader.name}
              name={leader.name}
              title={leader.title}
              experience={leader.experience}
              bio={leader.bio}
              imageUrl={leader.imageUrl}
              delay={0.1 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurLeadershipSection;
