"use client";
import React, { useEffect, useRef, useState } from "react";

// Feature Data (Unchanged - using SVG icons directly)
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Proven Experience',
    description:
      'Over five decades of delivering exceptional accounting and advisory services.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20.25H4.75a.75.75 0 01-.75-.75V4.5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75v10.5M10 20.25h14.5c.414 0 .75-.336.75-.75V4.5c0-.414-.336-.75-.75-.75H4.75a.75.75 0 00-.75.75v10.5M10 20.25V17.25M17.25 10.5V17.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 7.5H19.5"
        />
      </svg>
    ),
    title: 'Global Network',
    description:
      'Access to international expertise through Kreston International network.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 10a6 6 0 11-12 0 6 6 0 0112 0zM12 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zM15 11a3 3 0 10-6 0 3 3 0 006 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14v4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 009-9A9 9 0 003 12a9 9 0 009 9z"
        />
      </svg>
    ),
    title: 'Professional Excellence',
    description:
      'Highest standards of professionalism and technical expertise in all our services.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: 'Client-Focused',
    description:
      'Personalized approach with dedicated teams for each client relationship.',
  },
];

export default function WhyChooseUs() {
  const [isMounted, setIsMounted] = useState(false);
  const cardsRef = useRef([]);
  const [inView, setInView] = useState({});

  // 1. Initial Mount Effect for Hydration Safety
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // 2. Intersection Observer Effect for Scroll Animation
  useEffect(() => {
    if (!isMounted || typeof window.IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(prev => ({ ...prev, [entry.target.dataset.index]: true }));
            // Optional: Stop observing once it's visible
            // observer.unobserve(entry.target); 
          }
        });
      },
      {
        // Start animation when 10% of the element is visible on mobile, 15% elsewhere
        threshold: window.innerWidth < 640 ? 0.1 : 0.15, 
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMounted]);


  return (
    // Outer Container: Responsive Padding
    <div className="bg-[#04366A] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title and Subtitle: Responsive Text Sizing */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Why Choose Kreston Coopers
        </h2>
        <p className="text-base sm:text-xl text-blue-200 mb-12 md:mb-16 max-w-3xl mx-auto">
          Our commitment to excellence, global expertise, and personalized service sets us apart in the industry.
        </p>

        {/* Feature Grid: Responsive Gap and Column Count */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const isInView = inView[index];

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`
                  flex flex-col items-center text-center p-4 
                  transition-all duration-700 ease-out 
                  
                  // ANIMATION INITIAL STATE (Bottom-to-Top Slide)
                  ${isMounted ? "opacity-0 translate-y-10" : ""} 
                  
                  // ANIMATION FINAL STATE
                  ${isInView ? "opacity-100 translate-y-0" : ""}
                `}
                // STAGGERED DELAY (Slightly increased to 150ms for smoother flow)
                style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
              >
                {/* Icon Container: Bright Blue Circle */}
                <div className="mb-6 p-4 rounded-full bg-cyan-500 shadow-xl ring-4 ring-cyan-700/50">
                  {feature.icon}
                </div>

                {/* Feature Content: Responsive Text */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-blue-200">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
