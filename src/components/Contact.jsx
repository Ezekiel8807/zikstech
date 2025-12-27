import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            alert('Thank you for reaching out to Zikstech! We will get back to you shortly.');
            e.target.reset(); // clear form
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Let's Build Something Great</h2>
                    <p>Ready to start your project? Get in touch today.</p>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="info-item">
                            <h3>Email Us</h3>
                            <p><a href="mailto:hello@zikstech.com">hello@zikstech.com</a></p>
                            <p><a href="mailto:info@zikstech.com">info@zikstech.com</a></p>
                        </div>
                        <div className="info-item">
                            <h3>Connect</h3>
                            <p>Find us on <a href="#">LinkedIn</a></p>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">How can we help?</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            style={{ backgroundColor: status === 'sent' ? '#16a085' : '' }}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
