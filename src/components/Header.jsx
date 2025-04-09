import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Link to="/"
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
          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="px-5 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Buscar
              </button>
            </div>
          </form>
          <div className="flex items-center">
            <button className="text-white hover:bg-purple-600 bg-purple-500">
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
            </button>
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
