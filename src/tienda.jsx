import React, { useEffect, useState } from 'react';

const Tienda = () => {
  const [productos, setProductos] = useState([]); // Inicializa como un array vacío

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tienda-api-cd3k.onrender.com/products'); // Asegúrate de que esta URL sea correcta
        const data = await response.json();
        console.log('Datos de la API:', data); // Verifica los datos recibidos
        setProductos(data); // Establece el estado con los productos
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchData();
  }, []);

  // Verifica si hay productos
  console.log('Productos cargados:', productos); // Verifica los productos cargados

  return (
    <div>
      <h1>Tienda</h1>
      <ul>
        {Array.isArray(productos) && productos.length > 0 ? (
          productos.map((producto) => (
            <li key={producto.id}>
              <h2>{producto.name || 'Sin Título'}</h2>
              {producto.price !== undefined ? (
                <p>Precio: {producto.price}</p>
              ) : (
                <p>Precio no disponible</p>
              )}
            </li>
          ))
        ) : (
          <li>No hay productos disponibles.</li> // Mensaje si no hay productos
        )}
      </ul>
    </div>
  );
};

export default Tienda;
