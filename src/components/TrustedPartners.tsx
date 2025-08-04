"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TrustedPartners() {
  const industries = [
    { name: "Automotive", icon: "🚗" },
    { name: "Aerospace", icon: "✈️" },
    { name: "Pharmaceuticals", icon: "💊" },
    { name: "Technology", icon: "🖥️" }
  ];

  const partners = [
    { name: "Lufthansa Cargo", logo: "/Lufthansa.png" },
    { name: "Emirates SkyCargo", logo: "/Emirates.png" },
    { name: "Qatar Airways Cargo", logo: "/Katar.png" },
    { name: "Turkish Cargo", logo: "/turkish-airlines-logo.png" },
    { name: "Cargolux", logo: "/Cargolux.png" },
    { name: "DHL", logo: "/DHL.png" },
    { name: "Etihad Cargo", logo: "/Etihad.png" }
  ];

  return (
    <section id="trusted-partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Global Industries
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We proudly serve clients in:
          </p>
        </motion.div>

        {/* Industries We Serve */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.15 } 
            },
            hidden: {}
          }}
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="card emex rounded-xl transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="glow"></span>
              <div className="inner">
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <span className="text-4xl mb-3">{industry.icon}</span>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Testimonial */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-8 mb-16 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-[#FF6700] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-700 italic mb-6">
              "When our supply chain broke down, EMEX didn't. They flew in critical parts overnight. Outstanding partner."
            </p>
            <p className="font-bold text-gray-900">— Head of Procurement, Aerospace Supplier (Germany)</p>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Global Airline Partners
          </h3>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.1 } 
            },
            hidden: {}
          }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="card emex h-24 w-full flex items-center justify-center p-4 bg-white rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="glow"></span>
              <div className="inner p-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="w-full h-16 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
