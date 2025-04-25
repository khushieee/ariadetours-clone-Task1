export interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  duration: string;
}

export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}