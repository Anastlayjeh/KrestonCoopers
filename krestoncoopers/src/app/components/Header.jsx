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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [office, setOffice] = useState("ghana");

  useEffect(() => {
    let savedOffice = localStorage.getItem("office");
    if (savedOffice === "uae") savedOffice = "dubai";
    if (savedOffice) setOffice(savedOffice);

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const switchOffice = () => {
    const newOffice = office === "ghana" ? "dubai" : "ghana";
    setOffice(newOffice);
    localStorage.setItem("office", newOffice);
    window.dispatchEvent(new CustomEvent("office-changed", { detail: newOffice }));
  };

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
        <div className="flex items-center gap-3">
          <div className="w-40 h-10 md:w-60 md:h-16 flex items-center">
            <Link href="">
              <img src="/images/kreston-coopers-logo.webp" alt="Logo" className="h-full object-contain" />
            </Link>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 items-center gap-8">

          <div className="flex gap-8 text-gray-600 font-medium text-base">
            {navLinks}
          </div>

          {/* NEW DESKTOP TOGGLE */}
          <div
            onClick={switchOffice}
            className="ml-auto flex items-center gap-4 bg-white shadow-sm rounded-full px-4 py-2 cursor-pointer transition border min-w-[310px]"
          >
            {/* Ghana Button */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                office === "ghana" ? "bg-[#FFBF00] text-white shadow-md" : "text-gray-700"
              }`}
            >
              <img
                src="/images/Flag_of_Ghana.svg.webp"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-sm font-semibold">Ghana Office</span>
              {office === "ghana" && <span className="text-white text-lg">✓</span>}
            </div>

            {/* Toggle middle */}
            <div className="relative w-10 h-5 bg-gray-300 rounded-full">
              <div
                className={`absolute bg-white w-4 h-4 rounded-full shadow-md top-0.5 transition-all duration-300 ${
                  office === "ghana" ? "left-1" : "left-5"
                }`}
              />
            </div>

            {/* Dubai Button */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                office === "dubai" ? "bg-[#0A3F8B] text-white shadow-md" : "text-gray-700"
              }`}
            >
              <img
                src="/images/Flag-United-Arab-Emirates.webp"
                className="w-9 h-9 rounded-full "
              />
              <span className="text-sm font-semibold">Dubai Office</span>
              {office === "dubai" && <span className="text-white text-lg">✓</span>}
            </div>
          </div>
        </div>

        {/* MOBILE TOGGLE + MENU ICON */}
        <div className="flex items-center justify-between w-full p-2 gap-3 md:hidden">

          {/* NEW MOBILE TOGGLE */}
          <div
            onClick={switchOffice}
            className="flex items-center gap-2 bg-white shadow-sm border rounded-full px-3 py-1 cursor-pointer"
          >
            {/* Ghana */}
            <div className={`flex items-center gap-1 ${office === "ghana" ? "text-[#0A3F8B] font-semibold" : "text-gray-600"}`}>
              <img src="/Flag_of_Ghana.svg.webp" className="w-6 h-6 rounded-full " />
              <span className="text-xs">Ghana</span>
            </div>

            <div className="relative w-8 h-4 bg-gray-300 rounded-full">
              <div
                className={`absolute bg-white w-3 h-3 rounded-full shadow-md top-0.5 transition-all duration-300 ${
                  office === "ghana" ? "left-0.5" : "left-4"
                }`}
              />
            </div>

            {/* Dubai */}
            <div className={`flex items-center gap-1 ${office === "dubai" ? "text-[#0A3F8B] font-semibold" : "text-gray-600"}`}>
              <img src="/Flag-United-Arab-Emirates.webp" className="w-6 h-6 rounded-full " />
              <span className="text-xs">Dubai</span>
            </div>
          </div>

          {/* MENU BUTTON */}
          <button className="text-gray-600 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
