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