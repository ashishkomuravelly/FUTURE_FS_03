import React from 'react';
import { TrendingUp, MapPin, Sparkles } from 'lucide-react';

const TrendingDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      trend: '+45%',
      avgPrice: '$180',
      description: 'Modern meets traditional',
      aiInsight: 'Best time: March-May for cherry blossoms'
    },
    {
      id: 2,
      name: 'Lisbon, Portugal',
      image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      trend: '+38%',
      avgPrice: '$95',
      description: 'Colorful coastal charm',
      aiInsight: 'Peak season: June-September'
    },
    {
      id: 3,
      name: 'Reykjavik, Iceland',
      image: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      trend: '+52%',
      avgPrice: '$220',
      description: 'Northern lights & nature',
      aiInsight: 'Aurora season: October-March'
    },
    {
      id: 4,
      name: 'Cape Town, South Africa',
      image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      trend: '+29%',
      avgPrice: '$75',
      description: 'Mountain meets ocean',
      aiInsight: 'Dry season: November-March'
    },
    {
      id: 5,
      name: 'Tulum, Mexico',
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      trend: '+41%',
      avgPrice: '$140',
      description: 'Mayan ruins & beaches',
      aiInsight: 'Dry season: December-April'
    },
    {
      id: 6,
      name: 'Seoul, South Korea',
      image: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      trend: '+35%',
      avgPrice: '$120',
      description: 'K-culture & cuisine',
      aiInsight: 'Spring/Fall for best weather'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Trending Destinations</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the hottest destinations based on AI analysis of booking trends and traveler preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-green-500 rounded-full">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span className="text-sm font-bold text-white">{destination.trend}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 rounded-full">
                  <span className="text-sm font-medium text-white">{destination.avgPrice}/night</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-white mr-2" />
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  </div>
                  <p className="text-white/90 text-sm mb-2">{destination.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-600 font-medium">AI Travel Tip:</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">{destination.aiInsight}</p>
                
                <button className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white">
                  Explore {destination.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-3" />
            <h3 className="text-2xl font-bold">AI-Powered Travel Insights</h3>
          </div>
          <p className="text-lg mb-6 text-blue-100 max-w-3xl mx-auto">
            Our AI analyzes millions of data points including weather patterns, local events, booking trends, 
            and user preferences to recommend the perfect time and place for your next adventure.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Personalized Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;