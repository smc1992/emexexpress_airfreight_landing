"use client";

import React, { useEffect } from 'react';

export default function ScrollProgressBar() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        id="scroll-progress" 
        className="h-full bg-[#FF6700] w-0 transition-all duration-100"
      ></div>
    </div>
  );
}
