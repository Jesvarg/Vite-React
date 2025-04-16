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
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-center">
            <Link
              to="/"
              className="hover-text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              <h1 className="text-2xl font-bold text-accent">
                ElectroShop
              </h1>
            </Link>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link
              to="/"
              className="text-secondary hover-text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-secondary hover-text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              to="/contact"
              className="text-secondary hover-text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
          <SearchBar onSearch={onSearch} />
          <div className="flex-center relative">
            <button
              onClick={() => setShowCartSummary(!showCartSummary)}
              className="btn-primary relative"
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
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            {showCartSummary && (
              <div className="absolute right-0 top-full mt-2 w-80 card z-50">
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
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              to="/contact"
              className="header-link"
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
