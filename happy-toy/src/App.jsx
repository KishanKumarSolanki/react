// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx'
import Card1 from './components/Card1.jsx'
import ProductDetails from './components/ProductDetails.jsx';
import About from './components/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
    <Router>
    <Navbar  />
    <Routes>
      <Route path="/" element={<Card1 />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
    </Router>
    <Footer />
    </>
  );
}

export default App;