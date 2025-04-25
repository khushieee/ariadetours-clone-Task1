import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Globe className={`h-8 w-8 ${isScrolled ? 'text-primary-500' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-serif font-bold ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
                Aria Detours
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Destinations
            </a>
            <a href="#experiences" className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Experiences
            </a>
            <a href="#about" className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              About
            </a>
            <a href="#testimonials" className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Testimonials
            </a>
            <a href="#contact" className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-300'}`}>
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <Button 
              variant={isScrolled ? 'primary' : 'outline'} 
              className={isScrolled ? '' : 'border-white text-white hover:bg-white/10'}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-primary-500' : 'text-white'}`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          <a 
            href="#destinations" 
            className="block py-2 text-primary-800 hover:text-primary-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </a>
          <a 
            href="#experiences" 
            className="block py-2 text-primary-800 hover:text-primary-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Experiences
          </a>
          <a 
            href="#about" 
            className="block py-2 text-primary-800 hover:text-primary-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="block py-2 text-primary-800 hover:text-primary-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-primary-800 hover:text-primary-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="pt-2">
            <Button variant="primary" size="md" className="w-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;