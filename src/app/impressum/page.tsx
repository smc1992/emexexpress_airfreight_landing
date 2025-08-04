"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Emex Corporate GmbH</h2>
            <p className="mb-2">The Squaire 12, Airport</p>
            <p className="mb-6">60549 Frankfurt am Main</p>
            <p className="mb-6">Deutschland</p>
            
            <h3 className="text-lg font-semibold mb-3">Kontaktmöglichkeiten</h3>
            <p className="mb-2">E-Mail-Adresse: <a href="mailto:info@emexcorporate.de" className="text-orange-600 hover:underline">info@emexcorporate.de</a></p>
            <p className="mb-2">Telefon: +49 69247455261</p>
            <p className="mb-2">Fax: +49 69247455289</p>
            <p className="mb-2">Kontaktformular: <a href="https://www.emexexpress.de" className="text-orange-600 hover:underline">www.emexexpress.de</a></p>
            <p className="mb-6">Weitere Kontaktmöglichkeiten: +49 69247455262</p>
            
            <h3 className="text-lg font-semibold mb-3">Vertretungsberechtigte Personen</h3>
            <p className="mb-6">Vertretungsberechtigt: Khammassi Yathreb (Geschäftsführerin)</p>
            
            <h3 className="text-lg font-semibold mb-3">Angaben zum Unternehmen</h3>
            <p className="mb-2">Umsatzsteuer Identifikationsnummer (USt-ID): DE354319857</p>
            <p className="mb-6">Geschäftsbereich: Luftfracht, Import & Export, Handel</p>
            
            <h3 className="text-lg font-semibold mb-3">Register und Registernummer</h3>
            <p className="mb-2">Handelsregister Nummer: HRB 238338 B</p>
            <p className="mb-6">Geführt bei: Charlottenburg</p>
            
            <h3 className="text-lg font-semibold mb-3">Online-Streitbeilegung (OS)</h3>
            <p className="mb-6">
              Online-Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, 
              die Sie unter <a href="https://ec.europa.eu/consumers/odr/" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a> finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">Social Media und andere Onlinepräsenzen</h3>
            <p className="mb-2">
              Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:
            </p>
            <p>
              <a href="https://www.facebook.com/emexairfreight" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/emexairfreight
              </a>
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-orange-600 hover:underline">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
