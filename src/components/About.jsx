import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-text fade-in">
                    <h2>Why Zikstech?</h2>
                    <p className="lead">We are not just coders; we are problem solvers.</p>
                    <p>Founded to bridge the gap between complex technology and business needs. We work with founders, SMEs, and companies without in-house teams to deliver reliable, high-quality software.</p>
                    <ul className="check-list">
                        <li>✓ Focused on Business ROI</li>
                        <li>✓ Clear Communication</li>
                        <li>✓ Scalable Code Quality</li>
                    </ul>
                </div>
                <div className="about-stats fade-in">
                    <div className="stat-box">
                        <h3>100%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="stat-box">
                        <h3>Fast</h3>
                        <p>Turnaround</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
