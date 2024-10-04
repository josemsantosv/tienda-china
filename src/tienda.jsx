import React, { useEffect, useState } from 'react';


const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tienda-api-cd3k.onrender.com/products');
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchData();
  }, []);

  const manejarBusqueda = (e) => {
    const valorBusqueda = e.target.value.toLowerCase();
    setBusqueda(valorBusqueda);

    const productosFiltrados = productos.filter(
      (producto) =>
        producto.name.toLowerCase().includes(valorBusqueda) ||
        (producto.price && producto.price.toString().includes(valorBusqueda))
    );
    setProductosFiltrados(productosFiltrados);
  };

  return (
    <div className='w-full'>
          <div className="px-4 py-6 ">
      <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">Tienda</h1>

      {/* Input para la búsqueda */}
      <div className="w-full max-w-sm mx-auto">
        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            value={busqueda}
            onChange={manejarBusqueda}
            className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Buscar productos o precios..."
          />

          <button
            className="ml-2 rounded-md bg-blue-600 py-2 px-4 text-sm text-white shadow-md hover:bg-blue-700 transition-all"
            type="button"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Lista de productos filtrados */}
      <ul className="mt-6 space-y-4">
        {Array.isArray(productosFiltrados) && productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <li key={producto.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold text-slate-900">{producto.name || 'Sin Título'}</h2>
              {producto.price !== undefined ? (
                <p className="text-slate-700">Precio: {producto.price}</p>
              ) : (
                <p className="text-slate-500">Precio no disponible</p>
              )}
            </li>
          ))
        ) : (
          <li className="text-center text-slate-500">No hay productos disponibles.</li>
        )}
      </ul>
    </div>
    </div>
  
  );
};

export default Tienda;
