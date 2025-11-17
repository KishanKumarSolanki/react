import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Link को इम्पोर्ट करना सुनिश्चित करें
import { softToys, educationalToys, rcToys, boardGames } from '../data.js';
import './ProductDetails.css';
import Card from './Card.jsx';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams(); // URL से ID प्राप्त करें (यह स्ट्रिंग होगी)
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = (id, title, price, description, image) => {
    const obj = { id, title, price, description, image, quantity: 1 };

    const existingItemIndex = cart.findIndex(item => item.id === id);

    if (existingItemIndex > -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, obj]);
    }

    toast.success(`${title} added to cart!`, {
      position: "top-center",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const allProducts = [...softToys, ...educationalToys, ...rcToys, ...boardGames];

  
    const productIdNum = parseInt(id);

    if (isNaN(productIdNum)) {
      setProduct(null);
      setLoading(false);
      return;
    }

    
    const currentProduct = allProducts.find((p) => parseInt(p.id) === productIdNum);

    setProduct(currentProduct || null);

  
    if (currentProduct) {
      const related = allProducts.filter(
        (p) => p.category === currentProduct.category && parseInt(p.id) !== productIdNum
      );
      setRelatedProducts(related);
    } else {
      setRelatedProducts([]);
    }

    setLoading(false);
  }, [id]); 
  

  if (loading) {
    return <div className="text-center py-10 text-indigo-600 text-xl">Loading Product Details...</div>;
  }

  if (!product) {
    return (
      <div className="text-center p-10">
        <h1 className="text-danger text-3xl">Product Not Found! 😔</h1>
        <p className="lead">Check the URL or go back to the shop.</p>
        <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
      </div>
    );
  }

  
  return (
    <>
      <ToastContainer />
      <div className="container product-detail-layout">
        <div className="img">
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Price: ₹{product.price}</strong></p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() =>
              addToCart(product.id, product.title, product.price, product.description, product.image)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Card items={relatedProducts} cart={cart} setCart={setCart} />
    </>
  );
};

export default ProductDetails;