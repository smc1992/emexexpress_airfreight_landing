"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactInfoSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us Directly
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We are here for you. Reach out to us via phone, email, or visit us at our Frankfurt Airport location.
          </p>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
            <p className="text-gray-700 mb-2">
              The Squaire 12, Frankfurt Airport
            </p>
            <p className="text-gray-700 mb-6">
              60549 Frankfurt, Germany
            </p>
            
            <div className="space-y-4 text-left">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <svg className="w-5 h-5 text-[#FF6700] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+4969247455261" className="text-gray-700 hover:text-[#FF6700] transition-colors">
                  +49 69 247455261
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <svg className="w-5 h-5 text-[#FF6700] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Info@emexexpress.de" className="text-gray-700 hover:text-[#FF6700] transition-colors">
                  Info@emexexpress.de
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.847 6.061l-1.219 4.439 4.555-1.192z"/>
                </svg>
                <a href="https://wa.me/4969247455280" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-500 transition-colors">
                  Request via WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
