"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { parallaxEffect } from '../utils/animations';
import AnimationBackground from './AnimationBackground';

export default function HeroSection() {
  const heroBackgroundRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroBackgroundRef.current) {
        parallaxEffect(heroBackgroundRef.current, window.scrollY, 0.5);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative hero-section min-h-[40vh] bg-[#001E3C] overflow-hidden">
      {/* Hero Section with Content - Hauptüberschrift über der Animation */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              style={{ 
                color: '#fff',
                fontSize: '60px',
                fontWeight: 400,
                lineHeight: '75px',
                marginBottom: '45px',
                marginTop: 0
              }}
              data-component-name="MotionDOMComponent"
            >
              FAST. RELIABLE. <span className="text-[#FF6700]" data-component-name="HeroSection">TAILORED AIRFREIGHT SOLUTIONS.</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Your cargo. Our mission – worldwide.
            </motion.h2>
          </div>
        </div>
      </div>
      
      {/* Spacer to push content below the fixed header */}
      <div className="pt-64"></div>
      
      {/* 3D Animation Background */}
      <div className="min-h-[50vh] flex items-center justify-center">
        {showAnimation && <AnimationBackground />}
        
        {/* Optional: Fallback image that can be shown if animation is disabled */}
        {!showAnimation && (
          <div ref={heroBackgroundRef} className="absolute inset-0 z-0 overflow-hidden">
            <Image 
              src="/aircargo hero image.jpg" 
              alt="Air Cargo Hero Image" 
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              className="opacity-70 transition-transform duration-1000"
            />
          </div>
        )}
      </div>

      {/* Feature Cards and CTA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10" style={{ marginTop: '-40px' }}>
        {/* Key Features */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-8 md:mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Feature 1 */}
          <motion.div 
            className="flex items-center space-x-3 md:space-x-4 p-1 md:p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div 
              className="bg-[#FFF0E6] rounded-full p-2 md:p-3 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </motion.div>
            <div className="text-left">
              <p className="text-base md:text-lg font-bold text-white">Save up to 80%</p>
              <p className="text-xs md:text-sm text-gray-300">compared to direct bookings</p>
            </div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="flex items-center space-x-3 md:space-x-4 p-1 md:p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div 
              className="bg-[#FFF0E6] rounded-full p-2 md:p-3 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </motion.div>
            <div className="text-left">
              <p className="text-base md:text-lg font-bold text-white">All-in-one-Platform</p>
              <p className="text-xs md:text-sm text-gray-300">compare, book & manage</p>
            </div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="flex items-center space-x-3 md:space-x-4 p-1 md:p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div 
              className="bg-[#FFF0E6] rounded-full p-2 md:p-3 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </motion.div>
            <div className="text-left">
              <p className="text-base md:text-lg font-bold text-white">Total flexibility</p>
              <p className="text-xs md:text-sm text-gray-300">No contract commitment</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-6 md:mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block"
          >
            <Link href="#contact" className="bg-[#FF6700] hover:bg-[#E05A00] text-white px-8 py-4 rounded-lg font-medium text-lg inline-block transition-all duration-300 shadow-lg hover:shadow-xl">
              Get a Free Air Freight Quotation
            </Link>
          </motion.div>
        </motion.div>
      </div>


    </div>
  );
}
