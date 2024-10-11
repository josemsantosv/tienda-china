// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Tienda from './tienda.jsx';
import Header from './Header.jsx';
import AddProduct from './AddProduct/AddProduct.jsx';
import ProductPage from './AddProduct/ProductPage.jsx'; // Importamos el componente ProductPage
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<ProductPage />} /> {/* Añadimos la ruta para ProductPage */}
      </Routes>
    </Router>
  </StrictMode>
);
