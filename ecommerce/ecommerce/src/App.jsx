import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen';

const App = () => {
  const location = useLocation(); // Properly using useLocation()
  console.log("Current Route:", location.pathname);

  const [esAdmin, setEsAdmin] = useState(false); // Set default state

  return (
    <div>
      <button onClick={() => setEsAdmin(true)}>Soy admin</button>
      <h1>El cliente es: {esAdmin ? 'admin' : 'no admin'}</h1>
      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/product/:product_id" element={<ProductDetailScreen />} />
      </Routes>
    </div>
  );
};

export default App;
