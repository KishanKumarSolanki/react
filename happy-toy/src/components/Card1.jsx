import React from 'react';
import { Link } from 'react-router-dom';
import './Card1.css';

const Card = ({ items, cart, setCart }) => {
  const addtocart = (id, price, description, image) => {
    const obj = { id, price, description, image };
    setCart([...cart, obj]);
    console.log("Cart element =", cart);
  };

  if (!items || items.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="container my-5">
      <div className="grid-container">
        {items.map((item) => (
          <div className="grid-card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
            </Link>
            <h5>{item.title}</h5>
            <p><strong>₹{item.price}</strong></p>
            <div className="actions">
              <Link to={`/product/${item.id}`} className="btn btn-primary">
                View Details
              </Link>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() =>
                  addtocart(item.id, item.price, item.description, item.image)
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
