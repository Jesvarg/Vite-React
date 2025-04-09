import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../index.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Vite + React
          </h1>
          <div className="card bg-white p-6 rounded-lg shadow-lg mb-8">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium
                       hover:bg-purple-600 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Contador: {count}
            </button>
            <p className="mt-4 text-gray-600">
              Edita{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code>{' '}
              y guarda para probar HMR
            </p>
          </div>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Grid Items */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="h-32 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">
                  Item {item}
                </span>
              </div>
              <p className="text-gray-600"></p>
              <button className="mi-boton">Click me</button>
            </div>
          ))}
        </div>
        <p className="read-the-docs mt-8 text-gray-500 text-center">
          Haz clic en los logos de Vite y React para aprender más
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Acerca de</h1>
      <div className="card bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600">
          Esta es una aplicación de ejemplo creada con Vite y React.
        </p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contacto</h1>
      <div className="card bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600">
          Puedes contactarnos a través de nuestro correo electrónico.
        </p>
      </div>
    </div>
  );
}

import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-grow">
          <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
