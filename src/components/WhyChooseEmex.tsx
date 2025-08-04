"use client";

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/whyChooseEmex.css';

export default function WhyChooseEmex() {
  const features = [
    {
      title: "Strategic FRA Location",
      description: "Direct access to Europe's busiest cargo hub • Pickup from all Western European cities",
      icon: "🏢"
    },
    {
      title: "24/7/365 Operations",
      description: "We fly when others sleep — emergency-ready",
      icon: "🕒"
    },
    {
      title: "Oversized & Heavy Cargo Experts",
      description: "Machinery, Automotives, AOG — handled fast and safe",
      icon: "🚚"
    },
    {
      title: "Advanced Logistics & Aviation Expertise",
      description: "Overflight permissions, load planning, ground handling",
      icon: "✈️"
    },
    {
      title: "Customs Clearance & Compliance Support",
      description: "Fast-track with bonded warehouse access & regulatory know-how",
      icon: "📋"
    }
  ];

  return (
    <section id="why-us" className="bg-gradient-blue-orange py-16" style={{ padding: 'var(--section-padding)' }}>
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title text-white">Why Choose EMEX EXPRESS?</h2>
          <p className="section-subtitle text-white">We combine expertise, technology, and a global network to deliver exceptional airfreight solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="emex-feature-box jumingo-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="emex-feature-box-inner">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{feature.icon}</span>
                  <h3 className="emex-feature-title">{feature.title}</h3>
                </div>
                <p className="emex-feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
