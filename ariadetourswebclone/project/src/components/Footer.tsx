import React from 'react';
import { Globe, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-secondary-400" />
                <span className="ml-2 text-xl font-serif font-bold">Aria Detours</span>
              </div>
              <p className="text-white/70 mb-6">
                Crafting extraordinary travel experiences that transform and inspire, one journey at a time.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-secondary-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-secondary-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-secondary-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li><a href="#destinations" className="text-white/70 hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#experiences" className="text-white/70 hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Europe</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Asia</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Africa</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Oceania</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Americas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>123 Luxury Lane, Suite 456</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>hello@ariadetours.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <div>
            &copy; {new Date().getFullYear()} Aria Detours. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;