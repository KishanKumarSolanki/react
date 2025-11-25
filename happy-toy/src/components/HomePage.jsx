import React from 'react';
import Card from './Card.jsx';
import { softToys, educationalToys, rcToys, boardGames, testItems } from '../data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider.jsx';
import {InfiniteMovingCards} from './ui/infinite-moving-cards.jsx';

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
      <hr className="my-5" />
      <h2 style={{ textAlign: "center", fontSize: "2rem", margin: "2rem 0" }}>What Our Customers Say</h2>
      <InfiniteMovingCards items={testItems} />
      {/* <hr className="my-5" /> */}
    </div>
    </>
  );
};

export default HomePage;