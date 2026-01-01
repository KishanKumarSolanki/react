import React from 'react';
import Card from './Card.jsx';
import { softToys, educationalToys, rcToys, boardGames, testItems } from '../data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider.jsx';
import {InfiniteMovingCards} from './ui/infinite-moving-cards.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";

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
    <div className='fixed-bottom right-100 p-3' style={{ zIndex: 20, left: "initial" }}>
      <a href="https://wa.me/8368158444?text=Hi! I am interested in your toys. Please share details." className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" color="#25D366"  />
      </a>
    </div>
    {/* <div className='fixed-bottom left-100 p-3' style={{ zIndex: 20, right: "initial" }}>
      <a href="sms:8368158444?text=Hi! I am interested in your toys. Please share details." className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMessage} size="5x" color="blue" style={{backgroundColor: "white", borderRadius: '5px'}} />
      </a>
    </div> */}
    </>
  );
};

export default HomePage;