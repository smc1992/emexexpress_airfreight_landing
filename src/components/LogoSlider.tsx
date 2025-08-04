"use client";

import React from 'react';
import '../styles/logoSlider.css';

export default function LogoSlider() {
  // Duplicate logos for continuous scrolling effect
  const partners = [
    { name: "Lufthansa Cargo", logo: "/Lufthansa.png" },
    { name: "Emirates SkyCargo", logo: "/Emirates.png" },
    { name: "Qatar Airways Cargo", logo: "/Katar.png" },
    { name: "Turkish Cargo", logo: "/turkish-airlines-logo.png" },
    { name: "Cargolux", logo: "/Cargolux.png" },
    { name: "DHL", logo: "/DHL.png" },
    { name: "Etihad Cargo", logo: "/Etihad.png" }
  ];
  
  // Duplicate the array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-gradient-blue-orange" style={{ padding: 'var(--section-padding)' }}>
      <div className="section-container">
        <h2 className="section-title text-white">
          Our Global Airline Partners
        </h2>
        
        <div className="slider dark-mode bg-[#001E3C]">
          <div className="slide-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="slide">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
