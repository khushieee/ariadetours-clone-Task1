import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import DestinationCard from './DestinationCard';

const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Destinations' },
    { id: 'beach', label: 'Beach & Islands' },
    { id: 'mountain', label: 'Mountain & Nature' },
    { id: 'city', label: 'City & Culture' },
  ];

  // In a real app, we'd filter based on a category property
  // Here we're just showing all destinations for demo purposes
  const filteredDestinations = destinations;

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of extraordinary destinations, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-primary-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
            View All Destinations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;