import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

// Import local gallery images
import img1 from '../images/gallery/2023-12-31.webp';
import img2 from '../images/gallery/2024-01-11.webp';
import img3 from '../images/gallery/2024-07-26 (1).webp';
import img4 from '../images/gallery/2024-12-29.webp';
import img5 from '../images/gallery/2025-04-14.webp';
import img6 from '../images/gallery/2025-05-15.webp';
import img7 from '../images/gallery/unnamed (2).webp';
import img8 from '../images/gallery/unnamed (3).webp';
import img9 from '../images/gallery/unnamed (4).webp';
import img10 from '../images/gallery/unnamed.webp';

const galleryImages = [
  // Local gallery images (from folder) - displayed first
  {
    id: 101,
    url: img1,
    title: 'Gallery Image 1',
    category: 'gallery'
  },
  {
    id: 102,
    url: img2,
    title: 'Gallery Image 2',
    category: 'gallery'
  },
  {
    id: 103,
    url: img3,
    title: 'Gallery Image 3',
    category: 'gallery'
  },
  {
    id: 104,
    url: img4,
    title: 'Gallery Image 4',
    category: 'gallery'
  },
  {
    id: 105,
    url: img5,
    title: 'Gallery Image 5',
    category: 'gallery'
  },
  {
    id: 106,
    url: img6,
    title: 'Gallery Image 6',
    category: 'gallery'
  },
  {
    id: 107,
    url: img7,
    title: 'Gallery Image 7',
    category: 'gallery'
  },
  {
    id: 108,
    url: img8,
    title: 'Gallery Image 8',
    category: 'gallery'
  },
  {
    id: 109,
    url: img9,
    title: 'Gallery Image 9',
    category: 'gallery'
  },
  {
    id: 110,
    url: img10,
    title: 'Gallery Image 10',
    category: 'gallery'
  },
  // Original gallery images - displayed after local images
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
    title: 'Classic Road Bicycle',
    category: 'road'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80',
    title: 'Vintage City Cruiser',
    category: 'vintage'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80',
    title: 'Mountain Trail',
    category: 'mountain'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800&q=80',
    title: 'Touring Deluxe',
    category: 'road'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1475666675596-cca2035b3d79?w=800&q=80',
    title: 'Retro Commuter',
    category: 'vintage'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800&q=80',
    title: 'Alpine Trail',
    category: 'mountain'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    title: 'Continental Racer',
    category: 'road'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80',
    title: 'Dutch Classic',
    category: 'vintage'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80',
    title: 'Trail Companion',
    category: 'mountain'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Detail Shot',
    category: 'details'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Gallery"
          subtitle="Explore the beauty and craftsmanship of our bicycles"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 aspect-square animate-fade-in"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-stone-300 text-sm uppercase tracking-wider">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedImage(null);
              }
            }}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white hover:text-amber-500 transition bg-black/50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
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
            <div 
              className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] lg:max-h-[85vh] object-contain rounded-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                  {selectedImage.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm uppercase tracking-wider mt-1">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

