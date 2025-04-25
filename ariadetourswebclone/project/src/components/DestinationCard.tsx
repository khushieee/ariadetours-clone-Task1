import React from 'react';
import { Destination } from '../types';
import { Star, Clock } from 'lucide-react';
import Button from './Button';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-primary-800 flex items-center">
          <Star className="h-3 w-3 text-secondary-500 mr-1" fill="currentColor" />
          {destination.rating}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-primary-800">{destination.name}</h3>
          <span className="text-accent-500 font-semibold">${destination.price}</span>
        </div>
        <div className="flex items-center mb-3 text-primary-600">
          <span>{destination.location}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{destination.duration}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{destination.description}</p>
        <div className="mt-auto">
          <Button variant="primary" className="w-full">View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;