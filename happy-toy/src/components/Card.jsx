import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; 
import { toast, Bounce } from 'react-toastify';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ title, items, cart, setCart }) => {

  const addToCart = (id, title, price, description, image) => {
    const obj = { id, title, price, description, image };
    setCart([...cart, obj]);
    toast.success('Added to cart!', {
      position: "top-center",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800, 
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  if (!items || items.length === 0) {
    return null; // अगर कोई आइटम नहीं है तो कुछ रेंडर न करें
  }

  return (
    <div className="slider-section-wrapper my-5">
      <h2>{title}</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div className="slider-card-wrapper" key={item.id}>
            <div className="product-card-content">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              <h5>{item.title}</h5>
              <p><strong>₹{item.price}</strong></p>
              <div className="actions">
                <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm">
                  View Details
                </Link>
                <button
                  type="button"
                  className="btn btn-warning btn-sm"
                  onClick={() =>
                    addToCart(item.id, item.title, item.price, item.description, item.image)
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;