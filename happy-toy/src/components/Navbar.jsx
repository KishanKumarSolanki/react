import React, { useState } from 'react';
import teddy from '../assets/teddy.png';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ cartItemCount }) {

    const [Search, setSearch] = useState("");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${Search}`);
        setSearch("");
        setIsNavOpen(false);
    }
    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
            <div className="container-fluid">
                {/* Brand Logo */}
                <div className="d-flex align-items-center">
                    <Link to="/" className="navbar-brand d-flex align-items-center me-0">
                        <img src={teddy} alt="Logo" width="40" />
                        <span className="navbar-brand-custom">Happy Toys</span>
                    </Link>

                    {/* Mobile Cart Count - Added check for count > 0 for display logic */}
                    {cartItemCount > 0 && (
                        <span className="cart-count-mobile d-lg-none ms-2">
                            ({cartItemCount})
                        </span>
                    )}
                </div>

                {/* Mobile Toggler - No changes needed here */}
                <button
                    className="navbar-toggler navbar-toggler-custom"
                    type="button"
                    onClick={handleToggle}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} id="navbarContent">
                    {/* Navigation Links - Centered */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* FIX: Use <Link> for internal navigation */}
                            <Link to="/" className="nav-link nav-link-custom" aria-current="page" onClick={() => setIsNavOpen(false)}>
                                Home
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                             FIX: Use <Link> for internal navigation 
                            <Link to="/shop" className="nav-link nav-link-custom">
                                Shop
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            {/* FIX: Use <Link> for internal navigation */}
                            <Link to="/about" className="nav-link nav-link-custom" onClick={() => setIsNavOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* FIX: Use <Link> for internal navigation */}
                            <Link to="/contact" className="nav-link nav-link-custom" onClick={() => setIsNavOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Search and User Actions */}
                    <div className="d-flex align-items-center">
                        {/* Search Bar */}
                        <form className="d-flex me-3" role="search"
                            onSubmit={handleSubmit}
                        >
                            <div className="input-group search-container">
                                <input
                                    value={Search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="form-control search-input-custom"
                                    type="search"
                                    placeholder="Find toys..."
                                />
                            </div>
                        </form>

                        {/* User and Cart Icons */}
                        <div className="d-flex">
                            {/* FIX: Use <Link> instead of <button> if this leads to a user profile page */}
                            <Link to="/profile" className="btn icon-button-custom me-2">
                                <FaUser size={18} />
                            </Link>
                            {/* FIX: Use <Link> instead of <button> if this leads to the cart page */}
                            <Link to="/cart" className="btn icon-button-custom position-relative" aria-label={`Shopping Cart with ${cartItemCount} items`}>
                                <FaShoppingCart size={20} />
                                {cartItemCount > 0 && (
                                    // FIX: Removed the unnecessary and problematic Link. The count is displayed correctly.
                                    <span className="cart-badge-custom badge rounded-pill">
                                        {cartItemCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;