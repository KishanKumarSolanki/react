import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; 
import { toast, Bounce } from 'react-toastify';

const Card = ({ title, items, cart, setCart, limit = 0 }) => {

  const addToCart = (id, title, price, description, image) => {
    const obj = { id, title, price, description, image };
    setCart([...cart, obj]);
    toast.success('Added to cart!', {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });
  };

  if (!items || items.length === 0) {
    return null;
  }

  const itemsToDisplay = (limit !== null && limit > 0) 
    ? items.slice(0, limit) 
    : items;

  return (
    <div className="card-section-wrapper">
      <h2 className="section-title" >{title}</h2>
      <div className="cards-grid-container">
        {itemsToDisplay.map((item) => (
          <div className="card custom-card" key={item.id}>
            <div className="card-image-container">
              <img src={item.image} className="card-img-top" alt={item.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                <strong className="price">₹{item.price}</strong>
              </p>
              <div className="card-actions">
                {/* <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm">
                  View Details
                </Link> */}
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => addToCart(item.id, item.title, item.price, item.description, item.image)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;