import React from 'react';
import Card from './Card.jsx';
import { softToys, educationalToys, rcToys } from '../data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider.jsx';

// App.jsx से cart और setCart props के रूप में लें
const HomePage = ({ cart, setCart }) => {

  const limitedSoftToys = softToys.slice(0, 4);
  const limitedEducationalToys = educationalToys.slice(0, 4);
  const limitedRcToys = rcToys.slice(0, 4);


  return (
    <div className="main-content">
      <ToastContainer />
      <Slider />


      <Card
        title="🧸 Soft Toys Section"
        items={limitedSoftToys}
        cart={cart}
        setCart={setCart}
      />

      <hr className="my-5" />


      <Card
        title="🧠 Educational Toys Section"
        items={limitedEducationalToys}
        cart={cart}
        setCart={setCart}
      />

      <hr className="my-5" />


      <Card
        title="🚗 Remote Control Toys Section"
        items={limitedRcToys}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default HomePage;