import React, { useState } from 'react';
import { Search, Globe, Menu, User, MessageCircle, Heart, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Airbnb
            </span>
            <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium">
              AI-Powered
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Stays
            </button>
            <button className="text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Experiences
            </button>
            <button className="text-gray-700 hover:text-rose-500 font-medium transition-colors">
              AI Travel Planner
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-rose-500 font-medium transition-colors">
              Become a Host
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Profile Menu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-3 hover:shadow-md transition-shadow"
            >
              <Menu className="w-4 h-4" />
              <User className="w-6 h-6 text-gray-600" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg border py-2 w-48 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Sign up</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Log in</button>
                <hr className="my-2" />
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Host your home</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">Help Center</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;