import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, Wand2 } from 'lucide-react';

interface HeroProps {
  searchLocation: string;
  setSearchLocation: (location: string) => void;
}

const Hero = ({ searchLocation, setSearchLocation }: HeroProps) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  return (
    <div className="relative">
      {/* Background */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Find your perfect stay
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              AI-powered recommendations for unforgettable experiences
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-2xl p-2 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                {/* Where */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex items-center px-4 py-3 border-r border-gray-200 last:border-r-0">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Where</label>
                      <input
                        type="text"
                        placeholder="Search destinations"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="w-full text-sm text-gray-700 placeholder-gray-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Check in */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex items-center px-4 py-3 border-r border-gray-200">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Check in</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full text-sm text-gray-700 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Check out */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex items-center px-4 py-3 border-r border-gray-200">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Check out</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full text-sm text-gray-700 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex items-center px-4 py-3">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Who</label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full text-sm text-gray-700 outline-none bg-transparent"
                      >
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4+ guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex space-x-2">
                  <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 group">
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg transition-all duration-200 group flex items-center space-x-2">
                    <Wand2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden md:block text-sm font-medium">AI Search</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-300 flex items-center justify-center">
              <Wand2 className="w-4 h-4 mr-2" />
              Try our AI assistant: "Find me a cozy cabin near mountains for 2 people"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;