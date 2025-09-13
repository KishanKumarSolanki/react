import React from 'react';
import  items  from './data';

const Card = () => {
  if (!items || items.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {items.map((items) => (
          <div className="col-lg-4 " key={items.id}>
            <div className="card" style={{ width: '18rem', margin: '10px' }}>
              
              <img src={items.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
                <p className="card-text">{items.description}</p>
                <p className="card-text"><strong>Price: ₹{items.price}</strong></p>
                <a href="#" className="btn btn-primary mx-3">
                  {items.buttonText || 'View Details'}
                </a>
                <a href="#" className="btn btn-warning">
                  {items.buttonText || 'Add to Cart'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;