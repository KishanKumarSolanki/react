// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx'
// import Card1 from './components/Card1.jsx'
import ProductDetails from './components/ProductDetails.jsx';
import About from './components/About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import items from './data.js';
import Search from './components/Search.jsx';
import Cart from './components/Cart.jsx';
import Profile from './components/Profile.jsx';
import HomePage from './components/HomePage.jsx';
import Shop from './components/Shop.jsx';
import ScrollToTop from './components/Scrolltotop.jsx';

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
          {/* <Route path="/" element={<Card1 cart={cart} setCart={setCart} items={data} />} /> */}
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;