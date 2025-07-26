import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component

function Slider() {
  return (
    <div style={{ maxWidth: '1270px', maxHeight:'300', margin: 'auto', marginTop: '20px' }}>
      {/* react-bootstrap Carousel component */}
      <Carousel
        interval={3000} // Set interval for automatic sliding (e.g., 3000ms = 3 seconds)
        pause="hover"   // Pause on mouse hover
        // You can add more props like controls={false} for no prev/next buttons
        // or indicators={false} for no bottom dots
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner.png" // Ensure this path is correct relative to your public folder
            alt="First slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }} // Add some styling
          />
          {/* Optional: Add a caption */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner1.png" // Ensure this path is correct relative to your public folder
            alt="Second slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner2.jpg" // Ensure this path is correct relative to your public folder
            alt="Third slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;