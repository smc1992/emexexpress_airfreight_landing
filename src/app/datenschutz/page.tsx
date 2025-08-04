"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Datenschutz bei Emex Corporate GmbH</h2>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">1. Verantwortliche Stelle</h3>
            <p className="mb-4">
              Emex Corporate GmbH<br />
              The Squaire 12, Airport<br />
              60549 Frankfurt am Main<br />
              Deutschland<br /><br />
              E-Mail: <a href="mailto:info@emexcorporate.de" className="text-orange-600 hover:underline">info@emexcorporate.de</a><br />
              Telefon: +49 69247455261
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p className="mb-4">
              Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung, bei einer Kontaktaufnahme mit uns oder bei Anmeldung zu unserem Newsletter mitteilen. 
              Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von Ihnen mitgeteilten Daten zur Vertragsabwicklung und zur Bearbeitung Ihrer Anfragen.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">3. Nutzung und Weitergabe personenbezogener Daten</h3>
            <p className="mb-4">
              Wir nutzen Ihre personenbezogenen Daten nur zur Bearbeitung Ihrer Anfragen und zur Abwicklung von Verträgen. Eine Weitergabe Ihrer Daten erfolgt an das mit der Lieferung beauftragte Versandunternehmen, 
              soweit dies zur Lieferung der Waren notwendig ist. Zur Abwicklung von Zahlungen geben wir Ihre Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut weiter.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">4. Auskunftsrecht und Kontaktmöglichkeit</h3>
            <p className="mb-4">
              Sie haben ein Recht auf unentgeltliche Auskunft über Ihre bei uns gespeicherten Daten sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. 
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
            </p>
            <p className="mb-4">
              Emex Corporate GmbH<br />
              The Squaire 12, Airport<br />
              60549 Frankfurt am Main<br />
              Deutschland<br /><br />
              E-Mail: <a href="mailto:info@emexcorporate.de" className="text-orange-600 hover:underline">info@emexcorporate.de</a><br />
              Telefon: +49 69247455261
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">5. Cookies</h3>
            <p className="mb-4">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die bestimmte Einstellungen und Daten zum Austausch mit unserem System über Ihren Browser speichern. 
              Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies", die nach Ende Ihres Besuchs automatisch gelöscht werden.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">6. Datensicherheit</h3>
            <p className="mb-4">
              Wir sichern unsere Website und sonstigen Systeme durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen.
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
