"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MultiStepForm from './MultiStepForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white" style={{ padding: 'var(--section-padding)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Your Free Air Freight Assessment
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Tell us about your air freight needs and our experts will provide a tailored solution that saves you time and money.
            </p>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>

              <p className="text-gray-700 mb-2">
                The Squaire 12, Frankfurt Airport
              </p>
              <p className="text-gray-700 mb-6">
                60549 Frankfurt, Germany
              </p>
            
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <motion.svg 
                  className="w-5 h-5 text-[#FF6700] mr-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </motion.svg>
                <a href="tel:+4969247455261" className="text-gray-700 hover:text-[#FF6700] transition-colors">
                  +49 69 247455261
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <motion.svg 
                  className="w-5 h-5 text-[#FF6700] mr-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                <a href="mailto:Info@emexexpress.de" className="text-gray-700 hover:text-[#FF6700] transition-colors">
                  Info@emexexpress.de
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <motion.svg 
                  className="w-5 h-5 text-[#FF6700] mr-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                <a href="mailto:Sales@emexexpress.de" className="text-gray-700 hover:text-[#FF6700] transition-colors">
                  Sales@emexexpress.de (Sales Inquiries)
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operating Hours</h3>
              <p className="text-gray-700 font-medium">24/7/365 - We're Always Available</p>
              <p className="text-gray-700 mt-2 mb-6">
                Our team is ready to handle your urgent shipments at any time, day or night, weekends and holidays included.
              </p>
              
              <div className="flex flex-col space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="https://wa.me/4969247455280" className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Request via WhatsApp
                  </a>
                </motion.div>
                
                {/* Freight Consultation button removed as requested */}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="jumingo-card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            id="contact-form"
          >
            <span className="glow"></span>
            <div className="inner">
              <MultiStepForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
