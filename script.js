document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'});
            }
        });