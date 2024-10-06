import React, { useState } from 'react';

const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productosCargados, setProductosCargados] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('https://tienda-api-cd3k.onrender.com/products');
      const data = await response.json();
      setProductos(data);
      setProductosFiltrados(data);
      setProductosCargados(true);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

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

  if (!productosCargados) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          className="px-4 py-2 text-sm text-white transition-all bg-green-600 rounded-md shadow-md hover:bg-green-700"
          onClick={fetchData}
        >
          Cargar Productos
        </button>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <div className="px-4 py-6">
        <h1 className="mb-6 text-2xl font-bold text-center text-slate-800">Tienda</h1>

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
              className="w-full py-2 pl-10 pr-3 text-sm transition duration-300 bg-white border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
              placeholder="Buscar productos o precios..."
            />

            <button
              className="px-4 py-2 ml-2 text-sm text-white transition-all bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
              type="button"
            >
              Buscar
            </button>
          </div>
        </div>

        {/* Lista de productos filtrados */}
        {busqueda && (
          <ul className="mt-6 space-y-4">
            {Array.isArray(productosFiltrados) && productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => (
                <li key={producto.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
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
        )}
      </div>
    </div>
  );
};

export default Tienda;
