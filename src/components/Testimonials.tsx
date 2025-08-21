import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "The AI recommendations were spot-on! NomadNest suggested a hidden gem in Tuscany that perfectly matched my preferences. The smart pricing feature also saved me 30% compared to other platforms.",
      aiFeature: 'AI Travel Assistant'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "As a frequent traveler, the demand forecasting feature is a game-changer. I always know the best time to book. The safety scoring gave me peace of mind when traveling solo.",
      aiFeature: 'Smart Pricing & Safety'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      location: 'Barcelona, Spain',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: "The experience matching algorithm understood my love for authentic local experiences. Every property recommendation felt personally curated. This is the future of travel!",
      aiFeature: 'Experience Matching'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What our travelers say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why millions trust NomadNest's AI-powered platform for their travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-rose-500/20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <span className="text-xs font-medium text-white">
                  ✨ {testimonial.aiFeature}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">150K+</div>
            <div className="text-gray-600">AI Recommendations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">220+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;