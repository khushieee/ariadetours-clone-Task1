import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why our guests choose Aria Detours for their extraordinary journeys.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Controls */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10">
              <button 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-500 hover:text-primary-700 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10">
              <button 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary-500 hover:text-primary-700 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-lg shadow-soft p-6 md:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-secondary-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary-500 rounded-full p-1">
                    <Star size={14} fill="white" stroke="none" />
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="text-secondary-500" 
                      fill="currentColor" 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <h4 className="font-serif text-xl font-semibold text-primary-800">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-500">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-secondary-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;