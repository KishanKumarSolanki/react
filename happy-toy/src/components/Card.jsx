import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ title, items, cart, setCart }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
    focusOnSelect: false,
    responsive: [
      { 
        breakpoint: 1200, 
        settings: { 
          slidesToShow: 4,
          slidesToScroll: 1
        } 
      },
      { 
        breakpoint: 992, 
        settings: { 
          slidesToShow: 4,
          slidesToScroll: 1
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true, 
          centerPadding: '15px' 
        } 
      }
    ]
  };

  return (
    <div className="slider-section-wrapper my-4">
      <h2 className="section-title">{title}</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div className="slider-card-wrapper" key={item.id}>
            <div className="product-card-content">
              <div className="card-image-container">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} className="card-image" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="product-title">{item.title}</h5>
                <p className="product-price"><strong>₹{item.price}</strong></p>
                {/* <div className="actions">
                  <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => addToCart(item.id, item.title, item.price, item.description, item.image)}
                  >
                    Add to Cart
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;