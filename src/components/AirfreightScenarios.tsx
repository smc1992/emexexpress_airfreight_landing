"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollToContactButton from './ScrollToContactButton';

export default function AirfreightScenarios() {
  const scenarios = [
    {
      title: "Aircraft-on-Ground (AOG)",
      description: "Emergency delivery of aircraft parts within 12 hours to avoid costly ground time. Example: Turbine components Frankfurt → Dubai overnight.",
      image: "/aircraft-on-ground--aog--emergency-delivery-of-air.webp",
      icon: (
        <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18l9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      title: "Oversized Machinery Transport",
      description: "Safe and compliant handling of heavy industrial equipment. Example: 3.5-ton CNC machine Germany → Malaysia with specialized loading equipment.",
      image: "/oversized machinery transport.webp",
      icon: (
        <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Cold Chain Pharma Shipments",
      description: "Temperature-controlled logistics for sensitive pharmaceuticals with real-time tracking & compliance with GDP standards. Example: Insulin Frankfurt → Lagos with thermal packaging.",
      image: "/cold-chain-pharma-shipments-temperature-controlled.webp",
      icon: (
        <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Perishable Goods Logistics",
      description: "Time-critical delivery of perishables including fresh produce, seafood, and flowers. Active/passive cooling solutions & fast customs processing. Example: German strawberries → Doha in 24 hours.",
      image: "/perishable-goods-logistics-time-critical-delivery-.webp",
      icon: (
        <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Dangerous Goods (DGR) Transport",
      description: "Certified DGR handling (IATA standards) for batteries, chemicals, and more. Full documentation, labeling & airline coordination. Example: Lithium-ion batteries Frankfurt → Riyadh.",
      image: "/dangerous-goods--dgr--transport-certified-dgr-hand.webp",
      icon: (
        <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Automotive Prototype Shipment",
      description: "A German automaker needed to transport secret prototype parts to a testing facility in South Africa. We provided secure, monitored transport with real-time tracking.",
      image: "/automotive transport.webp",
      icon: (
        <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    }
  ];

  return (
    <section id="scenarios" className="bg-light-gray" style={{ padding: 'var(--section-padding)' }}>
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">
            Real Airfreight Scenarios We've Handled
          </h2>
          <p className="section-subtitle">
            See how we've solved complex logistics challenges for our clients
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.2 } 
            },
            hidden: {}
          }}
        >
          {scenarios.map((scenario, index) => (
            <motion.div 
              key={index} 
              className="jumingo-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="glow"></span>
              <div className="inner" style={{ padding: '1.5rem' }}>
                {/* Bild am Anfang der Karte */}
                <div className="mb-4 rounded-lg overflow-hidden" style={{ height: '200px' }}>
                  <Image 
                    src={scenario.image}
                    alt={scenario.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <header className="mt-4">
                  <motion.div 
                    className="bg-[#FFF0E6] rounded-full p-3"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {scenario.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                </header>
                <div className="content">
                  <p className="text-gray-700">{scenario.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollToContactButton />
      </div>
    </section>
  );
}
