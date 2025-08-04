"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Data Privacy at Emex Corporate GmbH</h2>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">1. Responsible Body</h3>
            <p className="mb-4">
              Emex Corporate GmbH<br />
              The Squaire 12, Airport<br />
              60549 Frankfurt am Main<br />
              Germany<br /><br />
              Email: <a href="mailto:info@emexcorporate.de" className="text-orange-600 hover:underline">info@emexcorporate.de</a><br />
              Phone: +49 69247455261
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">2. Collection and Processing of Personal Data</h3>
            <p className="mb-4">
              We collect personal data when you provide it to us as part of your order, when you contact us, or when you subscribe to our newsletter. 
              The data collected is indicated in the respective input forms. We use the data you provide to process contracts and your inquiries.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">3. Use and Disclosure of Personal Data</h3>
            <p className="mb-4">
              We use your personal data only to process your inquiries and to handle contracts. Your data will be passed on to the shipping company commissioned with the delivery, 
              insofar as this is necessary for the delivery of the goods. For the processing of payments, we pass on your payment data to the credit institution commissioned with the payment.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">4. Right to Information and Contact Option</h3>
            <p className="mb-4">
              You have the right to free information about your stored data, as well as a right to correction, blocking, or deletion of this data. 
              For questions regarding the collection, processing, or use of your personal data, for information, correction, blocking, or deletion of data, please contact:
            </p>
            <p className="mb-4">
              Emex Corporate GmbH<br />
              The Squaire 12, Airport<br />
              60549 Frankfurt am Main<br />
              Germany<br /><br />
              Email: <a href="mailto:info@emexcorporate.de" className="text-orange-600 hover:underline">info@emexcorporate.de</a><br />
              Phone: +49 69247455261
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">5. Cookies</h3>
            <p className="mb-4">
              Our website uses cookies. Cookies are small text files that are stored on your device and that store certain settings and data for exchange with our system via your browser. 
              Most of the cookies we use are so-called "session cookies", which are automatically deleted after your visit.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">6. Data Security</h3>
            <p className="mb-4">
              We secure our website and other systems through technical and organizational measures against loss, destruction, access, modification, or distribution of your data by unauthorized persons.
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
