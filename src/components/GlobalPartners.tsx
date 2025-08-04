"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GlobalPartners() {
  const partners = [
    { name: "Lufthansa Cargo", logo: "/partner-lufthansa.png" },
    { name: "Emirates SkyCargo", logo: "/partner-emirates.png" },
    { name: "Qatar Airways Cargo", logo: "/partner-qatar.png" },
    { name: "Turkish Cargo", logo: "/partner-turkish.png" },
    { name: "Cargolux", logo: "/partner-cargolux.png" },
    { name: "Air France-KLM Cargo", logo: "/partner-airfrance.png" }
  ];

  return (
    <section id="global-partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Airline Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain strategic partnerships with the world's leading cargo airlines to ensure reliable capacity and competitive rates for your shipments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="card emex h-24 w-full flex items-center justify-center p-4 bg-white rounded-lg">
                <span className="glow"></span>
                <div className="inner p-0 flex items-center justify-center w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
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
