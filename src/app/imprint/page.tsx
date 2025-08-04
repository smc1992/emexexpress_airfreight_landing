"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Imprint() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Imprint</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Emex Corporate GmbH</h2>
            <p className="mb-2">The Squaire 12, Airport</p>
            <p className="mb-6">60549 Frankfurt am Main</p>
            <p className="mb-6">Germany</p>
            
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <p className="mb-2">Email: <a href="mailto:info@emexcorporate.de" className="text-orange-600 hover:underline">info@emexcorporate.de</a></p>
            <p className="mb-2">Phone: +49 69247455261</p>
            <p className="mb-2">Fax: +49 69247455289</p>
            <p className="mb-2">Contact Form: <a href="https://www.emexexpress.de" className="text-orange-600 hover:underline">www.emexexpress.de</a></p>
            <p className="mb-6">Further Contact: +49 69247455262</p>
            
            <h3 className="text-lg font-semibold mb-3">Authorized Representatives</h3>
            <p className="mb-6">Represented by: Khammassi Yathreb (Managing Director)</p>
            
            <h3 className="text-lg font-semibold mb-3">Company Information</h3>
            <p className="mb-2">VAT Identification Number (USt-ID): DE354319857</p>
            <p className="mb-6">Business Scope: Air Freight, Import & Export, Trade</p>
            
            <h3 className="text-lg font-semibold mb-3">Register and Register Number</h3>
            <p className="mb-2">Commercial Register Number: HRB 238338 B</p>
            <p className="mb-6">Court of Registry: Charlottenburg</p>
            
            <h3 className="text-lg font-semibold mb-3">Online Dispute Resolution (ODR)</h3>
            <p className="mb-6">
              The European Commission provides a platform for online dispute resolution (ODR), which you can find at <a href="https://ec.europa.eu/consumers/odr/" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>. Consumers have the opportunity to use this platform to resolve their disputes.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">Social Media and Other Online Presences</h3>
            <p className="mb-2">
              This imprint also applies to the following social media presences and online profiles:
            </p>
            <p>
              <a href="https://www.facebook.com/emexairfreight" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/emexairfreight
              </a>
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-orange-600 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
