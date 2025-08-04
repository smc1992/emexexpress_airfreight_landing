"use client";

import React from 'react';

export default function LogoTest() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Logo Test</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/LOGO.png" alt="EMEX Logo" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/Lufthansa.png" alt="Lufthansa" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/Emirates.png.avif" alt="Emirates" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/Katar.png.avif" alt="Qatar" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/turkish-airlines-logo.png.avif" alt="Turkish Airlines" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/Cargolux.png.avif" alt="Cargolux" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/DHL.png.avif" alt="DHL" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/Etihad.png.avif" alt="Etihad" className="max-h-20" />
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32">
            <img src="/aircargo hero image.jpg" alt="Hero Image" className="max-h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
