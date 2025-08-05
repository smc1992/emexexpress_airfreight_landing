"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MultiStepForm from './MultiStepForm';

export default function RequestFormSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Air Freight Quotation
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Tell us about your air freight needs and our experts will provide a tailored solution that saves you time and money.
          </p>
        </motion.div>
        <MultiStepForm />
      </div>
    </section>
  );
}
