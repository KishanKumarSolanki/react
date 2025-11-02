import React from 'react';
import Card from './Card.jsx';
import { softToys, educationalToys, rcToys, boardGames } from '../data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider.jsx';

const HomePage = ({ cart ,setCart }) => {



  return (
    <>
    <div className="main-content">
      <ToastContainer />
      <Slider />


    
      <Card
        title="🧸 Soft Toys Section"
        items={softToys}
        cart={cart}
        setCart={setCart}
        limit={4} 
      />
      <hr className="my-5" />


      <Card
        title="🧠 Educational Toys Section"
        items={educationalToys}
        cart={cart}
        setCart={setCart}
        limit={4}
      />

      <hr className="my-5" />


      <Card
        title="🚗 Remote Control Toys Section"
        items={rcToys}
        cart={cart}
        setCart={setCart}
        limit={4}
      />

      <hr className="my-5" />

      <Card
        title="🎲 Board Games Section"
        items={boardGames}
        cart={cart}
        setCart={setCart}
        limit={4}
      />
    </div>
    </>
  );
};

export default HomePage;