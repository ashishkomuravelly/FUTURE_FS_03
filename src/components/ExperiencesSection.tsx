import React from 'react';
import { MapPin, Clock, Users, Star, Sparkles } from 'lucide-react';

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Cooking Class with Local Chef',
      location: 'Paris, France',
      duration: '3 hours',
      groupSize: '8 people',
      price: 89,
      rating: 4.9,
      reviews: 324,
      image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      aiRecommended: true,
      category: 'Food & Drink'
    },
    {
      id: 2,
      title: 'Sunrise Hot Air Balloon',
      location: 'Cappadocia, Turkey',
      duration: '4 hours',
      groupSize: '12 people',
      price: 245,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      aiRecommended: true,
      category: 'Adventure'
    },
    {
      id: 3,
      title: 'Street Art Walking Tour',
      location: 'Berlin, Germany',
      duration: '2.5 hours',
      groupSize: '15 people',
      price: 35,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      aiRecommended: false,
      category: 'Culture'
    },
    {
      id: 4,
      title: 'Surfing Lesson & Board',
      location: 'Biarritz, France',
      duration: '2 hours',
      groupSize: '6 people',
      price: 65,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/390051/pexels-photo-390051.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      aiRecommended: true,
      category: 'Sports'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Unique Experiences</h2>
            <p className="text-lg text-gray-600">Activities hosted by locals, enhanced by AI recommendations</p>
          </div>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {experience.aiRecommended && (
                  <div className="absolute top-3 left-3 flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">AI Pick</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded-full">
                  <span className="text-xs font-medium text-white">{experience.category}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {experience.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {experience.location}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Up to {experience.groupSize}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{experience.rating}</span>
                    <span className="text-sm text-gray-500">({experience.reviews})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">${experience.price}</span>
                    <span className="text-sm text-gray-600"> / person</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Become an Experience Host</h3>
          <p className="text-lg mb-6 text-rose-100">
            Share your passion and earn money by hosting unique experiences in your city
          </p>
          <button className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Start Hosting
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;