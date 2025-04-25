import React from 'react';
import Button from './Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to start planning your next extraordinary journey? Our travel experts are here to help create your perfect experience.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Email</h3>
                  <p className="text-gray-600">hello@ariadetours.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Our Office</h3>
                  <p className="text-gray-600">123 Luxury Lane, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary-50 p-3 rounded-full">
                  <Clock className="h-5 w-5 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary-800">Working Hours</h3>
                  <p className="text-gray-600">Monday to Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h3 className="font-serif text-2xl font-semibold text-primary-800 mb-6">
                Get in Touch
              </h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-800 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary-800 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-800 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="destination" className="block text-sm font-medium text-primary-800 mb-1">
                    Preferred Destination
                  </label>
                  <select
                    id="destination"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a destination</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="oceania">Oceania</option>
                    <option value="americas">Americas</option>
                    <option value="multiple">Multiple Destinations</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;