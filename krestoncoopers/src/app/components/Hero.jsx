"use client"; // ← This must be the first line
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Triggers the animation on mount
    setLoaded(true);
  }, []);

  return (
    // Responsive padding: py-16 for mobile, py-20 for tablet/PC
    <section className="w-full bg-gradient-to-br from-blue-900 to-blue-800 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-12">
        
        {/* LEFT TEXT CONTENT */}
        <div
          className={`
            flex-1 transition-all duration-900 delay-600 ease-out 
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            text-center lg:text-left // Center text on mobile/tablet, left-align on PC
          `}
        >
          {/* Responsive Heading Size */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Professional <br className="hidden sm:block" /> {/* Line break for visual balance on medium screens */}
            <span className="text-sky-400">Accounting</span> & <br />
            Business Advisory
          </h1>

          {/* Responsive Paragraph Size */}
          <p className="text-gray-200 mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Trusted by businesses worldwide, we provide comprehensive accounting,
            audit, tax, and advisory services to help your business thrive in
            today's competitive landscape.
          </p>

          {/* Buttons - Flex on medium/PC, Stacked on small mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10 justify-center lg:justify-start">
          <Link href="/contact">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
  Contact Us            </button>
            </Link>
            <Link href="/services">
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
              Our Services
          
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`
            flex-1 transition-all duration-900 ease-out delay-600
            ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            mt-10 lg:mt-0 // Add top margin on mobile/tablet when stacked
          `}
        >
          <img
            src="/building.webp" // Ensured path starts without "././" for standard Next.js public folder
            alt="Office Building"
            // Constrain image size slightly on large screens for better balance
            className="rounded-xl shadow-2xl w-full max-w-lg lg:max-w-none mx-auto object-cover" 
            style={{ maxHeight: '550px' }} // Optional max-height for visual control on large screens
          />
        </div>

      </div>
    </section>
  );
}