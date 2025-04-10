import { useCart } from '../context/CartContext';

const CartSummary = ({ onClose }) => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600">El carrito está vacío</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Resumen del Carrito</h3>
        <button
          onClick={onClose}
          className="text-white-500 hover:text-purple-700"
        >
          ✕
        </button>
      </div>
      <div className="max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="ml-3">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-purple-600">${calculateTotal()}</span>
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
