import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Star, Zap, Shield, Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Toast } from './components/Toast';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Varieties } from './components/Varieties';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';





// Benefits Component




// Main App Component
export default function App() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const scrollToVarieties = () => {
    const varietiesSection = document.getElementById('varieties');
    if (varietiesSection) {
      varietiesSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Welcome to our mango varieties!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast notifications */}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}

      {/* Main content */}
      <Hero onExploreClick={scrollToVarieties} />
      <About />
      <Varieties showToast={showToast} />
      <Benefits />
      <Footer showToast={showToast} />
    </div>
  );
}