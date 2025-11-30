"use client";
import { useEffect, useRef, useState } from "react";

// Define Brand Colors for consistency
const BRAND_BLUE = '#04366A'; 
const ACCENT_BLUE = 'rgb(14 165 233)'; // Tailwind sky-500

export default function AboutSection() {
  const cardsRef = useRef([]);

  // Use a map to track which cards are in view to simplify CSS application
  const [inViewStates, setInViewStates] = useState(new Array(3).fill(false));

  useEffect(() => {
    // If IntersectionObserver isn't available (e.g., older browsers), skip animation
    if (typeof window.IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          
          if (entry.isIntersecting) {
            // Set the state for this specific card index to true
            setInViewStates(prev => {
              const newStates = [...prev];
              newStates[index] = true;
              return newStates;
            });
            obs.unobserve(entry.target); 
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
  }, []);

  const cards = [
    {
      icon: "🎖️",
      title: "15+ Years Experience",
      text:
        "Established expertise in accounting, audit, and business advisory services across multiple industries.",
    },
    {
      icon: "🌐",
      title: "Global Network",
      text:
        "Part of Kreston International, providing local expertise with global reach and resources.",
    },
    {
      icon: "👥",
      title: "Trusted Partners",
      text:
        "Building long-term relationships with clients through personalized service and professional excellence.",
    },
  ];

  return (
    // Responsive Padding and Background
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Responsive Heading */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: BRAND_BLUE }}
        >
          About Kreston Coopers
        </h2>
        
        {/* Responsive Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          With decades of experience and a global network, we deliver exceptional
          accounting and business advisory services to clients across various
          industries.
        </p>

        {/* Card Grid: Stacks on mobile, 3 columns on desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const delayMs = i * 150;
            const isInView = inViewStates[i];

            return (
              <div
                key={i}
                data-index={i} // Used by the Intersection Observer
                ref={(el) => (cardsRef.current[i] = el)}
                className={`
                  bg-white rounded-xl p-6 sm:p-8 shadow-md 
                  cursor-pointer transition-all duration-700 ease-out
                  hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl

                  // Initial Hidden State
                  opacity-0 translate-y-6 
                  
                  // Visible State with Staggered Delay
                  ${isInView ? `opacity-100 translate-y-0 delay-[${delayMs}ms]` : ''}
                `}
              >
                {/* Icon Wrapper: Use Brand Color */}
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-lg mx-auto mb-5 text-white text-2xl"
                  style={{ backgroundColor: ACCENT_BLUE }}
                >
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 
                  className="text-lg sm:text-xl font-bold mb-3"
                  style={{ color: BRAND_BLUE }}
                >
                  {card.title}
                </h3>
                
                {/* Card Text */}
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}