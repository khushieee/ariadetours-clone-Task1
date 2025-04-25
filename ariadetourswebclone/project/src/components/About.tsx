import React from 'react';
import { Award, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              About Aria Detours
            </h2>
            <p className="text-gray-600 mb-6">
              Founded by passionate travel enthusiasts, Aria Detours has been crafting unforgettable luxury journeys since 2015. We believe that travel should be more than just visiting places—it should be about creating profound connections and transformative experiences.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of expert travel curators personally explores each destination, forming relationships with local partners to provide you with authentic, immersive, and seamless experiences that go beyond the ordinary.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Award-Winning Service</h3>
                  <p className="text-gray-600">Recognized for excellence in luxury travel and personalized service.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Expert Local Guides</h3>
                  <p className="text-gray-600">Our knowledgeable guides provide insider access and cultural insights.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Guaranteed Peace of Mind</h3>
                  <p className="text-gray-600">Comprehensive support and flexible booking policies for worry-free travel.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Beautiful destination" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Travel experience" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img 
                src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=600" 
                alt="Luxury accommodation" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Cultural experience" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;