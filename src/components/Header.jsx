import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartSummary from './CartSummary';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCartSummary, setShowCartSummary] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <h1 className="text-2xl font-bold text-purple-600">
                ElectroShop
              </h1>
            </Link>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
          <SearchBar onSearch={onSearch} />
          <div className="flex items-center relative">
            <button
              onClick={() => setShowCartSummary(!showCartSummary)}
              className="relative p-2 text-white hover:bg-purple-600 bg-purple-500 rounded-lg"
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            {showCartSummary && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
                <CartSummary onClose={() => setShowCartSummary(false)} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
