// This file contains JavaScript code for the portfolio website.
// You can add functionality for interactive elements, animations, or other dynamic features here.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Image gallery functionality can be added here
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});