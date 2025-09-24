// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx'
import Card1 from './components/Card1.jsx'
import ProductDetails from './components/ProductDetails.jsx';
import About from './components/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import items from './components/data.js';
import Search from './components/Search.jsx';

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar  />
    <Routes>
      <Route path="/" element={<Card1 cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search/:term" element={<Search />} />
    </Routes> 
    </Router>
    <Footer />
    </>
  );
}

export default App;