import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

  return (
     <div className="contact-container">
        {/* <!-- Header Section --> */}
        <header className="contact-header text-center">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="mt-3 lead">We love to hear from you! Please fill out the form below or reach out to us directly.</p>
        </header>

        <div className="row">
            {/* <!-- Information Section --> */}
            <div className="col-lg-5 mb-4">
                <div className="info-card">
                    <h3 className="section-title">Our Information</h3>
                    
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-content">
                            <h5>Address</h5>
                            <p>New Delhi, India</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="info-content">
                            <h5>Phone</h5>
                            <p>+91 9876543210</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-content">
                            <h5>Email</h5>
                            <p>happytoys@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="business-hours">
                        <h5>Business Hours</h5>
                        <div className="hours-item">
                            <span className="hours-day">Monday-Friday</span>
                            <span className="hours-time">9am - 5pm</span>
                        </div>
                        <div className="hours-item">
                            <span className="hours-day">Saturday</span>
                            <span className="hours-time">10am - 2pm</span>
                        </div>
                        <div className="hours-item">
                            <span className="hours-day">Sunday</span>
                            <span className="hours-time">Closed</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Form Section --> */}
            <div className="col-lg-7">
                <div className="form-card">
                    <h3 className="section-title">Send us a Message</h3>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="name" className="form-label">Your Name *</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email *</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="col-12">
                            <label for="subject" className="form-label">Subject *</label>
                            <input type="text" className="form-control" id="subject" placeholder="What is this regarding?" />
                        </div>
                        <div className="col-12">
                            <label for="message" className="form-label">Your Message *</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Please type your message here..."></textarea>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="termsCheck" />
                                <label className="form-check-label" for="termsCheck">
                                    I agree that my submitted data is being collected and stored. For more information on how we handle your data, please read our <a href="/privacy-policy">privacy policy</a>.
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;