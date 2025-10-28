import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/banner.png';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';


function Slider() {
  return (
    <div style={{ width: '100%', maxWidth: '1400vw', maxHeight: '300', margin: 'auto', marginTop: '0px' , overflow: 'hidden' }}>
      <Carousel
        interval={2000}
        pause="hover"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            style={{ maxHeight: '300px',  objectFit: 'contain' }}
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;