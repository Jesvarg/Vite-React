import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

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
        <span className="text-xl font-bold text-purple-600">
          ${product.price}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg font-medium
                   hover:bg-purple-600 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 mb-4"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
