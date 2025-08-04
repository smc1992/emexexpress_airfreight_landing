"use client";

import React, { useEffect } from 'react';
import ScrollProgressBar from './ScrollProgressBar';
import { initializeAOS } from '../utils/animations';
import { initGlowingCards } from '../utils/glowingCard';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS animations
    initializeAOS();
    
    // Initialize glowing card effects
    setTimeout(() => {
      initGlowingCards();
    }, 500);
    
    // Re-initialize AOS and glowing cards on window resize for responsive animations
    const handleResize = () => {
      initializeAOS();
      initGlowingCards();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  );
}
