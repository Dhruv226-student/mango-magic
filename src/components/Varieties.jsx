import { ChevronDown, Heart, Star, Zap, Shield, Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

// Varieties Component
export const Varieties = ({ showToast }) => {
  const varieties = [
    {
      name: "Alphonso",
      image: "https://static.vecteezy.com/system/resources/previews/003/723/684/non_2x/close-up-of-fresh-mango-fruit-free-photo.jpeg",
      description: "The king of mangoes with its rich, creamy texture and sweet, aromatic flavor. Perfect for desserts and eating fresh.",
      origin: "India",
      season: "April - June",
      rating: 5
    },
    {
      name: "Tommy Atkins",
      image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=300&fit=crop",
      description: "A vibrant red and green mango with firm flesh. Great for salads, smoothies, and cooking applications.",
      origin: "Florida",
      season: "March - July",
      rating: 4
    },
    {
      name: "Kent",
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=400&h=300&fit=crop",
      description: "Large, sweet mangoes with minimal fiber. Excellent for juicing and perfect for mango lovers seeking sweetness.",
      origin: "Ecuador",
      season: "January - March",
      rating: 5
    },
    {
      name: "Keitt",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=300&fit=crop",
      description: "Late-season variety with excellent flavor and smooth texture. Stays green even when ripe.",
      origin: "Florida",
      season: "August - October",
      rating: 4
    },
    {
      name: "Manila",
      image: "https://4.bp.blogspot.com/-YYD3-Txr2ik/Ta3ntFdMAYI/AAAAAAAAA0g/WNh4rYNxwXg/s1600/DSC_1459.JPG",
      description: "Small, sweet, and incredibly flavorful. Known for its intense tropical taste and minimal fiber content.",
      origin: "Philippines",
      season: "May - September",
      rating: 5
    },
    {
      name: "Ataulfo",
      image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=300&fit=crop",
      description: "Creamy, buttery texture with a sweet flavor. Perfect size for snacking and loved by children.",
      origin: "Mexico",
      season: "March - July",
      rating: 4
    }
  ];

  const handleLearnMore = (variety) => {
    showToast(`Learn more about ${variety} mangoes - coming soon!`);
  };

  return (
    <section id="varieties" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-800">
            Mango Varieties
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of mango varieties, each with its unique flavor profile and characteristics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {varieties.map((variety, index) => (
            <div 
              key={variety.name}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={variety.image} 
                  alt={variety.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{variety.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {variety.season}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-800">{variety.name}</h3>
                  <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    {variety.origin}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {variety.description}
                </p>
                
                <button 
                  onClick={() => handleLearnMore(variety.name)}
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-3 rounded-xl hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};