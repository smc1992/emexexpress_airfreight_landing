"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ShippingDestinations() {
  const europeanDestinations = [
    { name: "France" },
    { name: "Italy" },
    { name: "Spain" },
    { name: "Netherlands" },
    { name: "Belgium" },
    { name: "Switzerland" },
    { name: "Austria" },
    { name: "Poland" },
    { name: "Liechtenstein" },
    { name: "Slovakia" },
    { name: "Czech Republic" },
    { name: "Luxembourg" }
  ];

  const worldwideDestinations = [
    { name: "United States" },
    { name: "Canada" },
    { name: "China" },
    { name: "Japan" },
    { name: "Australia" },
    { name: "UAE" },
    { name: "Singapore" },
    { name: "Hong Kong" },
    { name: "India" },
    { name: "Brazil" },
    { name: "Nigeria" },
    { name: "Mexico" },
    { name: "Saudi Arabia" },
    { name: "South Africa" },
    { name: "South Korea" }
  ];

  return (
    <section className="bg-gray-100 py-16" style={{ padding: 'var(--section-padding)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-gray-900">
            International Shipping Network
          </h2>
          <p className="section-subtitle text-gray-700">
            Our extensive global network ensures reliable and efficient air freight services to these key destinations and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* European Destinations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#001E3C] mb-6 border-b border-gray-200 pb-3">
              International Airfreight Service Zone
            </h3>
            <ul className="space-y-3">
              {europeanDestinations.map((destination, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="transition-all hover:translate-x-2"
                >
                  <div className="flex items-center text-gray-700">
                    <svg 
                      className="w-5 h-5 mr-2 text-[#FF6700]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    From {destination.name} to Worldwide
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Worldwide Destinations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#001E3C] mb-6 border-b border-gray-200 pb-3">
              Germany to Worldwide
            </h3>
            <ul className="space-y-3">
              {worldwideDestinations.map((destination, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="transition-all hover:translate-x-2"
                >
                  <div className="flex items-center text-gray-700">
                    <svg 
                      className="w-5 h-5 mr-2 text-[#FF6700]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Germany to {destination.name}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
