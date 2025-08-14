import React from 'react';
import  items  from '../data';

const Card = () => {
  if (!items || items.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {items.map((item) => (
          <div className="col-lg-4 " >
            <div className="card" style={{ width: '18rem', margin: '10px' }}>
              <img src={item.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>Price: ${item.price}</strong></p>
                <a href="#" className="btn btn-primary mx-3">
                  {item.buttonText || 'View Details'}
                </a>
                <a href="#" className="btn btn-warning">
                  {item.buttonText || 'Add to Cart'}
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