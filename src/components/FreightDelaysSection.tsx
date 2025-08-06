"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FreightDelaysSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Freight Delays Are Costing You More Than Just Time
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Missed deadlines, broken supply chains, dissatisfied customers — these are the costly consequences
            of unreliable logistics.
          </p>
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          EMEX EXPRESS fixes this with:
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2 text-white">End-to-End Airfreight Project Management</h4>
            <p className="text-gray-200">One point of contact, complete oversight</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
