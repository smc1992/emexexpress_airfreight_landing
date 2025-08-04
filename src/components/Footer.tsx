"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#001E3C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/LOGO.png" 
                alt="EMEX EXPRESS Logo" 
                width={240} 
                height={240} 
                className="bg-white p-2 rounded-sm"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for time-critical and oversized air freight solutions. Located at Frankfurt Airport, serving clients worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#scenarios" className="text-gray-400 hover:text-white transition-colors">
                  Airfreight Scenarios
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Time-Critical Shipments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Oversized Cargo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Charter Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  AOG Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#FF6700] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-400">
                  <p>The Squaire 12, Frankfurt Airport</p>
                  <p>60549 Frankfurt</p>
                  <p>Germany</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#FF6700] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.894 21.408c-1.756 0-3.462-.478-4.946-1.39l-.354-.21-3.667.964.985-3.595-.23-.372a9.513 9.513 0 01-1.435-5.039c0-5.284 4.293-9.577 9.577-9.577s9.577 4.293 9.577 9.577-4.293 9.577-9.577 9.577h-.001zm0-17.56c-4.385 0-7.95 3.566-7.95 7.95 0 1.725.555 3.351 1.512 4.681l.235.376-.998 3.646 3.742-1.01.364.219a7.953 7.953 0 004.096 1.138h.001c4.385 0 7.95-3.566 7.95-7.95s-3.565-7.95-7.95-7.95z" fillRule="evenodd" clipRule="evenodd"/>
                </svg>
                <a href="https://wa.me/4969247455280" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#FF6700] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@emexexpress.de" className="text-gray-400 hover:text-white transition-colors">
                  info@emexexpress.de
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Emex Express Germany. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">
                Data Privacy
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">
                Imprint
              </Link>
            </div>
          </div>
          
          {/* Payment Logos */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 pt-4 border-t border-gray-800">
            <div className="text-center w-full mb-2">
              <p className="text-gray-400 text-sm">Payment Methods</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Image 
                src="/logos/Google_Pay_Logo.svg.png" 
                alt="Google Pay" 
                width={60} 
                height={30} 
                className="object-contain h-8" 
              />
              <Image 
                src="/logos/mini-hero-applepay.png" 
                alt="Apple Pay" 
                width={60} 
                height={30} 
                className="object-contain h-8" 
              />
              <Image 
                src="/logos/neues-mastercard-logo2019.jpg" 
                alt="Mastercard" 
                width={60} 
                height={30} 
                className="object-contain h-8" 
              />
              <Image 
                src="/logos/paypal.png" 
                alt="PayPal" 
                width={60} 
                height={30} 
                className="object-contain h-8" 
              />
              <Image 
                src="/logos/sepa_21x9.png.webp" 
                alt="SEPA" 
                width={60} 
                height={30} 
                className="object-contain h-8" 
              />
              <Image 
                src="/logos/Visa_2021.svg.png" 
                alt="Visa" 
                width={60} 
                height={30} 
                className="object-contain h-8" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
