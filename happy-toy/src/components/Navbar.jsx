import React from 'react';
import teddy from '../assets/teddy.png';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const cartItemCount = 0; // Changed to 3 to match your screenshot

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                {/* Brand Logo with Cart Count */}
                <div className="d-flex align-items-center">
                    <Link to="/" className="navbar-brand d-flex align-items-center me-0">
                        <img src={teddy} alt="Logo" width="40" />
                        <span className="navbar-brand-custom">Happy Toys</span>
                    </Link>

                    {cartItemCount > 0 && (
                        <span className="cart-count-mobile d-lg-none ms-2">
                            ({cartItemCount})
                        </span>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler navbar-toggler-custom"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Navigation Links - Centered */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#">
                                Shop
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Search and User Actions */}
                    <div className="d-flex align-items-center">
                        {/* Search Bar */}
                        <form className="d-flex me-3" role="search">
                            <div className="input-group search-container">
                                <span className="input-group-text search-icon-custom">
                                    <FaSearch />
                                </span>
                                <input
                                    className="form-control search-input-custom"
                                    type="search"
                                    placeholder="Find toys..."
                                />
                            </div>
                        </form>

                        {/* User and Cart Icons */}
                        <div className="d-flex">
                            <button className="btn icon-button-custom me-2">
                                <FaUser size={18} />
                            </button>
                            <button className="btn icon-button-custom position-relative" aria-label="Shopping Cart">
                                <FaShoppingCart size={20} />
                                {cartItemCount > 0 && (
                                    <span className="cart-badge-custom badge rounded-pill">
                                        {cartItemCount}
                                        <Link className="visually-hidden">items in cart</Link>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;