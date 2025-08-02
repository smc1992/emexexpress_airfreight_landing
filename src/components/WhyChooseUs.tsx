"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Regular & Charter Flights",
      description: "For maximum speed and flexibility",
      icon: (
        <svg className="w-8 h-8 text-[#FF6700]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.5H2C1.44772 16.5 1 16.0523 1 15.5V13.5C1 12.9477 1.44772 12.5 2 12.5H22C22.5523 12.5 23 12.9477 23 13.5V15.5C23 16.0523 22.5523 16.5 22 16.5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M16 8.5H8C7.44772 8.5 7 8.05228 7 7.5V5.5C7 4.94772 7.44772 4.5 8 4.5H16C16.5523 4.5 17 4.94772 17 5.5V7.5C17 8.05228 16.5523 8.5 16 8.5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M19 20.5H5C4.44772 20.5 4 20.0523 4 19.5V17.5C4 16.9477 4.44772 16.5 5 16.5H19C19.5523 16.5 20 16.9477 20 17.5V19.5C20 20.0523 19.5523 20.5 19 20.5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M12 12.5V4.5" stroke="currentColor" strokeWidth="2" />
          <path d="M12 20.5V16.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Rapid Pickup & Cargo Handling",
      description: "No delays, no excuses",
      icon: (
        <svg className="w-8 h-8 text-[#FF6700]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M16.5 7.5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7.5 7.5L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16.5 16.5L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7.5 16.5L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "End-to-End Airfreight Project Management",
      description: "One point of contact, complete oversight",
      icon: (
        <svg className="w-8 h-8 text-[#FF6700]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" />
          <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="relative inline-block">
            EMEX EXPRESS fixes this with:
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex flex-col h-full">
                <div className="relative h-40 w-full bg-[#001E3C] flex items-center justify-center">
                  <div className="bg-white rounded-full p-4">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
