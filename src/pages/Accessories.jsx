import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { accessories } from '../data/accessories';

const Accessories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [filteredAccessories, setFilteredAccessories] = useState(accessories);

  // Extract unique categories from accessories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(accessories.map(acc => acc.category).filter(Boolean))];
    return uniqueCategories.sort();
  }, []);

  // Category display names mapping
  const categoryNames = {
    'grips': 'Grips',
    'bells': 'Bells',
    'bags': 'Bags',
    'pumps': 'Pump',
    'saddles': 'Saddle Cover',
    'locks': 'Locks',
    'baskets': 'Baskets',
    'lights': 'Lights',
    'racks': 'Racks',
    'pedals': 'Pedals',
    'cages': 'Bottle Cages',
    'tools': 'Tools',
    'tool/cover': 'Tool/Cover',
    'helmet': 'Helmet',
    'sipper': 'Sipper',
    'stand': 'Stand',
    'mudguard': 'Mudguard',
    'cycling shorts': 'Cycling Shorts',
    'cycling jersey': 'Cycling Jersey',
    'gloves': 'Gloves',
    'jacket': 'Jacket',
    'bicycle cover': 'Bicycle Cover',
    'e-bike accessories': 'E-bike Accessories'
  };

  // Format category name for display
  const formatCategoryName = (category) => {
    return categoryNames[category] || category.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  useEffect(() => {
    let filtered = accessories;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((accessory) => accessory.category === selectedCategory);
    }

    setFilteredAccessories(filtered);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleReset = () => {
    setSelectedCategory('all');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Premium Accessories"
          subtitle="Enhance your ride with our carefully curated collection"
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif font-bold text-stone-900">Filters</h3>
                <button
                  onClick={handleReset}
                  className="text-sm text-amber-700 hover:text-amber-800 font-medium underline"
                >
                  Reset
                </button>
              </div>

              {/* Categories Section */}
              <div>
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🌿</span> CATEGORIES
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                      selectedCategory === 'all'
                        ? 'bg-green-100 text-green-800 border-2 border-green-700'
                        : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                        selectedCategory === category
                          ? 'bg-green-100 text-green-800 border-2 border-green-700'
                          : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                      }`}
                    >
                      {formatCategoryName(category)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredAccessories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAccessories.map((accessory) => (
                  <ProductCard key={accessory.id} item={accessory} type="accessory" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <p className="text-xl text-slate-600 mb-4">No accessories found with the selected filters.</p>
                <button
                  onClick={handleReset}
                  className="text-amber-700 hover:text-amber-800 font-medium underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;

