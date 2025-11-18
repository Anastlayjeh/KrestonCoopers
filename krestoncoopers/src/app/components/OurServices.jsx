"use client"; // ← This must be the first line
import React, { useEffect, useRef, useState } from "react";

// Service Data (Unchanged - using SVG icons directly)
const services = [
  // ... (Your existing services array with SVG icons remains here)
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Audit & Assurance',
    description:
      'Independent audit services ensuring compliance and financial transparency for your stakeholders.',
    link: '#',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h10m-9 4h8M5 1h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V3a2 2 0 012-2z"
        />
      </svg>
    ),
    title: 'Tax Advisory',
    description:
      'Strategic tax planning and compliance services to optimize your tax position and minimize risks.',
    link: '#',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 12l3-3 3 3 4-4M18 21v-4a4 4 0 00-4-4H9a4 4 0 00-4 4v4H3a2 2 0 01-2-2V3a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2h-2z"
        />
      </svg>
    ),
    title: 'Business Advisory',
    description:
      'Strategic guidance and insights to drive business growth and operational efficiency.',
    link: '#',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: 'Accounting Services',
    description:
      'Complete bookkeeping and financial reporting solutions for businesses of all sizes.',
    link: '#',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 6m-4 2a2 2 0 11-4 0 2 2 0 014 0zM12 18c-1.11 0-2.08-.402-2.592-1L3 18m4-2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Corporate Finance',
    description: 'M&A advisory, valuations, and capital raising services for strategic transactions.',
    link: '#',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002 12c0 2.972 1.232 5.664 3.243 7.659L12 22l6.757-3.341C20.768 17.664 22 14.972 22 12c0-1.789-.693-3.417-1.848-4.632z"
        />
      </svg>
    ),
    title: 'Risk & Compliance',
    description:
      'Comprehensive risk management and regulatory compliance solutions.',
    link: '#',
  },
];


export default function OurServices() {
  const [isMounted, setIsMounted] = useState(false);
  const cardsRef = useRef([]);
  const [inView, setInView] = useState({}); 

  // Initial Mount Effect for Hydration Safety
  useEffect(() => {
    setIsMounted(true); 
  }, []);

  // Intersection Observer Effect for Scroll Animation
  useEffect(() => {
    if (!isMounted || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mark the card as in view
            setInView(prev => ({...prev, [entry.target.dataset.index]: true}));
            // Optionally, stop observing once it's visible
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMounted]);


  return (
    // Responsive Padding: Tighter padding on mobile, more space on PC
    <div className="bg-neutral-100 py-16 md:py-24"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Responsive Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Services
        </h2>
        
        {/* Responsive Sub-text */}
        <p className="text-base sm:text-lg text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">
          Comprehensive accounting and business advisory solutions tailored to your specific needs and industry requirements.
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> 
          {services.map((service, index) => {
            const isInView = inView[index];

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`
                  bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-start text-left
                  cursor-pointer transition-all duration-700 ease-out 
                  
                  // HOVER ANIMATION (Slightly enhanced shadow and lift):
                  hover:scale-[1.01] hover:-translate-y-1 hover:shadow-xl hover:border-blue-300
                  
                  // 1. SCROLL INITIAL STATE (Starts off below the final position)
                  ${isMounted ? "opacity-0 translate-y-12" : ""} 
                  
                  // 2. SCROLL ANIMATION STATE (Slides up to the final position)
                  ${isInView ? "opacity-100 translate-y-0" : ""}
                `}
                // STAGGERED ANIMATION DELAY:
                style={{ transitionDelay: isInView ? `${index * 120}ms` : '0ms' }}
              >
                {/* Icon Wrapper */}
                <div className="mb-4 p-3 bg-blue-50 rounded-full">{service.icon}</div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                    {service.description}
                </p>
                
             
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}