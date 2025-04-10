import { useState } from 'react';

const PriceSorting = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <button
      onClick={handleSort}
      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      Ordenar por precio {sortOrder === 'asc' ? '↑' : '↓'}
    </button>
  );
};

export default PriceSorting;
