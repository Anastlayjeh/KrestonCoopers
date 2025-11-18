"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ReadyToGetStarted() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // 1. Intersection Observer Effect for Scroll Animation
  useEffect(() => {
    // Check for IntersectionObserver availability
    if (typeof window.IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      {
        // Trigger when 10% of the section is visible
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px", 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Cleanup observer
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Base classes for the transition
  const baseAnimation = "transition-all duration-700 ease-out";
  const hiddenState = "opacity-0 translate-y-10";
  const visibleState = "opacity-100 translate-y-0";
  const BRAND_BLUE = '#04366A';

  // Helper function to apply staggered classes
  const getAnimationClasses = (delayMs) => {
    // Use dynamic class definition for delay
    const delayClass = inView ? `delay-[${delayMs}ms]` : 'delay-0';
    const stateClass = inView ? visibleState : hiddenState;
    return `${baseAnimation} ${delayClass} ${stateClass}`;
  };

  return (
    // Responsive Padding: py-16 mobile, py-28 desktop
    <div 
      ref={sectionRef}
      className="bg-white py-16 md:py-28 text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Title: Responsive Text Size */}
        <h2 
          className={`
            text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6
            ${getAnimationClasses(0)}
          `}
          style={{ color: BRAND_BLUE }}
        >
          Ready to Get Started?
        </h2>

        {/* Subtitle: Responsive Text Size */}
        <p 
          className={`
            text-base sm:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto
            ${getAnimationClasses(150)}
          `}
        >
          Contact us today to discuss how our expert team can help your
          business achieve its financial and strategic objectives.
        </p>

        {/* Call to Action Button Container */}
        <div
          className={`
            ${getAnimationClasses(300)}
          `}
        >
          <a
            href="/contact"
            // FIX: Consolidated className into a single line string to prevent hydration mismatch 
            // caused by line breaks/whitespace discrepancies between server and client rendering.
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 rounded-lg text-base sm:text-lg font-semibold bg-white shadow-md hover:bg-blue-50 hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.03]"
            style={{ 
              borderColor: BRAND_BLUE, 
              color: BRAND_BLUE 
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}