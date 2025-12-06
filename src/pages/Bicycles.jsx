import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { bicycles, categories } from '../data/bicycles';

const Bicycles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || 'all');
  const [filteredBicycles, setFilteredBicycles] = useState(bicycles);

  // Extract unique brands from bicycles
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(bicycles.map(bike => bike.brand).filter(Boolean))];
    return uniqueBrands.sort();
  }, []);

  useEffect(() => {
    let filtered = bicycles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((bike) => bike.category === selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter((bike) => bike.brand === selectedBrand);
    }

    setFilteredBicycles(filtered);
  }, [selectedCategory, selectedBrand]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    if (brand === 'all') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', brand);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Bicycle Collection"
          subtitle="Discover timeless classics crafted for every rider"
        />

        {/* Combined Filters Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6 text-center">Filters</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Category Filters */}
            <div>
              <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center gap-2">
                <span>📂</span> Category
              </h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-5 py-2 rounded-full font-medium transition duration-300 text-sm ${
                    selectedCategory === 'all'
                      ? 'bg-amber-700 text-white shadow-md'
                      : 'bg-slate-100 text-stone-700 hover:bg-amber-100 border border-stone-300'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-5 py-2 rounded-full font-medium transition duration-300 text-sm ${
                      selectedCategory === category.id
                        ? 'bg-amber-700 text-white shadow-md'
                        : 'bg-slate-100 text-stone-700 hover:bg-amber-100 border border-stone-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filters */}
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                <span>🏷️</span> Brand
              </h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleBrandChange('all')}
                  className={`px-5 py-2 rounded-full font-medium transition duration-300 text-sm ${
                    selectedBrand === 'all'
                      ? 'bg-green-700 text-white shadow-md'
                      : 'bg-slate-100 text-stone-700 hover:bg-green-100 border border-stone-300'
                  }`}
                >
                  All Brands
                </button>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandChange(brand)}
                    className={`px-5 py-2 rounded-full font-medium transition duration-300 text-sm ${
                      selectedBrand === brand
                        ? 'bg-green-700 text-white shadow-md'
                        : 'bg-slate-100 text-stone-700 hover:bg-green-100 border border-stone-300'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="text-center mb-8">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-stone-900">{filteredBicycles.length}</span> bicycle(s)
            {selectedCategory !== 'all' && selectedBrand !== 'all' && (
              <span> in {categories.find(c => c.id === selectedCategory)?.name} category and {selectedBrand} brand</span>
            )}
            {selectedCategory !== 'all' && selectedBrand === 'all' && (
              <span> in {categories.find(c => c.id === selectedCategory)?.name} category</span>
            )}
            {selectedCategory === 'all' && selectedBrand !== 'all' && (
              <span> from {selectedBrand} brand</span>
            )}
          </p>
        </div>

        {/* Bicycle Grid */}
        {filteredBicycles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBicycles.map((bicycle) => (
              <ProductCard key={bicycle.id} item={bicycle} type="bicycle" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No bicycles found with the selected filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                searchParams.delete('category');
                searchParams.delete('brand');
                setSearchParams(searchParams);
              }}
              className="mt-4 text-amber-700 hover:text-amber-800 font-medium underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bicycles;

