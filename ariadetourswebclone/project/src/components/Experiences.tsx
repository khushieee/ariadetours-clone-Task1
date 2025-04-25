import React from 'react';
import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';
import Button from './Button';

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="md:max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Curated Travel Experiences
            </h2>
            <p className="text-gray-600">
              Immerse yourself in extraordinary adventures crafted by our travel experts. 
              Each experience is thoughtfully designed to create memories that last a lifetime.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="border-primary-500">
              All Experiences
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;