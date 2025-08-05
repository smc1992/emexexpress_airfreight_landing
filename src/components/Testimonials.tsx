'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    name: 'Shady Elprince',
    review: 'I am very satisfied with the service from Emex Express. The shipping was fast, reliable, and professional. My shipment was delivered on time and in perfect condition.',
    stars: 5,
  },
  {
    name: 'Dhouha Masur',
    review: 'It couldn\'t be better! From pickup to delivery – everything went smoothly. Friendly, professional, and extremely fast. Emex Express is my new favorite for all shipments!',
    stars: 5,
  },
  {
    name: 'Dalia El-Abd',
    review: 'Very good service, professional staff. Thank you for the fast delivery and your follow-up procedure. Highly recommended for any shipping needs.',
    stars: 5,
  },
  {
    name: 'Lina Hamrouni',
    review: 'Wow, just wow! I have rarely experienced such fast and reliable shipping. Everything was handled perfectly from start to finish. Absolutely top-tier service!',
    stars: 5,
  },
  {
    name: 'Lars Thomsen',
    review: 'After struggling with other carriers, we called EMEX Express and they helped us out immediately. All sorted, easy, and we got our things shipped - really grateful.',
    stars: 5,
  },
];

const StarIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 11.1c1.8 0 3.2-1.4 3.2-3.2 0-1.8-1.4-3.2-3.2-3.2s-3.2 1.4-3.2 3.2c0 1.8 1.4 3.2 3.2 3.2z"/>
        <path d="M12 14.3c-2.4 0-4.5.9-4.5 2.1v.5c0 .6.4 1.1 1 1.1h7c.6 0 1-.5 1-1.1v-.5c0-1.2-2.1-2.1-4.5-2.1z"/>
    </svg>
);


const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>What Our Customers Say</h2>
          <div className={styles.overallRating}>
            <span className={styles.ratingText}>5.0</span>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6" />
              ))}
            </div>
            <span className={styles.ratingSource}>based on real Google reviews</span>
          </div>
          <p>Real reviews from real business partners.</p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <svg className={styles.quoteIcon} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.999-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.982z"/></svg>
                <div className={styles.stars}>
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className={styles.reviewText}>"{testimonial.review}"</p>
                <p className={styles.author}>- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.googleButtonContainer}>
            <a href="https://www.google.com/maps/place/Emex+Express/@50.0526726,8.5655975,17z/data=!3m2!4b1!5s0x8c9835c7292e5479:0xf541f99a7158e98a!4m6!3m5!1s0x47bd0b5a718c3457:0xf4a8275c8b5a55bb!8m2!3d50.0526692!4d8.5681724!16s%2Fg%2F11pfwk3vw5?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.googleButton}>
                <GoogleIcon />
                <span>Verified on Google</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
