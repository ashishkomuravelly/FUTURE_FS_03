import React from 'react';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  searchLocation: string;
  selectedCategory: string;
}

const properties = [
  {
    id: 1,
    title: 'Modern Loft in Downtown',
    location: 'New York, NY',
    price: 280,
    rating: 4.9,
    reviews: 127,
    category: 'city',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    superhost: true,
    aiRecommended: true,
  },
  {
    id: 2,
    title: 'Beachfront Villa Paradise',
    location: 'Malibu, CA',
    price: 520,
    rating: 4.8,
    reviews: 89,
    category: 'beach',
    images: [
      'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    superhost: true,
    aiRecommended: false,
  },
  {
    id: 3,
    title: 'Mountain Cabin Retreat',
    location: 'Aspen, CO',
    price: 195,
    rating: 4.7,
    reviews: 203,
    category: 'mountain',
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    superhost: false,
    aiRecommended: true,
  },
  {
    id: 4,
    title: 'Luxury Forest Lodge',
    location: 'Portland, OR',
    price: 340,
    rating: 4.9,
    reviews: 156,
    category: 'forest',
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1029596/pexels-photo-1029596.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    superhost: true,
    aiRecommended: true,
  },
  {
    id: 5,
    title: 'Historic Castle Suite',
    location: 'Edinburgh, Scotland',
    price: 420,
    rating: 4.6,
    reviews: 78,
    category: 'castle',
    images: [
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    superhost: false,
    aiRecommended: false,
  },
  {
    id: 6,
    title: 'Tropical Island Bungalow',
    location: 'Bora Bora, French Polynesia',
    price: 680,
    rating: 4.9,
    reviews: 234,
    category: 'tropical',
    images: [
      'https://images.pexels.com/photos/1029609/pexels-photo-1029609.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    superhost: true,
    aiRecommended: true,
  },
];

const PropertyGrid = ({ searchLocation, selectedCategory }: PropertyGridProps) => {
  const filteredProperties = properties.filter(property => {
    if (selectedCategory !== 'all' && property.category !== selectedCategory) {
      return false;
    }
    if (searchLocation && !property.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          {searchLocation ? `Stays in ${searchLocation}` : 'Featured stays'}
        </h2>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Price
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Type of place
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
            AI Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;