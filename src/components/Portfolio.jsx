import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2>Featured Work</h2>
                    <p>Real results for real businesses.</p>
                </div>
                <div className="portfolio-grid">
                    <div className="project-card fade-in">
                        <div className="project-image">Project Preview</div>
                        <div className="project-info">
                            <h3>E-Commerce Platform</h3>
                            <p>Custom store solution with Payment Gateway.</p>
                        </div>
                    </div>
                    <div className="project-card fade-in">
                        <div className="project-image">Project Preview</div>
                        <div className="project-info">
                            <h3>SaaS Dashboard</h3>
                            <p>Analytics tool for a marketing startup.</p>
                        </div>
                    </div>
                    <div className="project-card fade-in">
                        <div className="project-image">Project Preview</div>
                        <div className="project-info">
                            <h3>Corporate Website</h3>
                            <p>Brand refresh for a financial firm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
