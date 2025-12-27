import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>Solving business problems with tailored technology.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card fade-in">
                        <div className="icon">💻</div>
                        <h3>Website Development</h3>
                        <p>High-performance websites for businesses, startups, and enterprises. Responsive, SEO-friendly, and modern.</p>
                    </div>
                    <div className="service-card fade-in">
                        <div className="icon">📱</div>
                        <h3>Web & Mobile Apps</h3>
                        <p>Scalable applications built for growth. We turn complex requirements into smooth user experiences.</p>
                    </div>
                    <div className="service-card fade-in">
                        <div className="icon">🛠️</div>
                        <h3>Bug Fixing & Maintenance</h3>
                        <p>Keep your software running smoothly. We debug, update, and optimize existing codebases.</p>
                    </div>
                    <div className="service-card fade-in">
                        <div className="icon">🚀</div>
                        <h3>SEO & Performance</h3>
                        <p>Speed up your site and rank higher. We optimize for Core Web Vitals and search engines.</p>
                    </div>
                    <div className="service-card fade-in">
                        <div className="icon">🔌</div>
                        <h3>API & Backend</h3>
                        <p>Robust backend systems and API integrations to power your digital ecosystem.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
