// Animation utility functions and configurations
import AOS from 'aos';

// Initialize AOS (Animate On Scroll)
export const initializeAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    offset: 100,
  });
};

// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

export const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

// Parallax effect for hero section
export const parallaxEffect = (element: HTMLElement, scrollPosition: number, speed: number = 0.5) => {
  const offset = scrollPosition * speed;
  element.style.transform = `translateY(${offset}px)`;
};

// Scroll-triggered progress bar
export const initScrollProgress = () => {
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });
};
