// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Header = ({ handleUpdateProduct }) => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    // Redirigir a la página de añadir productos
    navigate('/products');
  };
  const handleHome = () => {
    // Redirigir a la página de añadir productos
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-3 bg-gray-800" >
      <h1 className="text-xl font-bold text-white" onClick={handleHome}>Tienda</h1>

      {/* Botones */}
      <div className="space-x-3">
        <IconButton color="primary" onClick={handleAddProduct}>
          <AddIcon />
        </IconButton>
        <IconButton color="primary" >
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" >
          <UpgradeIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
