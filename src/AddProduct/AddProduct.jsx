// AddProduct.jsx
import React, { useState } from 'react';

const AddProduct = ({ onProductAdded }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
    };

    // Hacemos la solicitud POST a la API para añadir el producto
    fetch('https://tienda-api-cd3k.onrender.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        onProductAdded(data); // Callback para actualizar la lista en el componente padre
        setProductName(''); // Limpiar input
        setProductPrice('');
        console.log('Producto añadido correctamente!');
      })
      .catch((error) => {
        console.error('Error al añadir producto:', error);
        
      });
  };

  return (
    <div className="p-4 bg-white border rounded shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Añadir Producto</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Nombre del Producto</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-gray-500"
          placeholder="Nombre del producto"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Precio del Producto</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-gray-500"
          placeholder="Precio del producto"
        />
      </div>
      <button
        onClick={handleAddProduct}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Añadir Producto
      </button>
    </div>
  );
};

export default AddProduct;
