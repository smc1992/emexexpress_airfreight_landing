"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ScrollToContactButton() {
  return (
    <div className="mt-12 text-center">
      <Link href="#contact" passHref>
        <motion.button
          className="bg-[#FF6700] hover:bg-[#E05D00] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(255, 103, 0, 0.25)' }}
          whileTap={{ scale: 0.98 }}
        >
          Get Your Free Quotation Now
        </motion.button>
      </Link>
    </div>
  );
}
