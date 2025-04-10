import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prev) => prev + 1);
    } else {
      setLikes((prev) => prev - 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 text-center">
          {product.description}
        </p>
        <div className="flex flex-col items-center w-full">
          <span className="text-xl font-bold text-purple-600 mb-4">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex gap-2 w-full">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium
                       hover:bg-purple-600 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Añadir al carrito
            </button>
            <button
              onClick={handleLike}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium
                       hover:bg-purple-600 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                       flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm">{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
