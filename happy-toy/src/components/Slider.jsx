import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/banner.png';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import './Slider.css';

function Slider() {
  return (
    <div className="slider-container">
      <Carousel 
        interval={2000}
        pause="hover"
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={banner}
            alt="First slide"
          
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={banner1}
            alt="Second slide"
     
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={banner2}
            alt="Third slide"
        
          />
       
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;