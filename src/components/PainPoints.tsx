"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollToContactButton from './ScrollToContactButton';
import styles from './PainPoints.module.css';

export default function PainPoints() {
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
    <section 
      id="pain-points" 
      className={styles.section}
      style={{ backgroundImage: "url('/Background-contact section.webp')" }}
    >
      <div className={styles.overlay}></div>
      <div className={`${styles.container} section-container`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.title}
        >
          <h2>Common Airfreight Challenges We Solve</h2>
          <p>We understand the pain points in international air freight and have built solutions to address each one.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className={styles.card}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1rem', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#FF6700', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className={styles.solutionText}><span>Our Solution:</span> {point.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <ScrollToContactButton />
      </div>
    </section>
  );
}
