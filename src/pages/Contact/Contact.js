import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container contact">
      <h2 className="section-title">
        Get in Touch <span role="img" aria-label="handshake">🤝</span>
      </h2>
      <hr />
      <p className="tagline">"Let's Connect and Collaborate"</p>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h4>Email</h4>
          <p>
            <a href="mailto:ngollam@iu.edu" target="_blank" rel="noopener noreferrer">
              ngollam@iu.edu
            </a>
          </p>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <h4>Phone</h4>
          <p>+1 930-333-5823</p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h4>LinkedIn</h4>
          <p>
            <a href="https://www.linkedin.com/in/nikhita-gollamudi-224a41207/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/nikhitagollamudi
            </a>
          </p>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <h4>GitHub</h4>
          <p>
            <a href="https://github.com/nikhitagollamudi" target="_blank" rel="noopener noreferrer">
              github.com/nikhitagollamudi
            </a>
          </p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h4>Location</h4>
          <p>Bloomington, IN, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
