import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate(); // useNavigate hook ka use karein

    // Price को सुरक्षित रूप से संख्या (Number) में बदलने का फंक्शन
    const getNumericPrice = (product) => {
        // parseFloat का उपयोग करें और सुनिश्चित करें कि यह NaN न हो
        return parseFloat(product.price) || 0;
    };

    // Quantity को सुरक्षित रूप से संख्या (Number) में बदलने का फंक्शन
    const getNumericQuantity = (product) => {
        // parseInt का उपयोग करें और सुनिश्चित करें कि यह NaN न हो
        return parseInt(product.quantity, 10) || 1;
    };

    // कार्ट से आइटम हटाने का फंक्शन
    const handleRemove = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
    };

    // क्वांटिटी बदलने का फंक्शन (+1 या -1)
    const handleChange = (product, d) => {
        const updatedCart = cart.map(item => {
            if (item.id === product.id) {
                const currentQuantity = getNumericQuantity(item);
                const newQuantity = Math.max(1, currentQuantity + d); // 1 से कम नहीं होनी चाहिए
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    // कुल कीमत की गणना (Calculate Total Price)
    const totalPrice = cart.reduce((total, product) => {
        const itemPrice = getNumericPrice(product);
        const itemQuantity = getNumericQuantity(product);
        return total + (itemPrice * itemQuantity);
    }, 0);

    // ⭐ चेकआउट के लिए आगे बढ़ने का फंक्शन (सबसे महत्वपूर्ण सुधार यहाँ है)
    const handleProceedToCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before proceeding to checkout.");
            return;
        }
        // ✅ कार्ट डेटा को 'state' ऑब्जेक्ट के अंदर पास करें
        navigate('/checkout', { state: { cart: cart } });
    };

    // पूरे कार्ट को खाली करने का फंक्शन
    const ClearCart = () => {
        setCart([]);
    };

    // --- अगर कार्ट खाली है तो यह रेंडर होगा ---
    if (cart.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }} >
                <div className="text-center">
                    <h3 className="mb-4">Shopping Cart 🛒</h3>
                    <h3 className="lead">Your cart is empty. Start shopping!</h3>
                    <Link to="/" className="btn btn-warning mt-3">
                        Continue shopping
                    </Link>
                </div>
            </div>
        );
    }
    // --- कार्ट खाली नहीं है तो यह रेंडर होगा ---

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
                        <button className="btn btn-success" onClick={handleProceedToCheckout}>
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
                    <div className=" col-12 mb-3 px-3 px-md-5" key={product.id}>
                        <div className="card shadow-sm">
                            <div className="row g-0 align-items-center">

                                <div className="col-md-3">
                                    <img
                                        src={product.image}
                                        className="img-fluid rounded-start p-3"
                                        alt={product.title}
                                        style={{ maxHeight: '200px', width: '100%', objectFit: 'contain' }}
                                    />
                                </div>

                                <div className="col-md-5">
                                    <div className="card-body py-2">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text text-success">
                                            Price: ₹{getNumericPrice(product).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4 d-flex align-items-center justify-content-around p-3">
                                    <div className="d-flex align-items-center me-3">
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => handleChange(product, -1)}
                                            disabled={getNumericQuantity(product) <= 1}
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

                                    <div className="text-end">
                                        <h5 className="mb-2 text-primary">
                                            ₹{(getNumericPrice(product) * getNumericQuantity(product)).toFixed(2)}
                                        </h5>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleRemove(product.id)}
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