"use client";
import React, { useState, useEffect, useRef } from "react";

// Icons (unchanged)
const LockIcon = ({ size = 32, strokeWidth = 2.5, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ClockIcon = ({ size = 32, strokeWidth = 2.5, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UsersIcon = ({ size = 32, strokeWidth = 2.5, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StarIcon = ({ size = 32, strokeWidth = 2.5, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ScaleIcon = ({ size = 32, strokeWidth = 2.5, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m16 16 1 1.05a2 2 0 0 0 3 0 .73.73 0 0 0 0-1.06Z" />
    <path d="m8 16-1 1.05a2 2 0 0 1-3 0 .73.73 0 0 1 0-1.06Z" />
    <path d="M12 22a4 4 0 0 0 4-4V5l-4-3-4 3v13a4 4 0 0 0 4 4Z" />
  </svg>
);

// Standards
const STANDARDS = [
  { icon: LockIcon, title: "Confidentiality", description: "Strict data protection and privacy" },
  { icon: ClockIcon, title: "Timely Delivery", description: "Professional time-based services" },
  { icon: UsersIcon, title: "Expert Team", description: "Experienced qualified staff" },
  { icon: StarIcon, title: "Technical Standards", description: "Highest professional standards" },
  { icon: ScaleIcon, title: "Independence", description: "Integrity and objectivity" },
];

const StandardItem = ({ standard, index, isVisible }) => {
  const IconComponent = standard.icon;

  const delayClasses =
    isVisible
      ? ["delay-[100ms]", "delay-[200ms]", "delay-[300ms]", "delay-[400ms]", "delay-[500ms]"][index] || ""
      : "";

  const animationClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <div className={`p-4 text-center transform transition-all duration-700 ease-out ${delayClasses} ${animationClasses} hover:scale-[1.03] hover:shadow-lg rounded-xl`}>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-blue-700 text-white rounded-full shadow-xl">
          <IconComponent size={32} strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{standard.title}</h3>
      <p className="text-sm text-gray-600">{standard.description}</p>
    </div>
  );
};

const App = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSectionVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div className="min-h-[120vh] bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-12 lg:mb-16 p-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight mb-2">
            Our Professional Standards
          </h2>
          <p className="text-lg text-gray-600 mt-3">Committed to excellence in every aspect</p>
        </header>

        {/* ⭐ FIXED className (NOW ONE LINE) */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {STANDARDS.map((standard, index) => (
            <StandardItem key={standard.title} standard={standard} index={index} isVisible={isSectionVisible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
