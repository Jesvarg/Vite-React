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
      className="btn-primary"
    >
      Ordenar por precio {sortOrder === 'asc' ? '↑' : '↓'}
    </button>
  );
};

export default PriceSorting;
