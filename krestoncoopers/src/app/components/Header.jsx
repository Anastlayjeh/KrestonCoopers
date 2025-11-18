"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [office, setOffice] = useState("ghana");

  useEffect(() => {
    setIsVisible(true);

    const savedOffice = localStorage.getItem("office");
    if (savedOffice) setOffice(savedOffice);

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const switchOffice = () => {
    const newOffice = office === "ghana" ? "uae" : "ghana";
    setOffice(newOffice);
    localStorage.setItem("office", newOffice);
    window.dispatchEvent(new CustomEvent("office-changed", { detail: newOffice }));
  };

  const baseAnimationClasses = `transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[5px]"}`;

  const navLinks = (
    <>
      <Link href="/" className="hover:text-blue-700 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
      <Link href="/about" className="hover:text-blue-700 transition" onClick={() => setIsMenuOpen(false)}>About Us</Link>
      <Link href="/services" className="hover:text-blue-700 transition" onClick={() => setIsMenuOpen(false)}>Our Services</Link>
      <Link href="/contact" className="hover:text-blue-700 transition" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6 gap-4">
        {/* LOGO */}
        <div className={`flex items-center gap-3 ${baseAnimationClasses}`}>
          <div className="w-40 h-10 md:w-60 md:h-16 flex items-center">
            <Link href="/">
              <img src="/Asset-6-8.webp" alt="Logo" className="h-full object-contain" />
            </Link>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 flex-wrap items-center gap-4 md:gap-8">
          <div className="flex flex-wrap gap-4 md:gap-8 text-gray-600 font-medium text-base">
            {navLinks}
          </div>

          {/* OFFICE TOGGLE */}
          <div
            onClick={switchOffice}
            className="ml-auto flex-shrink-0 flex items-center gap-3 px-4 py-2 border rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition relative min-w-[230px]"
          >
            {/* Label */}
            <span className="text-gray-500 font-medium text-sm">Locations</span>

            {/* Ghana */}
            <div className={`flex items-center gap-2 transition ${office === "ghana" ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
              <img src="/Flag_of_Ghana.svg.webp" className="w-8 h-5" /> Ghana
            </div>

            {/* Toggle Circle */}
            <div className="relative w-14 h-6 bg-gray-300 rounded-full flex items-center px-1">
              <div className={`absolute bg-white w-5 h-5 rounded-full shadow-md transition-all duration-300 ${office === "ghana" ? "left-1" : "left-8"}`}></div>
            </div>

            {/* UAE */}
            <div className={`flex items-center gap-2 transition ${office === "uae" ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
              <img src="/Flag-United-Arab-Emirates.webp" className="w-8 h-5" /> Dubai
            </div>
          </div>
        </div>

        {/* MOBILE TOGGLE + MENU BUTTON */}
        <div className="flex items-center gap-3 md:hidden">
          {/* MOBILE OFFICE TOGGLE */}
          <div
            onClick={switchOffice}
            className="flex items-center gap-1 px-2 py-1 border rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-gray-500 text-xs font-medium">Locations</span>
            <div className={`flex items-center gap-1 text-xs ${office === "ghana" ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
              <img src="/Flag_of_Ghana.svg.webp" className="w-4 h-4" /> Ghana
            </div>
            <div className="relative w-10 h-4 bg-gray-300 rounded-full flex items-center px-0.5">
              <div className={`absolute bg-white w-3 h-3 rounded-full shadow-md transition-all duration-300 ${office === "ghana" ? "left-0.5" : "left-5"}`}></div>
            </div>
            <div className={`flex items-center gap-1 text-xs ${office === "uae" ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
              <img src="/Flag-United-Arab-Emirates.webp" className="w-4 h-4" /> Dubai
            </div>
          </div>

          {/* MENU BUTTON */}
          <button className="text-gray-600 p-2" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className={`md:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
          {navLinks}
        </div>
      </div>
    </nav>
  );
}
