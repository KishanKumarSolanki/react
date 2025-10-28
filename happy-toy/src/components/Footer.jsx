import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Company Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Happy Toy Store</h3>
            <p className="footer-description">
              Bringing joy and happiness to children through quality toys and exceptional service since 2015.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="footer-section">
            <h4 className="section-title">Customer Service</h4>
            <ul className="footer-links">
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/size-guide">Size Guide</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/track-order">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="section-title">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Toy Street, Connaught Place, New Delhi, India - 110001</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 12345 67890</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>happytoysofficial@gmail.com</span>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="newsletter">
              <h5>Subscribe to Newsletter</h5>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 Happy Toy Store. All rights reserved.
            </div>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/sitemap">Sitemap</a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;