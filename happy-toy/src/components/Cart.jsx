import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {

    // Helper function to ensure price is a number
    const getNumericPrice = (product) => {
        // Tries to parse the price, defaults to 0 if invalid
        return parseFloat(product.price) || 0;
    };

    // Helper function to ensure quantity is a number, default to 1 if not present
    const getNumericQuantity = (product) => {
        // Tries to parse the quantity, defaults to 1 if invalid
        return parseInt(product.quantity, 10) || 1;
    };

    // 1. Remove Item Function: Filters the cart array, keeping only products whose ID does not match the removed product's ID.
    const handleRemove = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
    };

    // 2. Increase/Decrease Quantity Function: Maps through the cart and updates the quantity for the matching product.
    const handleChange = (product, d) => {
        const updatedCart = cart.map(item => {
            if (item.id === product.id) {
                const currentQuantity = getNumericQuantity(item);
                // Ensures quantity is never less than 1
                const newQuantity = Math.max(1, currentQuantity + d);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    // 3. Calculate Total Price: Uses reduce to sum up (price * quantity) for all items.
    const totalPrice = cart.reduce((total, product) => {
        const itemPrice = getNumericPrice(product);
        const itemQuantity = getNumericQuantity(product);
        return total + (itemPrice * itemQuantity);
    }, 0);


    // --- Component Rendering ---

    // Display message if the cart is empty
    if (cart.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }} >
                <div className="text-center">
                    <h3 className="mb-4">Shopping Cart</h3>
                    <h3 className="lead">Your cart is empty. Start shopping!</h3>
                    <Link to="/" className="btn btn-warning mt-3">
                        Continue shopping
                    </Link>
                </div>
            </div>
        );
    }
    const ClearCart = () => {
        setCart([]);
        totalPrice(0);
    };

    return (
        <>
            <div className="container my-5" style={{ maxWidth: "900px" }}>
                <h2 className=" mb-4">Shopping Cart ({cart.length} items)</h2>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <h2>
                        Cart Total:{" "}
                        <span className="text-danger fw-bold">₹{totalPrice.toFixed(2)}</span>
                    </h2>
                    <div className="d-flex gap-2 mt-2 mt-md-0">
                        <button className="btn btn-success">
                            Proceed to Checkout
                        </button>
                        <button className="btn btn-danger" onClick={ClearCart}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="row justify-content">
                {cart.map((product) => (
                    // Outer column ensures cards stack vertically (col-12)
                    <div className=" col-12 mb-3 px-3 px-md-5" key={product.id}>
                        <div className="card shadow-sm">
                            <div className="row g-0 align-items-center">

                                {/* Image Column (3/12 width on medium screens and up) */}
                                <div className="col-md-3">
                                    <img
                                        src={product.image}
                                        className="img-fluid rounded-start p-3"
                                        alt={product.title}
                                        style={{ maxHeight: '200px', width: '100%', objectFit: 'contain' }}
                                    />
                                </div>

                                {/* Details Column (5/12 width) */}
                                <div className="col-md-5">
                                    <div className="card-body py-2">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text text-success">
                                            Price: ₹{getNumericPrice(product).toFixed(2)}
                                        </p>
                                        {/* <p className="card-text text-muted small">
                                            {/* Safely display truncated description 
                                            {product.description ? product.description.substring(0, 100) + '...' : ''}
                                        </p> */}
                                    </div>
                                </div>

                                {/* Quantity and Action Column (4/12 width) */}
                                <div className="col-md-4 d-flex align-items-center justify-content-around p-3">

                                    {/* Quantity Controls */}
                                    <div className="d-flex align-items-center me-3">
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => handleChange(product, -1)}
                                            disabled={getNumericQuantity(product) <= 1} // Disable when quantity is 1
                                        >
                                            -
                                        </button>
                                        <span className="mx-3 fw-bold">{getNumericQuantity(product)}</span>
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => handleChange(product, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Item Subtotal & REMOVE BUTTON */}
                                    <div className="text-end">
                                        <h5 className="mb-2 text-primary">
                                            ₹{(getNumericPrice(product) * getNumericQuantity(product)).toFixed(2)}
                                        </h5>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleRemove(product.id)} // Functionality attached here
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>

    );
};

export default Cart;