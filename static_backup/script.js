// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        navLinks.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Submission Handler (Client-side demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        // For demo, we'll just show an alert
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = 'Message Sent!';
        btn.style.backgroundColor = '#16a085';

        setTimeout(() => {
            contactForm.reset();
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 3000);

        alert('Thank you for reaching out to Zikstech! We will get back to you shortly.');
    });
}

// Scroll Animation (Fade In)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add 'fade-in' class to sections for animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Testimonial Slider (Automatic)
const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-card');
let currentSlide = 0;
const slideInterval = 5000; // Change slide every 5 seconds

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    const width = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * width}px)`;
}

// Handle resize to adjust slide position
window.addEventListener('resize', updateSlidePosition);

// Start automatic sliding
setInterval(nextSlide, slideInterval);
