import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../index.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Footer from './Footer';

function Home({ searchTerm }) {
  return (
    <div className="w-full bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Acerca de</h1>
      <div className="card bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600">Acerca de nosotros</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contacto</h1>
      <div className="card bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600">Contacta con nosotros</p>
      </div>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header onSearch={handleSearch} />
        <div className="flex-grow">
          <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm} />} />
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
