import React from 'react';
import { Home, Mountain, Waves, TreePine, Building, Castle, Tent, Palmtree } from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', icon: Home },
  { id: 'mountain', name: 'Mountain', icon: Mountain },
  { id: 'beach', name: 'Beach', icon: Waves },
  { id: 'forest', name: 'Forest', icon: TreePine },
  { id: 'city', name: 'City', icon: Building },
  { id: 'castle', name: 'Castle', icon: Castle },
  { id: 'camping', name: 'Camping', icon: Tent },
  { id: 'tropical', name: 'Tropical', icon: Palmtree },
];

const Categories = ({ selectedCategory, setSelectedCategory }: CategoriesProps) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 py-4 overflow-x-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center space-y-2 min-w-0 flex-shrink-0 pb-2 border-b-2 transition-all duration-200 ${
                  isSelected 
                    ? 'border-rose-500 text-rose-500' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <IconComponent className={`w-6 h-6 ${isSelected ? 'scale-110' : ''} transition-transform`} />
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;