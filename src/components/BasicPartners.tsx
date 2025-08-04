"use client";

import React from 'react';

export default function BasicPartners() {
  const partners = [
    { name: "Lufthansa Cargo", logo: "/Lufthansa.png" },
    { name: "Emirates SkyCargo", logo: "/Emirates.png" },
    { name: "Qatar Airways Cargo", logo: "/Katar.png" },
    { name: "Turkish Cargo", logo: "/turkish-airlines-logo.png" },
    { name: "Cargolux", logo: "/Cargolux.png" },
    { name: "DHL", logo: "/DHL.png" },
    { name: "Etihad Cargo", logo: "/Etihad.png" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Global Airline Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="w-full h-16 object-contain"
              />
              <p className="text-center mt-2 font-medium text-white">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
