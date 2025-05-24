import { ChevronDown, Heart, Star, Zap, Shield, Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Rich in Vitamin C",
      description: "Boosts immune system and promotes healthy skin with over 100% daily vitamin C needs",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Powerful Antioxidants",
      description: "Protects cells from damage and reduces inflammation with beta-carotene and other antioxidants",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Natural Energy",
      description: "Provides quick energy from natural sugars and supports healthy metabolism",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Eye Health",
      description: "Contains lutein and zeaxanthin that support healthy vision and eye function",
      color: "from-blue-400 to-indigo-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-red-800">
            Health Benefits
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mangoes aren't just delicious - they're a powerhouse of nutrition and health benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group text-center space-y-4 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Why Choose Our Mangoes?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Pesticide-Free</h4>
                    <p className="text-gray-600">Grown using sustainable, eco-friendly farming practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-full mt-1">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Premium Quality</h4>
                    <p className="text-gray-600">Hand-selected for perfect ripeness and maximum flavor</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full mt-1">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Farm Fresh</h4>
                    <p className="text-gray-600">Delivered within 48 hours of harvest for maximum freshness</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=500&h=400&fit=crop" 
                alt="Fresh mango slices"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full font-bold">
                100% Natural
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};