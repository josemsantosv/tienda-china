import React, { useState } from 'react';
import AddProduct from './AddProduct';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="text-white ">
      {/* Título */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold">Lista de Productos</h1>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl px-4 mx-auto">
        {/* Lista de productos */}
        <ul className="mb-8 space-y-4">
          {products.length > 0 ? (
            products.map((product, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md"
              >
                <span className="text-lg font-semibold">{product.name}</span>
                <span className="text-lg text-blue-400">S/.{product.price}</span>
              </li>
            ))
          ) : (
            <li className="py-4 text-xl text-center text-gray-400">No hay productos añadidos aún.</li>
          )}
        </ul>

        {/* Formulario de añadir producto */}
        <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Añadir Producto</h2>
          <AddProduct onProductAdded={handleProductAdded} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
