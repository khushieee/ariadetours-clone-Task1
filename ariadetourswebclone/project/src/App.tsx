import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import './index.css';

function App() {
  // Add smooth scrolling behavior for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <About />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;