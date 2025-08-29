"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollToContactButton from './ScrollToContactButton';

export default function AboutSection() {
  const features = [
    { 
      icon: "🇩🇪", 
      text: "German Excellence – Based at Frankfurt Airport, Europe's #1 Cargo Hub" 
    },
    { 
      icon: "✅", 
      text: "IATA Certified · 25+ Years of Experience · European Market Leader" 
    },
    { 
      icon: "🌐", 
      text: "From Europe to the World – Global Partner Network · Fast-Track Customs" 
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About EMEX EXPRESS
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your trusted German air cargo partner, operating from Frankfurt Airport – Europe's leading cargo hub. 
              We connect businesses across Europe with destinations worldwide through our comprehensive airfreight solutions.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <span className="text-3xl mr-4">{feature.icon}</span>
                  <span className="text-lg text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 text-xl font-medium text-gray-700 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              "From first contact to final delivery — we deliver reliability."
            </motion.div>
            
            <div className="mt-10">
              <ScrollToContactButton />
            </div>
          </motion.div>
          
          <motion.div
            className="card emex rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="glow"></span>
            <div className="inner p-0">
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/aircargo hero image.jpg" 
                  alt="EMEX EXPRESS Air Freight" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
