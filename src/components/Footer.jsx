import { ChevronDown, Heart, Star, Zap, Shield, Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

// Footer Component
export const Footer = ({ showToast }) => {
  const handleContact = (method) => {
    showToast(`${method} contact - coming soon!`);
  };

  const handleSocial = (platform) => {
    showToast(`Follow us on ${platform}!`);
  };

  return (
    <footer className="bg-gradient-to-r from-orange-800 to-red-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Mango Magic</h3>
            <p className="text-orange-100 leading-relaxed">
              Bringing you the finest tropical mangoes from around the world. 
              Experience the magic of nature's sweetest gift.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocial('Facebook')}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocial('Instagram')}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocial('Twitter')}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">About Us</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Our Mangoes</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Health Benefits</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Recipes</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Blog</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Services</h4>
            <ul className="space-y-3">
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Fresh Delivery</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Bulk Orders</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Subscription Box</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Corporate Gifts</button></li>
              <li><button className="text-orange-100 hover:text-white transition-colors duration-300">Wholesale</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Get in Touch</h4>
            <div className="space-y-4">
              <button 
                onClick={() => handleContact('Phone')}
                className="flex items-center gap-3 text-orange-100 hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>+1 (555) MANGO-01</span>
              </button>
              <button 
                onClick={() => handleContact('Email')}
                className="flex items-center gap-3 text-orange-100 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>hello@mangomagic.com</span>
              </button>
              <button 
                onClick={() => handleContact('Location')}
                className="flex items-center gap-3 text-orange-100 hover:text-white transition-colors duration-300 group"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Tropical Paradise Ave<br />Mango Valley, FL 12345</span>
              </button>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-semibold">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button 
                  onClick={() => showToast('Newsletter subscription coming soon!')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-orange-800 px-6 py-2 rounded-r-full font-semibold transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-12 pt-8 text-center">
          <p className="text-orange-200">
            © 2024 Mango Magic. All rights reserved. Made with 🥭 and lots of tropical love.
          </p>
        </div>
      </div>
    </footer>
  );
};
