import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import items from './data';
import './ProductDetails.css'


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterProduct = items.filter((product)=>product.id==id);
    // console.log(filterProduct);
    setProduct(filterProduct[0]);
  }, [id]);

  return (
    <>
    <div className="container">
      <div className="img">
       <img src={product.image} alt="" />
      </div>
      <div>
        <h1 className="card-title">{product.name}</h1>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price: ₹{product.price}</strong></p>
                {/* <a href="#" className="btn btn-primary mx-3">
                  {product.buttonText || 'View Details'}
                </a> */}
                <a href="#" className="btn btn-warning">
                  {product.buttonText || 'Add to Cart'}
                </a>
      </div>
    </div>
    </>
  )
}

export default ProductDetails