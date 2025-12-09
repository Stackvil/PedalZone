import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (100vh)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100 || window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/bicycles', label: 'Bicycles' },
    { to: '/accessories', label: 'Accessories' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  const isTransparent = isHomePage && !isScrolled;

  return (
    <header 
      className={`z-50 transition-all duration-300 ${
        isTransparent 
          ? 'absolute top-0 left-0 right-0 bg-transparent' 
          : 'sticky top-0 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-3xl font-serif font-bold tracking-wide transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-stone-900'
            }`}>
              Pedal Zone
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 ${
                    isActive
                      ? isTransparent
                        ? 'text-white border-b-2 border-white'
                        : 'text-amber-700 border-b-2 border-amber-700'
                      : isTransparent
                        ? 'text-white/90 hover:text-white'
                        : 'text-stone-700 hover:text-amber-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/cart"
              className={`relative transition-all duration-200 ${
                isTransparent 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-stone-700 hover:text-amber-700'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-stone-900'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 animate-fade-in ${
            isTransparent ? 'bg-stone-900/95 backdrop-blur rounded-lg p-4' : ''
          }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition duration-200 ${
                    isActive 
                      ? isTransparent ? 'text-amber-400' : 'text-amber-700'
                      : isTransparent ? 'text-white' : 'text-stone-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 py-2 text-base font-medium ${
                isTransparent ? 'text-white' : 'text-stone-700'
              }`}
            >
              <span>Cart</span>
              {getCartCount() > 0 && (
                <span className="bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

