"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/LOGO.png" 
                alt="EMEX EXPRESS Logo" 
                width={300} 
                height={300} 
                className="py-2"
              />
            </Link>
          </div>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#why-us" className="text-gray-700 hover:text-[#FF6700] font-medium transition-colors duration-200">
              Why Choose Us
            </Link>
            <Link href="#pain-points" className="text-gray-700 hover:text-[#FF6700] font-medium transition-colors duration-200">
              Industries
            </Link>
            <Link href="#scenarios" className="text-gray-700 hover:text-[#FF6700] font-medium transition-colors duration-200">
              Airfreight Scenarios
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="tel:+4969247455280" className="text-gray-700 hover:text-[#FF6700] font-medium flex items-center transition-colors duration-200">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 69 247455280
              </Link>
              <Link href="#contact" className="bg-[#FF6700] hover:bg-[#E05A00] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Get a Quote
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 px-2">
              <Link 
                href="#why-us" 
                className="text-gray-700 hover:text-[#FF6700] font-medium py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link 
                href="#pain-points" 
                className="text-gray-700 hover:text-[#FF6700] font-medium py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                href="#scenarios" 
                className="text-gray-700 hover:text-[#FF6700] font-medium py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Airfreight Scenarios
              </Link>
              <div className="flex flex-col space-y-4 pt-2 border-t border-gray-100">
                <Link 
                  href="tel:+4969247455280" 
                  className="text-gray-700 hover:text-[#FF6700] font-medium flex items-center transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 69 247455280
                </Link>
                <Link 
                  href="#contact" 
                  className="bg-[#FF6700] hover:bg-[#E05A00] text-white px-6 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
