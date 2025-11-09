import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { softToys, educationalToys, rcToys, boardGames } from '../data.js'; 
import './ProductDetails.css';
import Card1 from './Card.jsx';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const addToCart = (id, title, price, description, image) => {
    const obj = { id, title, price, description, image };
    setCart([...cart, obj]);
    toast.success('Successfully added to cart', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Combine all products into a single array
    const allProducts = [...softToys, ...educationalToys, ...rcToys, ...boardGames];

    // Find the current product by ID
    const currentProduct = allProducts.find((p) => p.id === id);
    setProduct(currentProduct);

    // Find related products (same category, different ID)
    if (currentProduct) {
      const related = allProducts.filter(
        (p) => p.category === currentProduct.category && p.id !== currentProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="img">
          <img src={product?.image} alt={product?.title} />
        </div>
        <div>
          <h1 className="card-title">{product?.title}</h1>
          <p className="card-text">{product?.description}</p>
          <p className="card-text"><strong>Price: ₹{product?.price}</strong></p>
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
      <Card1 items={relatedProducts} cart={cart} setCart={setCart} />
    </>
  );
};

export default ProductDetails;