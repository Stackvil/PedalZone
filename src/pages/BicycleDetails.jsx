import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { bicycles } from '../data/bicycles';
import { useCart } from '../context/CartContext';

const BicycleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showImageModal, setShowImageModal] = useState(false);

  const bicycle = bicycles.find((bike) => bike.id === parseInt(id));

  if (!bicycle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-4">
            Bicycle Not Found
          </h2>
          <Button to="/bicycles" variant="primary">
            Back to Bicycles
          </Button>
        </div>
      </div>
    );
  }

  const relatedBicycles = bicycles
    .filter((bike) => bike.category === bicycle.category && bike.id !== bicycle.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart({
      id: bicycle.id,
      name: bicycle.name,
      price: bicycle.price,
      image: bicycle.image,
    });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative h-96 lg:h-full cursor-pointer group" onClick={() => setShowImageModal(true)}>
              <img
                src={bicycle.image}
                alt={bicycle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-stone-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm uppercase tracking-wider text-amber-700 font-semibold">
                  {bicycle.category}
                </span>
                {bicycle.brand && (
                  <>
                    <span className="text-slate-400">•</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold uppercase tracking-wider rounded-full">
                      {bicycle.brand}
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                {bicycle.name}
              </h1>
              <div className="mb-6">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    bicycle.stock === 'In Stock'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {bicycle.stock}
                </span>
              </div>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                {bicycle.description}
              </p>

              {/* Specifications */}
              <div className="border border-stone-200 rounded-xl p-6 mb-8 bg-slate-50">
                <h3 className="text-xl font-semibold text-stone-900 mb-4">
                  Specifications
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-slate-600">Frame Material</dt>
                    <dd className="font-semibold text-stone-900">
                      {bicycle.frameMaterial}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">Gear Type</dt>
                    <dd className="font-semibold text-stone-900">{bicycle.gearType}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">Brake Type</dt>
                    <dd className="font-semibold text-stone-900">{bicycle.brakeType}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">Wheel Size</dt>
                    <dd className="font-semibold text-stone-900">{bicycle.wheelSize}</dd>
                  </div>
                </dl>
              </div>

              {/* Action Buttons */}
              <div>
                <Button
                  onClick={handleAddToCart}
                  variant="primary"
                  className="text-lg px-8 py-3 w-full"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Bicycles */}
        {relatedBicycles.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-8">
              Related Bicycles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBicycles.map((bike) => (
                <ProductCard key={bike.id} item={bike} type="bicycle" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition z-10"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={bicycle.image}
            alt={bicycle.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default BicycleDetails;

