"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturePoints() {
  const features = [
    {
      title: "Save up to 80%",
      description: "compared to direct bookings"
    },
    {
      title: "All-in-one-Platform",
      description: "compare, book & manage"
    },
    {
      title: "Total flexibility",
      description: "No contract commitment"
    },
    {
      title: "Individual consulting",
      description: "worry-free shipping"
    }
  ];

  return (
    <div className="bg-[#001E3C] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 my-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-[#FF6700]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-white">{feature.title}</p>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
