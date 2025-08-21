import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Center', 'Safety Center', 'Cancellation options', 'Our COVID-19 Response', 'Supporting people with disabilities', 'Report a neighborhood concern']
    },
    {
      title: 'Community',
      links: ['NomadNest.org: disaster relief housing', 'Support Afghan refugees', 'Combating discrimination', 'AI Ethics & Transparency']
    },
    {
      title: 'Hosting',
      links: ['Try hosting', 'AI Host Assistant', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum', 'How to host responsibly']
    },
    {
      title: 'About',
      links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Gift cards']
    }
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-gray-600 hover:text-gray-900 text-sm transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Left side - Logo and info */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  NomadNest
                </span>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-gray-600">
                <span>© 2025 NomadNest, Inc.</span>
                <button className="hover:text-gray-900 transition-colors">Privacy</button>
                <button className="hover:text-gray-900 transition-colors">Terms</button>
                <button className="hover:text-gray-900 transition-colors">Sitemap</button>
                <button className="hover:text-gray-900 transition-colors">Company details</button>
              </div>
            </div>

            {/* Right side - Language, Currency, and Social */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  🌍 English (US)
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  $ USD
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>