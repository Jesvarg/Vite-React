import { useCart } from '../context/CartContext';

const CartSummary = ({ onClose }) => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="flex-col-center py-4">
        <p className="text-secondary">El carrito está vacío</p>
        <button
          onClick={onClose}
          className="btn-primary mt-4"
        >
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex-between mb-4">
        <h3 className="text-lg font-semibold text-primary">Resumen del Carrito</h3>
        <button
          onClick={onClose}
          className="btn-icon"
        >
          ✕
        </button>
      </div>
      <div className="max-h-60 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex-between py-2 border-b"
          >
            <div className="flex-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-primary">{item.name}</p>
                <p className="text-xs text-secondary">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-primary">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex-between">
          <span className="font-semibold text-primary">Total:</span>
          <span className="font-bold text-accent">${calculateTotal()}</span>
        </div>
        <button className="btn-primary w-full mt-4">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
