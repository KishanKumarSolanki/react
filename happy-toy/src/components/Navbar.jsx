import React from 'react';
import teddy from '../assets/teddy.png';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';

function Navbar() {
    const cartItemCount = 0; // Replace with state/context later

    return (
        <nav className="navbar navbar-expand-lg" style={{ 
            backgroundColor: '#a0d2eb',
            background: 'linear-gradient(135deg, #a0d2eb 0%, #e5eaf5 100%)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
            <div className="container">
                {/* Brand Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={teddy} alt="Happy Toy Logo" width="45" height="45" className="me-2 rounded-circle bg-white p-1" style={{ border: '2px solid #5680e9' }} />
                    <span className="fw-bold text-dark" style={{ fontSize: '1.2rem', color: '#2a4a8a' }}>Happy Toy</span>
                </a>

                {/* Mobile Toggle */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent" 
                    aria-controls="navbarContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    style={{ border: 'none' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Navigation Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-medium px-3 py-2 rounded" 
                               aria-current="page" 
                               href="#"
                               style={{ 
                                   color: '#2a4a8a',
                                   transition: 'all 0.3s',
                                   ':hover': {
                                       backgroundColor: 'rgba(255,255,255,0.5)'
                                   }
                               }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-medium px-3 py-2 rounded" 
                               href="#"
                               style={{ 
                                   color: '#2a4a8a',
                                   transition: 'all 0.3s',
                                   ':hover': {
                                       backgroundColor: 'rgba(255,255,255,0.5)'
                                   }
                               }}
                            >
                                Shop
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-medium px-3 py-2 rounded" 
                               href="#"
                               style={{ 
                                   color: '#2a4a8a',
                                   transition: 'all 0.3s',
                                   ':hover': {
                                       backgroundColor: 'rgba(255,255,255,0.5)'
                                   }
                               }}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-medium px-3 py-2 rounded" 
                               href="#"
                               style={{ 
                                   color: '#2a4a8a',
                                   transition: 'all 0.3s',
                                   ':hover': {
                                       backgroundColor: 'rgba(255,255,255,0.5)'
                                   }
                               }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Search and User Actions */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Search Bar */}
                        <div className="position-relative">
                            <FaSearch className="position-absolute top-50 start-3 translate-middle-y" style={{ color: '#5680e9' }} />
                            <input 
                                className="form-control ps-5 border-0 shadow-sm" 
                                type="search" 
                                placeholder="Find toys..." 
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.8)',
                                    borderRadius: '50px',
                                    minWidth: '200px',
                                    color: '#2a4a8a'
                                }}
                            />
                        </div>

                        {/* User Icon */}
                        <button className="btn p-2" style={{ color: '#2a4a8a' }}>
                            <FaUser size={18} />
                        </button>

                        {/* Cart Button */}
                        <button 
                            className="btn position-relative p-2"
                            aria-label="Shopping Cart"
                            style={{ color: '#2a4a8a' }}
                        >
                            <FaShoppingCart size={20} />
                            {cartItemCount > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ 
                                    backgroundColor: '#ff4757',
                                    fontSize: '0.65rem'
                                }}>
                                    {cartItemCount}
                                    <span className="visually-hidden">items in cart</span>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;