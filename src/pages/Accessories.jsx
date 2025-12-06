import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { accessories } from '../data/accessories';

const Accessories = () => {
  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Premium Accessories"
          subtitle="Enhance your ride with our carefully curated collection"
        />

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {accessories.map((accessory) => (
            <ProductCard key={accessory.id} item={accessory} type="accessory" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;

