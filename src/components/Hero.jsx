import { ChevronDown, Heart, Star, Zap, Shield, Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

import { useEffect, useState } from "react";

// Hero Component
export const Hero = ({ onExploreClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1605027990121-3b2c58c083ba?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-400 via-yellow-400 to-red-400 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-300 rounded-full opacity-25 animate-bounce delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                Mango
                <span className="block text-yellow-200 drop-shadow-lg">Magic</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                Discover the tropical paradise of premium mangoes. Sweet, juicy, and bursting with sunshine in every bite.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onExploreClick}
                className="group bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Mangoes
                <ChevronDown className="inline-block w-5 h-5 ml-2 group-hover:animate-bounce" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80">Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/80">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80">Fresh</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mango Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-30 scale-110 animate-pulse"></div>
              <img 
                src={heroImages[currentImageIndex]}
                alt="Fresh Mangoes" 
                className="relative z-10 w-96 h-96 object-cover rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-orange-800 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                🥭 Fresh Daily!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};