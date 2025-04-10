import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto">
      <div className="flex">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-5 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
