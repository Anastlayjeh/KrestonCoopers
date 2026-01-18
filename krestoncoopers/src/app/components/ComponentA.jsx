"use client";
import React, { useEffect, useState } from "react";

const coreValues = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our professional engagements.",
  },
  {
    title: "Professional Excellence",
    description: "Our work is guided by recognised accounting, auditing, and tax standards.",
  },
  {
    title: "Independence & Objectivity",
    description: "We maintain professional independence and unbiased judgment at all times.",
  },
  {
    title: "Client-Focused Solutions",
    description: "We provide practical advice aligned with our clients' operational and regulatory realities.",
  },
  {
    title: "Confidentiality & Trust",
    description: "Client information is treated with strict confidentiality and professional care.",
  },
];

// Define Brand Colors for consistency
const BRAND_BLUE = '#04366A';
const ACCENT_COLOR = 'rgb(14 165 233)'; // sky-500

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);
  
  // 1. Trigger Animation on Mount/Refresh
  useEffect(() => {
    // Set isVisible to true immediately after mount to trigger the CSS transition
    const timer = setTimeout(() => {
        setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer); // Cleanup
  }, []); 

  // Helper function for fade-up animation with staggered delay
  const getAnimationClasses = (delayMs) => {
    // Dynamically creates the delay class (e.g., delay-[200ms])
    const delayClass = delayMs > 0 ? `delay-[${delayMs}ms]` : 'delay-0';
    
    return `
      transition-all duration-[1500ms] ease-out 
      ${delayClass}
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `;
  };

  return (
    // Responsive Padding and Background (using a subtle light gray)
    <div className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* === LEFT CONTENT COLUMN (Primary narrative) === */}
        <div 
          className={getAnimationClasses(0)} 
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: BRAND_BLUE }}
          >
            Who We Are
          </h2>
          
          {/* Accent Line */}
          <div 
            className="w-16 h-1 mb-6 rounded-full" 
            style={{ backgroundColor: ACCENT_COLOR }}
          ></div> 

          {/* Paragraphs */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            Kreston Coopers is a professional firm of Chartered Accountant, Auditors,
            Tax Practitioners, and Business Advisors providing high-quality assurance,
            tax, and advisory services to businesses, non-profit organizations, and
            public-interest institutions.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We are committed to delivering clarity, compliance, and confidence through
            practical, standards-driven solutions tailored to the realities of our
            clients&apos; operations.
          </p>
        </div>

        {/* === RIGHT CONTENT COLUMN (Supporting details and values) === */}
        <div className="flex flex-col">
          {/* Top Text Block (Staggered delay: 200ms) */}
          <p 
            className={`text-base sm:text-lg text-gray-600 mb-8 leading-relaxed ${getAnimationClasses(200)}`}
          >
            Our approach combines technical excellence, ethical practice, and hands-on
            partner involvement, ensuring that every engagement adds real value beyond
            statutory compliance.
          </p>

          {/* Core Values Box (Staggered delay: 400ms) */}
          <div 
            className={`
              bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 
              ${getAnimationClasses(400)}
            `}
          >
            <h3 
              className="text-xl sm:text-2xl font-bold mb-4"
              style={{ color: BRAND_BLUE }}
            >
              Our Core Values
            </h3>
            <ul className="space-y-4">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-start">
                  {/* Custom Checkmark Icon (using Tailwind color) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: ACCENT_COLOR }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      {value.title}
                    </p>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
