import React from 'react';
import { Sparkles, MessageSquare, Calendar, MapPin, TrendingUp, Shield } from 'lucide-react';

const AIFeatures = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Travel Assistant',
      description: 'Get personalized recommendations based on your preferences and travel history',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Smart Pricing',
      description: 'Dynamic pricing optimization based on demand, events, and seasonal trends',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Discover hidden gems and local hotspots recommended by our AI algorithm',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict the best times to book and travel for optimal prices and availability',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Safety Scoring',
      description: 'AI-powered safety ratings for properties and neighborhoods',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Sparkles,
      title: 'Experience Matching',
      description: 'Match your personality and preferences to the perfect accommodation style',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">AI-Powered Features</h2>
            <Sparkles className="w-8 h-8 text-pink-500 ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of travel with our cutting-edge AI technology that personalizes
            every aspect of your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <button className="mt-4 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:underline">
                  Learn more →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to experience AI-powered travel?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Join thousands of travelers who trust our AI to plan their perfect trips
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Free
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;