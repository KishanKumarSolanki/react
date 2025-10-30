import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; 
import { toast, Bounce } from 'react-toastify';

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

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="card-section-wrapper">
      <h2 className="section-title text-center">{title}</h2>
      <div className="cards-grid-container">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-card-content">
              <div className="card-image-container">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="product-title">{item.title}</h5>
                <p className="product-price"><strong>₹{item.price}</strong></p>
                <div className="actions">
                  {/* <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm view-btn">
                    View Details
                  </Link> */}
                  <button
                    type="button"
                    className="btn btn-warning btn-sm cart-btn"
                    onClick={() =>
                      addToCart(item.id, item.title, item.price, item.description, item.image)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;