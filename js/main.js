// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Testimonials slider
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialsTrack = document.getElementById('testimonialsTrack');
let testimonialIndex = 0;

function moveTestimonialsSlider() {
    testimonialsTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    
    // Update active dot
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    testimonialDots[testimonialIndex].classList.add('active');
}

testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        testimonialIndex = index;
        moveTestimonialsSlider();
    });
});

// Auto slide testimonials
setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialDots.length;
    moveTestimonialsSlider();
}, 5000);

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mesajınız için teşekkürler! Bu bir demo web sitesidir, bu nedenle gerçek form işlemi gerçekleşmeyecektir.');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});