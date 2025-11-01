import React, { useState } from 'react';
import teddy from '../assets/teddy.png';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ cart }) {
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

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
                <div className="container-fluid">
                    {/* Brand Logo */}
                    <div className="d-flex align-items-center">
                        <Link to="/" className="navbar-brand d-flex align-items-center me-0" onClick={closeNavbar}>
                            <img src={teddy} alt="Logo" width="40" />
                            <span className="navbar-brand-custom">Happy Toys</span>
                        </Link>
                    </div>

                    {/* Mobile Toggler */}
                    <button
                        className="navbar-toggler navbar-toggler-custom"
                        type="button"
                        onClick={handleToggle}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className={`navbar-collapse-custom ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link nav-link-custom" onClick={closeNavbar}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link nav-link-custom" onClick={closeNavbar}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link nav-link-custom" onClick={closeNavbar}>
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link nav-link-custom" onClick={closeNavbar}>
                                    Contact
                                </Link>
                            </li>

                        </ul>

                        {/* Search and User Actions */}
                        <div className="d-flex align-items-center mobile-actions">
                            {/* Search Bar */}
                            <form className="d-flex me-3" role="search" onSubmit={handleSubmit}>
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
                                <Link to="/profile" className="btn icon-button-custom me-2" onClick={closeNavbar}>
                                    <FaUser size={18} />
                                </Link>
                                <Link to="/cart" onClick={closeNavbar}>
                                    <button type="button" className="btn icon-button-custom position-relative">
                                        <FaShoppingCart size={20} />
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart.length}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer for fixed navbar */}
            <div className="navbar-spacer"></div>
        </>
    );
}

export default Navbar;