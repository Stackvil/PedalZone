import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { bicycles, categories } from '../data/bicycles';

const Bicycles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTargetAudience, setSelectedTargetAudience] = useState(searchParams.get('targetAudience') || 'all');
  const [selectedGears, setSelectedGears] = useState(searchParams.get('gears') || 'all');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || 'all');
  const [selectedWheelSize, setSelectedWheelSize] = useState(searchParams.get('wheelSize') || 'all');
  const [selectedFrame, setSelectedFrame] = useState(searchParams.get('frame') || 'all');
  const [filteredBicycles, setFilteredBicycles] = useState(bicycles);

  // Helper to determine target audience (Men/Women/Boys/Girls)
  const getTargetAudience = (bike) => {
    if (bike.category === 'kids') {
      // For kids bikes, we can infer from name or default to Boys
      const name = bike.name.toLowerCase();
      if (name.includes('girl') || name.includes('pink') || name.includes('princess')) {
        return 'girls';
      }
      return 'boys'; // Default kids to boys
    }
    // For adult bikes, infer from name or default to men
    const name = bike.name.toLowerCase();
    if (name.includes('women') || name.includes('ladies') || name.includes('female')) {
      return 'women';
    }
    return 'men'; // Default adult to men
  };

  // Helper to determine if bike is geared or single speed
  const isGeared = (bike) => {
    if (!bike.gearType) return true;
    return !bike.gearType.toLowerCase().includes('single speed');
  };

  // Extract unique brands from bicycles
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(bicycles.map(bike => bike.brand).filter(Boolean))];
    return uniqueBrands.sort();
  }, []);

  // Extract unique wheel sizes from bicycles
  const wheelSizes = useMemo(() => {
    const uniqueSizes = [...new Set(bicycles.map(bike => bike.wheelSize).filter(Boolean))];
    return uniqueSizes.sort((a, b) => {
      // Sort by numeric value if possible
      const aNum = parseInt(a.replace(/[^0-9]/g, ''));
      const bNum = parseInt(b.replace(/[^0-9]/g, ''));
      if (aNum && bNum) return aNum - bNum;
      return a.localeCompare(b);
    });
  }, []);

  // Extract unique frame materials from bicycles and normalize them
  const normalizeFrameMaterial = (material) => {
    if (!material) return null;
    const lower = material.toLowerCase();
    if (lower.includes('steel')) return 'Steel';
    if (lower.includes('alloy') || lower.includes('aluminum')) return 'Alloy';
    if (lower.includes('carbon')) return 'Carbon';
    return 'Steel'; // Default to Steel if unclear
  };

  const frameMaterials = useMemo(() => {
    const uniqueFrames = [...new Set(bicycles.map(bike => normalizeFrameMaterial(bike.frameMaterial)).filter(Boolean))];
    return uniqueFrames.sort();
  }, []);

  useEffect(() => {
    let filtered = bicycles;

    // Filter by target audience (Men/Women/Boys/Girls)
    if (selectedTargetAudience !== 'all') {
      filtered = filtered.filter((bike) => {
        const audience = getTargetAudience(bike);
        return audience === selectedTargetAudience;
      });
    }

    // Filter by gears (Geared/Single Speed)
    if (selectedGears !== 'all') {
      filtered = filtered.filter((bike) => {
        const geared = isGeared(bike);
        if (selectedGears === 'geared') return geared;
        if (selectedGears === 'single-speed') return !geared;
        return true;
      });
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((bike) => bike.category === selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter((bike) => bike.brand === selectedBrand);
    }

    // Filter by wheel size
    if (selectedWheelSize !== 'all') {
      filtered = filtered.filter((bike) => bike.wheelSize === selectedWheelSize);
    }

    // Filter by frame material
    if (selectedFrame !== 'all') {
      filtered = filtered.filter((bike) => {
        const normalized = normalizeFrameMaterial(bike.frameMaterial);
        return normalized === selectedFrame;
      });
    }

    setFilteredBicycles(filtered);
  }, [selectedTargetAudience, selectedGears, selectedCategory, selectedBrand, selectedWheelSize, selectedFrame]);

  const handleTargetAudienceChange = (audience) => {
    setSelectedTargetAudience(audience);
    if (audience === 'all') {
      searchParams.delete('targetAudience');
    } else {
      searchParams.set('targetAudience', audience);
    }
    setSearchParams(searchParams);
  };

  const handleGearsChange = (gears) => {
    setSelectedGears(gears);
    if (gears === 'all') {
      searchParams.delete('gears');
    } else {
      searchParams.set('gears', gears);
    }
    setSearchParams(searchParams);
  };

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

  const handleWheelSizeChange = (wheelSize) => {
    setSelectedWheelSize(wheelSize);
    if (wheelSize === 'all') {
      searchParams.delete('wheelSize');
    } else {
      searchParams.set('wheelSize', wheelSize);
    }
    setSearchParams(searchParams);
  };

  const handleFrameChange = (frame) => {
    setSelectedFrame(frame);
    if (frame === 'all') {
      searchParams.delete('frame');
    } else {
      searchParams.set('frame', frame);
    }
    setSearchParams(searchParams);
  };

  const handleReset = () => {
    setSelectedTargetAudience('all');
    setSelectedGears('all');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedWheelSize('all');
    setSelectedFrame('all');
    searchParams.delete('targetAudience');
    searchParams.delete('gears');
    searchParams.delete('category');
    searchParams.delete('brand');
    searchParams.delete('wheelSize');
    searchParams.delete('frame');
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Bicycle Collection"
          subtitle="Discover timeless classics crafted for every rider"
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
              <div className="mb-6 border-b border-slate-200 pb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🚲</span> CATEGORIES
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleTargetAudienceChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedTargetAudience === 'all'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>All</span>
                    {selectedTargetAudience === 'all' && <span className="text-green-700">✓</span>}
                  </button>
                  <button
                    onClick={() => handleTargetAudienceChange('men')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedTargetAudience === 'men'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>Men Bikes</span>
                    {selectedTargetAudience === 'men' && <span className="text-green-700">✓</span>}
                  </button>
                  <button
                    onClick={() => handleTargetAudienceChange('women')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedTargetAudience === 'women'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>Women Bikes</span>
                    {selectedTargetAudience === 'women' && <span className="text-green-700">✓</span>}
                  </button>
                  <button
                    onClick={() => handleTargetAudienceChange('boys')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedTargetAudience === 'boys'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>Boys Bikes</span>
                    {selectedTargetAudience === 'boys' && <span className="text-green-700">✓</span>}
                  </button>
                  <button
                    onClick={() => handleTargetAudienceChange('girls')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedTargetAudience === 'girls'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>Girls Bikes</span>
                    {selectedTargetAudience === 'girls' && <span className="text-green-700">✓</span>}
                  </button>
                </div>
              </div>

              {/* Gears Section */}
              <div className="mb-6 border-b border-slate-200 pb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🎯</span> GEARS
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleGearsChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedGears === 'all'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>All</span>
                    {selectedGears === 'all' && <span className="text-green-700">✓</span>}
                  </button>
                  <button
                    onClick={() => handleGearsChange('geared')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedGears === 'geared'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>Geared</span>
                    {selectedGears === 'geared' && <span className="text-green-700">✓</span>}
                  </button>
                  <button
                    onClick={() => handleGearsChange('single-speed')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm flex items-center justify-between ${
                      selectedGears === 'single-speed'
                        ? 'text-green-700 font-bold'
                        : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    <span>Single Speed</span>
                    {selectedGears === 'single-speed' && <span className="text-green-700">✓</span>}
                  </button>
                </div>
              </div>

              {/* Cycle By Type Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🔲</span> CYCLE BY TYPE
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                      selectedCategory === 'all'
                        ? 'bg-green-100 text-green-800 border-2 border-green-700 font-bold'
                        : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    All Types
                  </button>
                  {categories.map((category) => {
                    const categoryLabels = {
                      'e-bike': 'E Bikes (E-BIKE)',
                      'mountain': 'Mountain Bikes (MTB)',
                      'atb': 'All Terrain Bikes (ATB)',
                      'ftb': 'Fat Tire Bikes (FTB)',
                      'vintage': 'Hybrid Bikes (CITY)',
                      'kids': 'Little Champ Bikes (KIDS)',
                      'road': 'Road Bikes (ROAD)'
                    };
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                          selectedCategory === category.id
                            ? 'bg-green-100 text-green-800 border-2 border-green-700 font-bold'
                            : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                        }`}
                      >
                        {categoryLabels[category.id] || category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wheel Size Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🎯</span> WHEEL SIZE
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleWheelSizeChange('all')}
                    className={`px-3 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                      selectedWheelSize === 'all'
                        ? 'bg-green-100 text-green-800 border-2 border-green-700 font-bold'
                        : 'text-stone-700 hover:bg-slate-100 border border-stone-300'
                    }`}
                  >
                    All
                  </button>
                  {wheelSizes.map((size) => {
                    let displaySize = size;
                    if (size.includes('"')) {
                      const num = size.replace('"', '');
                      displaySize = `${num} Inches`;
                    } else if (size.includes('c')) {
                      displaySize = size.replace('c', ' C');
                    }
                    return (
                      <button
                        key={size}
                        onClick={() => handleWheelSizeChange(size)}
                        className={`px-3 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                          selectedWheelSize === size
                            ? 'bg-green-100 text-green-800 border-2 border-green-700 font-bold'
                            : 'text-stone-700 hover:bg-slate-100 border border-stone-300'
                        }`}
                      >
                        {displaySize}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Frame Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🚲</span> FRAME
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleFrameChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                      selectedFrame === 'all'
                        ? 'bg-green-100 text-green-800 border-2 border-green-700 font-bold'
                        : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    All Frames
                  </button>
                  {frameMaterials.map((frame) => (
                    <button
                      key={frame}
                      onClick={() => handleFrameChange(frame)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                        selectedFrame === frame
                          ? 'bg-green-100 text-green-800 border-2 border-green-700 font-bold'
                          : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                      }`}
                    >
                      {frame}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Section */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <span>🏷️</span> BRAND
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleBrandChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                      selectedBrand === 'all'
                        ? 'bg-green-100 text-green-800 border-2 border-green-700'
                        : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    All Brands
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandChange(brand)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium transition duration-300 text-sm ${
                        selectedBrand === brand
                          ? 'bg-green-100 text-green-800 border-2 border-green-700'
                          : 'text-stone-700 hover:bg-slate-100 border border-transparent'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredBicycles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBicycles.map((bicycle) => (
                  <ProductCard key={bicycle.id} item={bicycle} type="bicycle" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <p className="text-xl text-slate-600 mb-4">No bicycles found with the selected filters.</p>
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

export default Bicycles;

