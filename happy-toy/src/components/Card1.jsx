import React from 'react';
import items from './data';
import { Link } from 'react-router-dom';

const Card = ({ cart, setCart }) => {
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
      <div className="row">
        {items.map((item) => (
          <div className="col-lg-4 col-md-6" key={item.id}>
            <div className="card" style={{ width: '18rem', margin: '10px' }}>
              <Link to={`/product/${item.id}`}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={item.image} className="card-img-top" alt={item.name} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {/* <p className="card-text">{item.description}</p> */}
                <p className="card-text"><strong>Price: ₹{item.price}</strong></p>
                <Link to={`/product/${item.id}`} className="btn btn-primary mx-3">
                  {item.buttonText || 'View Details'}
                </Link>
                <button type="button" className="btn btn-warning">
                  {item.buttonText || 'Add to Cart'}
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