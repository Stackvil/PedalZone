import { Link } from 'react-router-dom';
import Button from './Button';

const ProductCard = ({ item, type = 'bicycle' }) => {
  const linkTo = type === 'bicycle' ? `/bicycles/${item.id}` : `/accessories/${item.id}`;

  return (
    <Link to={linkTo}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group animate-fade-in cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
              {type === 'accessory' 
                ? item.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                : item.category
              }
            </span>
            {item.brand && (
              <>
                <span className="text-slate-400">•</span>
                <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
                  {item.brand}
                </span>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition">
            {item.name}
          </h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-end">
            <span className="text-amber-700 group-hover:translate-x-1 transition-transform">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

