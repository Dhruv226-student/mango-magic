import { ChevronDown, Heart, Star, Zap, Shield, Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

// About Component
export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-green-800">
              The King of Tropical Fruits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Welcome to the enchanting world of mangoes, where every bite transports you to a tropical paradise. 
            Our carefully selected mangoes are nature's candy - sweet, succulent, and packed with the warmth of 
            endless summer days. From the first taste, you'll understand why mangoes have been cherished for 
            over 4,000 years as the ultimate symbol of love and friendship in tropical cultures.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-400">
              <div className="text-orange-500 mb-4">
                <Sun className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sun-Kissed</h3>
              <p className="text-gray-600">Grown under the perfect tropical sun for maximum sweetness and flavor.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-400">
              <div className="text-yellow-500 mb-4">
                <Heart className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hand-Picked</h3>
              <p className="text-gray-600">Carefully selected at peak ripeness by experienced fruit artisans.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-400">
              <div className="text-green-500 mb-4">
                <Zap className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Farm Fresh</h3>
              <p className="text-gray-600">Delivered fresh from our sustainable farms directly to your table.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};