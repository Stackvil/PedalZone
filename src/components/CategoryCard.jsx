import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/bicycles?category=${category.id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center group animate-fade-in hover:-translate-y-1"
    >
      <div className="text-6xl mb-4">{category.icon}</div>
      <h3 className="text-2xl font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition">
        {category.name}
      </h3>
      <p className="text-slate-600">{category.description}</p>
    </Link>
  );
};

export default CategoryCard;

