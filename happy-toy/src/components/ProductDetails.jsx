import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import items from './data';
import './ProductDetails.css'
import Card1 from './Card1.jsx'


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedproducts, setRelatedproducts] = useState([]);

 
  useEffect(() => {
     window.scrollTo(0, 0);
    // 1. Find the current product by ID
    const currentProduct = items.find((p) => p.id == id);
    setProduct(currentProduct);

    // 2. If a product is found, filter for related products
    if (currentProduct) {
      const relatedproducts = items.filter(
        // Filter for items with the same category, but a different ID
        (p) => p.category === currentProduct.category && p.id !== currentProduct.id
      );
      setRelatedproducts(relatedproducts);
    }
  }, [id]);

  return (
    <>
    <div className="container">
      <div className="img">
       <img src={product.image} alt="" />
      </div>
      <div>
        <h1 className="card-title">{product.title}</h1>
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
    <h1 className='text-center'>Related Product</h1>
    <Card1 items={relatedproducts} />
    </>
  )
}

export default ProductDetails