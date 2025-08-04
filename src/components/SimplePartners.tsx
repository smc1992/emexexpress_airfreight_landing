"use client";

import React from 'react';

export default function SimplePartners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Global Airline Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Partner 1 - Lufthansa */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Lufthansa Cargo</div>
              </div>
            </div>
          </div>
          
          {/* Partner 2 - Emirates */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Emirates SkyCargo</div>
              </div>
            </div>
          </div>
          
          {/* Partner 3 - Qatar */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Qatar Airways Cargo</div>
              </div>
            </div>
          </div>
          
          {/* Partner 4 - Turkish */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Turkish Cargo</div>
              </div>
            </div>
          </div>
          
          {/* Partner 5 - Cargolux */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Cargolux</div>
              </div>
            </div>
          </div>
          
          {/* Partner 6 - DHL */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">📦</div>
                <div className="font-bold">DHL Express</div>
              </div>
            </div>
          </div>
          
          {/* Partner 7 - Etihad */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Etihad Cargo</div>
              </div>
            </div>
          </div>
          
          {/* Partner 8 - Air France-KLM */}
          <div className="card emex h-24 flex items-center justify-center bg-white rounded-lg">
            <span className="glow"></span>
            <div className="inner p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="font-bold">Air France-KLM Cargo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
