import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Zapatillas Deportivas',
    description: 'Zapatillas cómodas para running y entrenamiento',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    id: 2,
    name: 'Mochila Resistente',
    description: 'Mochila espaciosa y durable para todas tus aventuras',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
  },
  {
    id: 3,
    name: 'Reloj Inteligente',
    description: 'Smartwatch con múltiples funciones y diseño elegante',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
  },
  {
    id: 4,
    name: 'Auriculares Inalámbricos',
    description:
      'Auriculares con cancelación de ruido y gran calidad de sonido',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 5,
    name: 'Cámara Digital',
    description: 'Cámara profesional para capturar tus mejores momentos',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  },
  {
    id: 6,
    name: 'Laptop Gaming',
    description: 'Portátil potente para gaming y trabajo profesional',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6',
  },
  {
    id: 7,
    name: 'Tablet Premium',
    description: 'Tablet versátil con pantalla de alta resolución',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
  },
  {
    id: 8,
    name: 'Altavoz Bluetooth',
    description: 'Altavoz portátil con sonido envolvente y batería duradera',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
