import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  console.log(useLocation());
  return (
    <Routes>
      <Route path="/" element={<div>Lista de productos</div>} />
      <Route path="/contact" element={<div><h1>Formulario de contacto</h1></div>} />
    </Routes>
  );
};

export default App;
