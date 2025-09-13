// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import Card1 from './components/Card1.jsx'
import ProductDetails from './components/ProductDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Slider />
    <Routes>
      <Route path="/" element={<Card1 />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes> 
    </Router>
    </>
  );
}

export default App;