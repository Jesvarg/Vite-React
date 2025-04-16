import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="flex-col-center">
        <h3 className="text-lg font-semibold text-primary mb-2 text-center">
          {product.name}
        </h3>
        <p className="text-secondary text-sm mb-4 text-center">
          {product.description}
        </p>
        <div className="flex-col-center w-full">
          <span className="text-xl font-bold text-accent mb-4">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex gap-2 w-full">
            <button
              onClick={() => addToCart(product)}
              className="btn-primary flex-1 py-1"
            >
              Añadir al carrito
            </button>
            <button
              onClick={handleLike}
              className="btn-primary flex flex-col items-center w-16 py-1"
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-xs">{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
