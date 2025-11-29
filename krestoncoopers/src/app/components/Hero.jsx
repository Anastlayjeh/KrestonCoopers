// Hero.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const content = {
    ghana: {
      bgImage: "/images/ghana-bg.webp",
      titlePart1: "Professional",
      titleHighlight: "Accounting",
      titlePart2: "& Business Advisory",
      desc: "Providing trusted financial and advisory services across Ghana, helping organizations grow with confidence.",
      image: "/images/Omar.webp",
      accentColor: "text-[#F2A634]",
    },
    dubai: {
      bgImage: "/images/dubai-bg.webp",
      titlePart1: "International",
      titleHighlight: "Audit",
      titlePart2: "& Advisory Experts",
      desc: "Serving corporations in the UAE with world-class financial, audit, and compliance services.",
      image: "/images/Dabouss.webp",
      accentColor: "text-[#F2A634]",
    },
  };

  const [office, setOffice] = useState("ghana");
  const current = content[office] || content.ghana;

  useEffect(() => {
    const mapOffice = (o) => (o === "uae" ? "dubai" : o);
    const saved = mapOffice(localStorage.getItem("office"));
    if (saved && content[saved] && saved !== office) setOffice(saved);

    const handleOfficeChange = (event) => {
      const newOffice = event?.detail || mapOffice(localStorage.getItem("office")) || "ghana";
      if (content[newOffice]) {
        setOffice(newOffice);
        localStorage.setItem("office", newOffice);
      }
    };

    window.addEventListener("office-changed", handleOfficeChange);
    window.setOffice = (name) => {
      if (!name) return;
      localStorage.setItem("office", name);
      window.dispatchEvent(new CustomEvent("office-changed", { detail: name }));
    };

    return () => window.removeEventListener("office-changed", handleOfficeChange);
  }, [office]);

  return (
    <section className="relative w-full py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src={current.bgImage} alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30" />
      </div>

      {/* Content: text first, image second => mobile stacks text then image; desktop shows row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-12">
        {/* TEXT (first in DOM) */}
        {/* FIX: Added px-4 to the text container to prevent text overflow on small screens */}
        <div className="flex-1 text-center lg:text-left text-white px-4"> 
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {current.titlePart1}
            <br className="hidden sm:block" />
            <span className={current.accentColor}>{current.titleHighlight}</span>
            <br />
            {current.titlePart2}
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {current.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10 justify-center lg:justify-start">
            <Link href="/contact">
              <button className="bg-[#F2A634] hover:bg-blue-600 text-white font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
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

        {/* IMAGE (second in DOM) - explicit mobile height so next/image fill works */}
        <div className="relative w-full max-w-xs mx-auto h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-10 lg:mt-0 lg:flex-none">
          <Image
            src={current.image}
            alt="Hero image"
            fill
            priority
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}