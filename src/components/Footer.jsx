import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Zikstech<span className="dot-white">.</span></h3>
                    <p>Building reliable software for modern businesses.</p>
                </div>
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Zikstech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
