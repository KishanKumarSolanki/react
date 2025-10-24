import React from 'react';
import Card from './Card.jsx';
import { softToys, educationalToys, rcToys } from '../data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider.jsx';

// App.jsx से cart और setCart props के रूप में लें
const HomePage = ({ cart, setCart }) => {
  return (
    <div className="main-content">
      <ToastContainer />
      <Slider />
      <h1>Welcome to Happy Toy Store</h1>


      <Card
        title="🧸 Soft Toys Section"
        items={softToys} // softToys array का उपयोग करें
        cart={cart}
        setCart={setCart}
      />

      <hr className="my-5" />


      <Card
        title="🧠 Educational Toys Section"
        items={educationalToys}
        cart={cart}
        setCart={setCart}
      />

      <hr className="my-5" />


      <Card
        title="🚗 Remote Control Toys Section"
        items={rcToys}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default HomePage;