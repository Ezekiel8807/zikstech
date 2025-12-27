import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero fade-in">
            <div className="container hero-content">
                <h1 className="hero-title">Building <span className="highlight">Reliable</span> Digital Solutions</h1>
                <p className="hero-subtitle">We help businesses build fast, secure, and scalable software solutions. From idea to execution, Zikstech is your technical partner.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Get a Free Consultation</a>
                    <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
