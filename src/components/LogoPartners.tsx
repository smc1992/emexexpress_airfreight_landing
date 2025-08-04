"use client";

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/airlinePartners.css';

export default function LogoPartners() {
  return (
    <section className="py-16 bg-[#1A202C] airline-partners-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Global Airline Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Partner 1 - Lufthansa */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Lufthansa Cargo</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 2 - Emirates */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Emirates SkyCargo</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 3 - Qatar */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Qatar Airways Cargo</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 4 - Turkish */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Turkish Cargo</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 5 - Cargolux */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Cargolux</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 6 - DHL */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">DHL Express</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 7 - Etihad */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Etihad Cargo</div>
              </div>
            </div>
          </motion.div>
          
          {/* Partner 8 - Air France-KLM */}
          <motion.div 
            className="card emex h-24 flex items-center justify-center bg-[#1A202C] rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-white">Air France-KLM Cargo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
