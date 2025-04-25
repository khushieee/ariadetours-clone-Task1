import React from 'react';
import { Experience } from '../types';
import Button from './Button';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image with overlay */}
      <div className="aspect-w-3 aspect-h-2 relative">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-72 object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-primary-900/30 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full mb-3">
          {experience.category}
        </span>
        <h3 className="font-serif text-xl font-semibold mb-2">{experience.title}</h3>
        <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {experience.description}
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-white text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;