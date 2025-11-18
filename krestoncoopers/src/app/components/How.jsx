"use client"; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef } from 'react';

// Data structure for the steps
const STEPS = [
  {
    number: 1,
    title: 'Discovery & Understanding',
    description: 'We analyze your business needs and requirements',
  },
  {
    number: 2,
    title: 'Planning & Strategy',
    description: 'Develop customized solutions and implementation plans',
  },
  {
    number: 3,
    title: 'Implementation',
    description: 'Execute solutions with precision and attention to detail',
  },
  {
    number: 4,
    title: 'Ongoing Review',
    description: 'Continuous monitoring and advisory support',
  },
];

// Helper component for a single process step
const ProcessStep = ({ step, index, isVisible }) => {
  // Utility for staggered delay using Tailwind's delay utilities.
  // Delay only applies if the section is visible.
  const delayClasses = `transition-all duration-700 ease-out ${
    isVisible ? 
      (index === 0 ? 'md:delay-[100ms]' : 
       index === 1 ? 'md:delay-[200ms]' : 
       index === 2 ? 'md:delay-[300ms]' : 
       index === 3 ? 'md:delay-[400ms]' : '')
      : ''
  }`;

  // Animation classes: Opacity and vertical translation are controlled by isVisible
  const animationClasses = isVisible
    ? `opacity-100 translate-y-0`
    : `opacity-0 translate-y-8`;

  return (
    <div
      // Responsive layout adjustments:
      // On mobile, it's full width (implicitly 1/1). On medium screens, it's 1/2 of the grid. On large screens, 1/4.
      className={`p-6 text-center ${delayClasses} ${animationClasses} transform transition-all duration-700 hover:scale-[1.02] hover:shadow-lg rounded-xl`}
    >
      {/* Circle Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-blue-700 text-white text-2xl font-bold rounded-full shadow-xl">
          {step.number}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600">
        {step.description}
      </p>
    </div>
  );
};

// Main App component
const App = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null); // Ref to observe the section's position

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is intersecting the viewport, set visibility to true
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          // Stop observing once the animation has been triggered
          observer.unobserve(entry.target);
        }
      },
      // Options: Trigger when 10% of the element is visible
      { threshold: 0.1 } 
    );

    // Start observing the element attached to the ref
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function: stop observing when the component unmounts
    return () => {
      if (sectionRef.current) {
        // Must check if sectionRef.current is defined before unobserve,
        // as the component might be unmounted before the cleanup runs.
        // It's technically safe to call unobserve on the element if it's already been unobserved in the callback, 
        // but it's cleaner to handle both. Since we stop observing in the callback, this is mainly for component unmount.
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Run only on mount and unmount

  return (
    // Outer container for padding, background, and font
    // Added min-h-[120vh] to ensure vertical scrolling is possible for testing the animation.
    <div className="min-h-[120vh] bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <header className="text-center mb-12 lg:mb-16 p-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight mb-2">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Our systematic approach to delivering excellence
          </p>
        </header>

        {/* Process Steps Grid - The ref is attached here to observe scroll position */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isVisible={isSectionVisible}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default App;