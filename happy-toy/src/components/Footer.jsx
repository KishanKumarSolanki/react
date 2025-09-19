import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,  faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section navigation">
                    <h4>Links</h4>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <address>
                        <p>Email: <a href="mailto:hello@gmail.com">happytoys@gmail.com</a></p>
                        <p>Phone: <a href="tel:+911234567890">+91 1234567890</a></p>
                        <p>Address: New Delhi, India</p>
                    </address>
                </div>

                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://github.com/KishanKumarSolanki" aria-label="Facebook">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>                        
                        <a href="https://www.linkedin.com/in/kishankumarsolanki/" aria-label="LinkedIn">
                           <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>

                <div className="footer-section policy">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Happy Toy Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;