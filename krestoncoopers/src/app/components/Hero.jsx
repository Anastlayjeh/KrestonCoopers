"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  // Define all content data
  const content = {
    ghana: {
      bgImage: "/images/ghana-bg.webp",
      titlePart1: "Professional",
      titleHighlight: "Accounting",
      titlePart2: "& Business Advisory",
      desc: "Providing trusted financial and advisory services across Ghana, helping organizations grow with confidence.",
      image: "/Omar.webp",
      accentColor: "text-[#F2A634]",
    },
    dubai: {
      bgImage: "/images/dubai-bg.webp",
      titlePart1: "International",
      titleHighlight: "Audit",
      titlePart2: "& Advisory Experts",
      desc: "Serving corporations in the UAE with world-class financial, audit, and compliance services.",
      image: "/Omar.webp",
      accentColor: "text-[#F2A634]",
    },
  };

  // State to hold the current office selection
  const [office, setOffice] = useState("ghana");

  // Determine the content based on the current 'office' state
  const current = content[office] || content.ghana; // Fallback to Ghana content

  useEffect(() => {
    const mapOffice = (o) => (o === "uae" ? "dubai" : o);

    // 1. Initial Load from localStorage
    const savedOffice = mapOffice(localStorage.getItem("office"));
    if (savedOffice && content[savedOffice] && savedOffice !== office) {
      setOffice(savedOffice);
    }

    // 2. Event Listener for office changes
    const handleOfficeChange = (event) => {
      let newOffice;
      if (event?.detail) {
        newOffice = typeof event.detail === "string" ? event.detail : event.detail.office;
      }
      if (!newOffice) newOffice = mapOffice(localStorage.getItem("office")) || "ghana";

      if (content[newOffice]) {
        setOffice(newOffice);
        try {
          localStorage.setItem("office", newOffice);
        } catch {}
      }
    };

    // 3. Global window function setup
    if (typeof window !== "undefined") {
      window.setOffice = (name) => {
        if (!name) return;
        try { localStorage.setItem("office", name); } catch {}
        window.dispatchEvent(new CustomEvent("office-changed", { detail: name }));
      };
    }

    window.addEventListener("office-changed", handleOfficeChange);
    return () => window.removeEventListener("office-changed", handleOfficeChange);
  }, [office]); // Dependency on 'office' ensures the correct value is used on re-render

  // ... (rest of the component logic) ...

  return (
    <section className="relative w-full py-16 md:py-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={current.bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30" />
      </div>

      {/* Main Content (Text and Image) - Flex Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-12 z-10">
        
        {/* Text Content - Allow it to grow on desktop (lg:) */}
        <div className="flex-1 text-center lg:text-left text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {current.titlePart1} <br className="hidden sm:block" />
            <span className={current.accentColor}>{current.titleHighlight}</span> <br />
            {current.titlePart2}
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {current.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10 justify-center lg:justify-start">
            <Link href="/contact">
              <button className="bg-[#F2A634] hover:bg-sky-600 text-white font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
                Contact Us
              </button>
            </Link>

            <Link href="/services">
              <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
                Our Services
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image - Explicitly set smaller size on mobile/tablet and fixed size on desktop */}
        <div className="mt-10 lg:mt-0 relative w-full max-w-xs mx-auto        {/* Mobile: takes up to max-w-xs (320px) and centers */ sm:w-72 sm:h-72                 {/* Small Screens: Smaller fixed size */ md:w-80 md:h-80                 {/* Medium Screens: Slightly larger */ lg:w-[450px] lg:h-[450px]       {/* Desktop: Fixed large size */ lg:flex-none">                  {/* Ensures it doesn't try to grow/shrink based on flex rules on desktop */}
          <Image
            src={current.image}
            alt="Hero Image"
            fill
            className="rounded-xl shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
