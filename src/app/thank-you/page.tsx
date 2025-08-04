"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Script from 'next/script';

// Add type declaration for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // This will run only on the client side
    if (typeof window !== 'undefined' && window.gtag) {
      // Google Ads conversion tracking
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17434253820/g41jCIeJpv8aEPyzpvlA',
        'value': 1.0,
        'currency': 'EUR'
      });
    }
  }, []);

  return (
    <div className="bg-[#001E3C] min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full bg-[#0A2540] p-8 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="mb-8 mx-auto"
            >
              <svg className="w-24 h-24 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            
            <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-xl text-white mb-6">
              Your request has been submitted successfully.
            </p>
            <p className="text-lg text-white mb-8">
              One of our experts will contact you shortly to discuss your airfreight needs.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8"
            >
              <Link href="/">
                <span className="inline-flex items-center bg-[#FF6700] hover:bg-[#E05D00] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      

    </div>
  );
}
