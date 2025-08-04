"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PainPoints() {
  // Definiere Inline-Styles für Text
  const titleStyle = {
    color: '#000000',
    fontWeight: 700,
    fontSize: '1.5rem',
    marginBottom: '0.75rem'
  };
  
  const descriptionStyle = {
    color: '#000000',
    fontSize: '1rem',
    lineHeight: 1.5,
    marginBottom: '1rem'
  };
  
  const solutionStyle = {
    color: '#000000',
    fontWeight: 500
  };
  
  const solutionLabelStyle = {
    fontWeight: 700,
    color: '#000000'
  };
  
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    height: '100%',
    boxShadow: 'none',
    border: 'none'
  };
  
  const painPoints = [
    {
      title: "Missed Delivery Deadlines",
      description: "Traditional freight forwarders often miss critical deadlines, causing production delays and financial losses.",
      solution: "Our 24/7 operations team and priority handling ensure 98.7% on-time delivery performance."
    },
    {
      title: "Lack of Transparency",
      description: "Many providers offer limited visibility into shipment status and location.",
      solution: "Our real-time tracking platform provides minute-by-minute updates and proactive alerts."
    },
    {
      title: "Complex Documentation",
      description: "International shipping requires extensive paperwork that is often error-prone.",
      solution: "Our digital documentation system and customs experts handle all paperwork with 99.9% accuracy."
    },
    {
      title: "Unexpected Costs",
      description: "Hidden fees and surcharges frequently appear on final invoices.",
      solution: "We provide transparent, all-inclusive quotes with no hidden charges."
    }
  ];

  return (
    <section id="pain-points" className="py-16 bg-white">
      <div className="section-container" data-component-name="PainPoints">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Common Airfreight Challenges We Solve
          </h2>
          <p className="section-subtitle">
            We understand the pain points in international air freight and have built solutions to address each one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className=""
              style={{ border: 'none', outline: 'none' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div style={{...cardStyle, border: 'none', boxShadow: 'none', outline: 'none'}}>
                <h3 style={titleStyle}>{point.title}</h3>
                <p style={descriptionStyle}>{point.description}</p>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#FF6700', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p style={solutionStyle}>
                      <span style={solutionLabelStyle}>Our Solution:</span> {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
