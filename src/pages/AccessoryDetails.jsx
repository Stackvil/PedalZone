import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { accessories } from '../data/accessories';
import { useCart } from '../context/CartContext';

const AccessoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showImageModal, setShowImageModal] = useState(false);

  const accessory = accessories.find((item) => item.id === parseInt(id));

  if (!accessory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-4">
            Accessory Not Found
          </h2>
          <Button to="/accessories" variant="primary">
            Back to Accessories
          </Button>
        </div>
      </div>
    );
  }

  const relatedAccessories = accessories
    .filter((item) => item.category === accessory.category && item.id !== accessory.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      image: accessory.image,
      type: 'accessory',
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
                src={accessory.image}
                alt={accessory.name}
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
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-amber-700 font-semibold">
                  {accessory.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                {accessory.name}
              </h1>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                {accessory.description}
              </p>

              {/* Features */}
              {accessory.features && accessory.features.length > 0 && (
                <div className="border border-stone-200 rounded-xl p-6 mb-8 bg-slate-50">
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {accessory.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-amber-700 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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

        {/* Related Accessories */}
        {relatedAccessories.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-8">
              Related Accessories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedAccessories.map((item) => (
                <ProductCard key={item.id} item={item} type="accessory" />
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
            src={accessory.image}
            alt={accessory.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AccessoryDetails;

