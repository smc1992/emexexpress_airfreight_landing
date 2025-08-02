"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ShippingOffers() {
  const offers = [
    {
      title: "FROM PACKAGES TO PALLETS",
      description: "Whether large or small, light or heavy, one or hundreds of shipments - you can count on us.",
      image: "/packages-pallets.jpg",
      buttonText: "BOOK NOW",
      buttonLink: "#contact"
    },
    {
      title: "INTERNATIONAL SHIPPING",
      description: "Whether near or far, our experts can advise you at any time on topics such as customs clearance, AED creation etc.",
      image: "/international-shipping.jpg",
      buttonText: "DISCOVER NOW",
      buttonLink: "#contact"
    },
    {
      title: "EXPRESS SHIPPING",
      description: "Whether you want your delivery to arrive in a week or the very next day, you can rely on us.",
      image: "/express-shipping.jpg",
      buttonText: "SHIP NOW",
      buttonLink: "#contact"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="relative inline-block">
            OUR SHIPPING OFFERS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6700]"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="card emex rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span className="glow"></span>
              <div className="inner">
                <div className="relative h-48 w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{offer.title}</h3>
                  <p className="text-gray-300 mb-6">{offer.description}</p>
                  <motion.a
                    href={offer.buttonLink}
                    className="inline-block bg-[#FF6700] hover:bg-[#E05A00] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {offer.buttonText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
