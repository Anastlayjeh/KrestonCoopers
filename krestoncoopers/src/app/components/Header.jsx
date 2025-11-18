// Header.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// We need a simple icon for the hamburger menu (e.g., from 'lucide-react' or similar)
// Placeholder functions for common icons:
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    // Triggers the initial fade-up animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Close menu if resized to a larger screen
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the default 'md' breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Base animation classes for a slow, subtle fade-up
  const baseAnimationClasses = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[5px]'}
  `;

  const navLinks = (
    <>
      <Link href="/" onClick={toggleMenu} className="hover:text-blue-700 transition-colors duration-200">Home</Link>
      <Link href="/about" onClick={toggleMenu} className="hover:text-blue-700 transition-colors duration-200">About Us</Link>
      <Link href="/services" onClick={toggleMenu} className="hover:text-blue-700 transition-colors duration-200">Our Services</Link>
      <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-700 transition-colors duration-200">Contact us</Link>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md py-8 z-50 sticky top-0 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* 1. Logo Section (Always Visible) */}
        <div 
          className={`
            flex items-center gap-3 
            ${baseAnimationClasses}
          `}
          style={{ transitionDelay: '0ms' }}
        >
          {/* Logo Container: Increased size for PC, smaller for Mobile */}
          <div className="w-40 h-10 md:w-60 md:h-16 flex items-center justify-center">
            <Link href="/">
              {/* NOTE: Check path for your image. Using placeholder styles. */}
              <img src="/Asset-6-8.webp" alt="Company Logo" className="h-full w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* 2. PC/Tablet Navigation (Hidden on Mobile) */}
        <div 
          className={`
            hidden md:flex items-center gap-12 
            ${baseAnimationClasses}
          `}
          style={{ transitionDelay: '150ms' }}
        >
          {/* Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-10 text-gray-600 font-medium text-sm lg:text-base">
            {navLinks}
          </div>

         
        </div>

        {/* 3. Mobile Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-gray-600 p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* 4. Mobile Menu Dropdown (Conditionally Visible) */}
      <div
        className={`
          md:hidden absolute w-full bg-white shadow-xl overflow-hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col items-start p-4 space-y-4 text-gray-700 font-medium">
          {navLinks}
          {/* Button for Mobile */}
          <button className="w-full text-center bg-sky-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-sky-600 transition-colors duration-200 mt-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}