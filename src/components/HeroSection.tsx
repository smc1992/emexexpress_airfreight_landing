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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" style={{ marginTop: "-80px", position: "relative", top: "-40px" }}>
        {/* Key Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div 
              className="bg-[#FFF0E6] rounded-full p-3 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </motion.div>
            <div>
              <p className="text-lg font-bold text-white">Save up to 80%</p>
              <p className="text-sm text-gray-300">compared to direct bookings</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center space-x-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div 
              className="bg-[#FFF0E6] rounded-full p-3 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </motion.div>
            <div>
              <p className="text-lg font-bold text-white">All-in-one-Platform</p>
              <p className="text-sm text-gray-300">compare, book & manage</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center space-x-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div 
              className="bg-[#FFF0E6] rounded-full p-3 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </motion.div>
            <div>
              <p className="text-lg font-bold text-white">Total flexibility</p>
              <p className="text-sm text-gray-300">No contract commitment</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-10 text-center"
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
              Get a Free Air Freight Assessment
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Pain Point Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Freight Delays Are Costing You More Than Just Time
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Missed deadlines, broken supply chains, dissatisfied customers — these are the costly consequences
              of unreliable logistics.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">EMEX EXPRESS fixes this with:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#001E3C] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-[#FFF0E6] rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Regular & Charter Flights</h4>
              <p className="text-gray-200">For maximum speed and flexibility</p>
            </div>
            
            <div className="bg-[#001E3C] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-[#FFF0E6] rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Rapid Pickup & Cargo Handling</h4>
              <p className="text-gray-200">No delays, no excuses</p>
            </div>
            
            <div className="bg-[#001E3C] rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-[#FFF0E6] rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">End-to-End Airfreight Project Management</h4>
              <p className="text-gray-200">One point of contact, complete oversight</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-2xl font-bold text-white italic bg-[#001E3C] p-4 rounded-lg inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              We don't just move cargo. We move business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
