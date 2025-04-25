import React from 'react';
import Button from './Button';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 to-primary-900/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-[fadeIn_1.2s_ease-in-out]">
          Extraordinary <span className="text-secondary-400">Travel</span> Experiences
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-[fadeIn_1.5s_ease-in-out]">
          Discover handcrafted journeys to the world's most captivating destinations, 
          curated by our luxury travel experts.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-[fadeIn_1.8s_ease-in-out]">
          <Button variant="secondary" size="lg" className="min-w-[180px]">
            Explore Destinations
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[180px] border-white text-white hover:bg-white/10"
          >
            View Experiences
          </Button>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-medium p-4 md:p-6 animate-[fadeIn_2s_ease-in-out]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="destination" className="block text-sm font-medium text-primary-800 mb-1 text-left">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Where would you like to go?"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="dates" className="block text-sm font-medium text-primary-800 mb-1 text-left">
                Dates
              </label>
              <input
                type="text"
                id="dates"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Select dates"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="guests" className="block text-sm font-medium text-primary-800 mb-1 text-left">
                Travelers
              </label>
              <select
                id="guests"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none bg-white"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="family">Family</option>
              </select>
            </div>
            <div className="self-end">
              <Button variant="primary" size="lg" className="h-full">
                <Search className="h-5 w-5 mr-2" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;