import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        {
            quote: "Zikstech transformed our outdated website into a high-performance platform. Our leads increased by 40% within two months.",
            author: "Sarah Jenkins",
            role: "CEO, TechStart Inc."
        },
        {
            quote: "Reliable, professional, and excellent code quality. They fixed critical bugs that other agencies couldn't figure out.",
            author: "David Okon",
            role: "Founder, PayFast Nigeria"
        },
        {
            quote: "The mobile app they built is smooth and fast. Zikstech is now our go-to partner for all things tech.",
            author: "Michael Chen",
            role: "Product Manager, LogisticsWrap"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Clients Say</h2>
                    <p>Trusted by businesses to deliver excellence.</p>
                </div>

                <div className="testimonial-slider">
                    <div
                        className="testimonial-track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((item, index) => (
                            <div className="testimonial-card" key={index}>
                                <div className="quote-icon">“</div>
                                <p className="testimonial-text">{item.quote}</p>
                                <div className="client-info">
                                    <h4>{item.author}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
